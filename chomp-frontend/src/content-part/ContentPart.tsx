import * as React from 'react';
import { Outlet } from 'react-router';

export function ContentPart() {
    return (
        <>
            <div
                data-testid="mcp"
                id="main-content-mid"
                className="main-content"
            >
                <Outlet />
            </div>
        </>
    );
}
