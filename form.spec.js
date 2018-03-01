'use strict';

describe('Materialize - Forms', () => {
    const birthDateField = element(by.id('birthdate'));
    const datePickerBox = element(by.css('.picker__box'));
    const pickerTodayLink = element(by.css('.picker__today'));
    const pickerClearLink = element(by.css('.picker__clear'));
    const pickerCloseLink = element(by.css('.picker__close'));
    const pickerDaySelected = element(by.css('.picker__day--selected'));

    const months = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    beforeEach(() => {
        browser.get('');
        sleepOneSecond();
        birthDateField.click();
        sleepOneSecond();
    });

    it('open date picker', () => {
        expect(datePickerBox.isDisplayed()).toBe(true);
    });

    it('pick today\'s date and close date picker', () => {
        pickerTodayLink.click();
        sleepOneSecond();

        expect(pickerDaySelected.isPresent()).toBe(true);

        pickerCloseLink.click();
        sleepOneSecond();

        expect(pickerDaySelected.isPresent()).toBe(true);
        expect(datePickerBox.isDisplayed()).toBe(false);
    });

    it('clear birthdate field right after picking today\'s date', () => {
        pickerTodayLink.click();
        sleepOneSecond();
        pickerClearLink.click();
        sleepOneSecond();

        browser.executeScript(getDate()).then((date) => {
            expect(date).toEqual('');
        });
        expect(pickerDaySelected.isPresent()).not.toBe(true);
        browser.executeScript(getDate()).then((date) => {
            expect(date).toEqual('');
        });
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
        sleepOneSecond();

        expect(pickerDaySelected.isPresent()).toBe(true);

        pickerCloseLink.click();
        sleepOneSecond();

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
        sleepOneSecond();

        expect(pickerDaySelected.isPresent()).toBe(true);

        pickerCloseLink.click();
        sleepOneSecond();

        browser.executeScript(getDate()).then((date) => {
            expect(date).toEqual(dateNewFormat);
        });
    });
});

function sleepOneSecond() {
    browser.sleep(1000);
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
