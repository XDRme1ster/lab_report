export interface LxStandard {
    id:                                  string;
    has_priority:                        string;
    barcode:                             string;
    number_circle:                       string;
    order_counter:                       string;
    order_period:                        string;
    order_key_display:                   string;
    external_reference:                  string;
    order_entry_reference:               string;
    registration_number:                 string;
    prescriber_id:                       string;
    approval_number:                     string;
    patient:                             Patient;
    his_patient_id:                      string;
    his_episode:                         string;
    is_emergency:                        string;
    is_pregnant:                         boolean;
    pregnancy_week:                      string;
    pregnancy_day:                       string;
    menstruation_cycle:                  string;
    is_complete:                         boolean;
    document_type:                       string;
    treatment_type:                      string;
    kvakz_code:                          string;
    first_requestor_registration_number: string;
    prescription_datetime:               string;
    receipt_datetime:                    string;
    report_datetime:                     string;
    collection_date:                     string;
    collection_hour:                     string;
    has_known_infection:                 boolean;
    invoice_variation:                   string;
    clinical_remark:                     string;
    report_text:                         string;
    has_additional_request:              boolean;
    destination:                         Destination;
    validation_datetime:                 string;
    customer:                            Customer;
    provider:                            Provider;
    debitor_list:                        DebitorList[];
    validator:                           Validator;
    container_list:                      ContainerList[];
    prescriber:                          Customer;
    site:                                Site;
    document_is_complete:                boolean;
    report_element_list:                 ReportElementList[];
    _meta_info:                          MetaInfo;
    set_pending_results:                 boolean;
    attachment_list:                     any[];
}

export interface MetaInfo {
    version:   string;
    doc_input: DocInput;
}

export interface DocInput {
    lorderid:        string;
    lorderdestid:    string;
    languagecode:    string;
    lorderdest_list: LorderdestList[];
    fromdatim:       string;
    doccode:         string;
    context:         string;
    medium:          string;
    preview:         string;
    dockey:          string;
}

export interface LorderdestList {
    lorderid:     string;
    lorderdestid: string;
}

export interface ContainerList {
    id:                       string;
    barcode:                  string;
    parent_id:                string;
    collection_date:          string;
    collection_hour:          string;
    location_additional_info: string;
    given_spectype_text:      string;
    location:                 string;
    creation_datetime:        string;
    spectype:                 Spectype;
}

export interface Spectype {
    id:               string;
    code:             string;
    label:            string;
    report_name_text: string;
}

export interface Customer {
    customer_code:       string;
    label:               string;
    title:               string;
    name:                string;
    firstname:           string;
    lastname:            string;
    title_short:         string;
    approval_number:     string;
    registration_number: string;
    is_inpatient?:       boolean;
    name_short:          string;
    phone:               string;
    fax:                 string;
    email:               string;
    main_address:        MainAddressClass;
    property_list?:      PropertyList[];
}

export interface MainAddressClass {
    street:   string;
    zip:      string;
    locality: string;
    state:    string;
    country:  string;
}

export interface PropertyList {
    code:  string;
    value: string;
}

export interface DebitorList {
    id:           string;
    is_invoiced:  boolean;
    debitor_type: string;
}

export interface Destination {
    id:              string;
    customer_code:   string;
    type:            string;
    phone:           string;
    fax:             string;
    email:           string;
    title:           string;
    letter_salution: string;
    name:            string;
    address:         DestinationAddress;
    name_short:      string;
}

export interface DestinationAddress {
    street:        string;
    street_number: string;
    address_add:   string;
    zip:           string;
    locality:      string;
    state:         string;
    country:       string;
    country_name?: string;
}

export interface Patient {
    id:              string;
    lastname:        string;
    firstname:       string;
    prefix:          string;
    affix:           string;
    gender:          Gender;
    birthdate:       string;
    age_in_years:    string;
    title:           string;
    academic_title:  string;
    address:         DestinationAddress;
    post_office_box: string;
    phone:           string;
    national_number: string;
    email:           string;
}

export enum Gender {
    Empty = "",
    M = "M",
}

export interface Provider {
    provider_code:    string;
    is_lab_community: boolean;
    name_report:      string;
    address:          MainAddressClass;
    phone:            string;
    fax:              string;
    email:            string;
    web:              string;
    name:             string;
    kv_provider:      KvProvider;
}

export interface KvProvider {
    registration_number: string;
    type:                string;
}

export interface ReportElementList {
    lab_department_code?:      string;
    _type:                     string;
    text?:                     string;
    report_group_code?:        string;
    report_subgroup_code?:     string;
    id?:                       string;
    result_numeric?:           string;
    result_prefix?:            string;
    result_text_block_code?:   string;
    comment_code?:             string;
    status?:                   string;
    limit_indicator?:          LimitIndicator;
    measure_datetime?:         string;
    result_datetime?:          string;
    itf_id?:                   string;
    is_reported?:              boolean;
    report_layout?:            string;
    report_filter?:            string;
    resulted_by_external_lab?: boolean;
    is_active?:                boolean;
    debitor_id?:               string;
    result_text?:              string;
    test?:                     Test;
    reference?:                Reference;
    test_report?:              TestReport;
    analysis_id?:              string;
    result_type?:              LimitIndicator;
    comment?:                  string;
    result?:                   string;
    unit?:                     string;
    value_range?:              string;
    result_second?:            string;
    unit_second?:              string;
    value_range_second?:       string;
    rast_class?:               string;
    is_additional_request?:    boolean;
    type?:                     Type;
}

export enum LimitIndicator {
    H = "H",
    L = "L",
    N = "N",
}

export interface Reference {
    gender:               Gender;
    is_pregnant:          boolean;
    pregnancy_start_week: string;
    pregnancy_end_week:   string;
    age_definition:       AgeDefinition;
    age_start_date:       string;
    age_end_date:         string;
    lower_standard_value: string;
    upper_standard_value: string;
    lower_panic_value:    string;
    upper_panic_value:    string;
    lower_extreme_value:  string;
    upper_extreme_value:  string;
}

export enum AgeDefinition {
    Empty = "",
    Y = "Y",
}

export interface Test {
    id:        string;
    test_code: string;
}

export interface TestReport {
    report_name_text: string;
    header_text:      HeaderText;
    footer_text:      FooterText;
}

export enum FooterText {
    Empty = "",
    FußtextTestNatrium = "Fußtext Test Natrium",
}

export enum HeaderText {
    Empty = "",
    HeaderNatrium = "Header Natrium",
}

export enum Type {
    T = "T",
}

export interface Site {
    site_code: string;
}

export interface Validator {
    code:           string;
    academic_title: string;
    label:          string;
    firstname:      string;
    lastname:       string;
    signing_name:   string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toLxStandard(json: string): LxStandard {
        return cast(JSON.parse(json), r("LxStandard"));
    }

    public static lxStandardToJson(value: LxStandard): string {
        return JSON.stringify(uncast(value, r("LxStandard")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "LxStandard": o([
        { json: "id", js: "id", typ: "" },
        { json: "has_priority", js: "has_priority", typ: "" },
        { json: "barcode", js: "barcode", typ: "" },
        { json: "number_circle", js: "number_circle", typ: "" },
        { json: "order_counter", js: "order_counter", typ: "" },
        { json: "order_period", js: "order_period", typ: "" },
        { json: "order_key_display", js: "order_key_display", typ: "" },
        { json: "external_reference", js: "external_reference", typ: "" },
        { json: "order_entry_reference", js: "order_entry_reference", typ: "" },
        { json: "registration_number", js: "registration_number", typ: "" },
        { json: "prescriber_id", js: "prescriber_id", typ: "" },
        { json: "approval_number", js: "approval_number", typ: "" },
        { json: "patient", js: "patient", typ: r("Patient") },
        { json: "his_patient_id", js: "his_patient_id", typ: "" },
        { json: "his_episode", js: "his_episode", typ: "" },
        { json: "is_emergency", js: "is_emergency", typ: "" },
        { json: "is_pregnant", js: "is_pregnant", typ: true },
        { json: "pregnancy_week", js: "pregnancy_week", typ: "" },
        { json: "pregnancy_day", js: "pregnancy_day", typ: "" },
        { json: "menstruation_cycle", js: "menstruation_cycle", typ: "" },
        { json: "is_complete", js: "is_complete", typ: true },
        { json: "document_type", js: "document_type", typ: "" },
        { json: "treatment_type", js: "treatment_type", typ: "" },
        { json: "kvakz_code", js: "kvakz_code", typ: "" },
        { json: "first_requestor_registration_number", js: "first_requestor_registration_number", typ: "" },
        { json: "prescription_datetime", js: "prescription_datetime", typ: "" },
        { json: "receipt_datetime", js: "receipt_datetime", typ: "" },
        { json: "report_datetime", js: "report_datetime", typ: "" },
        { json: "collection_date", js: "collection_date", typ: "" },
        { json: "collection_hour", js: "collection_hour", typ: "" },
        { json: "has_known_infection", js: "has_known_infection", typ: true },
        { json: "invoice_variation", js: "invoice_variation", typ: "" },
        { json: "clinical_remark", js: "clinical_remark", typ: "" },
        { json: "report_text", js: "report_text", typ: "" },
        { json: "has_additional_request", js: "has_additional_request", typ: true },
        { json: "destination", js: "destination", typ: r("Destination") },
        { json: "validation_datetime", js: "validation_datetime", typ: "" },
        { json: "customer", js: "customer", typ: r("Customer") },
        { json: "provider", js: "provider", typ: r("Provider") },
        { json: "debitor_list", js: "debitor_list", typ: a(r("DebitorList")) },
        { json: "validator", js: "validator", typ: r("Validator") },
        { json: "container_list", js: "container_list", typ: a(r("ContainerList")) },
        { json: "prescriber", js: "prescriber", typ: r("Customer") },
        { json: "site", js: "site", typ: r("Site") },
        { json: "document_is_complete", js: "document_is_complete", typ: true },
        { json: "report_element_list", js: "report_element_list", typ: a(r("ReportElementList")) },
        { json: "_meta_info", js: "_meta_info", typ: r("MetaInfo") },
        { json: "set_pending_results", js: "set_pending_results", typ: true },
        { json: "attachment_list", js: "attachment_list", typ: a("any") },
    ], false),
    "MetaInfo": o([
        { json: "version", js: "version", typ: "" },
        { json: "doc_input", js: "doc_input", typ: r("DocInput") },
    ], false),
    "DocInput": o([
        { json: "lorderid", js: "lorderid", typ: "" },
        { json: "lorderdestid", js: "lorderdestid", typ: "" },
        { json: "languagecode", js: "languagecode", typ: "" },
        { json: "lorderdest_list", js: "lorderdest_list", typ: a(r("LorderdestList")) },
        { json: "fromdatim", js: "fromdatim", typ: "" },
        { json: "doccode", js: "doccode", typ: "" },
        { json: "context", js: "context", typ: "" },
        { json: "medium", js: "medium", typ: "" },
        { json: "preview", js: "preview", typ: "" },
        { json: "dockey", js: "dockey", typ: "" },
    ], false),
    "LorderdestList": o([
        { json: "lorderid", js: "lorderid", typ: "" },
        { json: "lorderdestid", js: "lorderdestid", typ: "" },
    ], false),
    "ContainerList": o([
        { json: "id", js: "id", typ: "" },
        { json: "barcode", js: "barcode", typ: "" },
        { json: "parent_id", js: "parent_id", typ: "" },
        { json: "collection_date", js: "collection_date", typ: "" },
        { json: "collection_hour", js: "collection_hour", typ: "" },
        { json: "location_additional_info", js: "location_additional_info", typ: "" },
        { json: "given_spectype_text", js: "given_spectype_text", typ: "" },
        { json: "location", js: "location", typ: "" },
        { json: "creation_datetime", js: "creation_datetime", typ: "" },
        { json: "spectype", js: "spectype", typ: r("Spectype") },
    ], false),
    "Spectype": o([
        { json: "id", js: "id", typ: "" },
        { json: "code", js: "code", typ: "" },
        { json: "label", js: "label", typ: "" },
        { json: "report_name_text", js: "report_name_text", typ: "" },
    ], false),
    "Customer": o([
        { json: "customer_code", js: "customer_code", typ: "" },
        { json: "label", js: "label", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "firstname", js: "firstname", typ: "" },
        { json: "lastname", js: "lastname", typ: "" },
        { json: "title_short", js: "title_short", typ: "" },
        { json: "approval_number", js: "approval_number", typ: "" },
        { json: "registration_number", js: "registration_number", typ: "" },
        { json: "is_inpatient", js: "is_inpatient", typ: u(undefined, true) },
        { json: "name_short", js: "name_short", typ: "" },
        { json: "phone", js: "phone", typ: "" },
        { json: "fax", js: "fax", typ: "" },
        { json: "email", js: "email", typ: "" },
        { json: "main_address", js: "main_address", typ: r("MainAddressClass") },
        { json: "property_list", js: "property_list", typ: u(undefined, a(r("PropertyList"))) },
    ], false),
    "MainAddressClass": o([
        { json: "street", js: "street", typ: "" },
        { json: "zip", js: "zip", typ: "" },
        { json: "locality", js: "locality", typ: "" },
        { json: "state", js: "state", typ: "" },
        { json: "country", js: "country", typ: "" },
    ], false),
    "PropertyList": o([
        { json: "code", js: "code", typ: "" },
        { json: "value", js: "value", typ: "" },
    ], false),
    "DebitorList": o([
        { json: "id", js: "id", typ: "" },
        { json: "is_invoiced", js: "is_invoiced", typ: true },
        { json: "debitor_type", js: "debitor_type", typ: "" },
    ], false),
    "Destination": o([
        { json: "id", js: "id", typ: "" },
        { json: "customer_code", js: "customer_code", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "phone", js: "phone", typ: "" },
        { json: "fax", js: "fax", typ: "" },
        { json: "email", js: "email", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "letter_salution", js: "letter_salution", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "address", js: "address", typ: r("DestinationAddress") },
        { json: "name_short", js: "name_short", typ: "" },
    ], false),
    "DestinationAddress": o([
        { json: "street", js: "street", typ: "" },
        { json: "street_number", js: "street_number", typ: "" },
        { json: "address_add", js: "address_add", typ: "" },
        { json: "zip", js: "zip", typ: "" },
        { json: "locality", js: "locality", typ: "" },
        { json: "state", js: "state", typ: "" },
        { json: "country", js: "country", typ: "" },
        { json: "country_name", js: "country_name", typ: u(undefined, "") },
    ], false),
    "Patient": o([
        { json: "id", js: "id", typ: "" },
        { json: "lastname", js: "lastname", typ: "" },
        { json: "firstname", js: "firstname", typ: "" },
        { json: "prefix", js: "prefix", typ: "" },
        { json: "affix", js: "affix", typ: "" },
        { json: "gender", js: "gender", typ: r("Gender") },
        { json: "birthdate", js: "birthdate", typ: "" },
        { json: "age_in_years", js: "age_in_years", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "academic_title", js: "academic_title", typ: "" },
        { json: "address", js: "address", typ: r("DestinationAddress") },
        { json: "post_office_box", js: "post_office_box", typ: "" },
        { json: "phone", js: "phone", typ: "" },
        { json: "national_number", js: "national_number", typ: "" },
        { json: "email", js: "email", typ: "" },
    ], false),
    "Provider": o([
        { json: "provider_code", js: "provider_code", typ: "" },
        { json: "is_lab_community", js: "is_lab_community", typ: true },
        { json: "name_report", js: "name_report", typ: "" },
        { json: "address", js: "address", typ: r("MainAddressClass") },
        { json: "phone", js: "phone", typ: "" },
        { json: "fax", js: "fax", typ: "" },
        { json: "email", js: "email", typ: "" },
        { json: "web", js: "web", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "kv_provider", js: "kv_provider", typ: r("KvProvider") },
    ], false),
    "KvProvider": o([
        { json: "registration_number", js: "registration_number", typ: "" },
        { json: "type", js: "type", typ: "" },
    ], false),
    "ReportElementList": o([
        { json: "lab_department_code", js: "lab_department_code", typ: u(undefined, "") },
        { json: "_type", js: "_type", typ: "" },
        { json: "text", js: "text", typ: u(undefined, "") },
        { json: "report_group_code", js: "report_group_code", typ: u(undefined, "") },
        { json: "report_subgroup_code", js: "report_subgroup_code", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "result_numeric", js: "result_numeric", typ: u(undefined, "") },
        { json: "result_prefix", js: "result_prefix", typ: u(undefined, "") },
        { json: "result_text_block_code", js: "result_text_block_code", typ: u(undefined, "") },
        { json: "comment_code", js: "comment_code", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, "") },
        { json: "limit_indicator", js: "limit_indicator", typ: u(undefined, r("LimitIndicator")) },
        { json: "measure_datetime", js: "measure_datetime", typ: u(undefined, "") },
        { json: "result_datetime", js: "result_datetime", typ: u(undefined, "") },
        { json: "itf_id", js: "itf_id", typ: u(undefined, "") },
        { json: "is_reported", js: "is_reported", typ: u(undefined, true) },
        { json: "report_layout", js: "report_layout", typ: u(undefined, "") },
        { json: "report_filter", js: "report_filter", typ: u(undefined, "") },
        { json: "resulted_by_external_lab", js: "resulted_by_external_lab", typ: u(undefined, true) },
        { json: "is_active", js: "is_active", typ: u(undefined, true) },
        { json: "debitor_id", js: "debitor_id", typ: u(undefined, "") },
        { json: "result_text", js: "result_text", typ: u(undefined, "") },
        { json: "test", js: "test", typ: u(undefined, r("Test")) },
        { json: "reference", js: "reference", typ: u(undefined, r("Reference")) },
        { json: "test_report", js: "test_report", typ: u(undefined, r("TestReport")) },
        { json: "analysis_id", js: "analysis_id", typ: u(undefined, "") },
        { json: "result_type", js: "result_type", typ: u(undefined, r("LimitIndicator")) },
        { json: "comment", js: "comment", typ: u(undefined, "") },
        { json: "result", js: "result", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: u(undefined, "") },
        { json: "value_range", js: "value_range", typ: u(undefined, "") },
        { json: "result_second", js: "result_second", typ: u(undefined, "") },
        { json: "unit_second", js: "unit_second", typ: u(undefined, "") },
        { json: "value_range_second", js: "value_range_second", typ: u(undefined, "") },
        { json: "rast_class", js: "rast_class", typ: u(undefined, "") },
        { json: "is_additional_request", js: "is_additional_request", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(undefined, r("Type")) },
    ], false),
    "Reference": o([
        { json: "gender", js: "gender", typ: r("Gender") },
        { json: "is_pregnant", js: "is_pregnant", typ: true },
        { json: "pregnancy_start_week", js: "pregnancy_start_week", typ: "" },
        { json: "pregnancy_end_week", js: "pregnancy_end_week", typ: "" },
        { json: "age_definition", js: "age_definition", typ: r("AgeDefinition") },
        { json: "age_start_date", js: "age_start_date", typ: "" },
        { json: "age_end_date", js: "age_end_date", typ: "" },
        { json: "lower_standard_value", js: "lower_standard_value", typ: "" },
        { json: "upper_standard_value", js: "upper_standard_value", typ: "" },
        { json: "lower_panic_value", js: "lower_panic_value", typ: "" },
        { json: "upper_panic_value", js: "upper_panic_value", typ: "" },
        { json: "lower_extreme_value", js: "lower_extreme_value", typ: "" },
        { json: "upper_extreme_value", js: "upper_extreme_value", typ: "" },
    ], false),
    "Test": o([
        { json: "id", js: "id", typ: "" },
        { json: "test_code", js: "test_code", typ: "" },
    ], false),
    "TestReport": o([
        { json: "report_name_text", js: "report_name_text", typ: "" },
        { json: "header_text", js: "header_text", typ: r("HeaderText") },
        { json: "footer_text", js: "footer_text", typ: r("FooterText") },
    ], false),
    "Site": o([
        { json: "site_code", js: "site_code", typ: "" },
    ], false),
    "Validator": o([
        { json: "code", js: "code", typ: "" },
        { json: "academic_title", js: "academic_title", typ: "" },
        { json: "label", js: "label", typ: "" },
        { json: "firstname", js: "firstname", typ: "" },
        { json: "lastname", js: "lastname", typ: "" },
        { json: "signing_name", js: "signing_name", typ: "" },
    ], false),
    "Gender": [
        "",
        "M",
    ],
    "LimitIndicator": [
        "H",
        "L",
        "N",
    ],
    "AgeDefinition": [
        "",
        "Y",
    ],
    "FooterText": [
        "",
        "Fußtext Test Natrium",
    ],
    "HeaderText": [
        "",
        "Header Natrium",
    ],
    "Type": [
        "T",
    ],
};
