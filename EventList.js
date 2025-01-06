import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './EventList.css'; // CSS dosyasını ekliyoruz

// GraphQL sorgusu
const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      name
      description
      date
    }
  }
`;

function EventList() {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Bir hata oluştu: {error.message}</p>;

  return (
    <div className="event-list">
      {data.events.map((event) => (
        <div key={event.id} className="event-card">
          <h3 className="event-title">{event.name}</h3>
          <p className="event-description">{event.description}</p>
          <p className="event-date">{new Date(event.date).toLocaleString()}</p>
          <a href={`/events/${event.id}`} className="event-details-link">Detaylar</a>
        </div>
      ))}
    </div>
  );
}

export default EventList;
