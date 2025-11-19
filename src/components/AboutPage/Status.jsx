import React from "react";

const STATUS_COLORS = {
    "Ready to Work": "text-green-400",
    "Working": "text-blue-500",
    "On Internship": "text-purple-500",
    "Unavailable": "text-red-500",
};

const Status = ({ status = "Ready to Work" }) => {
    const dotColor = STATUS_COLORS[status] || "text-gray-500";

    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium">
            {/* status dot */}
            <span className={`w-3 h-3 rounded-full ${dotColor} bg-current`} />

            {status}
        </div>
    );
};

export default Status;
