import * as React from 'react';
import { Outlet } from 'react-router';

export function ContentFull() {
    return (
        <>
            <div
                data-testid="mcf"
                id="main-content-full"
                className="main-content h-50 bg-red"
            >
                <Outlet />
            </div>
        </>
    );
}
