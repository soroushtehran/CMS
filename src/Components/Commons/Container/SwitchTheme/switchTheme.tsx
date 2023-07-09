import React, { useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs';
import { LuSunMoon } from 'react-icons/lu';

function SwitchTheme() {
    const [isDark, setIsDark] = useState<boolean>(false);

    return (
        <button onClick={(e) => setIsDark(!isDark)}>
            {isDark ?
                <BsFillMoonFill /> :
                <LuSunMoon />
            }
        </button>
    )
}

export default SwitchTheme;