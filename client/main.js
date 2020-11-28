import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import {raw_data} from '/imports/api/IPIP120.js';
Session.set('doc', raw_data );
import '/imports/ui/body';
