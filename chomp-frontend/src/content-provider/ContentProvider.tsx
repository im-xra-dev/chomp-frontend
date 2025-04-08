import { Link } from 'react-router-dom';
import {SideBar} from '../side-bar/SideBar';

export function ContentProvider() {
    return (
        <div className="h-auto">
            <SideBar/>
            
            <div
                id="content-provider"
                className=" mr-1 w-100 h-100 z-1 bg-white fixed ml-auto"
            >
                <div className="flex">
                    <div>Left content</div>
                <div className="ml-auto">Right content</div>
                </div>
            </div>
        </div>
    );
}