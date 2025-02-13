const ProfileCard = ({ name, rollnumber, email, image }) => {
    return (
        <div className="max-w-xs bg-blue-500 text-white p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-sm uppercase tracking-widest font-semibold">{name}'s Profile  </h3>
            <div className="flex justify-center mt-4">
                <img
                    className="w-24 h-24 rounded-full border-4 border-white"
                    src={image || "https://via.placeholder.com/150"}
                    alt= {name}
                />
            </div>
            <h2 className="text-xl font-semibold mt-3">{name}</h2>
            <div className="mt-4">
                <p className="text-lg">{rollnumber}</p>
            </div>
            <div className="mt-2">
                <p className="text-lg break-words">{email}</p>
            </div>
        </div>
    );
};

export default ProfileCard;