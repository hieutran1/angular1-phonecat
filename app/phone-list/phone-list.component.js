'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', '$analytics',
      function PhoneListController(Phone, $analytics) {
        $analytics.pageTrack('/phones');
        $analytics.eventTrack('eventName');
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
