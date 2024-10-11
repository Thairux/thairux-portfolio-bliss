import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const mutation = useMutation<void, Error, ContactFormData>({
    mutationFn: (data: ContactFormData) =>
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: () => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    },
    onError: () => {
      alert('An error occurred. Please try again.');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Contact Me</h1>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            {mutation.isPending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  // Add prop types if needed
};

export default Contact;