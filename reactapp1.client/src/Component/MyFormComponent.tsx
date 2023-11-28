
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const MyFormComponent = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
           
            const response = await fetch('http://localhost:7166', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                
                console.log('Data successfully sent to the backend:', data);
            } else {
                
                console.error('Failed to send data to the backend');
            }
        } catch (error) {
            console.error('Error during API call:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Text Field:
                <Controller
                    name="textField"
                    control={control}
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => <input {...field} />}
                />
                {errors.textField && <span>{errors.textField.message}</span>}
            </label>

            <label>
                Number Field:
                <Controller
                    name="numberField"
                    control={control}
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => <input type="number" {...field} />}
                />
                {errors.numberField && <span>{errors.numberField.message}</span>}
            </label>

            <label>
                Select:
                <Controller
                    name="selectField"
                    control={control}
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                        <select {...field}>
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                    )}
                />
                {errors.selectField && <span>{errors.selectField.message}</span>}
            </label>

            <label>
                Multi-Select:
                <Controller
                    name="multiSelectField"
                    control={control}
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                        <select multiple {...field}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    )}
                />
                {errors.multiSelectField && <span>{errors.multiSelectField.message}</span>}
            </label>

            <label>
                Radio Field:
                <Controller
                    name="radioField"
                    control={control}
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                        <>
                            <input type="radio" {...field} value="option1" /> Option 1
                            <input type="radio" {...field} value="option2" /> Option 2
                        </>
                    )}
                />
                {errors.radioField && <span>{errors.radioField.message}</span>}
            </label>

            <label>
                Text Area:
                <Controller
                    name="textAreaField"
                    control={control}
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => <textarea {...field} />}
                />
                {errors.textAreaField && <span>{errors.textAreaField.message}</span>}
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default MyFormComponent;
