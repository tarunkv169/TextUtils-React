import React from "react";

export default function About(props) {
  // let myStyle={             // just like element.style.background = 'red'
  //   color:'white',
  //   backgroundColor:'black'
  // }
  // const [myStyle,setMyStyle]=useState({
  //   color: 'black',
  //   backgroundColor: 'white'                                               //set---  are used with onclick,onchange etc
  // })

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "light" ? "white" : "black",
    borderColor: props.mode === "light" ? "black" : "white",
  };

  let headstyle = {
    color: props.mode === "dark" ? "yellow" : "black",
  };
  // const [btntext,setbtntext] = useState("Enable dark mode");

  // const toggle_dark=()=>{
  //   if(myStyle.color==='white'){
  //     setMyStyle({
  //     color:'black',
  //     backgroundColor : 'white'})
  //     setbtntext("Enable light mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color:'white',
  //       backgroundColor : 'black'
  //     })
  //     setbtntext("Enable dark mode")

  //   }
  // }

  return (
    <>
      <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
        <h1>About us</h1>
        <div class="accordion  mt-2" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong style={headstyle}>Encryption and Decryption</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Text encryption involves converting plaintext into ciphertext
                using cryptographic algorithms, making it unreadable without the
                corresponding decryption key. Techniques such as symmetric
                encryption, where the same key is used for both encryption and
                decryption, and asymmetric encryption, which utilizes public and
                private key pairs, are commonly employed. A text utility could
                provide functionalities for encrypting sensitive information
                like passwords, messages, or files to ensure confidentiality
                during transmission or storage. Decryption capabilities would
                allow authorized users to retrieve the original plaintext from
                the encrypted data, maintaining data integrity and privacy.{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong style={headstyle}>Parsing and Analysis</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Text parsing involves breaking down textual data into smaller
                components or tokens to extract relevant information for
                analysis or processing. Techniques like natural language
                processing (NLP) and regular expressions are used to parse text
                and identify patterns, entities, sentiment, or linguistic
                features. A text utility could offer parsing functionalities for
                tasks such as tokenization, part-of-speech tagging, named entity
                recognition, sentiment analysis, or text summarization. Users
                could analyze text from various sources like documents, web
                pages, or social media posts to gain insights, automate tasks,
                or extract structured data for further processing.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong style={headstyle}>
                  Transformation and Manipulation
                </strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Text transformation involves modifying textual data to achieve
                desired formats, structures, or representations. Common
                transformations include converting between different character
                encodings, changing letter case (uppercase, lowercase, title
                case), removing or replacing specific characters or substrings,
                formatting dates, numbers, or currency, and generating lorem
                ipsum or placeholder text. A text utility could provide a range
                of transformation options to manipulate text efficiently for
                various purposes such as data cleaning, formatting,
                normalization, or generation. These functionalities empower
                users to streamline text processing tasks, enhance readability,
                and ensure consistency across documents or datasets.
              </div>
            </div>
          </div>

          {/* <div className='dark_button my-3'>
      <button onClick={toggle_dark} className='btn btn-primary'>{btntext}</button>
  </div> */}
        </div>
      </div>
    </>
  );
}
