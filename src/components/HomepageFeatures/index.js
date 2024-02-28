import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Event Agenda",
    Svg: require("@site/static/img/agenda.svg").default,
    description: (
      <>
        Users can view the schedule of events, including virtual events,
        ensuring they never miss out on important sessions.
      </>
    ),
  },
  {
    title: "Speaker Information",
    Svg: require("@site/static/img/conference.svg").default,
    description: (
      <>
        Detailed information about speakers at the event, providing insights
        into the expertise and topics covered.
      </>
    ),
  },
  {
    title: "Live Streaming",
    Svg: require("@site/static/img/live-streaming.svg").default,
    description: (
      <>
        Integration with Vimeo for live streaming of events, allowing attendees
        to participate from anywhere.
      </>
    ),
  },
  {
    title: "Push Notifications",
    Svg: require("@site/static/img/notifications.svg").default, // Replace with actual path
    description: (
      <>
        Utilizes Firebase Cloud Messaging for sending timely notifications to
        users, keeping them informed and engaged.
      </>
    ),
  },
  {
    title: "Development Environment",
    Svg: require("@site/static/img/development.svg").default, // Replace with actual path
    description: (
      <>
        Built with React Native and TypeScript, featuring Redux for state
        management and styled components for modular styling.
      </>
    ),
  },
  {
    title: "Scalability and Ease of Use",
    Svg: require("@site/static/img/scalability.svg").default, // Replace with an appropriate SVG path
    description: (
      <>
        Engineered for growth, the app seamlessly scales to meet increasing
        demand while maintaining a user-friendly interface that ensures a
        smooth, intuitive experience for all users.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
