const { registerBlockType } = wp.blocks;
const { useState, useEffect } = wp.element;

wp.blocks.registerBlockType('wizzycreat/custom-blockkkeyy', {
    title: 'Custom Greeting Block',
    icon: 'vault',
    category: 'design',

    attributes: {
        greeting: {
            type: 'string',
        },
    },

    edit: function (props) {
        console.log('Edit function called');

        const { setAttributes } = props;
        const [apiData, setApiData] = useState({ greeting: '' });

        useEffect(() => {
            // Fetch data from the API when the block is mounted
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then(data => {
                    // Update the state with the API data
                    setApiData({ greeting: data.body });
                    // Save the API data to the block attributes
                    setAttributes({ greeting: data.body });
                })
                .catch(error => console.error(error));
        }, []);

        // Render the block with a placeholder
        return wp.element.createElement('div', null,
            wp.element.createElement('h3', null, apiData.greeting)
        );
    },

    save: function (props) {
        const { greeting } = props.attributes;

        // Log the greeting for debugging
        console.log('Greeting Attribute:', greeting);

        // Ensure that the greeting attribute has a value
        if (greeting) {
            return wp.element.createElement('div', null,
                wp.element.createElement('h3', null, greeting)
            );
        } else {
            // Provide a default content in case greeting is empty
            return wp.element.createElement('div', null, 'No greeting available');
        }
    },
});













/*
This ccode is still correct with user input
const { registerBlockType } = wp.blocks;
const { useState, useEffect } = wp.element;

wp.blocks.registerBlockType('wizzycreat/custom-blockkkeyy', {
    title: 'Custom Greeting Block',
    icon: 'vault',
    category: 'design',

    attributes: {
        greeting: {
            type: 'string',
        },
    },

    edit: function (props) {
        function updateGreeting(event) {
            props.setAttributes({ greeting: event.target.value });
        }

        useEffect(() => {
            // Fetch data when the component mounts
            fetch('http://localhost:8000/core/homepage/')
                .then(response => response.json())
                .then(data => {
                    props.setAttributes({
                        greeting: data.greeting,
                    });
                })
                .catch(error => console.error(error));
        }, []); // The empty dependency array ensures this effect runs only once

        // Render the block with an input field
        return wp.element.createElement('div', null,
            wp.element.createElement('label', null, 'Greeting'),
            wp.element.createElement('input', {
                type: 'text',
                value: props.attributes.greeting,
                placeholder: 'Greeting',
                onChange: updateGreeting
            })
        );
    },

    save: function (props) {
        return wp.element.createElement('div', null,
            wp.element.createElement('h3', null, props.attributes.greeting)
        );
    },
});





/*
Second Best

wp.blocks.registerBlockType('wizzycreat/custom-blockkkeyy', {
    title: 'Custom Greeting Block',
    icon: 'vault',
    category: 'design',

    attributes: {
        greeting: {
            type: 'string',
        },
    },

    edit: function (props) {

        function updateFirstName(event) { props.setAttributes({ greeting: event.target.value }) }
        return React.createElement('div', null,
            React.createElement('label', null, 'firstName'),
            React.createElement('input', {
                type: 'text',
                value: props.attributes.greeting,
                placeholder: 'firstName',
                onChange: updateFirstName
            })
        )
    },

    save: function (props) {

        return React.createElement('div', null,
            React.createElement('h3', null, props.attributes.greeting));
    },
});






/*import { jsx as _jsx } from "react/jsx-runtime",
*/




/*
// block.js

(function (blocks, element, components, serverSideProps) {
    const { registerBlockType } = blocks;
    const { TextControl } = components;
    const { apiFetch } = serverSideProps;

    wp.blocks.registerBlockType('your-plugin/custom-greeting-block', {
        title: 'Custom Greeting Block',
        icon: 'vault',
        category: 'design',

        attributes: {
            name: {
                type: 'string',
                default: 'John', // Default name for the greeting
            },
            greeting: {
                type: 'string',
                default: '', // The custom greeting will be stored here after the API call
            },
        },

        edit: ({ attributes, setAttributes }) => {
            const { name } = attributes;

            const updateGreeting = async () => {
                // Make a request to the API with the user-inputted name
                try {
                    const response = await apiFetch({
                        path: '/your-plugin/v1/greeting', // Replace with your custom API endpoint
                        method: 'POST',
                        data: { name },
                    });

                    // Update the block's attributes with the custom greeting
                    setAttributes({ greeting: response.message });
                } catch (error) {
                    // Handle errors if the API call fails
                    console.error('API Error:', error);
                }
            };

            return (
                <div>
                    <TextControl
                        label="Enter your name"
                        value={name}
                        onChange={(value) => setAttributes({ name: value })}
                    />
                    <button onClick={updateGreeting}>Update Greeting</button>
                </div>
            );
        },

        save: ({ attributes }) => {
            const { greeting } = attributes;

            return <div>{greeting}</div>;
        },
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
    window.wp.serverSideProps
);
*/


/*

wp.blocks.registerBlockType('wizzzzzzycreat/reaete-custom-blockkKEY', {
    title: ' IBL Custom Greeting Block',
    icon: 'hammer',
    category: 'DESIGN',

    attributes: {
        name: {
            type: 'string',
            default: 'John', // Default name for the greeting
        },
        greeting: {
            type: 'string',
            default: '', // The custom greeting will be stored here after the API call
        },
    },

    edit: ({ attributes, setAttributes }) => {
        const { name } = attributes;

        const updateGreeting = async () => {
            // Make a request to the API with the user-inputted name
            try {
                const response = await apiFetch({
                    path: '/your-plugin/v1/greeting', // Replace with your custom API endpoint
                    method: 'POST',
                    data: { name },
                });

                // Update the block's attributes with the custom greeting
                setAttributes({ greeting: response.message });
            } catch (error) {
                // Handle errors if the API call fails
                console.error('API Error:', error);
            }
        };

        return (
            <div>
                <TextControl
                    label="Enter your name"
                    value={name}
                    onChange={(value) => setAttributes({ name: value })}
                />
                <button onClick={updateGreeting}>Update Greeting</button>
            </div>
        );
    },

    save: ({ attributes }) => {
        const { greeting } = attributes;

        return <div>{greeting}</div>;
    },
});
*/




/* The real one
const { registerBlockType } = wp.blocks;
const { TextControl, Button } = wp.components;
const { useState } = wp.element;

wp.blocks.registerBlockType('wizzycreat/custom-blockkkeyy', {
    title: 'Company Contact Information',
    icon: 'vault',
    category: 'design',
    attributes: {
        greeting: { type: 'string' },
    },
    edit: function (props) {
        const [greeting, setGreeting] = useState(props.attributes.greeting);

        const fetchGreeting = () => {
            fetch('http://localhost:8000/core/homepage/')
                .then(response => response.json())
                .then(data => setGreeting(data.greeting))
                .catch(error => console.error(error));
        };

        return wp.element.createElement(
            'div',
            null,
            wp.element.createElement(TextControl, {
                label: 'Custom Greeting',
                value: greeting,
                onChange: setGreeting,
            }),
            wp.element.createElement(Button, { onClick: fetchGreeting }, 'Fetch Greeting')
        );
    },

    save: function (props) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                props.attributes.greeting
            )
        );
    }

});




/*
// wizzycreat-custom-block.js
(function (blocks, element, components) {
    const { registerBlockType } = blocks;
    const { TextControl } = components;

    registerBlockType('wizzycreat/custom-blockkkeyy', {
        title: 'Company Contact Information',
        icon: 'vault',
        category: 'design',
        attributes: {
            companyName: { type: 'string' },
            companyPhone: { type: 'string' }
        },

        edit: function (props) {
            const { attributes, setAttributes } = props;
            const { companyName, companyPhone } = attributes;

            return (
                <div>
                    <label>Company Name</label>
                    <TextControl
                        value={companyName}
                        onChange={(value) => setAttributes({ companyName: value })}
                        placeholder="Company Name"
                    />

                    <label>Company Phone</label>
                    <TextControl
                        value={companyPhone}
                        onChange={(value) => setAttributes({ companyPhone: value })}
                        placeholder="Company Phone"
                    />
                </div>
            );
        },

        save: function (props) {
            const { attributes } = props;
            const { companyName, companyPhone } = attributes;

            return (
                <div>
                    <p>Company Name: {companyName}</p>
                    <p>Company Phone: {companyPhone}</p>
                </div>
            );
        }
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.components
);

*/