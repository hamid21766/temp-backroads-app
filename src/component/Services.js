import React from "react";
import Title from "./Title";
import { service } from "../data";
import Service from "./Service";

function Services() {
  return (
    <section className='section services' id='services'>
      <Title title='our' subtitle='services' />
      <div className='section-center services-center'>
        {service.map((serve) => {
          return <Service key={serve.id} {...serve}/>
        })}
      </div>
    </section>
  );}

export default Services;
