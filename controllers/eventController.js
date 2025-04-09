const axios = require('axios');
const Action = require('../models/action');
const dotenv = require('dotenv');
dotenv.config(); 

// Fetch events from the API
const fetchEvents = async () => {
  try {
    
    const passcode = process.env.PASSCODE 
    const response = await axios.get(`https://cms.klanlogistics.com:8443/api/wylon-apis/protected?passcode=${passcode}`)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

// Render the events page with events data
const renderEventsPage = async (req, res) => {
  const events = await fetchEvents();
  res.render('index', { events });
};

// Save action taken in the SQLite database
const saveAction = async (req, res) => {
  const { eventId, recordDate, actionDate, actionTaken, otherRemarks } = req.body;
  try {
    await Action.create({
      eventId,
      recordDate,
      actionDate,
      actionTaken,
      otherRemarks,
    });
    res.json({ success: true, message: 'Action saved to SQLite database' });
  } catch (error) {
    console.error('Error saving action to SQLite database:', error);
    res.json({ success: false, message: 'Failed to save action' });
  }
};

module.exports = { renderEventsPage, saveAction };