import React from 'react';
import { sidebarData } from '../index';
const MyComponent = (props) => {
    const { width, height, fill, icon_name, className } = props;
    return (
        <span className={className}>
            {
                sidebarData.map((icon, key) => {
                    return (
                        <>
                            {
                                icon.icon_name === icon_name ?
                                    <svg key={key} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className={icon_name} width={width} height={height} fill={fill} viewBox="0 0 50 50">
                                        {icon.icon_svg}
                                    </svg> : ''
                            }
                        </>
                    )
                })
            }
        </span>
    );
}
export default MyComponent;