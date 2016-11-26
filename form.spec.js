'use strict';

describe('Materialize - Forms', () => {
    const birthDateField = element(by.id('birthdate'));
    const birthDatePickerFrame = element(by.css('#birthdate_root .picker__box'));
    const pickerTodayLink = element(by.css('.picker__today'));
    const pickerClearLink = element(by.css('.picker__clear'));
    const pickerCloseLink = element(by.css('.picker__close'));
    const pickerDaySelected = element(by.css('.picker__day--selected'));

    const months = {
        '0': 'January',
        '1': 'February',
        '2': 'March',
        '3': 'April',
        '4': 'May',
        '5': 'June',
        '6': 'July',
        '7': 'August',
        '8': 'September',
        '9': 'October',
        '10': 'November',
        '11': 'December'
    };

    beforeEach(() => {
        browser.get('');
        sleepThreeSeconds();
        birthDateField.click();
        sleepThreeSeconds();
    });

    it('date picker is opened', () => {
        expect(birthDatePickerFrame.isDisplayed()).toBe(true);
    });

    it('pick today date and close date picker', () => {
        pickerTodayLink.click();
        sleepThreeSeconds();

        expect(pickerDaySelected.isPresent()).toBe(true);

        pickerCloseLink.click();
        sleepThreeSeconds();

        expect(birthDatePickerFrame.isDisplayed()).toBe(false);
        expect(pickerDaySelected.isPresent()).toBe(true);
    });

    it('clear birthdate field right after picking today\'s date', () => {
        pickerTodayLink.click();
        sleepThreeSeconds();
        pickerClearLink.click();
        sleepThreeSeconds();

        expect(birthDatePickerFrame.isDisplayed()).toBe(false);
        expect(pickerDaySelected.isPresent()).not.toBe(true);
    });

    it('select some date in the future', () => {
        // In the below date, consider that January is equal to 0, February is 1, ..., December is 11
        const futureDate = '2033, 11, 25';
        const year = futureDate.substr(0, 4);
        const monthAsNumber = futureDate.substr(6, 2);
        const monthAsString = months[monthAsNumber];
        const day = futureDate.substr(10, 2);
        const dateNewFormat = day + ' ' + monthAsString + ', ' + year;

        browser.executeScript(setDate(futureDate));

        expect(pickerDaySelected.isPresent()).toBe(true);

        pickerCloseLink.click();
        sleepThreeSeconds();

        browser.executeScript(getDate()).then((date) => {
            expect(date).toEqual(dateNewFormat);
        });
    });

    it('select some date in the past', () => {
        // In the below date, consider that January is equal to 0, February is 1, ..., December is 11
        const pastDate = '1982, 3, 15';
        const year = pastDate.substr(0, 4);
        const monthAsNumber = pastDate.substr(6, 1);
        const monthAsString = months[monthAsNumber];
        const day = pastDate.substr(9, 2);
        const dateNewFormat = day + ' ' + monthAsString + ', ' + year;

        browser.executeScript(setDate(pastDate));

        expect(pickerDaySelected.isPresent()).toBe(true);

        pickerCloseLink.click();
        sleepThreeSeconds();

        browser.executeScript(getDate()).then((date) => {
            expect(date).toEqual(dateNewFormat);
        });
    });
});

function sleepThreeSeconds() {
    browser.sleep(3000);
}

function setDate(date) {
    const setDatescript = "var $input = $('.datepicker').pickadate();" +
        "var picker = $input.pickadate('picker');" +
        "return picker.set('select', [" + date +"]);";
    return setDatescript;
}

function getDate() {
    const getDatescript = "var $input = $('.datepicker').pickadate();" +
        "var picker = $input.pickadate('picker');" +
        "return picker.get();";
    return getDatescript;
}
