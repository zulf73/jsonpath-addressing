import {Session} from 'meteor/session';
import {Template} from 'meteor/templating';
import './survey_entry.html'
import jsp from 'JSPath';

Template.survey_entry.events({
    // on any change
    // do the following
    var doc = Session.get('doc') //assume JSON
    doc = set_json( doc, {{source}}, {{answer}} );
    Session.set('doc', doc);
    
});
