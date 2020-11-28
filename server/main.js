import { Meteor } from 'meteor/meteor';
import fs from 'fs';
import {Session} from 'meteor/session';

Meteor.startup(() => {
    var raw_data = fs.readFileSync('IPIP120.json');
    var survey_json = JSON.parse( raw_data );
    Session.set('doc', survey_json );
});
