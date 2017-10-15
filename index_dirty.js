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

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'The cat. Just like the missionary except that his body is farther up and to one side.',
                'The waterfall. Move to the edge of the bed and lie back with your head and shoulders on the floor as she straddles you.',
                'The one up. Kneel on the floor with her lying on the edge of the bed. Raise one of her legs and ask her to support her leg by wrapping her hands around her hamstring just below the knee.',
                'The cowgirl. Woman-on-top is one of the best sex positions because it allows for a variety of interesting sights and sensations, and offers her the psychological advantage of taking charge of pace and depth of penetration.',
                'The hot seat. Sit on the edge of the bed or on a chair with your feet on the floor. She turns away and backs up onto you, sitting between your legs. She can ride back and forth by pushing off the chair arms or pressing up with her feet.',
                'The spin cycle. This is a variation on the Hot Seat with her sitting in your lap, but this time planting yourselves on top of a washing machine set at the highest agitator cycle.',
                'Stairway to heaven. This is a variation on the Hot Seat with her sitting on top of you while you sit on one of the stairs of a staircase!',
                'The reverse cowgirl. Lie on your back with your legs outstretched. She kneels next to you, then turns and spreads her legs, straddling your hips and facing your feet. Kneeling, she lowers herself onto your penis and begins riding you.',
                'The pole position. Lie on your back and bend one of your legs, keeping the other outstretched. She straddles the raised leg with a thigh on either side and lowers herself onto your member so that her back is facing you. She should hold your knee and use it for support as she rocks up and down.',
                'The face off. Sit on a chair or the edge of the bed. She then faces you, wraps her arms around your back, climbs on top, and sits on your lap.',
                'The lazy man. Place pillows behind your back and sit on the bed with legs outstretched. She straddles your waist, feet on the bed. She then bends her knees to lower herself onto you.',
                'The David Copperfield. Place a pillow under her hips to tilt her pelvis up. Bend her knees so she can place her feet on your shoulder blades.',
                'The heir to the throne. Have your partner sit on a chair with her legs wide open. You take it from there.',
                'Closed for business. Some women find direct clitoral stimulation uncomfortable. Having her close her legs during oral sex may help. Place your hand above her public mound applying light pressure, then rub your firm tongue on the area around the clitoris to add indirect stimulation.',
                'The pretzel. Kneel and straddle her left leg while she is lying on her left side. She will bend her right leg around the right side of your waist, which will give you access to enter her vagina.',
                'The gee whiz. She lies on her back. You kneel between her legs and raise them, resting her calves over your shoulders.',
                'Man\'s best friend, doggy style. This could be your next move after starting in The Flatiron sex position.',
                'The flatiron. She lies face down on the bed, knees slightly bent and hips slightly raised.',
                'The butter churner. Have your partner lie on her back with her legs raised over her head. This is not a plain Jane position!',
                'The ballet dancer. You stand facing one another. She raises one of her legs up and wraps it around your buttocks or thigh and pulls you into her with her leg.',
                'Stand and deliver. Stand at the edge of a bed or desk while she lies back and raises her legs to her chest. Her knees are bent as if she\'s doing a "bicycling" exercise. Grab her ankles and enter her.',
                'The iron chef. Another variation on The Ballet Dancer, in which she raises her legs up and wraps them around your butt or thighs. Your kitchen counter is the perfect height for this standing-to-seated appetizer.',
                'The standing wheelbarrow. You enter her as you would in standing, rear entry, but lift her up by the pelvis and have her grip your waist with her legs.',
                'The standing dragon. Stand and enter her from behind as she poses on all fours on the edge of the bed and arches her back to lift her buttocks.',
                'The restroom attendant. Slip into a bathroom and ask her to look into the mirror while you enter her from behind.',
                'The couch surfer. Ask her to bend her body over the arm of a couch as you enter her from behind.',
                'The quick fix. Ask her to bend at the waist and rest her hands on a piece of furniture, her knees or the floor for support.',
                'The quicker picker upper. Place a pillow under the small of her back or her buttocks to tilt her pelvis and change the angle of your penetration for different sensations.',
                'The missionary position. The most commonly used position in the world, the missionary is an especially intimate position allowing for face-to-face contact.',
                'The spoon. You both lie on your sides facing the same direction, you behind her.',
                'The spork. She lies on her back, and raises her right leg so you can position yourself between her legs at a 90-degree angle and enter.',
                'Gift wrapped. Both of you lie on your sides facing one another.',
                'The snow angel. This is challenging: She lies on her back while you straddle her facing away. She lifts her legs and wraps them around your back to elevate her pelvis so you can enter. She then grabs your butt to help you slide up and back.',
            ],
            SKILL_NAME: 'Kama Sutra',
            GET_FACT_MESSAGE: "Try this: ",
            HELP_MESSAGE: 'You can say suggest a position... What can I help you with?',
            HELP_REPROMPT: 'I can\'t work miracles, I can only suggest positions. Sorry.',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'The cat. Just like the missionary except that his body is farther up and to one side.',
                'The waterfall. Move to the edge of the bed and lie back with your head and shoulders on the floor as she straddles you.',
                'The one up. Kneel on the floor with her lying on the edge of the bed. Raise one of her legs and ask her to support her leg by wrapping her hands around her hamstring just below the knee.',
                'The cowgirl. Woman-on-top is one of the best sex positions because it allows for a variety of interesting sights and sensations, and offers her the psychological advantage of taking charge of pace and depth of penetration.',
                'The hot seat. Sit on the edge of the bed or on a chair with your feet on the floor. She turns away and backs up onto you, sitting between your legs. She can ride back and forth by pushing off the chair arms or pressing up with her feet.',
                'The spin cycle. This is a variation on the Hot Seat with her sitting in your lap, but this time planting yourselves on top of a washing machine set at the highest agitator cycle.',
                'Stairway to heaven. This is a variation on the Hot Seat with her sitting on top of you while you sit on one of the stairs of a staircase!',
                'The reverse cowgirl. Lie on your back with your legs outstretched. She kneels next to you, then turns and spreads her legs, straddling your hips and facing your feet. Kneeling, she lowers herself onto your penis and begins riding you.',
                'The pole position. Lie on your back and bend one of your legs, keeping the other outstretched. She straddles the raised leg with a thigh on either side and lowers herself onto your member so that her back is facing you. She should hold your knee and use it for support as she rocks up and down.',
                'The face off. Sit on a chair or the edge of the bed. She then faces you, wraps her arms around your back, climbs on top, and sits on your lap.',
                'The lazy man. Place pillows behind your back and sit on the bed with legs outstretched. She straddles your waist, feet on the bed. She then bends her knees to lower herself onto you.',
                'The David Copperfield. Place a pillow under her hips to tilt her pelvis up. Bend her knees so she can place her feet on your shoulder blades.',
                'The heir to the throne. Have your partner sit on a chair with her legs wide open. You take it from there.',
                'Closed for business. Some women find direct clitoral stimulation uncomfortable. Having her close her legs during oral sex may help. Place your hand above her public mound applying light pressure, then rub your firm tongue on the area around the clitoris to add indirect stimulation.',
                'The pretzel. Kneel and straddle her left leg while she is lying on her left side. She will bend her right leg around the right side of your waist, which will give you access to enter her vagina.',
                'The gee whiz. She lies on her back. You kneel between her legs and raise them, resting her calves over your shoulders.',
                'Man\'s best friend, doggy style. This could be your next move after starting in The Flatiron sex position.',
                'The flatiron. She lies face down on the bed, knees slightly bent and hips slightly raised.',
                'The butter churner. Have your partner lie on her back with her legs raised over her head. This is not a plain Jane position!',
                'The ballet dancer. You stand facing one another. She raises one of her legs up and wraps it around your buttocks or thigh and pulls you into her with her leg.',
                'Stand and deliver. Stand at the edge of a bed or desk while she lies back and raises her legs to her chest. Her knees are bent as if she\'s doing a "bicycling" exercise. Grab her ankles and enter her.',
                'The iron chef. Another variation on The Ballet Dancer, in which she raises her legs up and wraps them around your butt or thighs. Your kitchen counter is the perfect height for this standing-to-seated appetizer.',
                'The standing wheelbarrow. You enter her as you would in standing, rear entry, but lift her up by the pelvis and have her grip your waist with her legs.',
                'The standing dragon. Stand and enter her from behind as she poses on all fours on the edge of the bed and arches her back to lift her buttocks.',
                'The restroom attendant. Slip into a bathroom and ask her to look into the mirror while you enter her from behind.',
                'The couch surfer. Ask her to bend her body over the arm of a couch as you enter her from behind.',
                'The quick fix. Ask her to bend at the waist and rest her hands on a piece of furniture, her knees or the floor for support.',
                'The quicker picker upper. Place a pillow under the small of her back or her buttocks to tilt her pelvis and change the angle of your penetration for different sensations.',
                'The missionary position. The most commonly used position in the world, the missionary is an especially intimate position allowing for face-to-face contact.',
                'The spoon. You both lie on your sides facing the same direction, you behind her.',
                'The spork. She lies on her back, and raises her right leg so you can position yourself between her legs at a 90-degree angle and enter.',
                'Gift wrapped. Both of you lie on your sides facing one another.',
                'The snow angel. This is challenging: She lies on her back while you straddle her facing away. She lifts her legs and wraps them around your back to elevate her pelvis so you can enter. She then grabs your butt to help you slide up and back.',
            ],
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'The cat. Just like the missionary except that his body is farther up and to one side.',
                'The waterfall. Move to the edge of the bed and lie back with your head and shoulders on the floor as she straddles you.',
                'The one up. Kneel on the floor with her lying on the edge of the bed. Raise one of her legs and ask her to support her leg by wrapping her hands around her hamstring just below the knee.',
                'The cowgirl. Woman-on-top is one of the best sex positions because it allows for a variety of interesting sights and sensations, and offers her the psychological advantage of taking charge of pace and depth of penetration.',
                'The hot seat. Sit on the edge of the bed or on a chair with your feet on the floor. She turns away and backs up onto you, sitting between your legs. She can ride back and forth by pushing off the chair arms or pressing up with her feet.',
                'The spin cycle. This is a variation on the Hot Seat with her sitting in your lap, but this time planting yourselves on top of a washing machine set at the highest agitator cycle.',
                'Stairway to heaven. This is a variation on the Hot Seat with her sitting on top of you while you sit on one of the stairs of a staircase!',
                'The reverse cowgirl. Lie on your back with your legs outstretched. She kneels next to you, then turns and spreads her legs, straddling your hips and facing your feet. Kneeling, she lowers herself onto your penis and begins riding you.',
                'The pole position. Lie on your back and bend one of your legs, keeping the other outstretched. She straddles the raised leg with a thigh on either side and lowers herself onto your member so that her back is facing you. She should hold your knee and use it for support as she rocks up and down.',
                'The face off. Sit on a chair or the edge of the bed. She then faces you, wraps her arms around your back, climbs on top, and sits on your lap.',
                'The lazy man. Place pillows behind your back and sit on the bed with legs outstretched. She straddles your waist, feet on the bed. She then bends her knees to lower herself onto you.',
                'The David Copperfield. Place a pillow under her hips to tilt her pelvis up. Bend her knees so she can place her feet on your shoulder blades.',
                'The heir to the throne. Have your partner sit on a chair with her legs wide open. You take it from there.',
                'Closed for business. Some women find direct clitoral stimulation uncomfortable. Having her close her legs during oral sex may help. Place your hand above her public mound applying light pressure, then rub your firm tongue on the area around the clitoris to add indirect stimulation.',
                'The pretzel. Kneel and straddle her left leg while she is lying on her left side. She will bend her right leg around the right side of your waist, which will give you access to enter her vagina.',
                'The gee whiz. She lies on her back. You kneel between her legs and raise them, resting her calves over your shoulders.',
                'Man\'s best friend, doggy style. This could be your next move after starting in The Flatiron sex position.',
                'The flatiron. She lies face down on the bed, knees slightly bent and hips slightly raised.',
                'The butter churner. Have your partner lie on her back with her legs raised over her head. This is not a plain Jane position!',
                'The ballet dancer. You stand facing one another. She raises one of her legs up and wraps it around your buttocks or thigh and pulls you into her with her leg.',
                'Stand and deliver. Stand at the edge of a bed or desk while she lies back and raises her legs to her chest. Her knees are bent as if she\'s doing a "bicycling" exercise. Grab her ankles and enter her.',
                'The iron chef. Another variation on The Ballet Dancer, in which she raises her legs up and wraps them around your butt or thighs. Your kitchen counter is the perfect height for this standing-to-seated appetizer.',
                'The standing wheelbarrow. You enter her as you would in standing, rear entry, but lift her up by the pelvis and have her grip your waist with her legs.',
                'The standing dragon. Stand and enter her from behind as she poses on all fours on the edge of the bed and arches her back to lift her buttocks.',
                'The restroom attendant. Slip into a bathroom and ask her to look into the mirror while you enter her from behind.',
                'The couch surfer. Ask her to bend her body over the arm of a couch as you enter her from behind.',
                'The quick fix. Ask her to bend at the waist and rest her hands on a piece of furniture, her knees or the floor for support.',
                'The quicker picker upper. Place a pillow under the small of her back or her buttocks to tilt her pelvis and change the angle of your penetration for different sensations.',
                'The missionary position. The most commonly used position in the world, the missionary is an especially intimate position allowing for face-to-face contact.',
                'The spoon. You both lie on your sides facing the same direction, you behind her.',
                'The spork. She lies on her back, and raises her right leg so you can position yourself between her legs at a 90-degree angle and enter.',
                'Gift wrapped. Both of you lie on your sides facing one another.',
                'The snow angel. This is challenging: She lies on her back while you straddle her facing away. She lifts her legs and wraps them around your back to elevate her pelvis so you can enter. She then grabs your butt to help you slide up and back.',
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
