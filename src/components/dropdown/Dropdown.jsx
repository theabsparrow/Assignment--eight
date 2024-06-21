

const Dropdown = ({handleSort,sortValue}) => {
    return (
        <div >
            <select onChange={handleSort} value={sortValue} className="bg-[#23BE0A] outline-none px-4 py-3 text-white rounded-xl text-xl font-semibold border-none" name="" id="">
                <option value="sort by">sort by</option>
                <option value="rating">rating</option>
                <option value="year">number of pages</option>
                <option value="page"> publish year</option>
            </select>
        </div>
    );
};

export default Dropdown;