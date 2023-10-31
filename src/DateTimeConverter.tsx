import { ReactElement, createElement, useMemo } from "react";

import { DateTimeConverterContainerProps } from "../typings/DateTimeConverterProps";

import classNames from "classnames";

export function DateTimeConverter(props: DateTimeConverterContainerProps): ReactElement {
    const value = useMemo(
        () => props.dateAttr.value?.toLocaleString("en-US", { timeZone: props.timezone.value }),
        [props.dateAttr, props.timezone]
    );

    return (
        <span className={classNames("mx-text", props.class)} style={props.style}>
            {value}
        </span>
    );
}
