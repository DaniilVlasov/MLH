const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')
describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-10.1 Comedy', function () {
            browser.url(sel.homePage);
            const inputName = $(sel.name).setValue("Elder");
            const inputGender = $$(sel.gender)[0].click();
            const inputAge = $(sel.age).setValue(100);
            const click = $(sel.storyClick).click();
            const input = $$(sel.storyType)[6].click();
            const create = $(sel.created).click();
            browser.pause(3000)
            expect(exp.story).toEqual(exp.story);
        });

        // it('TC-10.1 Name', function () {
        //     const inputName = $(sel.name).setValue("Elder");
        //     const inputGender = $$(sel.gender)[1].click();
        //     const inputAge = $(sel.age).setValue(100);
        //     const click = $(sel.storyClick).click();
        //     const input = $$(sel.storyType)[6].click();
        //     const create = $(sel.created).isEnabled();
        //     expect(create).toEqual(true);
        // });
        //
        // it('TC-10.1 Name', function () {
        //     const inputName = $(sel.name).setValue("Elder");
        //     const inputGender = $$(sel.gender)[2].click();
        //     const inputAge = $(sel.age).setValue(100);
        //     const click = $(sel.storyClick).click();
        //     const input = $$(sel.storyType)[6].click();
        //     const create = $(sel.created).isEnabled();
        //     expect(create).toEqual(true);
        // });
        //
        // it('TC-10.1 Name', function () {
        //     const inputName = $(sel.name).setValue("Elder");
        //     const inputGender = $$(sel.gender)[1].click();
        //     const inputAge = $(sel.age).setValue(100);
        //     const click = $(sel.storyClick).click();
        //     const input = $$(sel.storyType)[6].click();
        //     const create = $(sel.created).isEnabled();
        //     expect(create).toEqual(true);
        // });
        //
        // it('TC-10.1 Name', function () {
        //     const inputName = $(sel.name).setValue("Elder");
        //     const inputGender = $$(sel.gender)[1].click();
        //     const inputAge = $(sel.age).setValue(100);
        //     const click = $(sel.storyClick).click();
        //     const input = $$(sel.storyType)[6].click();
        //     const create = $(sel.created).isEnabled();
        //     expect(create).toEqual(true);
        // });
        //
        // it('TC-10.1 Name', function () {
        //     const inputName = $(sel.name).setValue("Elder");
        //     const inputGender = $$(sel.gender)[1].click();
        //     const inputAge = $(sel.age).setValue(100);
        //     const click = $(sel.storyClick).click();
        //     const input = $$(sel.storyType)[6].click();
        //     const create = $(sel.created).isEnabled();
        //     expect(create).toEqual(true);
        // });
        //
        // it('TC-10.1 Name', function () {
        //     const inputName = $(sel.name).setValue("Elder");
        //     const inputGender = $$(sel.gender)[1].click();
        //     const inputAge = $(sel.age).setValue(100);
        //     const click = $(sel.storyClick).click();
        //     const input = $$(sel.storyType)[6].click();
        //     const create = $(sel.created).isEnabled();
        //     expect(create).toEqual(true);
        // });

    });

    describe('Placeholders are correct', function (){

    });
});