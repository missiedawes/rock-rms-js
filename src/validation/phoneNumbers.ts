import { z } from 'zod';

export const PhoneNumberSchema = z
    .object({
        Id: z.number(),
        IdKey: z.string(),
        Guid: z.string(),
        FullNumber: z.string(),
        Number: z.string(),
        NumberFormatted: z.string().nullable(),
        CountryCode: z.string().nullable(),
        NumberFormattedWithCountryCode: z.string().nullable(),
        NumberTypeValueId: z.number().nullable(),
        IsSystem: z.boolean(),
        PersonId: z.number(),
        IsUnlisted: z.boolean().nullable(),
        IsMessagingEnabled: z.boolean(),
        CreatedDateTime: z.string().nullable(),
        ModifiedDateTime: z.string().nullable(),
        CreatedByPersonAliasId: z.number().nullable(),
        ModifiedByPersonAliasId: z.number().nullable(),
        ModifiedAuditValuesAlreadyUpdated: z.boolean(),
    })
    .catchall(z.any()); // Allow additional properties
