/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.631531db-10ee-4293-a994-d9d79379b73d';

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'Kiss your partner all over, with an ice cube in your mouth.',
                'Nibble your partner\'s ear.',
                'French kiss.',
                'Caress your partner\'s chest.',
                'Caress your partner\'s thighs.',
                'Softly kiss your partner\'s neck.',
                'Tenderly nibble your partner\'s neck.',
                'Bite your partner\'s lips.',
                'Run your fingers through your partner\'s hair.',
                'Massage your partner\'s shoulders.',
                'Run your fingertips across your partner\'s chest.',
                'Rub your partner\'s back.',
                'Run your fingertips down your partner\'s thighs.',
                'Hold your partner\'s head against your chest.',
                'Caress your parter\'s tummy.',
                'Hold your partner as tight as you can!',
                'Massage your partner\'s head.',
                'Kiss your parnter deeply.',
                'Massage your partner\'s back.',
                'Kiss your partner all over!',
                'Tell your partner one thing you love about them.',
                'Give your partner a foot rub.',
                'Tenderly kiss your partner\'s cheek.',
                'Tenderly kiss your partner\'s lips.',
                'Caress your partner\'s face.'
            ],
            SKILL_NAME: 'Date Night',
            GET_FACT_MESSAGE: "Try this: ",
            HELP_MESSAGE: 'You can ask Date Night to suggest an activity... What can I help you with?',
            HELP_REPROMPT: 'You can say open Date Night',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'Kiss your partner all over, with an ice cube in your mouth.',
                'Nibble your partner\'s ear.',
                'French kiss.',
                'Caress your partner\'s chest.',
                'Caress your partner\'s thighs.',
                'Softly kiss your partner\'s neck.',
                'Tenderly nibble your partner\'s neck.',
                'Bite your partner\'s lips.',
                'Run your fingers through your partner\'s hair.',
                'Massage your partner\'s shoulders.',
                'Run your fingertips across your partner\'s chest.',
                'Rub your partner\'s back.',
                'Run your fingertips down your partner\'s thighs.',
                'Hold your partner\'s head against your chest.',
                'Caress your parter\'s tummy.',
                'Hold your partner as tight as you can!',
                'Massage your partner\'s head.',
                'Kiss your parnter deeply.',
                'Massage your partner\'s back.',
                'Kiss your partner all over!',
                'Tell your partner one thing you love about them.',
                'Give your partner a foot rub.',
                'Tenderly kiss your partner\'s cheek.',
                'Tenderly kiss your partner\'s lips.',
                'Caress your partner\'s face.'
            ],
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'Kiss your partner all over, with an ice cube in your mouth.',
                'Nibble your partner\'s ear.',
                'French kiss.',
                'Caress your partner\'s chest.',
                'Caress your partner\'s thighs.',
                'Softly kiss your partner\'s neck.',
                'Tenderly nibble your partner\'s neck.',
                'Bite your partner\'s lips.',
                'Run your fingers through your partner\'s hair.',
                'Massage your partner\'s shoulders.',
                'Run your fingertips across your partner\'s chest.',
                'Rub your partner\'s back.',
                'Run your fingertips down your partner\'s thighs.',
                'Hold your partner\'s head against your chest.',
                'Caress your parter\'s tummy.',
                'Hold your partner as tight as you can!',
                'Massage your partner\'s head.',
                'Kiss your parnter deeply.',
                'Massage your partner\'s back.',
                'Kiss your partner all over!',
                'Tell your partner one thing you love about them.',
                'Give your partner a foot rub.',
                'Tenderly kiss your partner\'s cheek.',
                'Tenderly kiss your partner\'s lips.',
                'Caress your partner\'s face.'
            ],
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('Suggest');
    },
    'GetNewFactIntent': function () {
        this.emit('Suggest');
    },
    'Suggest': function () {
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
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
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
