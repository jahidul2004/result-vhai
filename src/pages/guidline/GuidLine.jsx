const GuidLine = () => {
    return (
        <div>
            <div className="p-6 bg-gray-100 text-gray-800 px-5 md:px-10 lg:px-20">
                <h1 className="text-2xl font-bold mb-4">
                    Individual's Results (Explained)
                </h1>
                <p className="mb-4">
                    Individual result in this app refers to all the semester
                    results of a single diploma/polytechnic student <br /> published by
                    the Bangladesh Technical Education Board (BTEB).
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Roll Number</h2>
                <p className="mb-4">
                    The roll number is the 6-digit number on your admit card or
                    registration card.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    The Exam Options
                </h2>
                <p className="mb-4">
                    The exam name option refers to the curriculum name of your
                    diploma or polytechnic exam under the Bangladesh <br /> Technical
                    Education Board (BTEB). By default "Diploma In Engineering"
                    is selected. <br /> So if your exam is different from the default,
                    make sure you select <br /> the right exam name before you hit the
                    "View Result" button.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    Available Exams Results
                </h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Diploma In Engineering</li>
                    <li>Diploma In Engineering (Army)</li>
                    <li>Diploma In Engineering (Naval)</li>
                    <li>Diploma In Tourism And Hospitality</li>
                    <li>Diploma In Textile Engineering</li>
                    <li>Diploma In Agriculture</li>
                    <li>Diploma In Fisheries</li>
                    <li>Diploma In Forestry</li>
                    <li>Diploma In Livestock</li>
                    <li>Diploma In Medical Technology</li>
                    <li>Certificate In Medical Ultrasound</li>
                    <li>Diploma In Commerce</li>
                    <li>Certificate In Marine Trade</li>
                    <li>Advanced Certificate Course</li>
                    <li>National Skill Standard Basic Certificate Course</li>
                    <li>HSC (Business Management)</li>
                    <li>HSC (Vocational)</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    Semester Results
                </h2>
                <p className="mb-4">
                    A single semester could contain multiple results. But each
                    result will have a publish date on top of it. And only the <br />
                    latest result is your final result for the semester.
                    Previous results are just history. <br /> So don’t get confused if
                    you had referred in previous results.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    Referred Subjects
                </h2>
                <p className="mb-4">
                    Every subject on the referred subject list contains the
                    subject code at the beginning, then the subject name, <br /> and at
                    last the failure type of the subject wrapping in brackets.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    GPA is not published (Explained)
                </h2>
                <p className="mb-4">
                    Let’s say someone has failed in a subject in the 6th
                    semester and passed the referred subject in the next
                    semester (7th). <br /> They will get the result of the current
                    semester (7th), but not the GPA of the previous semester
                    (6th), <br /> although they have passed in the 6th semester. In
                    that case, you can contact your institute for the GPA.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    Referred in the previous semester
                </h2>
                <p className="mb-4">
                    If someone is still unable to pass any subject of the
                    previous semester, they will not get the GPA of the current
                    semester. <br /> To get GPA in a semester, you can't have any
                    referred subject in any semester.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    Subjects yet to pass
                </h2>
                <p className="mb-4">
                    The subjects that are included in your latest result are yet
                    to pass. In this case, the red color subjects are
                    highlighted from their own semesters.
                </p>
            </div>
        </div>
    );
};

export default GuidLine;
