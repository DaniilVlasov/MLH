const sel = require('../../data/selectors.json')

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Elder");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(100);
            const click = $(sel.storyClick).click();
            const input = $$(sel.storyType)[6].click();
            const create = $(sel.created).isEnabled();
            expect(create).toEqual(true);
        });

        // it('TC-022 Gender He', function () {
        //     const gender = $$(sel.gender)[0].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-023 Gender She', function () {
        //     const gender = $$(sel.gender)[1].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-024 Gender It', function () {
        //     const gender = $$(sel.gender)[2].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-025 Age', function () {
        //     const label = $(sel.age).isDisplayed();
        //     expect(label).toEqual(true);
        // });
        //
        // it('TC-026 Story', function () {
        //     const label = $(sel.story).isDisplayed();
        //     expect(label).toEqual(true);
        // });
        //
        // it('TC-027 Create', function () {
        //     const label = $(sel.created).isDisplayed();
        //     expect(label).toEqual(true);
        // });

    });
});