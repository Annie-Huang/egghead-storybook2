import React from 'react';
import {withInfo} from '@storybook/addon-info';

import {wInfo} from './utils'
import {storiesOf} from '@storybook/react';
import {Button} from './Button';


// info: text: only show test if it is place under the stories leve, not in the addWithJSX level.
storiesOf('Button', module)
    // .addDecorator(withInfo)
    .addParameters({
        info: {
            text: '☹️ no emojis',
            inline: true,       // This indicate whether to show the element, e.g. the  "yellow|green" button in the showInfo page.
            header: true,       // This decides whether to show the header, e.g. the h1 red header of "Button"
            styles: {
                header: {
                    h1: {
                        color: 'red', // and the headers of the sections are red.
                    },
                },
            }
        }
    })
    // .addDecorator(wInfo(`
    //     ☹️ no emojis
    // `))
    .addWithJSX(
        'with background',
        // withInfo(`description of the component`),
        () => (
            <Button bg="palegoldenrod">Hello world</Button>
        ),
        // { info: { inline: true, header: false } }
        // { info: 'This story has additional text added to the info!' }
        // {
        //     info: {
        //         text: '☹️ no emojis',
        //         inline: true,
        //         header: false,
        //         styles: {
        //             header: {
        //                 h1: {
        //                     color: 'red', // and the headers of the sections are red.
        //                 },
        //             },
        //         }
        //     }
        // }
    )
    .addWithJSX(
        'with background 1',
        // withInfo(`description of the component`),
        () => (
            <Button bg="red">Hello world</Button>
        ),
        // {
        //     info: {
        //         text: `
        //           description or documentation about my component, supports markdown
        //
        //           ~~~js
        //           <Button>Click Here</Button>
        //           ~~~
        //         `,
        //     },
        // }
    )
    .addWithJSX('with background 2', () => (
        <Button bg="green">Hello world</Button>
    ));
