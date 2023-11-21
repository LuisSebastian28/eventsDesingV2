import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyAluLKMMt6FEryHw5H2UzpLk9yPtMGSkGg";

let calendars = [{ calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com" }];

let styles = {
  calendar: {
    borderWidth: "3px"
  },

  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
};

export default function MyCalendar() {
    return (
      <div className="App">
        <div
          style={{
            width: "90%",
            paddingTop: "50px",
            paddingBottom: "50px",
            margin: "auto",
            maxWidth: "1200px"
          }}
        >
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
      </div>
    );
  }