const express = require("express");
const passport = require("passport");
const { body, validationResult } = require("express-validator");

const validateInputs = [
  body("username").trim().escape(),
  body("password").trim().escape(),
];

exports.getDashboard = (req, res) =>
  req.user ? res.render("admin") : res.redirect("/");

exports.getLogin = (req, res) => res.render("login");

exports.login = [
  ...validateInputs,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("login");
    }
    next();
  },
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/admin/670222/login",
  }),
];
