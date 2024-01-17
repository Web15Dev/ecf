const data_movies = [
  {
    id: "movie-1",
    name: "Le Cercle des neiges",
    target: "Tous",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/nDbV9AUeUc7Zf5vUAqoagF7O8M7.jpg",
    alt: "Affiche du film Le Cercle des neiges",
    year: "2023",
    duration: "2h00",
    session: [
      {
        id: "t-1",
        movieId: "movie-1",
        date: "12 Janvier",
        version: "Française",
        room: "20",
        timeline: ["9h30","11h00", "15h10", "18h40", "22h45"]
      },
      {
        id: "t-2",
        movieId: "movie-1",
        date: "24 Janvier",
        version: "Française",
        room: "25",
      }
    ],
    nextSession: "12/01 - 9h30",
    synopsis: "Le 13 octobre 1972, le vol 571 de l'armée de l'air uruguayenne, affrété pour transporter une équipe de rugby au Chili, s'écrase sur un glacier au cœur des Andes.",
    casting: {},
    crew: {},
  },
  {
    id: "movie-2",
    name: "The Bricklayer",
    target: "Tous",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/36pYugctLa70NmwMEgXTR1G31Kq.jpg",
    alt: "Affiche du film The Bricklayer",
    year: "2023",
    duration: "1h50",
    session: [
      {
        id: "t-1",
        movieId: "movie-2",
        date: "11 Janvier",
        version: "Française",
        room: "20",
        timeline: ["9h30","11h00", "15h10", "18h40", "22h45"]
      },
      {
        id: "t-2",
        movieId: "movie-2",
        date: "18 Janvier",
        version: "Française",
        room: "25",
      }
    ],
    nextSession: "11/01 - 9h30",
    synopsis: "Steve Vail, ancien agent du FBI, est devenu maçon à Chicago. L'Agence se voit contrainte de faire appel à lui pour localiser et combattre un groupe de criminels. Ces derniers exigent une série de rançons dont chacune s'élève à plusieurs millions de dollars.",
    casting: {},
    crew: {},
  },
  {
    id: "movie-3",
    name: "Aquaman et le Royaume perdu",
    target: "Tous",
    image: "assets/images/aquaman_et_le_royaume_perdu.webp",
    alt: "Affiche du film Aquaman et le Royaume perdu",
    year: "2023",
    duration: "2h04",
    session: [
      {
        id: "t-1",
        movieId: "movie-3",
        date: "15 Janvier",
        version: "Française",
        room: "20",
        timeline: ["9h30","11h00", "15h10", "18h40", "22h45"]
      },
      {
        id: "t-2",
        movieId: "movie-3",
        date: "22 Janvier",
        version: "Française",
        room: "25",
      }
    ],
    nextSession: "15/01 - 9h30",
    synopsis: "Black Manta, toujours hanté par le désir de venger son père, est maintenant plus puissant que jamais avec le légendaire Trident Noir entre ses mains. Pour l’anéantir, Aquaman doit s’associer à son frère Orm ancien roi d’Atlantide et actuellement emprisonné. Ensemble, ils devront surmonter leurs différences pour protéger leur royaume et sauver le monde d’une destruction irréversible.",
    casting: {},
    crew: {},
  }
];

function movieSessions() {
  
  // Constructor
  const MOVIE_SESSIONS = {};

  // Methods
  MOVIE_SESSIONS.create_session = function(session) {
    const container = document.querySelector("#movie-sessions_"+session.movieId);
  
    const accordion = createElement("div", {
      "class": "accordion accordion--screening",
      "id": "movie-session_"+session.id
    });
    appendChildTo(accordion, container);

    const accordion_header = createElement("div", {
      "class": "accordion__header"
    });
    appendChildTo(accordion_header, accordion);

    const accordion_header_title = createElement("p", {
      "class": "accordion-header__title",
      "text": "Séance du "
    });
    appendChildTo(accordion_header_title, accordion_header);

    const accordion_header_title_date = createElement("span", {
      "class": "accordion-header-title__date",
      "text": session.date
    });
    appendChildTo(accordion_header_title_date, accordion_header_title);

    const accordion_header_arrow = createElement("span", {
      "class": "fas fa-chevron-down accordion-header__arrow"
    });
    appendChildTo(accordion_header_arrow, accordion_header);

    const accordion_content = createElement("div", {
      "class": "accordion__content hidden"
    });
    appendChildTo(accordion_content, accordion);

    const accordion_content_info = createElement("div", {
      "class": "accordion-content__info"
    });
    appendChildTo(accordion_content_info, accordion_content);

    const accordion_info_version_label = createElement("p", {
      "text": "Version : "
    });
    appendChildTo(accordion_info_version_label, accordion_content_info);

    const accordion_info_version_value = createElement("span", {
      "text": session.version
    });
    appendChildTo(accordion_info_version_value, accordion_info_version_label);

    const accordion_info_room_label = createElement("p", {
      "text": "Salle : "
    });
    appendChildTo(accordion_info_room_label, accordion_content_info);

    const accordion_info_room_value = createElement("span", {
      "text": session.room
    });
    appendChildTo(accordion_info_room_value, accordion_info_room_label);
    
    const accordion_content_schedule = createElement("div", {
      "class": "accordion-content__schedule",
      "id": "movie-session-schedule_"+session.id,
      "inner": "<a href='reservation.html' class='btn btn--secondary'>10h00</a>" + "<a href='reservation.html' class='btn btn--secondary'>14h00</a>" + "<a href='reservation.html' class='btn btn--secondary'>16h00</a>" + "<a href='reservation.html' class='btn btn--secondary'>18h00</a>" + "<a href='reservation.html' class='btn btn--secondary'>20h00</a>" 
    });
    appendChildTo(accordion_content_schedule, accordion_content);
  };

  MOVIE_SESSIONS.schedule_hide_default = function(session) {
    const container = document.querySelector("#movie-session-schedule_"+session.id);
    container.innerHTML = "";
  };

  MOVIE_SESSIONS.create_schedule = function(session) {
    const containerSchedule = document.querySelector("#movie-session-schedule_"+session.id);

    const timelines = session.timeline;
    console.log(timelines)
    timelines.forEach(function(timeline) {
      let btnSchedule = createElement("a", {
        "class": "btn btn--secondary",
        "href": "reservation.html",
        "text": timeline
      });
      appendChildTo(btnSchedule, containerSchedule);
    });
  };
  return MOVIE_SESSIONS;
};

function cardScreenings() {

  // Constructor
  const CARD_SCREENINGS = {};

  // Vars
  const containerCard = document.querySelector("#movieScreenings");

  // Methods

  CARD_SCREENINGS.hide_default = function() {
    containerCard.innerHTML = "";
  };

  CARD_SCREENINGS.create_card = function(movie){
    const card = createElement("div", {
      "class": "card card--screening", 
      "id": "movie_"+movie.id
    });
    appendChildTo(card, containerCard);

    const card_container = createElement("div", {
      "class": "card__container"
    });
    appendChildTo(card_container, card);

    const card_header = createElement("div", {
      "class": "card__header"
    });
    appendChildTo(card_header, card_container);

    const card_title_container = createElement("div",{
      "class": "card-header__title"
    });
    appendChildTo(card_title_container, card_header);

    const card_title = createElement("div", {
      "class": "card__title", 
      "id": "movie-title_"+movie.id,
      "text": movie.name
    });
    appendChildTo(card_title, card_title_container);

    const card_target = createElement("div", {
      "class": "card__target",
      "id": "movie-target_"+movie.id,
      "text": movie.target
    });
    appendChildTo(card_target, card_header);

    const card_body = createElement("div", {
      "class": "card__body"
    });
    appendChildTo(card_body, card_container);

    const card_body_img = createElement("div", {
      "class": "card-body__item card-body__item--img"
    });
    appendChildTo(card_body_img, card_body);

    const card_img = createElement("img", {
      "class": "card__img", 
      "src": movie.image, 
      "alt": movie.alt
    });
    appendChildTo(card_img, card_body_img);

    const card_body_infos = createElement("div", {
      "class": "card-body__item card-body__item--infos"
    });
    appendChildTo(card_body_infos, card_body);

    const card_info_year = createElement("p", {
      "class": "card__info", 
      "text": movie.year
    });
    appendChildTo(card_info_year, card_body_infos);

    const card_info_duration = createElement("p", {
      "class": "card__info", 
      "text": movie.duration
    });
    appendChildTo(card_info_duration, card_body_infos);

    const card_body_actions = createElement("div", {
      "class": "card-body__item card-body__item--actions"
    });
    appendChildTo(card_body_actions, card_body);

    const card_body_btn_details = createElement("a", {
      "class": "btn btn--primary", 
      "text": "Détails", 
      "href": "details.html"
    });
    appendChildTo(card_body_btn_details, card_body_actions);

    const card_body_showing = createElement("div", {
      "class": "card-body__item card-body__item--showing",
      "id": "movie-sessions_"+movie.id
    });
    appendChildTo(card_body_showing, card_body);
  };

  return CARD_SCREENINGS;
};

function cardMovies() {

  // Constructor
  const CARD_MOVIES = {};

  // Vars
  const containerCard = document.querySelector("#movies");

  // Methods
  CARD_MOVIES.hide_default = function() {
    containerCard.innerHTML = "";
  };

  CARD_MOVIES.create_card = function(movie) {
    const card = createElement("div", {
      "class": "card card--movies",
      "id": "movie_"+movie.id
    });
    appendChildTo(card, containerCard);

    const card_container = createElement("div", {
      "class": "card__container"
    });
    appendChildTo(card_container, card);

    const card_header = createElement("div", {
      "class": "card__header"
    });
    appendChildTo(card_header, card_container);

    const card_header_title = createElement("div", {
      "class": "card-header__title"
    });
    appendChildTo(card_header_title, card_header);

    const card_title = createElement("p", {
      "class": "card__title",
      "text": movie.name
    });
    appendChildTo(card_title, card_header_title);

    const card_target = createElement("span", {
      "class": "card__target",
      "text": movie.target
    });
    appendChildTo(card_target, card_header);

    const card_body = createElement("div", {
      "class": "card__body"
    });
    appendChildTo(card_body, card_container);

    const card_body_img = createElement("div", {
      "class": "card-body__item card-body__item--img"
    });
    appendChildTo(card_body_img, card_body);

    const card_img = createElement("img", {
      "class": "card__img",
      "image": movie.image,
      "alt": movie.alt
    });
    appendChildTo(card_img, card_body_img);

    const card_body_infos = createElement("div", {
      "class": "card-body__item card-body__item--infos"
    });
    appendChildTo(card_body_infos, card_body);

    const card_info_year = createElement("p", {
      "class": "card__info",
      "text": movie.year
    });
    appendChildTo(card_info_year, card_body_infos);

    const card_info_duration = createElement("p", {
      "class": "card__info",
      "text": movie.duration
    });
    appendChildTo(card_info_duration, card_body_infos);

    const card_body_session = createElement("div", {
      "class": "card-body__item card-body__item--next-show"
    });
    appendChildTo(card_body_session, card_body);

    const card_session_label = createElement("p", {
      "class": "card__next-show",
      "text": "Prochaine séance :"
    });
    appendChildTo(card_session_label, card_body_session);

    const card_session_date = createElement("p", {
      "class": "card__next-show",
      "text": movie.nextSession
    });
    appendChildTo(card_session_date, card_body_session);

    const card_body_actions = createElement("div", {
      "class": "card-body__item card-body__item--actions"
    });
    appendChildTo(card_body_actions, card_body);

    const card_action_more = createElement("a", {
      "class": "btn btn--primary",
      "href": "details.html",
      "text": "Détails",
      "id": "movie-btnMore_" + movie.id
    });
    appendChildTo(card_action_more, card_body_actions);

    const card_action_session = createElement("a", {
      "class": "btn btn--secondary",
      "href": "reservation.html",
      "text": "Séances",
      "id": "movie-btnSession_" + movie.id
    });
    appendChildTo(card_action_session, card_body_actions);

    const card_footer = createElement("div", {
      "class": "card__footer"
    });
    appendChildTo(card_footer, card_container);
  };

  return CARD_MOVIES;
};