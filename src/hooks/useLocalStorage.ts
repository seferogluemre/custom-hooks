import { useEffect, useState } from "react";

function useLocalStorage(lsKey: string) {
    const [state, setState] = useState(() => {
        return localStorage.getItem(lsKey) ?? ""
    });

    useEffect(() => {
        localStorage.setItem(lsKey, state);
    }, [state])

    return [state, setState] as const;
}

export default useLocalStorage;