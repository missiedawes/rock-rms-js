export interface PhoneNumber {
    Id: number;
    IdKey: string;
    Guid: string;
    FullNumber: string;
    Number: string;
    NumberFormatted: string | null;
    CountryCode: string | null;
    NumberFormattedWithCountryCode: string | null;
    NumberTypeValueId: number | null;
    IsSystem: boolean;
    PersonId: number;
    IsUnlisted: boolean | null;
    IsMessagingEnabled: boolean;
    CreatedDateTime: string | null;
    ModifiedDateTime: string | null;
    CreatedByPersonAliasId: number | null;
    ModifiedByPersonAliasId: number | null;
    ModifiedAuditValuesAlreadyUpdated: boolean;
    [key: string]: any; // Allow additional properties
}
