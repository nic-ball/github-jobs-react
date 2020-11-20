import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  const { title, type, company, id } = job;
    return (
      <div className="Card">
        <h1 className="Card-title">{title}</h1>
        <ul>
          <li>Company: {company}</li>
          <li>Type: {type}</li>
        </ul>
        <Link to={`/profile/${id}`}>Read more</Link>
      </div>
    );
};

export default Job;
