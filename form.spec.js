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
        sleepOneSeconds();
        birthDateField.click();
        sleepOneSeconds();
    });
    it('date picker is opened', () => {
        expect(birthDatePickerFrame.isDisplayed()).toBe(true);
        sleepOneSeconds();
    });

    it('pick today date and close date picker frame', () => {
        expect(birthDateField.getAttribute('aria-expanded')).toEqual('true');

        pickerTodayLink.click();
        sleepOneSeconds();

        expect(pickerDaySelected.isPresent()).toBe(true);

        pickerCloseLink.click();
        sleepOneSeconds();

        expect(birthDateField.getAttribute('aria-expanded')).toEqual('false');
        expect(pickerDaySelected.isPresent()).toBe(true);
        sleepOneSeconds();
    });

    it('clear birthdate field after picking today\'s date', () => {
        pickerTodayLink.click();
        sleepOneSeconds();
        pickerClearLink.click();
        sleepOneSeconds();

        expect(birthDateField.getAttribute('aria-expanded')).toEqual('false');
        expect(pickerDaySelected.isPresent()).not.toBe(true);
        sleepOneSeconds();
    });
});

function sleepOneSeconds() {
    browser.sleep(1000);
}
