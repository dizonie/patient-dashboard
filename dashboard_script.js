// Sample data for appointments
const upcomingAppointments = [
  {
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "May 8, 2025",
    time: "10:00 AM - 10:30 AM",
    location: "Heartcare Medical Center",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    status: "Upcoming"
  },
  {
    doctor: "Dr. Michael Chen",
    specialty: "Dermatologist",
    date: "May 15, 2025",
    time: "2:30 PM - 3:00 PM",
    location: "Skin Health Clinic",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    status: "Upcoming"
  },
  {
    doctor: "Dr. Emily Wilson",
    specialty: "Neurologist",
    date: "May 22, 2025",
    time: "11:15 AM - 12:00 PM",
    location: "Neuroscience Center",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "Upcoming"
  }
];

const pastAppointments = [
  {
    doctor: "Dr. Robert Thompson",
    specialty: "Family Medicine",
    date: "April 28, 2025",
    time: "9:00 AM",
    status: "Completed",
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    doctor: "Dr. Jessica Martinez",
    specialty: "Ophthalmologist",
    date: "April 15, 2025",
    time: "2:30 PM",
    status: "Completed",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    doctor: "Dr. David Kim",
    specialty: "Orthopedic Surgeon",
    date: "March 30, 2025",
    time: "11:15 AM",
    status: "Completed",
    img: "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    doctor: "Dr. Amanda Lee",
    specialty: "Pediatrician",
    date: "March 22, 2025",
    time: "10:00 AM",
    status: "Cancelled",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    doctor: "Dr. Richard Brown",
    specialty: "Endocrinologist",
    date: "March 10, 2025",
    time: "1:45 PM",
    status: "Completed",
    img: "https://randomuser.me/api/portraits/men/70.jpg"
  },
  // New past appointments (at least 10 in total)
  {
    doctor: "Dr. Elena Rodriguez",
    specialty: "Rheumatologist",
    date: "February 28, 2025",
    time: "3:15 PM",
    status: "Completed",
    img: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    doctor: "Dr. James Wilson",
    specialty: "Pulmonologist",
    date: "February 15, 2025",
    time: "11:30 AM", 
    status: "Completed",
    img: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    doctor: "Dr. Lisa Chang",
    specialty: "Dermatologist",
    date: "February 8, 2025",
    time: "9:45 AM",
    status: "Cancelled",
    img: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    doctor: "Dr. Thomas Wright",
    specialty: "Gastroenterologist",
    date: "January 30, 2025",
    time: "2:00 PM",
    status: "Completed",
    img: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    doctor: "Dr. Sophia Patel",
    specialty: "Neurologist",
    date: "January 22, 2025",
    time: "10:30 AM",
    status: "Completed",
    img: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    doctor: "Dr. Marcus Johnson",
    specialty: "Orthopedic Surgeon",
    date: "January 15, 2025",
    time: "4:00 PM",
    status: "Completed",
    img: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    doctor: "Dr. Olivia Smith",
    specialty: "Cardiologist",
    date: "January 7, 2025",
    time: "11:00 AM",
    status: "Cancelled",
    img: "https://randomuser.me/api/portraits/women/29.jpg"
  }
];


/* ===== NEW TOGGLE BUTTON FUNCTIONS ===== */
function switchToCardView() {
    document.getElementById('btn').style.transform = 'translateX(0)';
    document.querySelectorAll('.toggle-btn')[0].classList.add('active');
    document.querySelectorAll('.toggle-btn')[1].classList.remove('active');
    
    const container = document.getElementById('appointmentsCards');
    container.style.flexDirection = 'row';
    container.style.flexWrap = 'wrap';
    container.style.gap = '20px';
    
    // Reset card widths
    document.querySelectorAll('.appointment-card').forEach(card => {
        card.style.width = '';
        card.style.maxWidth = '';
    });
}

function switchToListView() {
    document.getElementById('btn').style.transform = 'translateX(60px)';
    document.querySelectorAll('.toggle-btn')[1].classList.add('active');
    document.querySelectorAll('.toggle-btn')[0].classList.remove('active');
    
    const container = document.getElementById('appointmentsCards');
    container.style.flexDirection = 'column';
    container.style.gap = '15px';
    
    // Make cards full width
    document.querySelectorAll('.appointment-card').forEach(card => {
        card.style.width = '100%';
        card.style.maxWidth = 'none';
    });
}
/* ===== END TOGGLE BUTTON FUNCTIONS ===== */

// Function to render appointments
function renderAppointments(appointments) {
  const appointmentsList = document.getElementById('appointmentsList');
  appointmentsList.innerHTML = appointments.map(appointment => `
    <div class="appointment-card">
      <div class="doctor-info">
        <img src="${appointment.img}" alt="${appointment.doctor}">
        <div class="doctor-details">
          <h3>${appointment.doctor}</h3>
          <p>${appointment.specialty}</p>
        </div>
        <span class="badge ${appointment.status.toLowerCase()}">${appointment.status}</span>
      </div>

      <div class="appointment-details">
        <div class="info-item">
          <i class="fa-regular fa-calendar"></i>
          <div>
            <h4>Date</h4>
            <p>${appointment.date}</p>
          </div>
        </div>

        <div class="info-item">
          <i class="fa-regular fa-clock"></i>
          <div>
            <h4>Time</h4>
            <p>${appointment.time}</p>
          </div>
        </div>

        <div class="info-item">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <h4>Location</h4>
            <p>${appointment.location || 'Not specified'}</p>
          </div>
        </div>
      </div>

      <div class="actions">
        ${appointment.status === 'Upcoming' ? `
          <button class="reschedule-btn" onclick="rescheduleAppointment(${appointment.id})">
            <i class="fa-regular fa-calendar"></i> Reschedule
          </button>
          <button class="cancel-btn" onclick="cancelAppointment(${appointment.id})">
            <i class="fa-regular fa-times-circle"></i> Cancel
          </button>
        ` : `
          <button class="book-again-btn" onclick="bookAgain('${appointment.doctor}')">
            <i class="fa-regular fa-calendar-plus"></i> Book Again
          </button>
        `}
      </div>
    </div>
  `).join('');
}

function renderCalendarView() {
  const appointmentsList = document.getElementById('appointmentsList');
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Combine upcoming and past appointments
  const allAppointments = [...upcomingAppointments, ...pastAppointments];

  // Create calendar HTML
  appointmentsList.innerHTML = `
    <div class="calendar-view">
      <div class="calendar-header">
        <button class="calendar-nav" onclick="previousMonth()">
          <i class="fas fa-chevron-left"></i>
        </button>
        <h2>${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}</h2>
        <button class="calendar-nav" onclick="nextMonth()">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div class="calendar-days">
        <div class="day-header">Sun</div>
        <div class="day-header">Mon</div>
        <div class="day-header">Tue</div>
        <div class="day-header">Wed</div>
        <div class="day-header">Thu</div>
        <div class="day-header">Fri</div>
        <div class="day-header">Sat</div>
        ${generateCalendarDays(currentYear, currentMonth, allAppointments)}
      </div>
    </div>
  `;
}

function generateCalendarDays(year, month, appointments) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startingDay = firstDay.getDay();
  const totalDays = lastDay.getDate();
  
  let calendarHTML = '';

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDay; i++) {
    calendarHTML += '<div class="calendar-day empty"></div>';
  }

  // Add cells for each day of the month
  for (let day = 1; day <= totalDays; day++) {
    const currentDate = new Date(year, month, day);
    const dateString = currentDate.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Find appointments for this day
    const dayAppointments = appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate.toDateString() === currentDate.toDateString();
    });

    calendarHTML += `
      <div class="calendar-day ${dayAppointments.length > 0 ? 'has-appointments' : ''}">
        <span class="day-number">${day}</span>
        ${dayAppointments.length > 0 ? `
          <div class="day-appointments">
            ${dayAppointments.map(appointment => `
              <div class="calendar-appointment ${appointment.status.toLowerCase()}" 
                   onclick="showAppointmentDetails(${JSON.stringify(appointment).replace(/"/g, '&quot;')})">
                <span class="time">${appointment.time}</span>
                <span class="doctor">${appointment.doctor}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  return calendarHTML;
}

// View toggle functionality
function changeView(view) {
  const appointmentsList = document.getElementById('appointmentsList');
  appointmentsList.className = 'appointments-list ' + view;
  
  switch(view) {
    case 'calendar':
      renderCalendarView();
      break;
    case 'card':
      renderCardView();
      break;
    case 'print':
      window.print();
      break;
  }
}

let currentViewMonth = new Date().getMonth();
let currentViewYear = new Date().getFullYear();

function previousMonth() {
  if (currentViewMonth === 0) {
    currentViewMonth = 11;
    currentViewYear--;
  } else {
    currentViewMonth--;
  }
  renderCalendarView();
}

function nextMonth() {
  if (currentViewMonth === 11) {
    currentViewMonth = 0;
    currentViewYear++;
  } else {
    currentViewMonth++;
  }
  renderCalendarView();
}

function showAppointmentDetails(appointment) {
  // Create and show a modal with appointment details
  const modal = document.createElement('div');
  modal.className = 'appointment-details-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</span>
      <div class="appointment-details">
        <img src="${appointment.img}" alt="${appointment.doctor}">
        <h3>${appointment.doctor}</h3>
        <p class="specialty">${appointment.specialty}</p>
        <div class="details">
          <div class="detail-item">
            <i class="fa-regular fa-calendar"></i>
            <span>${appointment.date}</span>
          </div>
          <div class="detail-item">
            <i class="fa-regular fa-clock"></i>
            <span>${appointment.time}</span>
          </div>
          <div class="detail-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>${appointment.location || 'Location not specified'}</span>
          </div>
        </div>
        <div class="status ${appointment.status.toLowerCase()}">${appointment.status}</div>
        ${appointment.status === 'Upcoming' ? `
          <div class="actions">
            <button onclick="rescheduleAppointment(${appointment.id})">Reschedule</button>
            <button class="cancel" onclick="cancelAppointment(${appointment.id})">Cancel</button>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

// Function to render card view
function renderCardView() {
  const currentTab = document.querySelector('.tab-btn.active').dataset.tab;
  loadAppointments(currentTab);
}

// Function to load appointments based on type
function loadAppointments(type) {
  const appointments = type === 'upcoming' ? upcomingAppointments : pastAppointments;
  renderAppointments(appointments);
}



// Navigation handling
document.addEventListener("DOMContentLoaded", () => {
  const appointmentsNav = document.querySelector('a[href="#appointments"]');
  const headerAppointmentsNav = document.querySelector('a[href="#appointments"]');
  const mainDashboard = document.getElementById('mainDashboard');
  const searchDoctorSection = document.getElementById('searchDoctorSection');
  const appointmentsDashboard = document.getElementById('appointmentsDashboard');

  // Function to show appointments section
  function showAppointments() {
    mainDashboard.style.display = 'none';
    searchDoctorSection.style.display = 'none';
    appointmentsDashboard.style.display = 'block';
    
    // Update active states
    document.querySelectorAll('.sidebar li, .top-nav li').forEach(item => {
      item.classList.remove('active');
    });
    if (appointmentsNav) appointmentsNav.parentElement.classList.add('active');
    if (headerAppointmentsNav) headerAppointmentsNav.parentElement.classList.add('active');

    // Load appointments
    loadAppointments('upcoming');
  }

  // Add click events for navigation
  if (appointmentsNav) {
    appointmentsNav.addEventListener('click', (e) => {
      e.preventDefault();
      showAppointments();
    });
  }

  if (headerAppointmentsNav) {
    headerAppointmentsNav.addEventListener('click', (e) => {
      e.preventDefault();
      showAppointments();
    });
  }

  // View toggles
  const viewToggles = document.querySelectorAll('.view-toggles button');
  viewToggles.forEach(button => {
    button.addEventListener('click', () => {
      viewToggles.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      changeView(button.dataset.view);
    });
  });

  // Tab switching
  const tabButtons = document.querySelectorAll('.appointments-tabs .tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      loadAppointments(button.dataset.tab);
    });
  });

  // Initialize with upcoming appointments
  loadAppointments('upcoming');
});

// Action functions
function rescheduleAppointment(appointmentId) {
  alert(`Reschedule appointment ${appointmentId}`);
  // Implement rescheduling functionality
}

function cancelAppointment(appointmentId) {
  if (confirm('Are you sure you want to cancel this appointment?')) {
    // Implement cancellation functionality
    alert(`Appointment ${appointmentId} cancelled`);
  }
}

function bookAgain(doctorName) {
  alert(`Booking new appointment with ${doctorName}`);
  // Implement booking functionality
}

// Search functionality
const searchInput = document.querySelector('.search-wrapper input');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const currentTab = document.querySelector('.tab-btn.active').dataset.tab;
    const appointments = currentTab === 'upcoming' ? upcomingAppointments : pastAppointments;
    
    const filtered = appointments.filter(appointment => 
      appointment.doctor.toLowerCase().includes(searchTerm) ||
      appointment.specialty.toLowerCase().includes(searchTerm) ||
      appointment.location?.toLowerCase().includes(searchTerm)
    );
    
    renderAppointments(filtered);
  });
}

let currentPage = 1;
const rowsPerPage = 5;

function renderUpcomingAppointments() {
  const container = document.getElementById('appointmentsCards');
  container.innerHTML = '';
  
  upcomingAppointments.forEach((appt, idx) => {
    const card = document.createElement('div');
    card.className = 'appointment-card';
    card.innerHTML = `
      <div class="doctor-info">
        <img src="${appt.img}" alt="${appt.doctor}">
        <div class="doctor-details">
          <b>${appt.doctor}</b>
          <span style="color:#666666;">${appt.specialty}</span>
        </div>
      </div>
      <div class="badge">${appt.status}</div>
      <div style="margin-top:8px; color:#666666;">
        <div><i class="fa-regular fa-calendar" style="margin-right:11.5px"></i> ${appt.date}</div>
        <div><i class="fa-regular fa-clock" style="margin-right:10px"></i> ${appt.time}</div>
        <div><i class="fa-solid fa-location-dot" style="margin-right:14px"></i> ${appt.location}</div>
      </div>
      <div class="actions">
        <button onclick="alert('Reschedule for ${appt.doctor}')">Reschedule</button>
        <button class="cancel" onclick="cancelAppointment(${idx})">Cancel</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function cancelAppointment(idx) {
  if (confirm(`Cancel appointment with ${upcomingAppointments[idx].doctor}?`)) {
    upcomingAppointments.splice(idx, 1);
    document.getElementById('upcomingAppointments').textContent = upcomingAppointments.length;
    renderUpcomingAppointments();
  }
}


// Updated function to render past appointments with the new design
function renderPastAppointments(page = 1, filter = '') {
  const tbody = document.getElementById('pastAppointmentsTable');
  tbody.innerHTML = '';
  
  let filtered = pastAppointments.filter(appt =>
    appt.doctor.toLowerCase().includes(filter.toLowerCase()) ||
    appt.specialty.toLowerCase().includes(filter.toLowerCase())
  );
  
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  
  filtered.slice(start, end).forEach(appt => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${appt.img}" alt="${appt.doctor}">${appt.doctor}</td>
      <td>${appt.specialty}</td>
      <td>${appt.date}</td>
      <td>${appt.time}</td>
      <td><span class="status-${appt.status.toLowerCase()}">${appt.status}</span></td>
      <td><a href="#" onclick="bookAgain('${appt.doctor}');return false;">Book Again</a></td>
    `;
    tbody.appendChild(tr);
  });
  
  // Update pagination
  updatePagination(page, totalPages, filtered.length);
}

// New function to handle "Book Again" action
function bookAgain(doctorName) {
  alert(`Booking a new appointment with ${doctorName}`);
  // Here you would typically redirect to the booking page or open a modal
}

// New function to update pagination with improved UI
function updatePagination(currentPage, totalPages, totalItems) {
  const paginationDiv = document.querySelector('.pagination');
  paginationDiv.innerHTML = '';
  
  // Add appointment count
  const countSpan = document.createElement('span');
  countSpan.className = 'appointment-count';
  countSpan.textContent = `Showing ${Math.min(rowsPerPage, totalItems - (currentPage-1) * rowsPerPage)} of ${totalItems} appointments`;
  paginationDiv.appendChild(countSpan);
  
  // Previous button
  const prevButton = document.createElement('button');
  prevButton.id = 'prevPage';
  prevButton.innerHTML = 'Previous';
  prevButton.disabled = currentPage === 1;
  prevButton.style.opacity = currentPage === 1 ? '0.5' : '1';
  prevButton.onclick = function() {
    if (currentPage > 1) {
      renderPastAppointments(currentPage - 1, document.getElementById('searchPast').value);
    }
  };
  paginationDiv.appendChild(prevButton);
  
  // Page numbers (show current, previous and next when applicable)
  if (totalPages <= 5) {
    // Show all pages if 5 or fewer
    for (let i = 1; i <= totalPages; i++) {
      const pageSpan = document.createElement('span');
      if (i === currentPage) {
        pageSpan.className = 'current-page';
      } else {
        pageSpan.className = 'page-number';
        pageSpan.onclick = function() {
          renderPastAppointments(i, document.getElementById('searchPast').value);
        };
      }
      pageSpan.textContent = i;
      paginationDiv.appendChild(pageSpan);
    }
  } else {
    // More complex pagination for many pages
    // Always show first page
    addPageNumber(1);
    
    // Show ellipsis if needed
    if (currentPage > 3) {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '...';
      ellipsis.style.margin = '0 5px';
      paginationDiv.appendChild(ellipsis);
    }
    
    // Show pages around current
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      addPageNumber(i);
    }
    
    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '...';
      ellipsis.style.margin = '0 5px';
      paginationDiv.appendChild(ellipsis);
    }
    
    // Always show last page if more than 1 page
    if (totalPages > 1) {
      addPageNumber(totalPages);
    }
  }
  
  // Next button
  const nextButton = document.createElement('button');
  nextButton.id = 'nextPage';
  nextButton.innerHTML = 'Next';
  nextButton.disabled = currentPage === totalPages;
  nextButton.style.opacity = currentPage === totalPages ? '0.5' : '1';
  nextButton.onclick = function() {
    if (currentPage < totalPages) {
      renderPastAppointments(currentPage + 1, document.getElementById('searchPast').value);
    }
  };
  paginationDiv.appendChild(nextButton);
  
  // Helper function to add page number
  function addPageNumber(pageNum) {
    const pageSpan = document.createElement('span');
    if (pageNum === currentPage) {
      pageSpan.className = 'current-page';
    } else {
      pageSpan.className = 'page-number';
      pageSpan.onclick = function() {
        renderPastAppointments(pageNum, document.getElementById('searchPast').value);
      };
    }
    pageSpan.textContent = pageNum;
    paginationDiv.appendChild(pageSpan);
  }
  
  // Update the current page reference for other functions
  currentPage = currentPage;
}

document.getElementById('bookBtn').onclick = function() {
  alert('Redirect to book new appointment page!');
};


// Notifications functionality
let notifications = [
  {
    id: 1,
    type: 'reminder',
    message: "Your appointment with Dr. Sarah Johnson is tomorrow at 10:00 AM.",
    time: "30 minutes ago",
    read: false
  },
  {
    id: 2,
    type: 'confirmed',
    message: "Your appointment with Dr. Michael Chen has been confirmed.",
    time: "2 hours ago",
    read: false
  },
  {
    id: 3,
    type: 'cancelled',
    message: "Your appointment has been cancelled.",
    time: "5 hours ago",
    read: true
  }
];

const notificationIcons = {
  reminder: '<i class="fa-regular fa-calendar"></i>',
  confirmed: '<i class="fa-solid fa-check-circle" style="color:green"></i>',
  cancelled: '<i class="fa-solid fa-times-circle" style="color:red"></i>'
};

function renderNotifications() {
  const list = document.getElementById('notificationList');
  list.innerHTML = '';
  notifications.forEach(n => {
    const item = document.createElement('div');
    item.className = 'notification-item' + (n.read ? '' : ' unread');
    item.innerHTML = `
      <div class="notification-icon">${notificationIcons[n.type]}</div>
      <div class="notification-content">
        <div>${n.message}</div>
        <div class="notification-time">${n.time}</div>
      </div>
      <div style="display:flex; flex-direction:column; gap:4px;">
        ${!n.read ? `<button class="mark-read-btn" data-id="${n.id}">Mark as read</button>` : ''}
        <button class="delete-btn" data-id="${n.id}">Delete</button>
      </div>
    `;
    list.appendChild(item);
  });
}

function updateBadge() {
  const unreadCount = notifications.filter(n => !n.read).length;
  const badge = document.getElementById('notificationBadge');
  badge.style.display = unreadCount > 0 ? 'block' : 'none';
  badge.textContent = unreadCount;
}

function toggleDropdown() {
  const dropdown = document.getElementById('notificationDropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  notifications = notifications.map(n => ({ ...n, read: true }));
  renderNotifications();
  updateBadge();
}

document.querySelector('.notifications').addEventListener('click', function(e) {
  e.stopPropagation();
  toggleDropdown();
});

document.addEventListener('click', function() {
  document.getElementById('notificationDropdown').style.display = 'none';
});

document.getElementById('notificationList').addEventListener('click', function(e) {
  if (e.target.classList.contains('mark-read-btn')) {
    const id = +e.target.getAttribute('data-id');
    notifications = notifications.map(n => n.id === id ? { ...n, read: true } : n);
    renderNotifications();
    updateBadge();
  }
  if (e.target.classList.contains('delete-btn')) {
    const id = +e.target.getAttribute('data-id');
    notifications = notifications.filter(n => n.id !== id);
    renderNotifications();
    updateBadge();
  }
});

// Profile dropdown
const userProfile = document.getElementById('userProfile');
const profileDropdown = document.getElementById('profileDropdown');

userProfile.addEventListener('click', function(e) {
  e.stopPropagation();
  profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function() {
  profileDropdown.style.display = 'none';
});

profileDropdown.querySelector('#profileLink').onclick = function(e) {
  e.preventDefault();
  alert('Go to profile page');
};

profileDropdown.querySelector('#settingsLink').onclick = function(e) {
  e.preventDefault();
  alert('Go to settings page');
};

profileDropdown.querySelector('#signoutLink').onclick = function(e) {
  e.preventDefault();
  alert('Signing out...');
};

// Add search functionality
document.getElementById('searchPast').addEventListener('input', function() {
  renderPastAppointments(1, this.value);
});

// Update stats count
function updateStats() {
  document.getElementById('totalAppointments').textContent = upcomingAppointments.length + pastAppointments.length;
  document.getElementById('upcomingAppointments').textContent = upcomingAppointments.length;
  document.getElementById('pastAppointments').textContent = pastAppointments.length;
}

// Initialize
window.onload = function() {
  renderUpcomingAppointments();
  renderPastAppointments();
  renderNotifications();
  updateBadge();
  updateStats();
  
  // Initialize toggle button and view
  switchToCardView();
  document.getElementById('appointmentsCards').style.display = 'flex';
};


document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    
    if(target === '#') return;
    
    // Hide all sections
    document.querySelectorAll('main > section').forEach(section => {
      section.style.display = 'none';
    });
    
    // Show target section
    if(target === 'index.html') {
      document.querySelector('.dashboard').style.display = 'block';
    } else if(target === '#search') {
      document.getElementById('searchDoctorSection').style.display = 'block';
      initSearchDoctors();
    }
    
    // Update active state in sidebar
    document.querySelectorAll('.sidebar li').forEach(item => {
      item.classList.remove('active');
    });
    this.parentElement.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchDoctorNav = document.querySelector('a[href="#search"]');
  const dashboardNav = document.querySelector('a[href="index.html"]');
  const mainDashboard = document.getElementById('mainDashboard');
  const searchDoctorSection = document.getElementById('searchDoctorSection');

  // Ensure the search doctor section is hidden initially
  if (searchDoctorSection) {
    searchDoctorSection.style.display = 'none';
  }

  // Add event listener for "Search Doctor" navigation link
  if (searchDoctorNav) {
    searchDoctorNav.addEventListener('click', (e) => {
      e.preventDefault();
      if (mainDashboard) mainDashboard.style.display = 'none';
      if (searchDoctorSection) searchDoctorSection.style.display = 'block';
    });
  }

  // Add event listener for "Dashboard" navigation link
  if (dashboardNav) {
    dashboardNav.addEventListener('click', (e) => {
      e.preventDefault();
      if (mainDashboard) mainDashboard.style.display = 'block';
      if (searchDoctorSection) searchDoctorSection.style.display = 'none';
    });
  }
});


/* SEARCH DOCTORS SECTION */

// Sample doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    hospital: "Heartcare Medical Center",
    location: "New York, NY",
    experience: "12 years",
    rating: 4.8,
    reviews: 124,
    availability: ["Mon", "Wed", "Fri"],
    img: "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    hospital: "Skin Health Clinic",
    location: "Los Angeles, CA",
    experience: "8 years",
    rating: 4.7,
    reviews: 98,
    availability: ["Tue", "Thu", "Sat"],
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Dr. Emily Wilson",
    specialty: "Neurologist",
    hospital: "Neuroscience Center",
    location: "Chicago, IL",
    experience: "15 years",
    rating: 4.9,
    reviews: 156,
    availability: ["Mon", "Tue", "Wed", "Fri"],
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "Dr. Robert Thompson",
    specialty: "Family Medicine",
    hospital: "General Hospital",
    location: "Houston, TX",
    experience: "10 years",
    rating: 4.6,
    reviews: 87,
    availability: ["Mon", "Wed", "Thu", "Sat"],
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 5,
    name: "Dr. Jessica Martinez",
    specialty: "Ophthalmologist",
    hospital: "Eye Care Center",
    location: "New York, NY",
    experience: "9 years",
    rating: 4.7,
    reviews: 112,
    availability: ["Tue", "Wed", "Fri"],
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 6,
    name: "Dr. David Kim",
    specialty: "Orthopedic Surgeon",
    hospital: "Bone & Joint Center",
    location: "Los Angeles, CA",
    experience: "14 years",
    rating: 4.9,
    reviews: 143,
    availability: ["Mon", "Thu", "Fri"],
    img: "https://randomuser.me/api/portraits/men/60.jpg"
  }
];

// Function to render doctor cards
function renderDoctors(filter = '', specialty = '', location = '', availability = '') {
  const container = document.getElementById('doctorResults');
  container.innerHTML = '';

  const filtered = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(filter.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(filter.toLowerCase()) ||
      doctor.location.toLowerCase().includes(filter.toLowerCase());
  
    const matchesSpecialty = !specialty || doctor.specialty.toLowerCase() === specialty.toLowerCase();
    const matchesLocation = !location || doctor.location.toLowerCase().includes(location.toLowerCase());
    const matchesAvailability = !availability || doctor.availability.some(day => day.toLowerCase().includes(availability.toLowerCase()));
  
    return matchesSearch && matchesSpecialty && matchesLocation && matchesAvailability;
  });

  filtered.forEach(doctor => {
    const card = document.createElement('div');
    card.className = 'doctor-card';
    card.innerHTML = `
      <div class="doctor-card-header">
        <img src="${doctor.img}" alt="${doctor.name}">
        <div class="doctor-card-info">
          <h3>${doctor.name}</h3>
          <p>${doctor.hospital}</p>
          <span class="doctor-card-specialty">${doctor.specialty}</span>
        </div>
      </div>
      <div class="doctor-card-details">
        <div><i class="fas fa-map-marker-alt"></i> ${doctor.location}</div>
        <div><i class="fas fa-briefcase"></i> ${doctor.experience} experience</div>
        <div><i class="fas fa-star"></i> ${doctor.rating} (${doctor.reviews} reviews)</div>
        <div><i class="fas fa-calendar-alt"></i> Available: ${doctor.availability.join(', ')}</div>
      </div>
      <div class="doctor-card-actions">
        <button class="primary" onclick="bookDoctor(${doctor.id})">Book Appointment</button>
        <button class="secondary" onclick="viewProfile(${doctor.id})">View Profile</button>
      </div>
    `;
    container.appendChild(card);
  });
}
// Book doctor function
function bookDoctor(doctorId) {
  const doctor = doctors.find(d => d.id === doctorId);
  alert(`Booking appointment with ${doctor.name}`);
}

// View profile function
function viewProfile(doctorId) {
  const doctor = doctors.find(d => d.id === doctorId);
  alert(`Viewing profile of ${doctor.name}`);
}

// Search functionality
document.getElementById('doctorSearch').addEventListener('input', function () {
  const specialty = document.getElementById('specialtyFilter').value;
  const location = document.getElementById('locationFilter').value;
  const availability = document.getElementById('availabilityFilter').value;
  renderDoctors(this.value, specialty, location, availability);
});

// Filter functionality
document.getElementById('specialtyFilter').addEventListener('change', function () {
  const search = document.getElementById('doctorSearch').value;
  const location = document.getElementById('locationFilter').value;
  const availability = document.getElementById('availabilityFilter').value;
  renderDoctors(search, this.value, location, availability);
});

document.getElementById('locationFilter').addEventListener('change', function () {
  const search = document.getElementById('doctorSearch').value;
  const specialty = document.getElementById('specialtyFilter').value;
  const availability = document.getElementById('availabilityFilter').value;
  renderDoctors(search, specialty, this.value, availability);
});

document.getElementById('availabilityFilter').addEventListener('change', function () {
  const search = document.getElementById('doctorSearch').value;
  const specialty = document.getElementById('specialtyFilter').value;
  const location = document.getElementById('locationFilter').value;
  renderDoctors(search, specialty, location, this.value);
});

// Initialize doctor search page
function initSearchDoctors() {
  renderDoctors();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
  initSearchDoctors();
});

// Function to show the doctor's profile in a modal

function viewProfile(doctorId) {
  const doctor = doctors.find(d => d.id === doctorId);
  if (!doctor) return;

  // Add more sample data for the enhanced profile
  const enhancedDoctor = {
    ...doctor,
    education: [
      { degree: "MD", institution: "Harvard Medical School", year: "2005" },
      { degree: "Residency", institution: "Mayo Clinic", year: "2009" },
      { degree: "Fellowship", institution: "Johns Hopkins Hospital", year: "2011" }
    ],
    languages: ["English", "Spanish", "Mandarin"],
    specializations: ["Interventional Cardiology", "Heart Failure", "Cardiac Imaging"],
    insurances: ["Blue Cross", "Aetna", "UnitedHealth", "Medicare"],
    awards: [
      "Best Doctor Award 2023",
      "Excellence in Patient Care 2022",
      "Top Specialist Recognition 2021"
    ],
    about: "Dr. " + doctor.name.split("Dr. ")[1] + " is a highly experienced healthcare professional dedicated to providing exceptional patient care. With extensive training from prestigious institutions and a track record of successful treatments, they stay at the forefront of medical advancements in their field."
  };

  // Populate the modal with enhanced doctor details
  document.getElementById('doctorProfileModal').innerHTML = `
    <div class="modal-card">
      <span class="close-btn" onclick="closeDoctorProfile()">&times;</span>
      
      <div class="card-header">
        <div class="header-content">
          <img id="modalDoctorImage" src="${enhancedDoctor.img}" alt="${enhancedDoctor.name}">
          <div class="header-info">
            <h2>${enhancedDoctor.name}</h2>
            <p class="specialty"><i class="fa-solid fa-user-md"></i> ${enhancedDoctor.specialty}</p>
            <div class="rating-badge">
              <i class="fa-solid fa-star"></i>
              <span>${enhancedDoctor.rating}</span>
              <span class="reviews">(${enhancedDoctor.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="profile-tabs">
          <button class="tab-btn active" onclick="switchTab('about')">About</button>
          <button class="tab-btn" onclick="switchTab('education')">Education</button>
          <button class="tab-btn" onclick="switchTab('schedule')">Schedule</button>
          <button class="tab-btn" onclick="switchTab('reviews')">Reviews</button>
        </div>

        <div class="tab-content" id="about">
          <div class="info-section">
            <h3>About Doctor</h3>
            <p>${enhancedDoctor.about}</p>
          </div>

          <div class="info-section">
            <h3>Specializations</h3>
            <div class="tags">
              ${enhancedDoctor.specializations.map(spec => `
                <span class="tag">${spec}</span>
              `).join('')}
            </div>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <i class="fa-solid fa-hospital"></i>
              <div>
                <h4>Hospital</h4>
                <p>${enhancedDoctor.hospital}</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-solid fa-briefcase"></i>
              <div>
                <h4>Experience</h4>
                <p>${enhancedDoctor.experience}</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-solid fa-globe"></i>
              <div>
                <h4>Languages</h4>
                <p>${enhancedDoctor.languages.join(", ")}</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <h4>Location</h4>
                <p>${enhancedDoctor.location}</p>
              </div>
            </div>
          </div>

          <div class="info-section">
            <h3>Insurance Accepted</h3>
            <div class="insurance-list">
              ${enhancedDoctor.insurances.map(insurance => `
                <div class="insurance-item">
                  <i class="fa-solid fa-check-circle"></i>
                  <span>${insurance}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <div class="availability">
          <i class="fa-regular fa-calendar"></i>
          <span>Next Available: Tomorrow, 10:00 AM</span>
        </div>
        <div class="action-buttons">
          <button class="secondary" onclick="closeDoctorProfile()">
            <i class="fa-regular fa-bookmark"></i> Save Profile
          </button>
          <button class="primary" onclick="bookAppointment(${enhancedDoctor.id})">
            <i class="fa-regular fa-calendar-check"></i> Book Appointment
          </button>
        </div>
      </div>
    </div>
  `;

  // Show the modal
  document.getElementById('doctorProfileModal').style.display = 'flex';
}

// Close doctor profile modal function
function closeDoctorProfile() {
  document.getElementById('doctorProfileModal').style.display = 'none';
}

// Add event listener to close modal when clicking outside
document.getElementById('doctorProfileModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeDoctorProfile();
  }
});


//Appointment card view toggle

// View toggle functionality
const viewToggles = document.querySelectorAll('.view-toggles button');
viewToggles.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    viewToggles.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    // Handle view change
    const view = button.dataset.view;
    changeView(view);
  });
});

function changeView(view) {
  const appointmentsList = document.getElementById('appointmentsList');
  appointmentsList.className = 'appointments-list ' + view;
  
  // Handle different view layouts
  switch(view) {
    case 'calendar':
      renderCalendarView();
      break;
    case 'card':
      renderCardView();
      break;
    case 'print':
      window.print();
      break;
  }
}

// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked tab
    button.classList.add('active');
    
    // Load appropriate appointments
    const tabType = button.dataset.tab;
    loadAppointments(tabType);
  });
});

function loadAppointments(type) {
  // Filter appointments based on type (upcoming or past)
  const appointments = type === 'upcoming' ? upcomingAppointments : pastAppointments;
  renderAppointments(appointments);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Load upcoming appointments by default
  loadAppointments('upcoming');
});

document.addEventListener("DOMContentLoaded", () => {
  // Get all the necessary elements
  const appointmentsNav = document.querySelector('a[href="#appointment"]');
  const headerAppointmentsNav = document.querySelector('a[href="#appointments"]');
  const mainDashboard = document.getElementById('mainDashboard');
  const searchDoctorSection = document.getElementById('searchDoctorSection');
  const appointmentsDashboard = document.getElementById('appointmentsDashboard');

  // Function to show appointments section
  function showAppointments() {
    // Hide other sections
    mainDashboard.style.display = 'none';
    searchDoctorSection.style.display = 'none';
    appointmentsDashboard.style.display = 'block';

    // Update sidebar active state
    document.querySelectorAll('.sidebar li').forEach(item => {
      item.classList.remove('active');
    });
    appointmentsNav.parentElement.classList.add('active');

    // Update header active state
    document.querySelectorAll('.top-nav li').forEach(item => {
      item.classList.remove('active');
    });
    headerAppointmentsNav.parentElement.classList.add('active');
  }

  // Add click event for sidebar appointments link
  appointmentsNav.addEventListener('click', (e) => {
    e.preventDefault();
    showAppointments();
  });

  // Add click event for header appointments link
  headerAppointmentsNav.addEventListener('click', (e) => {
    e.preventDefault();
    showAppointments();
  });

  // Update the existing dashboard link click handler
  const dashboardNav = document.querySelector('a[href="index.html"]');
  dashboardNav.addEventListener('click', (e) => {
    e.preventDefault();
    mainDashboard.style.display = 'block';
    searchDoctorSection.style.display = 'none';
    appointmentsDashboard.style.display = 'none';

    // Update active states
    document.querySelectorAll('.sidebar li').forEach(item => {
      item.classList.remove('active');
    });
    dashboardNav.parentElement.classList.add('active');

    document.querySelectorAll('.top-nav li').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelector('.top-nav li:first-child').classList.add('active');
  });
});

// Update the existing search doctor navigation handler
const searchDoctorNav = document.querySelector('a[href="#search"]');
searchDoctorNav.addEventListener('click', (e) => {
  e.preventDefault();
  mainDashboard.style.display = 'none';
  searchDoctorSection.style.display = 'block';
  appointmentsDashboard.style.display = 'none';

  // Update active states
  document.querySelectorAll('.sidebar li').forEach(item => {
    item.classList.remove('active');
  });
  searchDoctorNav.parentElement.classList.add('active');
});
