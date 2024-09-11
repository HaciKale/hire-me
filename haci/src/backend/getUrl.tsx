const apiConfig = {
    accessToken: "1127a03c-ed76-41d5-9058-f9ca105c41cf",
    groupId: "86413ecf-01a1-44da-ba73-1aeda212a196",
    institutionId: "dc4bd858-9e9c-4df7-9386-0d91e42280eb",
};

function buildUrl(baseUrl: string, params: Record<string, string>): string {
    return `${baseUrl}?${new URLSearchParams(params).toString()}`;
}

//this retrieves all children
export const getFetchDataUrl = () => {
    const baseUrl = "https://app.famly.co/api/daycare/tablet/group";
    const args = {
        accessToken: apiConfig.accessToken,
        groupId: apiConfig.groupId,
        institutionId: apiConfig.institutionId,
    };
    return buildUrl(baseUrl, args);
};

function formatNumber(num: number) {
    return num.toString().padStart(2, "0");
}
function getTimeHHMM() {
    const date = new Date();
    const hour = date.getHours();
    const formatHour = formatNumber(hour);
    const minutes = date.getMinutes();
    const formatMinutes = formatNumber(minutes);
    return `${formatHour}:${formatMinutes}`;
}

export const getCheckinUrl = (childId: string) => {
    const baseUrl = `https://app.famly.co/api/v2/children/${childId}/checkins`;

    const args = {
        accessToken: apiConfig.accessToken,
        pickupTime: getTimeHHMM(),
    };
    return `${baseUrl}?${new URLSearchParams(args).toString()}`;
};

export const getCheckoutUrl = (childId: string) => {
    const baseUrl = `https://app.famly.co/api/v2/children/${childId}/checkout`;
    const args = { accessToken: apiConfig.accessToken };

    return `${baseUrl}?${new URLSearchParams(args).toString()}`;
};
