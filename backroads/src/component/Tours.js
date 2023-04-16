import React from 'react'
import Title from './Title'
import { tourInfo } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tourInfo.map((info) => {
          return (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={info.img} className="tour-img" alt="" />
                <p className="tour-date">{info.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{info.title}</h4>
                </div>
                <p>{info.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {info.location}
                  </p>
                  <p>{info.duration}</p>
                  <p>{info.price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
