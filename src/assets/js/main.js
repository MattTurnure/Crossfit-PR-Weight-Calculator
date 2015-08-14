(function (doc) {
    'use strict';

    var prForm  = doc.getElementById('pr-form'),
        prInput = doc.getElementById('pr'),
        results = doc.getElementById('results'),
        html    = doc.createDocumentFragment();

    console.log('Get it.');

    function getPR(e) {
        var list = document.createElement('ul');
        e.preventDefault();

        if ( isNumber(+prInput.value) ) {
            makeList();
        } else {
            console.log('You must enter a number');
        }
    }

    function isNumber(num) {
        return typeof num === 'number' && !isNaN(num);
    }

    function makeList() {
        var percent = 100,
            li      = doc.createElement('li'),
            item;

        li.className = 'list-group-item';
        results.innerHTML = '';

        while (percent--) {
            if (percent % 10 === 0 && percent !== 0) {
                item = li.cloneNode(true);
                item.innerHTML = makePercentageHTML(percent, +prInput.value);
                html.appendChild(item);
            }
        }

        results.appendChild(html);
    }

    function makePercentageHTML(percent, val) {
        return '<span class="percent-value text-primary">' + convert(percent, val).toFixed() + '</span><span class="percent-label pull-right text-muted">' + percent + '%</span>';
    }

    function convert(percentage, val) {
        return (val * percentage * 1000000) / 100000000;
    }

    prForm.addEventListener('submit', getPR, false);
}(document));