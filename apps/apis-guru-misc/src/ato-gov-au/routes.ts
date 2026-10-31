import { createRoute, z } from '@hono/zod-openapi'

const ResourceIdSchema = z
  .string()
  .max(36)
  .openapi({
    description: 'The resource ID. Defaults to UUID v4',
    example: '123e4567-e89b-12d3-a456-426655440000',
  })
  .openapi('ResourceId')

const AddressIdSchema = ResourceIdSchema.and(z.string()).openapi('AddressId')

const AddressSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'The city.', example: 'Canberra' }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country.', example: 'Australia' }),
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '1979-01-13T09:05:06+10:00',
        readOnly: true,
      }),
    id: AddressIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    line1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address line 1.', example: 'Level 7' }),
    line2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address line 2.', example: '21 Genge Street' }),
    line3: z.string().exactOptional().openapi({ description: 'The address line 3.', example: '' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address name.', example: 'Kembery Building' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code.', example: '2601' }),
    suburb: z.string().exactOptional().openapi({ description: 'The suburb.', example: 'Civic' }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The Address resource.', required: [] })
  .openapi('Address')

const TypeSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The scheme value description.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    name: z.string().exactOptional().openapi({ description: 'The scheme value.' }),
  })
  .openapi({ description: 'The Type resource.', required: [] })
  .openapi('Type')

const AddressTypeSchema = TypeSchema.and(z.object({})).openapi('AddressType')

const BusinessNameSchema = z
  .object({
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '1979-01-13T09:05:06+10:00',
        readOnly: true,
      }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    lifecycleState: z
      .enum(['Approved', 'Expired', 'Issued', 'Pending Approval', 'Suspended'])
      .default('Pending Approval')
      .exactOptional()
      .openapi({ description: "The business name's lifecycle state." }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business name.', example: 'XYZ Technology Ventures' }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The Business Name resource.', required: [] })
  .openapi('BusinessName')

const BusinessNameLifecycleStateSchema = TypeSchema.and(z.object({})).openapi(
  'BusinessNameLifecycleState',
)

const ElectronicAddressSchema = z
  .object({
    areaCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The area code, for example, "02".', example: '02' }),
    countryPrefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country prefix, for example, "61".', example: '61' }),
    electronicAddressType: z
      .enum(['Email', 'Fax', 'Landline', 'Mobile', 'Website'])
      .default('Landline')
      .exactOptional()
      .openapi({ description: 'The electronic address type.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address, for example, "robert.ferguson@ato.gov.au".',
        example: '',
      }),
    extension: z
      .string()
      .exactOptional()
      .openapi({ description: 'The extension number, for example, "4453".', example: '' }),
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '1979-01-13T09:05:06+10:00',
        readOnly: true,
      }),
    id: AddressIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number, for example, "62164453".', example: '62164453' }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The website address, for example, "https://ato.gov.au".',
        example: '',
      }),
  })
  .openapi({ description: 'The Electronic Address resource.', required: [] })
  .openapi('ElectronicAddress')

const ElectronicAddressTypeSchema = TypeSchema.and(z.object({})).openapi('ElectronicAddressType')

const ErrorDetailsSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error code.', example: 'NullValue' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error message.', example: 'Family name must not be null' }),
    target: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error target.', example: 'familyName' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorDetails')

const FailedPreconditionSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'The error code.', example: '400' }),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error message.',
        example: 'Request can not be executed in the current system state',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error status.', example: 'FAILED_PRECONDITION' }),
  })
  .openapi({ required: [] })
  .openapi('FailedPrecondition')

const GenderSchema = z
  .object({
    gender: z.string().exactOptional().openapi({ description: 'The gender.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
  })
  .openapi({ description: 'The Gender resource.', required: [] })
  .openapi('Gender')

const IndividualAddressSchema = AddressSchema.and(
  z
    .object({
      addressType: z
        .enum(['Mailing', 'Principal Place of Business', 'Principal Place of Residence'])
        .default('Principal Place of Residence')
        .exactOptional()
        .openapi({ description: 'The address type.' }),
      fromDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
          example: '1979-01-13T09:05:06+10:00',
          readOnly: true,
        }),
      toDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
          example: '',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
).openapi('IndividualAddress')

const PartyIdSchema = ResourceIdSchema.and(z.string()).openapi('PartyId')

const IndividualNameSchema = z
  .object({
    direction: z
      .enum(['left-to-right', 'right-to-left'])
      .default('left-to-right')
      .exactOptional()
      .openapi({ description: "The direction used to render the individual's name." }),
    familyName: z
      .string()
      .exactOptional()
      .openapi({ description: "The individual's family name.", example: 'Ferguson' }),
    formalSalutation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The individual\'s formal salutation, for example, "Mr William Smith".',
        example: 'Mr Robert Ferguson',
      }),
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '1979-01-13T09:05:06+10:00',
        readOnly: true,
      }),
    givenName: z
      .string()
      .exactOptional()
      .openapi({ description: "The individual's given name.", example: 'Robert' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    informalSalutation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The individual\'s informal salutation, for example, "Bill".',
        example: 'Rob',
      }),
    middleName: z
      .string()
      .exactOptional()
      .openapi({ description: "The individual's middle name.", example: 'James' }),
    namePrefix: z
      .enum(['Mr', 'Ms'])
      .default('Mr')
      .exactOptional()
      .openapi({ description: "The individual's name prefix." }),
    nameSuffix: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The individual\'s name suffix, for example, "Jr" or "Sr".',
        example: '',
      }),
    nameType: z
      .enum(['Alias', 'Principal Name'])
      .default('Principal Name')
      .exactOptional()
      .openapi({ description: 'The name type.' }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The Individual Name resource.', required: [] })
  .openapi('IndividualName')

const IndividualSchema = z
  .object({
    addresses: z.array(IndividualAddressSchema).exactOptional(),
    dateOfBirth: z.iso
      .date()
      .openapi({
        description:
          "The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).",
        example: '1979-01-13',
      }),
    electronicAddresses: z.array(ElectronicAddressSchema).exactOptional(),
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '1979-01-13T09:05:06+10:00',
        readOnly: true,
      }),
    gender: z
      .enum(['Female', 'Male', 'Not Applicable', 'Not Known'])
      .default('Male')
      .exactOptional()
      .openapi({ description: "The individual's gender." }),
    id: PartyIdSchema.exactOptional().openapi({
      description: "The party's unique identifier.",
      readOnly: true,
    }),
    names: z.array(IndividualNameSchema).exactOptional(),
    placeOfBirth: z
      .string()
      .openapi({
        description: "The individual's place of birth, for example, `Tamworth`.",
        example: 'Tamworth',
      }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The Individual resource.', required: ['dateOfBirth', 'placeOfBirth'] })
  .openapi('Individual')

const InvalidArgumentSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'The error code.', example: '400' }),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error message.',
        example: 'The client specified an invalid argument',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error status.', example: 'INVALID_ARGUMENT' }),
  })
  .openapi({ required: [] })
  .openapi('InvalidArgument')

const LegalEntityTypeSchema = TypeSchema.and(z.object({})).openapi('LegalEntityType')

const LicenseSchema = z
  .object({
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '1979-01-13T09:05:06+10:00',
        readOnly: true,
      }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    licenseType: z
      .enum(['Australian Financial Services License', 'License 2B'])
      .default('Australian Financial Services License')
      .exactOptional()
      .openapi({ description: 'The license type.' }),
    lifecycleState: z
      .enum(['Approved', 'Expired', 'Issued', 'Pending Approval', 'Suspended'])
      .default('Pending Approval')
      .exactOptional()
      .openapi({ description: "The business name's lifecycle state." }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The License resource.', required: [] })
  .openapi('License')

const LicenseLifecycleStateSchema = TypeSchema.and(z.object({})).openapi('LicenseLifecycleState')

const LicenseTypeSchema = TypeSchema.and(z.object({})).openapi('LicenseType')

const NameDirectionSchema = TypeSchema.and(z.object({})).openapi('NameDirection')

const NamePrefixSchema = TypeSchema.and(z.object({})).openapi('NamePrefix')

const NameTypeSchema = TypeSchema.and(z.object({})).openapi('NameType')

const NotFoundSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'The error code.', example: '404' }),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error message.',
        example: 'The specified resource was not found',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error status.', example: 'NOT_FOUND' }),
  })
  .openapi({ required: [] })
  .openapi('NotFound')

const OrganisationAddressSchema = AddressSchema.and(
  z
    .object({
      addressType: z
        .enum(['Mailing', 'Principal Place of Business'])
        .default('Principal Place of Business')
        .exactOptional()
        .openapi({ description: 'The address type.' }),
      fromDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
          example: '1979-01-13T09:05:06+10:00',
          readOnly: true,
        }),
      toDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
          example: '',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
).openapi('OrganisationAddress')

const OrganisationNameSchema = z
  .object({
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '1928-03-03T09:05:06+10:00',
        readOnly: true,
      }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The organisation's name.", example: '321 Technology Ventures' }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The Organisation Name resource.', required: [] })
  .openapi('OrganisationName')

const RegisteredIdentifierSchema = z
  .object({
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '1979-01-13T09:05:06+10:00',
        readOnly: true,
      }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    identifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registered identifier.', example: '123456789' }),
    identifierType: z
      .enum(['ACN', 'ABN'])
      .default('ACN')
      .exactOptional()
      .openapi({ description: 'The registered identifier type.' }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The Registered Identifier resource.', required: [] })
  .openapi('RegisteredIdentifier')

const OrganisationSchema = z
  .object({
    addresses: z.array(OrganisationAddressSchema).exactOptional(),
    electronicAddresses: z.array(ElectronicAddressSchema).exactOptional(),
    establishmentDate: z.iso
      .date()
      .openapi({
        description:
          "The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).",
        example: '1928-03-03',
      }),
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '1979-01-13T09:05:06+10:00',
        readOnly: true,
      }),
    id: PartyIdSchema.exactOptional().openapi({
      description: "The party's unique identifier.",
      readOnly: true,
    }),
    legalEntityType: z
      .enum(['Company', 'Partnership', 'Trust', 'Joint Venture'])
      .default('Company')
      .openapi({ description: "The organisation's legal entity type." }),
    names: z.array(OrganisationNameSchema).exactOptional(),
    registeredIdentifiers: z.array(RegisteredIdentifierSchema).exactOptional(),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'The Organisation resource.',
    required: ['legalEntityType', 'establishmentDate'],
  })
  .openapi('Organisation')

const RoleIdSchema = ResourceIdSchema.and(z.string()).openapi('RoleId')

const PartyRoleSchema = z
  .object({
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '2016-01-13T09:05:06+10:00',
        readOnly: true,
      }),
    id: RoleIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    partyRoleType: z
      .enum(['Director', 'Employee', 'Member', 'Partner', 'Trustee'])
      .default('Employee')
      .exactOptional()
      .openapi({ description: "The party's role type." }),
    relatedPartyId: PartyIdSchema.openapi({
      description: "The related party's unique identifier.",
    }),
    relatedPartyRoleType: z
      .enum(['Association', 'Company', 'Employer', 'Organisation', 'Partnership', 'Trust'])
      .default('Employer')
      .exactOptional()
      .openapi({ description: "The related party's role type." }),
    relationshipType: z
      .enum(['Directorship', 'Employment', 'Membership', 'Partnership', 'Trusteeship'])
      .default('Employment')
      .openapi({ description: 'The relationship type.' }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).',
        example: '',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'The Party Role resource.',
    required: ['relatedPartyId', 'relationshipType'],
  })
  .openapi('PartyRole')

const PermissionDeniedSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'The error code.', example: '403' }),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error message.',
        example: 'The client does not have sufficient permission',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error status.', example: 'PERMISSION_DENIED' }),
  })
  .openapi({ required: [] })
  .openapi('PermissionDenied')

const RegisteredIdentifierTypeSchema = TypeSchema.and(z.object({})).openapi(
  'RegisteredIdentifierType',
)

const RoleSchema = z
  .object({
    id: ResourceIdSchema.exactOptional().openapi({
      description: "The resource's unique identifier.",
      readOnly: true,
    }),
    reciprocalRole: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reciprocal role name.' }),
    reciprocalRoleDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reciprocal role description.' }),
    relationship: z.string().exactOptional().openapi({ description: 'The relationship name.' }),
    role: z.string().exactOptional().openapi({ description: 'The role name.' }),
    roleDescription: z.string().exactOptional().openapi({ description: 'The role description.' }),
  })
  .openapi({ description: 'The Role Type resource.', required: [] })
  .openapi('Role')

const UnauthenticatedSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'The error code.', example: '401' }),
    details: ErrorDetailsSchema.exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error message.',
        example: 'Request not authenticated due to missing, invalid, or expired token',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error status.', example: 'UNAUTHENTICATED' }),
  })
  .openapi({ required: [] })
  .openapi('Unauthenticated')

const FailedPreconditionResponse = {
  description: 'Request can not be executed in the current system state',
  content: { 'application/json': { schema: FailedPreconditionSchema } },
}

const InvalidArgumentResponse = {
  description: 'The client specified an invalid argument',
  content: { 'application/json': { schema: InvalidArgumentSchema } },
}

const NotFoundResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundSchema } },
}

const PermissionDeniedResponse = {
  description: 'The client does not have sufficient permission',
  content: { 'application/json': { schema: PermissionDeniedSchema } },
}

const UnauthenticatedResponse = {
  description: 'Request not authenticated due to missing, invalid, or expired token',
  content: { 'application/json': { schema: UnauthenticatedSchema } },
}

const AddressIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The address identifier.',
      in: 'path',
      name: 'addressId',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeyParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The API key.',
      in: 'header',
      name: 'apiKey',
      required: true,
      schema: { type: 'string' },
    },
  })

const DateOfBirthParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).",
      in: 'query',
      name: 'dateOfBirth',
      required: false,
      schema: { type: 'string' },
    },
  })

const IdentifierParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The identifier, for example, `123456789`.',
      in: 'query',
      name: 'identifier',
      required: false,
      schema: { type: 'string' },
    },
  })

const PartyIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The party identifier.',
      in: 'path',
      name: 'partyId',
      required: true,
      schema: { type: 'string' },
    },
  })

const PlaceOfBirthParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: "The individual's place of birth, for example, `Tamworth`.",
      in: 'query',
      name: 'placeOfBirth',
      required: false,
      schema: { type: 'string' },
    },
  })

const ProductIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The product identifier.',
      in: 'path',
      name: 'productId',
      required: true,
      schema: { type: 'string' },
    },
  })

const RegisteredIdentifierParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The registered identifier, for example, `ACN` or `ABN`.',
      in: 'query',
      name: 'registeredIdentifier',
      required: false,
      schema: { type: 'string' },
    },
  })

const RoleIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The role identifier.',
      in: 'path',
      name: 'roleId',
      required: true,
      schema: { type: 'string' },
    },
  })

const LicenseRequestBody = {
  description: 'License resource',
  content: { 'application/json': { schema: LicenseSchema } },
  required: true,
}

const IndividualRequestBody = {
  description: 'Individual resource',
  content: { 'application/json': { schema: IndividualSchema } },
  required: true,
}

const AddressRequestBody = {
  description: 'Address resource',
  content: { 'application/json': { schema: AddressSchema } },
  required: true,
}

const BusinessNameRequestBody = {
  description: 'Business Name resource',
  content: { 'application/json': { schema: BusinessNameSchema } },
  required: true,
}

const ElectronicAddressRequestBody = {
  description: 'Electronic Address resource',
  content: { 'application/json': { schema: ElectronicAddressSchema } },
  required: true,
}

const PartyRoleRequestBody = {
  description: 'Role resource',
  content: { 'application/json': { schema: PartyRoleSchema } },
  required: true,
}

const OrganisationRequestBody = {
  description: 'Organisation resource',
  content: { 'application/json': { schema: OrganisationSchema } },
  required: true,
}

export const getBusinessNamesRoute = createRoute({
  method: 'get',
  path: '/business-names',
  tags: ['Business Names'],
  summary: 'Retrieve a list of business names',
  description: 'Retrieve a list of business names\n',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'A list of business names was retrieved successfully',
      content: { 'application/json': { schema: z.array(BusinessNameSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsAddressTypesRoute = createRoute({
  method: 'get',
  path: '/classifications/address-types',
  tags: ['Address Types'],
  summary: 'Retrieve a list of address types',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Address types were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(AddressTypeSchema).openapi({
            example: [
              {
                description:
                  'The address at which an individual or organisation receives letters or packages.',
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'Mailing',
              },
              {
                description: 'The main location where work is conducted.',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: 'Principal Place of Business',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsBusinessNameLifecycleStatesRoute = createRoute({
  method: 'get',
  path: '/classifications/business-name-lifecycle-states',
  tags: ['Business Name Lifecycle States'],
  summary: 'Retrieve a list of business name lifecycle states',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Business name lifecycle states were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(BusinessNameLifecycleStateSchema).openapi({
            example: [
              {
                description: 'The Business Name has been approved.',
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'Approved',
              },
              {
                description: 'The Business Name has expired.',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: 'Expired',
              },
              {
                description: 'The Business Name has been issued.',
                id: '123e4567-e89b-12d3-a456-426655440003',
                name: 'Issued',
              },
              {
                description: 'The Business Name is pending approval.',
                id: '123e4567-e89b-12d3-a456-426655440004',
                name: 'Pending Approval',
              },
              {
                description: 'The Business Name has been suspended.',
                id: '123e4567-e89b-12d3-a456-426655440005',
                name: 'Suspended',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsElectronicAddressTypesRoute = createRoute({
  method: 'get',
  path: '/classifications/electronic-address-types',
  tags: ['Electronic Address Types'],
  summary: 'Retrieve a list of electronic address types',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Electronic address types were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(ElectronicAddressTypeSchema).openapi({
            example: [
              {
                description: 'An address used to send and receive emails.',
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'Email',
              },
              {
                description: 'A number used to send and receive faxes.',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: 'Fax',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsGendersRoute = createRoute({
  method: 'get',
  path: '/classifications/genders',
  tags: ['Genders'],
  summary: 'Retrieve a list of genders',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Genders were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(GenderSchema).openapi({
            example: [
              { gender: 'Not Known', id: '123e4567-e89b-12d3-a456-426655440001' },
              { gender: 'Male', id: '123e4567-e89b-12d3-a456-426655440002' },
              { gender: 'Female', id: '123e4567-e89b-12d3-a456-426655440003' },
              { gender: 'Not Applicable', id: '123e4567-e89b-12d3-a456-426655440004' },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsLegalEntityTypesRoute = createRoute({
  method: 'get',
  path: '/classifications/legal-entity-types',
  tags: ['Legal Entity Types'],
  summary: 'Retrieve a list of legal entity types',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Legal entity types were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(LegalEntityTypeSchema).openapi({
            example: [
              {
                description:
                  "If you operate as a sole trader, you're responsible for all aspects of the business, including any debts the business incurs.",
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'Sole Trader',
              },
              {
                description:
                  'A partnership is two or more individuals or organisations who do business as partners or receive income jointly.',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: 'Partnership',
              },
              {
                description:
                  'A joint venture is two or more people or entities who join to do business together for a particular purpose, usually a single project, rather than as an ongoing business.',
                id: '123e4567-e89b-12d3-a456-426655440003',
                name: 'Joint Venture',
              },
              {
                description:
                  'A company is a separate legal entity. This means it has the same rights as a natural person and can incur debt, sue and be sued.',
                id: '123e4567-e89b-12d3-a456-426655440004',
                name: 'Company',
              },
              {
                description:
                  'A trust is an obligation imposed on a person – the trustee – to hold property or assets (e.g. business assets) for the benefit of others (known as beneficiaries).',
                id: '123e4567-e89b-12d3-a456-426655440005',
                name: 'Trust',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsLicenseLifecycleStatesRoute = createRoute({
  method: 'get',
  path: '/classifications/license-lifecycle-states',
  tags: ['License Lifecycle States'],
  summary: 'Retrieve a list of license lifecycle states',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'License lifecycle states were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(LicenseLifecycleStateSchema).openapi({
            example: [
              {
                description: 'The License has been approved.',
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'Approved',
              },
              {
                description: 'The License has expired.',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: 'Expired',
              },
              {
                description: 'The License has been issued.',
                id: '123e4567-e89b-12d3-a456-426655440003',
                name: 'Issued',
              },
              {
                description: 'The License is pending approval.',
                id: '123e4567-e89b-12d3-a456-426655440004',
                name: 'Pending Approval',
              },
              {
                description: 'The License has been suspended.',
                id: '123e4567-e89b-12d3-a456-426655440005',
                name: 'Suspended',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsLicenseTypesRoute = createRoute({
  method: 'get',
  path: '/classifications/license-types',
  tags: ['License Types'],
  summary: 'Retrieve a list of license types',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'License types were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(LicenseTypeSchema).openapi({
            example: [
              {
                description:
                  'To conduct a financial services business in Australia, you must have an Australian Financial Services (AFS) licence.',
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'Australian Financial Services License',
              },
              {
                description: 'To conduct a <insert-name-here> business you must have a 2B licence.',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: '2B License',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsNameDirectionsRoute = createRoute({
  method: 'get',
  path: '/classifications/name-directions',
  tags: ['Name Directions'],
  summary: 'Retrieve a list of name directions',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Name directions were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(NameDirectionSchema).openapi({
            example: [
              {
                description: 'The full name or formal salutation is rendered left to right.',
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'left-to-right',
              },
              {
                description: 'The full name or formal salutation is rendered right to left.',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: 'right-to-left',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsNamePrefixesRoute = createRoute({
  method: 'get',
  path: '/classifications/name-prefixes',
  tags: ['Name Prefixes'],
  summary: 'Retrieve a list of name prefixes',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Name prefixes were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(NamePrefixSchema).openapi({
            example: [
              {
                description:
                  'A title used before a family name or formal salutation to address a man.',
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'Mr',
              },
              {
                description:
                  'A title used before a family name or formal salutation to address a woman.',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: 'Ms',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsNameTypesRoute = createRoute({
  method: 'get',
  path: '/classifications/name-types',
  tags: ['Name Types'],
  summary: 'Retrieve a list of name types',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Name types were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(NameTypeSchema).openapi({
            example: [
              {
                description: 'An alternate name used by a party.',
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'Alias',
              },
              {
                description: 'The primary name used by a party.',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: 'Principal Name',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsRegisteredIdentifierTypesRoute = createRoute({
  method: 'get',
  path: '/classifications/registered-identifier-types',
  tags: ['Registered Identifier Types'],
  summary: 'Retrieve a list of registered identifier types',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Registered identifier types were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(RegisteredIdentifierTypeSchema).openapi({
            example: [
              {
                description:
                  'An Australian Business Number (ABN) is a unique eleven-character number issued by the Australian Business Register (ABR).',
                id: '123e4567-e89b-12d3-a456-426655440001',
                name: 'ABN',
              },
              {
                description:
                  'An Australian Company Number (ACN) is a unique nine-character number issued by the Australian Securities and Investments Commission (ASIC).',
                id: '123e4567-e89b-12d3-a456-426655440002',
                name: 'ACN',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getClassificationsRolesRoute = createRoute({
  method: 'get',
  path: '/classifications/roles',
  tags: ['Roles'],
  summary: 'Retrieve a list of roles',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Roles were retrieved successfully',
      content: {
        'application/json': {
          schema: z.array(RoleSchema).openapi({
            example: [
              {
                id: '123e4567-e89b-12d3-a456-426655440001',
                reciprocalRole: 'Company',
                reciprocalRoleDescription: 'An incorporated legal entity.',
                relationship: 'Directorship',
                role: 'Director',
                roleDescription:
                  "An individual responsible for managing a company's business activities.",
              },
              {
                id: '123e4567-e89b-12d3-a456-426655440002',
                reciprocalRole: 'Employer',
                reciprocalRoleDescription: 'An individual or organisation that employs people.',
                relationship: 'Employment',
                role: 'Employee',
                roleDescription: 'An individual employed for wages or salary.',
              },
            ],
          }),
        },
      },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getIndividualsRoute = createRoute({
  method: 'get',
  path: '/individuals',
  tags: ['Individuals'],
  summary: 'Retrieve a list of individuals',
  description: 'Retrieve a list of individuals\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    query: z.object({
      dateOfBirth: DateOfBirthParamsSchema,
      placeOfBirth: PlaceOfBirthParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of individuals was retrieved successfully',
      content: { 'application/json': { schema: z.array(IndividualSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postIndividualsRoute = createRoute({
  method: 'post',
  path: '/individuals',
  tags: ['Individuals'],
  summary: 'Create an individual',
  description: 'Create an individual\n',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }), body: IndividualRequestBody },
  responses: {
    201: {
      description: 'Individual was created',
      content: { 'application/json': { schema: IndividualSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getIndividualsPartyIdRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}',
  tags: ['Individuals'],
  summary: 'Retrieve an individual',
  description: 'Retrieve an individual with the specified identifier\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Individual was retrieved successfully',
      content: { 'application/json': { schema: IndividualSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putIndividualsPartyIdRoute = createRoute({
  method: 'put',
  path: '/individuals/{partyId}',
  tags: ['Individuals'],
  summary: 'Update an individual',
  description: 'Update an individual\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: IndividualRequestBody,
  },
  responses: {
    200: {
      description: 'Individual was updated',
      content: { 'application/json': { schema: IndividualSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteIndividualsPartyIdRoute = createRoute({
  method: 'delete',
  path: '/individuals/{partyId}',
  tags: ['Individuals'],
  summary: 'Delete an individual',
  description: 'Delete an individual with the specified identifier\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    204: { description: 'Individual was deleted' },
    400: FailedPreconditionResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getIndividualsPartyIdAddressesRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/addresses',
  tags: ['Individuals Addresses'],
  summary: 'Retrieve a list of addresses',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Addresses were retrieved successfully',
      content: { 'application/json': { schema: z.array(AddressSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postIndividualsPartyIdAddressesRoute = createRoute({
  method: 'post',
  path: '/individuals/{partyId}/addresses',
  tags: ['Individuals Addresses'],
  summary: 'Create an address',
  description: 'Create an address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: AddressRequestBody,
  },
  responses: {
    201: {
      description: 'Address was created',
      content: { 'application/json': { schema: AddressSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getIndividualsPartyIdAddressesAddressIdRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/addresses/{addressId}',
  tags: ['Individuals Addresses'],
  summary: 'Retrieve an address',
  description: 'Retrieve an address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Address was retrieved successfully',
      content: { 'application/json': { schema: AddressSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putIndividualsPartyIdAddressesAddressIdRoute = createRoute({
  method: 'put',
  path: '/individuals/{partyId}/addresses/{addressId}',
  tags: ['Individuals Addresses'],
  summary: 'Update an address',
  description: 'Update an address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
    body: AddressRequestBody,
  },
  responses: {
    200: {
      description: 'Address was updated',
      content: { 'application/json': { schema: AddressSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteIndividualsPartyIdAddressesAddressIdRoute = createRoute({
  method: 'delete',
  path: '/individuals/{partyId}/addresses/{addressId}',
  tags: ['Individuals Addresses'],
  summary: 'Delete an address',
  description: 'Delete an address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
  },
  responses: {
    204: { description: 'Address was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getIndividualsPartyIdBusinessNamesRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/business-names',
  tags: ['Individuals Business Names'],
  summary: 'Retrieve a list of business names',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Business Names were retrieved successfully',
      content: { 'application/json': { schema: z.array(BusinessNameSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postIndividualsPartyIdBusinessNamesRoute = createRoute({
  method: 'post',
  path: '/individuals/{partyId}/business-names',
  tags: ['Individuals Business Names'],
  summary: 'Create a business name',
  description: 'Create a business name\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: BusinessNameRequestBody,
  },
  responses: {
    201: {
      description: 'Business Name was created',
      content: { 'application/json': { schema: BusinessNameSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getIndividualsPartyIdBusinessNamesProductIdRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/business-names/{productId}',
  tags: ['Individuals Business Names'],
  summary: 'Retrieve a business name',
  description: 'Retrieve a business name\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Business Name was retrieved successfully',
      content: { 'application/json': { schema: BusinessNameSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putIndividualsPartyIdBusinessNamesProductIdRoute = createRoute({
  method: 'put',
  path: '/individuals/{partyId}/business-names/{productId}',
  tags: ['Individuals Business Names'],
  summary: 'Update a business name',
  description: 'Update a business name\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
    body: BusinessNameRequestBody,
  },
  responses: {
    200: {
      description: 'Address was updated',
      content: { 'application/json': { schema: BusinessNameSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteIndividualsPartyIdBusinessNamesProductIdRoute = createRoute({
  method: 'delete',
  path: '/individuals/{partyId}/business-names/{productId}',
  tags: ['Individuals Business Names'],
  summary: 'Delete a business name',
  description: 'Delete a business name\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
  },
  responses: {
    204: { description: 'Address was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getIndividualsPartyIdElectronicAddressesRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/electronic-addresses',
  tags: ['Individuals Electronic Addresses'],
  summary: 'Retrieve a list of electronic addresses',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Electronic addresses were retrieved successfully',
      content: { 'application/json': { schema: z.array(ElectronicAddressSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postIndividualsPartyIdElectronicAddressesRoute = createRoute({
  method: 'post',
  path: '/individuals/{partyId}/electronic-addresses',
  tags: ['Individuals Electronic Addresses'],
  summary: 'Create an electronic address',
  description: 'Create an electronic address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: ElectronicAddressRequestBody,
  },
  responses: {
    201: {
      description: 'Electronic Address was created',
      content: { 'application/json': { schema: ElectronicAddressSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getIndividualsPartyIdElectronicAddressesAddressIdRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/electronic-addresses/{addressId}',
  tags: ['Individuals Electronic Addresses'],
  summary: 'Retrieve an electronic address',
  description: 'Retrieve an electronic address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Electronic Address was retrieved successfully',
      content: { 'application/json': { schema: ElectronicAddressSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putIndividualsPartyIdElectronicAddressesAddressIdRoute = createRoute({
  method: 'put',
  path: '/individuals/{partyId}/electronic-addresses/{addressId}',
  tags: ['Individuals Electronic Addresses'],
  summary: 'Update an electronic address',
  description: 'Update an electronic address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
    body: ElectronicAddressRequestBody,
  },
  responses: {
    200: {
      description: 'Electronic Address was updated',
      content: { 'application/json': { schema: ElectronicAddressSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteIndividualsPartyIdElectronicAddressesAddressIdRoute = createRoute({
  method: 'delete',
  path: '/individuals/{partyId}/electronic-addresses/{addressId}',
  tags: ['Individuals Electronic Addresses'],
  summary: 'Delete an electronic address',
  description: 'Delete an electronic address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
  },
  responses: {
    204: { description: 'Electronic Address was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getIndividualsPartyIdLicensesRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/licenses',
  tags: ['Individuals Licenses'],
  summary: 'Retrieve a list of licenses',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Licenses were retrieved successfully',
      content: { 'application/json': { schema: z.array(LicenseSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postIndividualsPartyIdLicensesRoute = createRoute({
  method: 'post',
  path: '/individuals/{partyId}/licenses',
  tags: ['Individuals Licenses'],
  summary: 'Create a license',
  description: 'Create a license\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: LicenseRequestBody,
  },
  responses: {
    201: {
      description: 'License was created',
      content: { 'application/json': { schema: LicenseSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getIndividualsPartyIdLicensesProductIdRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/licenses/{productId}',
  tags: ['Individuals Licenses'],
  summary: 'Retrieve a license',
  description: 'Retrieve a license\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'License was retrieved successfully',
      content: { 'application/json': { schema: LicenseSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putIndividualsPartyIdLicensesProductIdRoute = createRoute({
  method: 'put',
  path: '/individuals/{partyId}/licenses/{productId}',
  tags: ['Individuals Licenses'],
  summary: 'Update a license',
  description: 'Update a license\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
    body: LicenseRequestBody,
  },
  responses: {
    200: {
      description: 'License was updated',
      content: { 'application/json': { schema: LicenseSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteIndividualsPartyIdLicensesProductIdRoute = createRoute({
  method: 'delete',
  path: '/individuals/{partyId}/licenses/{productId}',
  tags: ['Individuals Licenses'],
  summary: 'Delete a license',
  description: 'Delete a license\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
  },
  responses: {
    204: { description: 'License was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getIndividualsPartyIdRolesRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/roles',
  tags: ['Individuals Roles'],
  summary: 'Retrieve a list of roles',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Roles were retrieved successfully',
      content: { 'application/json': { schema: z.array(PartyRoleSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postIndividualsPartyIdRolesRoute = createRoute({
  method: 'post',
  path: '/individuals/{partyId}/roles',
  tags: ['Individuals Roles'],
  summary: 'Create a role',
  description: 'Create a role\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: PartyRoleRequestBody,
  },
  responses: {
    201: {
      description: 'Role was created',
      content: { 'application/json': { schema: PartyRoleSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getIndividualsPartyIdRolesRoleIdRoute = createRoute({
  method: 'get',
  path: '/individuals/{partyId}/roles/{roleId}',
  tags: ['Individuals Roles'],
  summary: 'Retrieve a role',
  description: 'Retrieve a role\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, roleId: RoleIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Role was retrieved successfully',
      content: { 'application/json': { schema: PartyRoleSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putIndividualsPartyIdRolesRoleIdRoute = createRoute({
  method: 'put',
  path: '/individuals/{partyId}/roles/{roleId}',
  tags: ['Individuals Roles'],
  summary: 'Update a role',
  description: 'Update a role\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, roleId: RoleIdParamsSchema }),
    body: PartyRoleRequestBody,
  },
  responses: {
    200: {
      description: 'Role was updated',
      content: { 'application/json': { schema: PartyRoleSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteIndividualsPartyIdRolesRoleIdRoute = createRoute({
  method: 'delete',
  path: '/individuals/{partyId}/roles/{roleId}',
  tags: ['Individuals Roles'],
  summary: 'Delete a role',
  description: 'Delete a role\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, roleId: RoleIdParamsSchema }),
  },
  responses: {
    204: { description: 'Role was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getLicensesRoute = createRoute({
  method: 'get',
  path: '/licenses',
  tags: ['Licenses'],
  summary: 'Retrieve a list of licenses',
  description: 'Retrieve a list of licenses\n',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: {
    200: {
      description: 'A list of licenses was retrieved successfully',
      content: { 'application/json': { schema: z.array(LicenseSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getOrganisationsRoute = createRoute({
  method: 'get',
  path: '/organisations',
  tags: ['Organisations'],
  summary: 'Retrieve a list of organisations',
  description: 'Retrieve a list of organisations\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    query: z.object({
      registeredIdentifier: RegisteredIdentifierParamsSchema,
      identifier: IdentifierParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of organisations was retrieved successfully',
      content: { 'application/json': { schema: z.array(OrganisationSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postOrganisationsRoute = createRoute({
  method: 'post',
  path: '/organisations',
  tags: ['Organisations'],
  summary: 'Create an organisation',
  description: 'Create an organisation\n',
  request: { headers: z.object({ apiKey: ApiKeyParamsSchema }), body: OrganisationRequestBody },
  responses: {
    201: {
      description: 'Organisation was created',
      content: { 'application/json': { schema: OrganisationSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getOrganisationsPartyIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}',
  tags: ['Organisations'],
  summary: 'Retrieve an organisation',
  description: 'Retrieve an organisation with the specified identifier\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Individual was retrieved successfully',
      content: { 'application/json': { schema: OrganisationSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putOrganisationsPartyIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{partyId}',
  tags: ['Organisations'],
  summary: 'Update an organisation',
  description: 'Update an organisation\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: OrganisationRequestBody,
  },
  responses: {
    200: {
      description: 'Organisation was updated',
      content: { 'application/json': { schema: OrganisationSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteOrganisationsPartyIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{partyId}',
  tags: ['Organisations'],
  summary: 'Delete an organisation',
  description: 'Delete an organisation with the specified identifier\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    204: { description: 'Organisation was deleted' },
    400: FailedPreconditionResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getOrganisationsPartyIdAddressesRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/addresses',
  tags: ['Organisations Addresses'],
  summary: 'Retrieve a list of addresses',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Addresses were retrieved successfully',
      content: { 'application/json': { schema: z.array(AddressSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postOrganisationsPartyIdAddressesRoute = createRoute({
  method: 'post',
  path: '/organisations/{partyId}/addresses',
  tags: ['Organisations Addresses'],
  summary: 'Create an address',
  description: 'Create an address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: AddressRequestBody,
  },
  responses: {
    201: {
      description: 'Address was created',
      content: { 'application/json': { schema: AddressSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getOrganisationsPartyIdAddressesAddressIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/addresses/{addressId}',
  tags: ['Organisations Addresses'],
  summary: 'Retrieve an address',
  description: 'Retrieve an address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Address was retrieved successfully',
      content: { 'application/json': { schema: AddressSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putOrganisationsPartyIdAddressesAddressIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{partyId}/addresses/{addressId}',
  tags: ['Organisations Addresses'],
  summary: 'Update an address',
  description: 'Update an address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
    body: AddressRequestBody,
  },
  responses: {
    200: {
      description: 'Address was updated',
      content: { 'application/json': { schema: AddressSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteOrganisationsPartyIdAddressesAddressIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{partyId}/addresses/{addressId}',
  tags: ['Organisations Addresses'],
  summary: 'Delete an address',
  description: 'Delete an address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
  },
  responses: {
    204: { description: 'Address was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getOrganisationsPartyIdBusinessNamesRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/business-names',
  tags: ['Organisations Business Names'],
  summary: 'Retrieve a list of business names',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Business Names were retrieved successfully',
      content: { 'application/json': { schema: z.array(BusinessNameSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postOrganisationsPartyIdBusinessNamesRoute = createRoute({
  method: 'post',
  path: '/organisations/{partyId}/business-names',
  tags: ['Organisations Business Names'],
  summary: 'Create a business name',
  description: 'Create a business name\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: BusinessNameRequestBody,
  },
  responses: {
    201: {
      description: 'Business Name was created',
      content: { 'application/json': { schema: BusinessNameSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getOrganisationsPartyIdBusinessNamesProductIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/business-names/{productId}',
  tags: ['Organisations Business Names'],
  summary: 'Retrieve a business name',
  description: 'Retrieve a business name\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Business Name was retrieved successfully',
      content: { 'application/json': { schema: BusinessNameSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putOrganisationsPartyIdBusinessNamesProductIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{partyId}/business-names/{productId}',
  tags: ['Organisations Business Names'],
  summary: 'Update a business name',
  description: 'Update a business name\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
    body: BusinessNameRequestBody,
  },
  responses: {
    200: {
      description: 'Address was updated',
      content: { 'application/json': { schema: BusinessNameSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteOrganisationsPartyIdBusinessNamesProductIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{partyId}/business-names/{productId}',
  tags: ['Organisations Business Names'],
  summary: 'Delete a business name',
  description: 'Delete a business name\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
  },
  responses: {
    204: { description: 'Address was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getOrganisationsPartyIdElectronicAddressesRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/electronic-addresses',
  tags: ['Organisations Electronic Addresses'],
  summary: 'Retrieve a list of electronic addresses',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Electronic addresses were retrieved successfully',
      content: { 'application/json': { schema: z.array(ElectronicAddressSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postOrganisationsPartyIdElectronicAddressesRoute = createRoute({
  method: 'post',
  path: '/organisations/{partyId}/electronic-addresses',
  tags: ['Organisations Electronic Addresses'],
  summary: 'Create an electronic address',
  description: 'Create an electronic address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: ElectronicAddressRequestBody,
  },
  responses: {
    201: {
      description: 'Electronic Address was created',
      content: { 'application/json': { schema: ElectronicAddressSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getOrganisationsPartyIdElectronicAddressesAddressIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/electronic-addresses/{addressId}',
  tags: ['Organisations Electronic Addresses'],
  summary: 'Retrieve an electronic address',
  description: 'Retrieve an electronic address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Electronic address was retrieved successfully',
      content: { 'application/json': { schema: ElectronicAddressSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putOrganisationsPartyIdElectronicAddressesAddressIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{partyId}/electronic-addresses/{addressId}',
  tags: ['Organisations Electronic Addresses'],
  summary: 'Update an electronic address',
  description: 'Update an electronic address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
    body: ElectronicAddressRequestBody,
  },
  responses: {
    200: {
      description: 'Electronic Address was updated',
      content: { 'application/json': { schema: ElectronicAddressSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteOrganisationsPartyIdElectronicAddressesAddressIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{partyId}/electronic-addresses/{addressId}',
  tags: ['Organisations Electronic Addresses'],
  summary: 'Delete an electronic address',
  description: 'Delete an electronic address\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, addressId: AddressIdParamsSchema }),
  },
  responses: {
    204: { description: 'Electronic Address was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getOrganisationsPartyIdLicensesRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/licenses',
  tags: ['Organisations Licenses'],
  summary: 'Retrieve a list of licenses',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Licenses were retrieved successfully',
      content: { 'application/json': { schema: z.array(LicenseSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postOrganisationsPartyIdLicensesRoute = createRoute({
  method: 'post',
  path: '/organisations/{partyId}/licenses',
  tags: ['Organisations Licenses'],
  summary: 'Create a license',
  description: 'Create a license\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: LicenseRequestBody,
  },
  responses: {
    201: {
      description: 'License was created',
      content: { 'application/json': { schema: LicenseSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getOrganisationsPartyIdLicensesProductIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/licenses/{productId}',
  tags: ['Organisations Licenses'],
  summary: 'Retrieve a license',
  description: 'Retrieve a license\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'License was retrieved successfully',
      content: { 'application/json': { schema: LicenseSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putOrganisationsPartyIdLicensesProductIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{partyId}/licenses/{productId}',
  tags: ['Organisations Licenses'],
  summary: 'Update a license',
  description: 'Update a license\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
    body: LicenseRequestBody,
  },
  responses: {
    200: {
      description: 'License was updated',
      content: { 'application/json': { schema: LicenseSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteOrganisationsPartyIdLicensesProductIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{partyId}/licenses/{productId}',
  tags: ['Organisations Licenses'],
  summary: 'Delete a license',
  description: 'Delete a license\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, productId: ProductIdParamsSchema }),
  },
  responses: {
    204: { description: 'License was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const getOrganisationsPartyIdRolesRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/roles',
  tags: ['Organisations Roles'],
  summary: 'Retrieve a list of roles',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Roles were retrieved successfully',
      content: { 'application/json': { schema: z.array(PartyRoleSchema) } },
      headers: z.object({
        Link: {
          description:
            'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.\nFor example:\n\n    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",\n          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"\n\n`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.\n',
              param: { required: false },
            }),
        },
      }),
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const postOrganisationsPartyIdRolesRoute = createRoute({
  method: 'post',
  path: '/organisations/{partyId}/roles',
  tags: ['Organisations Roles'],
  summary: 'Create a role',
  description: 'Create a role\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema }),
    body: PartyRoleRequestBody,
  },
  responses: {
    201: {
      description: 'Role was created',
      content: { 'application/json': { schema: PartyRoleSchema } },
      headers: z.object({
        Location: {
          description:
            'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A [Location](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30) header pointing to the location of the new resource.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
  },
})

export const getOrganisationsPartyIdRolesRoleIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{partyId}/roles/{roleId}',
  tags: ['Organisations Roles'],
  summary: 'Retrieve a role',
  description: 'Retrieve a role\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, roleId: RoleIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Role was retrieved successfully',
      content: { 'application/json': { schema: PartyRoleSchema } },
    },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const putOrganisationsPartyIdRolesRoleIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{partyId}/roles/{roleId}',
  tags: ['Organisations Roles'],
  summary: 'Update a role',
  description: 'Update a role\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, roleId: RoleIdParamsSchema }),
    body: PartyRoleRequestBody,
  },
  responses: {
    200: {
      description: 'Role was updated',
      content: { 'application/json': { schema: PartyRoleSchema } },
    },
    400: InvalidArgumentResponse,
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})

export const deleteOrganisationsPartyIdRolesRoleIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{partyId}/roles/{roleId}',
  tags: ['Organisations Roles'],
  summary: 'Delete a role',
  description: 'Delete a role\n',
  request: {
    headers: z.object({ apiKey: ApiKeyParamsSchema }),
    params: z.object({ partyId: PartyIdParamsSchema, roleId: RoleIdParamsSchema }),
  },
  responses: {
    204: { description: 'Role was deleted' },
    401: UnauthenticatedResponse,
    404: NotFoundResponse,
  },
})
