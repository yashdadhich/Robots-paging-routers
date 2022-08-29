import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  console.log(robots);
  return (
    <div>
      {robots.map((robotData, i) => {
        return (
          <Card
            key={robotData.id}
            id={robotData.id}
            name={robotData.name}
            email={robotData.email}
          />
        );
      })
      }
    </div>
  );
}

export default CardList;