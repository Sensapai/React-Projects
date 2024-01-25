import React from 'react'

interface IPeople {
    id: number;
    name: string;
    age: number;
    image: string;
}

function List({people}: any) {
  return (
    <>
    {people.map((person: IPeople) => {
        const {id, name, age, image} = person
        return <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
    })}
    </>
  )
}

export default List