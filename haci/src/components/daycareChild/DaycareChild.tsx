import { ChildType } from "../../backend";
import { useCheckIn, useCheckOut } from "../../global";
import "./DaycareChild.scss";

export const DaycareChild = ({ child }: { child: ChildType }) => {
    const { fn: handleCheckIn } = useCheckIn(child.childId);

    const { fn: handleCheckOut } = useCheckOut(child.childId);
    return (
        <div className='child' key={child.childId}>
            <div className='name'>{child.name.fullName}</div>
            <div className='actions'>
                <button onClick={handleCheckIn}>check in</button>
                <button onClick={handleCheckOut}>check out</button>
            </div>
        </div>
    );
};
