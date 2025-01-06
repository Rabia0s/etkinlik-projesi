import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import './EventDetails.css'; // CSS dosyasını ekliyoruz

// GraphQL sorgusu
const GET_EVENT_DETAILS = gql`
  query GetEventDetails($id: ID!) {
    event(id: $id) {
      id
      name
      description
      date
      owner
      location
      participants {
        id
        name
      }
    }
  }
`;

function EventDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EVENT_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Bir hata oluştu: {error.message}</p>;

  const { event } = data;

  return (
    <div className="event-details">
      <h2 className="event-details-title">{event.name}</h2>
      <p className="event-details-description">{event.description}</p>
      <p className="event-details-date">{new Date(event.date).toLocaleString()}</p>
      <p className="event-details-owner"><strong>Sahibi:</strong> {event.owner}</p>
      <p className="event-details-location"><strong>Konum:</strong> {event.location}</p>

      <h3>Katılımcılar:</h3>
      <ul className="participants-list">
        {event.participants.map((participant) => (
          <li key={participant.id} className="participant-item">{participant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventDetails;
