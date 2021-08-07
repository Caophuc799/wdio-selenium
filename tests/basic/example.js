
import { short, medium, long } from '../../config/timeouts'
import { mobile, tablet, desktop } from '../../config/devices'

describe('Firsts Steps with WebDriverIO', () => {
    it('Load example Website', () => {
        browser.url('http://www.example.com')
        browser.pause(short)
        expect(browser).toHaveUrl('http://www.example.com')
        expect(browser).toHaveTitle('Example Domain')
    })

    it('H1 should visitable', () => {
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBeVisible
    })

    it('p should visitable', () => {
        const p = $('p')
        expect(p).toBeVisible
    })

    it('Check link value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/reserved')
    })

    it('Get Element Text', () => {
        const text = $('h1').getText();
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example Domain')
    })

    it('Get Element Attribute', () => {
        const text = $('h1').getText();
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example Domain')
    })

    it('Assert atribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button')
        button.waitForExist()
    
        expect(button).toHaveAttrContaining('type', 'submit')
    })

    it('Assert value', () => {
        const button = $('#populate')
        button.waitForExist();
        expect(button).toHaveValue('Populate')
    })

    it('Save screenshot', () => {
        browser.saveScreenshot('your-name.png')
    })

    it('Change Browser Viewport', () => {
        browser.setWindowSize(1650, 1500)
        browser.pause(long)
    })

    it('Set mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(long)
    })

    it('Set tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(long)
    })

    it('Set desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(long)
    })
})