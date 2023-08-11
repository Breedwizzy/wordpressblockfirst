/*import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";*/





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


wp.blocks.registerBlockType('wizzycreat/custom-blockkkeyy', {
    title: 'Company Contact Information',
    icon: 'vault',
    category: 'design',
    attributes: {
        companyName: { type: 'string' },
        companyPhone: { type: 'string' }
    },

    edit: function (props) {
        return
    },

    save: function (props) {
        return null;
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