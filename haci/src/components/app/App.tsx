import { useEffect } from "react";
import "./App.scss";
import { useFetchChildren } from "../../global";
import { DaycareChild } from "../daycareChild";

export function App() {
    const { fn: getChildren, data, error, loading } = useFetchChildren();

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
            {data?.children.map((child) => (
                <DaycareChild key={child.childId} child={child} />
            ))}
        </div>
    );
}
