import { useState } from 'react';
import Modal from './Modal';

function ProfileCard({ title, handle, image}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div 
                className="bg-pink-50 rounded-xl shadow-md p-4 m-4 w-64 text-center border border-pink-800 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={openModal}
            >
                <img src={image} alt="pda logo" className="w-42 h-42 object-contain mx-auto mb-4" />
                <hr className="border-black" />
                <div className="text-lg font-semibold text-gray-800">{title}</div>
                <div className="text-sm text-gray-500">{handle}</div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="text-center">
                    <img src={image} alt="pda logo" className="w-32 h-32 object-contain mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4">{handle}</p>
                    <div className="text-left space-y-2">
                        <p><span className="font-bold">Type:</span> Digital Assistant</p>
                        <p><span className="font-bold">Company:</span> {title === 'Alexa' ? 'Amazon' : title === 'Cortana' ? 'Microsoft' : 'Apple'}</p>
                        <p><span className="font-bold">Features:</span> Voice recognition, Smart home control, Music streaming</p>
                    </div>
                    <button 
                        onClick={closeModal}
                        className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default ProfileCard;