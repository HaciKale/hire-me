interface NameType {
    fullName: string;
    firstName: string;
    middleName?: string;
    lastName: string;
}
export interface CheckInType {
    childCheckinId: string;
    childId: string;
    institutionId: string;
    groupId: string;
    checkinTime: string;
    pickupTime: string;
    pickupRelationId?: string;
    goHomeWithChildId?: string;
    checkoutTime: string;
    checkinLoginId: string;
    checkoutLoginId: string;
    autoCheckedOut: boolean;
    deletedAt: null | string;
    hours: number;
    checkinStatements: null | string;
}
export interface ChildType {
    childId: string;
    institutionId: string;
    groupId: string;
    createdTime: string;
    name: NameType;
    image: {
        small: "https://img.famly.co/image/db86914a107bcd2bbd58f19f305bdfadfec68e6d413fd9a5f47256c50a6ee633/100x100/archive/2020/30/1/12/images/01eca1fa-a581-44b9-920c-7ce66a8b05aa.jpg?expires=2024-09-18T00%3A00%3A00%2B00%3A00&crop=face";
        large: "https://img.famly.co/image/db86914a107bcd2bbd58f19f305bdfadfec68e6d413fd9a5f47256c50a6ee633/500x500/archive/2020/30/1/12/images/01eca1fa-a581-44b9-920c-7ce66a8b05aa.jpg?expires=2024-09-18T00%3A00%3A00%2B00%3A00&crop=face";
        empty: false;
        colorCode: 88;
    };
    checkins: Array<CheckInType>;
    checkedIn: boolean;
    checkinTime: "2024-09-11T11:37:25+00:00";
    pickupTime: "2024-09-11T15:00:00+00:00";
}

export interface FetchApiResponse {
    children: Array<ChildType>;
}
