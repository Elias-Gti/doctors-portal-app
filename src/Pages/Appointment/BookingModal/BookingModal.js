import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectDate, 'PP');

    const handelBookingSubmit = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const date = from.date.value;
        const solot = from.solot.value;
        const phone = from.phone.value;
        const email = from.email.value;





        const booking = {
            treatment: treatment.name,
            date,
            name,
            email,
            phone,
            bookingtime: solot

        }
        console.log(booking);
        setTreatment(null)

    }



    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handelBookingSubmit}>

                        <div className="mb-6">
                            <label for="Selected Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected Date</label>
                            <input type="text" id="date" name='date' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light disabled:opacity-75" value={date} disabled />
                        </div>
                        <div className='mb-6'>
                            <label for="Selected Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected time</label>
                            <select name='solot' className="select select-accent shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">

                                {
                                    slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                                }

                            </select>
                        </div>

                        <div className="mb-6">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" id="name" name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                            <input type="phone" name='phone' id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>

                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>

                        <button type="submit" className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default BookingModal;