/**
 * This file was generated from DateTimeConverter.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";

export interface DateTimeConverterContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dateAttr: EditableValue<Date>;
    timezone: DynamicValue<string>;
}

export interface DateTimeConverterPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dateAttr: string;
    timezone: string;
}
