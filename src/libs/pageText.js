const spanish_text = {
    "Hero": "¡Reserva ahora y vive una experiencia inolvidable en la capital de Cuba!",
    "SRoom" : "Ver Habitación",
    "GSubHeader": "En el Hostal Mirkastillito, podrás disfrutar de una estancia confortable y tranquila.",
    "Ubication" : "El Hostal Mirkastillito se encuentra ubicado en el CENTRO HISTORICO DE LA HABANA VIEJA DE CUBA. De forma que usted podrá visitar sitios de gran interés turístico de forma rápida y sencilla",
    "Plaza": "De las más antiguas de La Habana Vieja rodeada de hermosas edificaciones de estilo colonial.",
    "Catedral": "La iglesia mas impresionante de toda Cuba y contando con una arquitectura barroca espectacular.",
    "Malecon" : "Ideal para caminar, tomar fotografías y disfrutar de una vista impresionante del mar.",
    "Capitolio" : "Edificio emblámatico de La Habana considerado uno de los más importantes de Cuba.",
    "Bodeguita" : "Restaurante para disfrutar de la comida tradicional criolla.",
    "EndMessage" : "Pongáse en contactos con nosotros en este mismo instante y reserve para pasar un momento agradable en el Hostal Mirkastillito"
}

const english_text = {
    "Hero": "Book now and live an unforgettable experience in the capital of Cuba!",
    "SRoom" : "View Room",
    "GSubHeader": "In Hostal Mirkastillito, you can enjoy a comfortable and peaceful stay.",
    "Ubication" : "Hostal Mirkastillito is located in the HISTORIC CENTER OF OLD HAVANA, CUBA, so you can easily and quickly visit many tourist attractions.",
    "Plaza": "One of the oldest in Old Havana surrounded by beautiful colonial-style buildings.",
    "Catedral": "The most impressive church in all of Cuba, boasting spectacular Baroque architecture.",
    "Malecon" : "Ideal for walking, taking photographs, and enjoying a breathtaking view of the sea.",
    "Capitolio" : "An emblematic building in Havana considered one of the most important in Cuba.",
    "Bodeguita" : "A restaurant to enjoy traditional Creole cuisine.",
    "EndMessage" : "Contact us right now and book to have a pleasant time at Hostal Mirkastillito."
}

export const getText = (key, len) => {
    return len === 'es' ? spanish_text[key] : english_text[key];
}