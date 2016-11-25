'use strict';

describe('Materialize - Forms', () => {
    const birthDateField = element(by.id('birthdate'));
    const birthDatePickerFrame = element(by.css('#birthdate_root .picker__box'));
    const pickerTodayLink = element(by.css('.picker__today'));
    const pickerClearLink = element(by.css('.picker__clear'));
    const pickerCloseLink = element(by.css('.picker__close'));
    const pickerDaySelected = element(by.css('.picker__day--selected'));

    beforeEach(() => {
        browser.get('');
        sleepThreeSeconds();
        birthDateField.click();
        sleepThreeSeconds();
    });

    afterEach(() => {
        sleepThreeSeconds();
    });
    it('date picker is opened', () => {
        expect(birthDatePickerFrame.isDisplayed()).toBe(true);
    });

    it('pick today date and close date picker', () => {
        expect(birthDateField.getAttribute('aria-expanded')).toEqual('true');

        pickerTodayLink.click();
        sleepThreeSeconds();

        expect(pickerDaySelected.isPresent()).toBe(true);

        pickerCloseLink.click();
        sleepThreeSeconds();

        expect(birthDateField.getAttribute('aria-expanded')).toEqual('false');
        expect(pickerDaySelected.isPresent()).toBe(true);
    });

    it('clear birthdate field right after picking today\'s date', () => {
        pickerTodayLink.click();
        sleepThreeSeconds();
        pickerClearLink.click();
        sleepThreeSeconds();

        expect(birthDateField.getAttribute('aria-expanded')).toEqual('false');
        expect(pickerDaySelected.isPresent()).not.toBe(true);
        sleepOneSeconds();
    });
});

function sleepThreeSeconds() {
    browser.sleep(3000);
}
