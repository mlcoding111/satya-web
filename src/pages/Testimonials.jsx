import React from "react";
import Title from "../components/Title";

const quoteMark = () => {
  return (
    <svg
      width="25"
      height="57"
      viewBox="0 0 73 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0366 22.4888C15.9272 16.8904 22.9252 10.9104 28.3963 10.7831C28.778 10.7831 29.1597 10.6559 29.4142 10.4014C29.6686 10.2742 29.9231 10.1469 30.0503 9.76524C31.9589 6.20265 30.941 3.40348 27.7601 1.11324C24.0703 -1.55869 18.2175 1.11324 15.2911 3.53071C7.91142 9.638 0.404542 20.1983 0.786248 30.2501C-0.486104 36.9938 -0.231634 44.246 1.67689 50.226C2.94925 54.0431 6.63907 55.9516 10.4561 56.2061C14.2732 56.4608 22.1618 57.6057 25.5971 55.3156C29.0325 53.0252 29.2869 48.572 29.6686 44.7551C30.0503 40.5564 31.1955 32.6676 27.6329 29.3595C24.0703 26.1786 13.8915 29.6139 15.0366 22.4888Z"
        fill="white"
      />
      <path
        d="M57.0239 22.4888C57.9146 16.8904 64.9123 10.9104 70.3836 10.7831C70.7653 10.7831 71.147 10.6559 71.4015 10.4014C71.6562 10.2742 71.9104 10.1469 72.0379 9.76524C73.9464 6.20265 72.9285 3.40348 69.7476 1.11324C66.0578 -1.55869 60.205 1.11324 57.2784 3.53071C49.8987 9.638 42.3919 20.1985 42.7736 30.2501C41.5012 36.9938 41.7557 44.246 43.664 50.226C44.9364 54.0431 48.6262 55.9516 52.4434 56.2061C56.2605 56.4608 64.1491 57.6057 67.5844 55.3156C71.0196 53.0252 71.2742 48.572 71.6559 44.7551C72.0377 40.5564 73.1828 32.6676 69.6202 29.3595C66.0576 26.1786 55.7516 29.6139 57.0239 22.4888Z"
        fill="white"
      />
    </svg>
  );
};

function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-content">
        <div className="testimonial-card-quote">
          {
            quoteMark()
          }
          </div>
        <div className="testimonial-card-text">
          <p className="long-text">
          Le soin Essence sauvage de mon frère éternel Satya est d’une pureté incomparable. Ce voyage authentique rempli d’amour et de légèreté est tout simplement magique. Satya nous transporte à la fois en nous et dans l’infini des possibles tant par ses paroles poétiques qui abreuvent notre âme que par ses chants intemporels et hautement vibratoires qui traversent tous nos corps.
          </p>
        </div>
        <span>-Isabelle G.</span>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials">
      <Title title="Témoignages" />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </section>
  );
}

export default Testimonials;
