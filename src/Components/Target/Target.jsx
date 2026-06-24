
import React, { useState } from "react";
import "./Target.css";

const Target = () => {
  const [activeTab, setActiveTab] = useState("society");

  const content = {
    society: {
      title: "For society managers and accountants",
      text1:
        "Our all-in-one solution empowers societies to streamline their management, making it effortless and efficient. From simplified accounting and billing to enhanced communication and transparency, we offer the tools you need to create harmonious living environments.",
      text2:
        "With AppSociety, you can reduce the burden of manual tasks, foster community engagement, and ensure the financial health of your society. Experience the future of society management, where convenience meets connectivity, with AppSociety.",
    },

    residents: {
      title: "For residents",
      text1:
        "AppSociety makes everyday living easy for residents. Get instant updates, pay bills online, and participate in community discussions—all from one platform.",
      text2:
        "Stay informed, connected, and in control of your residential life with tools designed for modern communities.",
    },

    professionals: {
      title: "For professionals",
      text1:
        "For society managers and accountants, AppSociety offers powerful tools to automate, organize, and optimize administrative workflows.",
      text2:
        "Focus on what matters—growing your community—while we handle the paperwork, reporting, and communication.",
    },
  };

  return (
    <section className="smart-section">
    <div className="heading">
        <h1>Giant leap towards</h1>
      <h1 className="heading1"> a Smart Society!</h1>
    </div>

      <div className="tabs">
        <button
          className={activeTab === "society" ? "active" : ""}
          onClick={() => setActiveTab("society")}
        >
          For Society
        </button>

        <button
          className={activeTab === "residents" ? "active" : ""}
          onClick={() => setActiveTab("residents")}
        >
          For Residents
        </button>

        <button
          className={activeTab === "professionals" ? "active" : ""}
          onClick={() => setActiveTab("professionals")}
        >
          For Professionals
        </button>
      </div>

      <div className="content">
        <p>{content[activeTab].title},</p>

        <p>{content[activeTab].text1}</p>

        <p>{content[activeTab].text2}</p>
      </div>
    </section>
  );
};

export default Target;