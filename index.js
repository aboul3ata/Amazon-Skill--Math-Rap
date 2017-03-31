

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {

    'en-US': {
        translation: {
            AskHer: [
                'You re beautiful, and he is funny let him take you out honey',
                'My owner is sweet and charming, go out with him darling',
                'He is cute funny and smart, why not go on to play darts?',
                'Roses are red, Alexa is blue, this guy kind of likes you',
                'He s apparently shy, but if you say no he will cry',
                'Its true its true all he wants is you',
                'This is so funny, I can not believe he just asked me that honey',
                'I am sick of his commands please go out with him or I ll be mad',
            ],
            SKILL_NAME: 'Pick up that girl',
            GET_RESPONE_MESSAGE: "Hey gorgeous girl ",
            HELP_MESSAGE: 'You can say how do i get a date with this girl or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },

};

const handlers = {
    'LaunchRequest': function () {
        this.emit('thefunc');
    },
    'AskHerOutIntent': function () {
        this.emit('thefunc');
    },
    'thefunc': function () {

        // Use this.t() to get corresponding language data
        const Arr = this.t('AskHer');
        const ArrIndex = Math.floor(Math.random() * Arr.length);
        const randomsentence = Arr[ArrIndex];

        // Create speech output
        const speechOutput = this.t('GET_RESPONE_MESSAGE') +randomsentence ;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'),randomsentence );
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
