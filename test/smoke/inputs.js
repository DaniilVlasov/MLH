const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-015 Gender (He)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender (She)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender (It)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-019 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-020 Create', function () {
            const label = $(sel.created).isDisplayed();
            expect(label).toEqual(true);
        });

    });

    // describe('Placeholders are correct', function (){
    //
    //     it('TC-014 Name is correct', function () {
    //         const text = $(sel.name).getAttribute('placeholder');
    //         expect(text).toEqual(exp.PlaceholderName);
    //     });
    //
    //     it('TC-015 Gender (He) is correct', function () {
    //         const text = $(sel.gender)[0].getText();
    //         expect(text).toEqual(exp.PlaceholderGender0);
    //     });
    //
    //     it('TC-016 Gender (She) is correct', function () {
    //         const text = $(sel.gender)[1].getText();
    //         expect(text).toEqual(exp.PlaceholderGender1);
    //     });
    //
    //     it('TC-017 Gender (It) is correct', function () {
    //         const text = $(sel.gender)[2].getText();
    //         expect(text).toEqual(exp.PlaceholderGender2);
    //     });
    //
    //     it('TC-018 Age is correct', function () {
    //         const text = $(sel.age).getAttribute('placeholder');
    //         expect(text).toEqual(exp.PlaceholderAge);
    //     });
    //
    //     it('TC-019 Story is correct', function () {
    //         const text = $(sel.name).getAttribute('placeholder');
    //         expect(text).toEqual(exp.PlaceholderName);
    //     });
    //
    //     it('TC-020 Create is correct', function () {
    //         const text = $(sel.name).getAttribute('placeholder');
    //         expect(text).toEqual(exp.PlaceholderName);
    //     });
    //
    // });
});
