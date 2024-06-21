/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getBooks } from "../layout/utilities";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToRead = () => {

    const [readTheBooks, setReadTheBooks] = useState([]);

    useEffect(() => {
        const readBooksFromLocalStorage = getBooks();
        setReadTheBooks(readBooksFromLocalStorage);
    }, [])
    // console.log(readTheBooks)
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
                ${x + width / 2}, ${y}
                C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
                Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (



        <div className="px-1 lg:px-[130px] mt-[120px] lg:mt-8 ">
            

            <BarChart
                width={1200}
                height={550}
                data={readTheBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readTheBooks.map((entry, index) => (
                        <Cell key={index} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;