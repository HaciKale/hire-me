import { useEffect, useState } from "react";
import "./App.scss";
import { useFetchChildren } from "../../global";
import { DaycareChild } from "../daycareChild";

export function App() {
    const { fn: getChildren, data, error, loading } = useFetchChildren();

    const [offset, setOffset] = useState(1);
    const limit = 5;

    const currentPageNumber = offset * limit - limit;
    const paginatedChildren = data?.children.slice(currentPageNumber, currentPageNumber + limit);

    const totalItems = data?.children.length;
    const hasMorePages = totalItems ? currentPageNumber + limit < totalItems : false;
    const hasPreviousPages = offset > 1;

    const handlePrev = () => {
        setOffset(offset - 1);
    };
    const handleNext = () => {
        setOffset(offset + 1);
    };
    useEffect(() => {
        getChildren();
    }, [getChildren]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            {paginatedChildren?.map((child) => (
                <DaycareChild key={child.childId} child={child} />
            ))}
            <div className='actions'>
                <button disabled={!hasPreviousPages} onClick={handlePrev}>
                    Previous
                </button>
                <button disabled={!hasMorePages} onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}
