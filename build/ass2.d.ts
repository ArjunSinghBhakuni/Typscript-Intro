interface detail {
    full_name: string;
    isEducate: boolean;
    graduation_year: number;
}
declare const myDetail: detail;
interface information {
    first_name: string;
    last_name: string;
}
declare const name_obj: information;
declare const getname: ({ first_name, last_name }: {
    first_name: any;
    last_name: any;
}) => string;
interface address {
    house_number: number;
    street: number;
    city: string;
    state: string;
    postal_code: number;
    country: string;
}
interface personalDetail {
    phone_numbers: [];
    addresses: [];
    email: string;
    first_name: string;
    last_name: string;
}
declare const contact_details: personalDetail;
declare const PhoneBook: () => void;
