'use client';
import { useState } from 'react';
import { Checkbox, TextInput, Slider } from '@mantine/core';
import Head from 'next/head';
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Link from 'next/link';


const SubmitPage = () => {
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [textBoxValue, setTextBoxValue] = useState('');
    const [sliderValue, setSliderValue] = useState(50);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async () => {
        console.log('Submit button clicked');

        const inputString = `${checkboxValue ? 'checked' : 'unchecked'}-${textBoxValue}-${sliderValue}`;

        try {
            const response = await fetch('https://videodubber.ai/testinput/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputString }),

            });

            console.log('Response:', response);
            console.log('Request Payload:', JSON.stringify({ inputString }));


            if (response.ok) {
                setShowPopup(true);
            } else {
                console.error('Error submitting data');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <MantineProvider>
            <div className="mt-12 flex flex-col items-center">
                <div className='w-2/5'>
                    <Checkbox
                        label="Checkbox"
                        checked={checkboxValue}
                        onChange={(event) => setCheckboxValue(event.target.checked)}
                        required
                    />

                    <TextInput
                        label="Text Box"
                        placeholder="Enter text"
                        value={textBoxValue}
                        onChange={(event) => setTextBoxValue(event.target.value)}
                        required
                    />

                    <Slider
                        label="Slider"
                        value={sliderValue}
                        onChange={(value) => setSliderValue(value)}
                        min={0}
                        max={100}
                    />

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded w-32 h-16 text-xl"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded w-32 h-16 text-xl ml-8"
                        onClick={handleSubmit}
                    >
                        <Link href="/">
                        Back
                        </Link>
                    </button>

                    {showPopup && (
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border p-8 shadow-md">
                            <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={closePopup}>
                                &times;
                            </span>
                            <p className="text-lg">API request successful!</p>
                        </div>
                    )}

                </div>
            </div>
        </MantineProvider>
    );
};

export default SubmitPage;
