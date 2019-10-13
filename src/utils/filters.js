import Vue from 'vue';
import moment from "moment";

Vue.filter('humanDate', function (value) {
    if(! value) return '';

    return moment(value).format('MMMM Do YYYY')

});