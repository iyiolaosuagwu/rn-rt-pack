export interface UserInterface {
    id: number;
    email: string;
    avatar: string | null;
    full_name: string;
    phone_number: string;
    profile_status: 'active';
    account_status: 'active' | 'suspended' | 'disable';
    role: ['user'];
    permission: Array<string>;
    created_at: string;
    updated_at: string;
    has_card: false;
    has_debit_card: false;
    username: string;
    default_card_id: number;
    device_password: string;
    security_type: string | null;
    has_bank_account: Boolean;
    has_bvn_verified: Boolean;
    has_address_verified: Boolean;
    has_document_verified: Boolean;
    has_sofri_card: Boolean;
    has_pending_card_request: boolean;
    has_biometric_verified: Boolean;
    pending_kyc_verification: Boolean;
    notification_preference: Array<string>;
    dummy_balance: number;
    kyc_score: number;
    customer_id: string;
    has_dummy_balance: Boolean;
    has_account_issue: false;
    has_payment_issue: false;
    has_income_verified: false;
    has_transaction_issue: false;
    has_loan_request_issue: false;
    income: 10000;
    income_type: string;
    last_name: string;
    profile_id: string;
    first_name: string;
    occupation: string;
    middle_name: string;
    is_employed: string;
    id_verified: string;
    profile_email: string;
    profile_avatar: string;
    employer_name: string;
    date_of_birth: string;
    marital_status: string;
    income_verified: string;
    employer_industry: string;
    level_of_education: string;
    employment_duration: number;
}

export interface LoginRequestInterface {
    password: string;
    phone_number: string;
    push_token?: string;
}

export interface UserReducerDataInterface {
    user: UserInterface | null;
    token: string | null;
    isLoggedIn: boolean;
    account_setup: boolean;
    passwordHash: string;
    config: Array<any>;
}
