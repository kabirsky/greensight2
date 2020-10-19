import React from "react";
import Vacancy from "../components/Vacancy";

export default function getTestValues() {
  let original = {
    id: "44f33eb4-8cc4-464f-8bbb-c76179f2b209",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/44f33eb4-8cc4-464f-8bbb-c76179f2b209",
    created_at: "Sun Oct 18 16:47:43 UTC 2020",
    company: "AXIOS",
    company_url: "http://axios.com",
    location: "Arlington, VA, USA",
    title: "Senior Full Stack Engineer (Remote US)",
    description:
      "<p>Quick Take: Axios is a growth-stage startup dedicated to providing trustworthy, award-winning news content in an audience-first format. We’re hiring a Senior Full-Stack Engineer!</p><p>Why it Matters: Our Engineering team enables our mission of delivering the cleanest, smartest, most efficient and trustworthy content to our users. This team member will be a core part of building our web-stack codebases, working closely with an assigned squad on product direction, and helping develop the skills of less experienced developers with industry best practices around architecture, testing, and professional growth.</p><p>Go Deeper: In this role, you will help make Axios a stronger, more successful tech company through the following responsibilities:</p><p>Building our products, including Axios.com, content creation tools, and other internal products Writing clean, well-documented, and well-tested code using best practices Collaborating with assigned product squad to ensure Axios ships the best products possible on time Mentoring and growing the next generation of software engineers through pair-programming and empathetic code review Staying up to date with industry trends and collaborating on best practices</p><p>The Details: Ideal candidates will embody an entrepreneurial spirit and passion for Axios’ mission and possess the following skills and attributes:</p><p>Deep experience and interest in Python and Django (esp as REST API) Familiarity in a frontend framework, such as React, Angular or Vue Experience and strong interest in functional programming is preferred  Experience working with CI/CD pipelines and understanding best deployment practices Proven ability to ship high quality, testable, and accessible code quickly Experience working with product designers Experience building APIs Experience with data modeling in relational databases A belief in and commitment to Axios’ diversity, equity, and inclusion values </p><p>Don’t Forget:</p><p>Competitive salary Health insurance (100% paid for individuals, 75% for families) Primary caregiver 12-week paid leave 401K Generous vacation policy, plus company holidays Company equity Commuter and cell phone benefit A commitment to an open, inclusive, and diverse work culture Annual learning and development stipend</p><p>Additional pandemic-related benefits:</p><p>One mental health day per month $100 monthly work-from-home stipend Tele-mental health services  OneMedical membership, including tele-health services  Increased work flexibility for parents and caretakers  Access to the Axios “Family Fund”, which was created to allow employees to request financial support when facing financial hardship or emergencies  Weekly company-sponsored exercise and meditation classes  Virtual company-sponsored social events</p>",
    how_to_apply:
      '<p><a href="https://grnh.se/1b7852c61us">https://grnh.se/1b7852c61us</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaXlNIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--447629f32148d87f1a714bd90d28b5eec5feed50/Axios%20logo%20-%20RGB%20-%20minimum%20space.jpg",
  };

  let result = [];

  result.push(
    <Vacancy
      key={0}
      company={original.company}
      company_logo={original.company_logo}
      type={original.type}
      url={original.url}
      location={original.location}
      title={original.title}
      description={original.description}
    />
  );
  return result;
}
