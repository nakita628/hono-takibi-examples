import { createRoute, z } from '@hono/zod-openapi'

const AGCOPowerServicesModelsECUSchema = z
  .object({
    ActivationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code used to activate the ECU. May not be modified. Returned only on activation.',
      }),
    DamagedDescription: z
      .string()
      .regex(/^[a-zA-Z0-9]{0,4096}$/)
      .exactOptional()
      .openapi({ description: 'A description why the ECU cannot be deactivated.' }),
    EngineSerialNumber: z
      .string()
      .regex(
        /(^[A-Z][0-9]+$)|(^[ABCDEFGHJKLMNPRSTVWX1-9][5CMBL][ED][0-5][0-9][0-7][0-9][0-9][0-9]$)/,
      )
      .openapi({ description: 'The serial number of the ECU’s engine' }),
    ReplacesECUSerialNumber: z
      .string()
      .regex(/^0?\d{23}$/)
      .exactOptional()
      .openapi({
        description:
          'The serial number of the ECU that this ECU replaces. Required if activating an ECU..',
      }),
    SerialNumber: z
      .string()
      .regex(/^0?\d{23}$/)
      .openapi({ description: 'The serial number of the ECU' }),
    State: z
      .enum(['Active', 'Inactive', 'Damaged'])
      .openapi({ description: 'The state of the ECU' }),
  })
  .openapi({
    description: 'An AGCO Power ECU',
    required: ['SerialNumber', 'EngineSerialNumber', 'State'],
  })
  .openapi('AGCOPowerServicesModelsECU')

const AGCOPowerServicesModelsProductionDataSchema = z
  .object({
    DataType: z
      .string()
      .openapi({
        description:
          "Type of data. Valid types are (but not limited to)\r\n            'PowerCalibration'",
      }),
    DataValues: z.string().openapi({ description: 'Raw values of the calibration data' }),
  })
  .openapi({
    description: 'Production data for an AGCO Power engine.',
    required: ['DataType', 'DataValues'],
  })
  .openapi('AGCOPowerServicesModelsProductionData')

const AGCOPowerServicesModelsUserStatusSchema = z
  .object({
    DealerCode: z.string().openapi({ description: 'The dealer code of the voucher' }),
    State: z
      .enum(['Active', 'Inactive', 'None'])
      .exactOptional()
      .openapi({ description: 'The state of the voucher' }),
    VoucherCode: z.string().openapi({ description: 'The voucher code' }),
  })
  .openapi({
    description: 'Status of a voucher in the AGCO Power system',
    required: ['VoucherCode', 'DealerCode'],
  })
  .openapi('AGCOPowerServicesModelsUserStatus')

const AuthorizationCodesSharedModelsDataFieldSchema = z
  .object({
    DigitsPrecision: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The number of decimal digits to be used by this data field. Required only by the 'Float' data type. Must be in range 1 - 15.",
      }),
    MaxExponent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The maximum exponent to be used by this data field. Required only by the 'Float' data type. May not be greater than 307.",
      }),
    MaxValue: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The maximum value that can be represented by this data field. Required only by the 'Decimal' data type.",
      }),
    MinExponent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The minimum exponent to be used by this data field. Required only by the 'Float' data type. May not be less than -292.",
      }),
    MinValue: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The minimum value that can be represented by this data field. Required only by the 'Decimal' data type.",
      }),
    Name: z.string().openapi({ description: 'The name of the field.' }),
    ScaleFactor: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The resolution of values that can be represented by this data field. The base value is multiplied by this to compute the final value. Required only by the 'Decimal' data type.",
      }),
    Signed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether this value is signed. Required only by the 'Float' data type.",
      }),
    Type: z
      .enum(['Boolean', 'Decimal', 'Float', 'VariableLengthByteArray'])
      .openapi({ description: 'The type of this data field.' }),
  })
  .openapi({ required: ['Type', 'Name'] })
  .openapi('AuthorizationCodesSharedModelsDataField')

const AuthorizationCodesSharedModelsValidationFieldSchema = z
  .object({
    Name: z.string().openapi({ description: 'The name of the field.' }),
    Type: z
      .enum(['Boolean', 'Float', 'Int', 'StringCaseInsensitive', 'StringCaseSensitive'])
      .openapi({ description: 'The type for this validation field.' }),
  })
  .openapi({ required: ['Type', 'Name'] })
  .openapi('AuthorizationCodesSharedModelsValidationField')

const AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema = z
  .object({
    AuthorizationID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value used for securing codes generated.' }),
    CreatedByUserID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the user that created this definition. Read only.' }),
    CreatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'A timestamp of when this definition was created. Read only.' }),
    DataFields: z
      .array(AuthorizationCodesSharedModelsDataFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'The defined fields to include in authorization codes generated from this definition. May not be updated.',
      }),
    DeletedByUserID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the user that deleted this definition. Read only.' }),
    DeletedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'A timestamp of when this definition was deleted. Read only.' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of this definition. May not be updated.' }),
    DurationAccuracy: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of bits used for timestamp verification. Defaults to 5. May not be updated.',
      }),
    DurationAmount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated.',
      }),
    DurationUnits: z
      .enum(['Weeks', 'Days', 'Hours', 'Minutes'])
      .exactOptional()
      .openapi({
        description:
          "The units of duration used to calculate the Authorization Code. Defaults to 'Days'. May not be updated.",
      }),
    HashLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated.',
      }),
    ID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the authorization code definition. Read only.' }),
    IsDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this definition is enabled. True if generating codes is disabled.',
      }),
    Name: z
      .string()
      .openapi({
        description: 'The name of the authorization code definition. May not be updated.',
      }),
    RandomLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of "identical" authorization codes containing the same timestamp. Defaults to 5. May not be updated.',
      }),
    ValidationFields: z
      .array(AuthorizationCodesSharedModelsValidationFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'The defined fields to verify when reading authorization codes generated from this definition. May not be updated.',
      }),
  })
  .openapi({
    description:
      'Represents the model used to define how a type of authorization code is generated.',
    required: ['Name'],
  })
  .openapi('AuthorizationCodesSharedModelsAuthorizationCodeDefinition')

const APIPagedResponseMetadataSchema = z
  .object({
    Limit: z
      .int32()
      .openapi({
        description: 'The number of entities this paged response is limited to.',
        readOnly: true,
      }),
    Offset: z
      .int32()
      .openapi({
        description: 'The number of entities prior to this page of items.',
        readOnly: true,
      }),
    TotalCount: z
      .int32()
      .openapi({
        description: 'The total number of entities matching the request.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Metadata for the paged response',
    required: ['TotalCount', 'Limit', 'Offset'],
  })
  .openapi('APIPagedResponseMetadata')

const APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema = z
  .object({
    Entities: z
      .array(AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition')

const AuthorizationCodesSharedModelsParameterSchema = z
  .object({
    Name: z.string().openapi({ description: 'The name of the parameter. May not be updated.' }),
    Value: z.string().openapi({ description: 'The value of the parameter. May not be updated.' }),
  })
  .openapi({
    description: 'A parameter used to create an authorization code.',
    required: ['Name', 'Value'],
  })
  .openapi('AuthorizationCodesSharedModelsParameter')

const AuthorizationCodesSharedModelsAuthorizationCodeSchema = z
  .object({
    Code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code to enter to unlock a feature. Read only.' }),
    CreatedByUserID: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The ID of the user that created this authorization code. Read only.',
      }),
    CreatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'A timestamp of when this code was created. Read only.' }),
    DataParameters: z
      .array(AuthorizationCodesSharedModelsParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'The parameters and values contained as data in this authorization code. May not be updated.',
      }),
    DefinitionID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the definition for this authorization code. May not be updated.',
      }),
    DeletedByUserID: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The ID of the user that deleted this authorization code. Read only.',
      }),
    DeletedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'A timestamp of when this authorization code was deleted. Read only.',
      }),
    EffectiveDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A date at which this code should begin being valid. Optional. Set on create only.',
      }),
    ID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The identifier for the authorization code. Read only.' }),
    IsDeleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this code is deleted.' }),
    ValidationParameters: z
      .array(AuthorizationCodesSharedModelsParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'The parameters and values used to validate this authorization code. May not be updated.',
      }),
  })
  .openapi({
    description:
      'Represents the model containing an authorization code used to unlock a feature in machines and EDT',
    required: [],
  })
  .openapi('AuthorizationCodesSharedModelsAuthorizationCode')

const APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeSchema = z
  .object({
    Entities: z
      .array(AuthorizationCodesSharedModelsAuthorizationCodeSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode')

const AuthorizationCodesSharedModelsAuthorizationContactInformationSchema = z
  .object({
    AuthorizationCodeID: z
      .int32()
      .openapi({ description: 'AuthorizationCode ID that the contact information ties into.' }),
    Code: z.string().exactOptional().openapi({ description: 'The authorization code. Read Only.' }),
    Contact: z
      .string()
      .openapi({
        description:
          'Name of contact requesting an authorization code. Minimum length of 3 characters.',
      }),
    CreatedBy: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the user that created this code. Read Only.' }),
    CreatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date the authorization code was created.' }),
    DealerCode: z
      .string()
      .openapi({
        description: 'Dealer code that relates to the dealership. Minimum length of 3 characters.',
      }),
    Dealership: z
      .string()
      .openapi({ description: 'Name of dealership. Minimum length of 3 characters.' }),
    DefinitionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the definition used for generating this authorization code. Read Only.',
      }),
    Email: z.string().exactOptional().openapi({ description: 'Email of contact.' }),
    ID: z.int32().exactOptional().openapi({ description: 'ID of authorizationContactInformation' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional notes used for internal use.' }),
    Phone: z.string().openapi({ description: 'Phone number of contact.' }),
  })
  .openapi({ required: ['AuthorizationCodeID', 'Contact', 'Dealership', 'DealerCode', 'Phone'] })
  .openapi('AuthorizationCodesSharedModelsAuthorizationContactInformation')

const APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformationSchema = z
  .object({
    Entities: z
      .array(AuthorizationCodesSharedModelsAuthorizationContactInformationSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation')

const AuthorizationCodesSharedModelsCategorySchema = z
  .object({
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the Category.' }),
    ID: z.string().exactOptional().openapi({ description: 'The ID of the Category.' }),
    Name: z.string().exactOptional().openapi({ description: 'The Name of the Category.' }),
  })
  .openapi({ description: 'A category for Authorization Code Definitions', required: [] })
  .openapi('AuthorizationCodesSharedModelsCategory')

const AuthorizationCodesSharedModelsAuthorizationCodeUserSchema = z
  .object({
    Email: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    UserID: z.int32().exactOptional(),
    Username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorizationCodesSharedModelsAuthorizationCodeUser')

const AuthorizationCodesSharedModelsCategoryUserReportSchema = z
  .object({
    Categories: z.array(AuthorizationCodesSharedModelsCategorySchema).exactOptional(),
    User: AuthorizationCodesSharedModelsAuthorizationCodeUserSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorizationCodesSharedModelsCategoryUserReport')

const APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReportSchema = z
  .object({
    Entities: z
      .array(AuthorizationCodesSharedModelsCategoryUserReportSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport')

const APIIPagedResponseAuthorizationCodesSharedModelsCategorySchema = z
  .object({
    Entities: z
      .array(AuthorizationCodesSharedModelsCategorySchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseAuthorizationCodesSharedModelsCategory')

const GlobalResourcesSharedModelsFileDownloadSchema = z
  .object({
    CRC: z
      .string()
      .openapi({
        description:
          'The crc of the file (SHA256, HEX-encoded). Must be provided when creating a file.',
      }),
    ContentType: z
      .string()
      .openapi({ description: 'The type of file; sent as the content-type header.' }),
    Description: z.string().openapi({ description: 'The description of the file.' }),
    Id: z.string().exactOptional().openapi({ description: 'The Id of the file.' }),
    IsPublic: z
      .boolean()
      .openapi({
        description: 'Indicates whether this file is available to the public for download.',
      }),
    Name: z.string().openapi({ description: 'The name of the file when downloaded.' }),
    Path: z.string().openapi({ description: 'The Path of the file.' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only",
      }),
    State: z
      .enum(['Created', 'Available', 'Removed'])
      .openapi({
        description: "Indicates the state of this file. Must be 'Created' when created.",
      }),
  })
  .openapi({
    description: 'A language used for string translations.',
    required: ['Name', 'Description', 'ContentType', 'State', 'IsPublic', 'CRC', 'Path'],
  })
  .openapi('GlobalResourcesSharedModelsFileDownload')

const APIIPagedResponseGlobalResourcesSharedModelsFileDownloadSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsFileDownloadSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsFileDownload')

const GlobalResourcesSharedModelsGlobalImageCategorySchema = z
  .object({
    Id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id of the GlobalImage Categories.' }),
    Name: z.string().openapi({ description: 'The name of the globalImage Catetory.' }),
  })
  .openapi({ description: 'An image category from the Global Image library.', required: ['Name'] })
  .openapi('GlobalResourcesSharedModelsGlobalImageCategory')

const APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategorySchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsGlobalImageCategorySchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory')

const GlobalResourcesSharedModelsGlobalImageSchema = z
  .object({
    CRC: z.string().openapi({ description: 'The Hash of the file (SHA256, HEX-encoded).' }),
    Categories: z
      .array(GlobalResourcesSharedModelsGlobalImageCategorySchema)
      .exactOptional()
      .openapi({ description: 'The category of the file.' }),
    Date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date of the file.' }),
    Description: z.string().openapi({ description: 'The description of the file.' }),
    Height: z.int32().openapi({ description: 'The height of the file.' }),
    Id: z.string().exactOptional().openapi({ description: 'The Id of the GlobalImage Metadata.' }),
    Name: z.string().openapi({ description: 'The name of the file when downloaded.' }),
    Publisher: z.string().exactOptional().openapi({ description: 'The Publisher of the file.' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only",
      }),
    State: z
      .enum(['Created', 'Available', 'Removed'])
      .openapi({
        description: "Indicates the state of this file. Must be 'Created' when created. Read Only.",
      }),
    ThumbnailCRC: z
      .string()
      .openapi({ description: 'The Hash of the thumbnail file (SHA256, HEX-encoded).' }),
    ThumbnailSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "The size of the thumbnail file in bytes. Null until assigned by server when marked as 'Available'. Read Only",
      }),
    Width: z.int32().openapi({ description: 'The width of the file.' }),
  })
  .openapi({
    description: 'An image from the Global Image library.',
    required: ['CRC', 'ThumbnailCRC', 'State', 'Name', 'Description', 'Width', 'Height'],
  })
  .openapi('GlobalResourcesSharedModelsGlobalImage')

const APIIPagedResponseGlobalResourcesSharedModelsGlobalImageSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsGlobalImageSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsGlobalImage')

const GlobalResourcesSharedModelsLanguageSchema = z
  .object({
    Description: z
      .string()
      .openapi({
        description: 'The description of the language (e.g. “English – United States”).',
      }),
    IsDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the API supports the language. Must be false when created. Read Only.',
      }),
    LocaleId: z.int32().openapi({ description: 'The Locale Id of the language.' }),
  })
  .openapi({
    description: 'A language used for string translations.',
    required: ['LocaleId', 'Description'],
  })
  .openapi('GlobalResourcesSharedModelsLanguage')

const APIIPagedResponseGlobalResourcesSharedModelsLanguageSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsLanguageSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsLanguage')

const GlobalResourcesSharedModelsStringTranslationSchema = z
  .object({
    AuthorId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The id of the user to last edit thie translation' }),
    LanguageId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The id of the language of the translation' }),
    State: z
      .enum([
        'Original',
        'Requested',
        'Processing',
        'Processed',
        'Validated',
        'Invalidated',
        'RequestPending',
        'CreatePending',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the translation' }),
    StringId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the string that is translated' }),
    StringValue: z.string().openapi({ description: 'The translated string' }),
    Timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A value indicating the last modification of this translation. Read Only.',
      }),
  })
  .openapi({
    description: 'A translation of a string in a specific language',
    required: ['StringValue'],
  })
  .openapi('GlobalResourcesSharedModelsStringTranslation')

const GlobalResourcesSharedModelsStringDefinitionSchema = z
  .object({
    DescriptionForTranslator: z
      .string()
      .openapi({ description: 'The description of the string to be translated.' }),
    DoNotTranslate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the string should not be translated. False by default.' }),
    Id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier for the string. Read Only.' }),
    ParameterCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of parameters expected for the string.' }),
    Timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A value indicating the last modification of this string. Read Only.',
      }),
    Translations: z
      .array(GlobalResourcesSharedModelsStringTranslationSchema)
      .exactOptional()
      .openapi({ description: 'Translations for the string.' }),
  })
  .openapi({
    description: 'The definition of a string to be translated',
    required: ['DescriptionForTranslator'],
  })
  .openapi('GlobalResourcesSharedModelsStringDefinition')

const APIIPagedResponseGlobalResourcesSharedModelsStringDefinitionSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsStringDefinitionSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsStringDefinition')

const APIIPagedResponseGlobalResourcesSharedModelsStringTranslationSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsStringTranslationSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsStringTranslation')

const GlobalResourcesSharedModelsTranslationRequestSchema = z
  .object({
    ApprovalUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The ID of the user from which approval for the request is required',
      }),
    CCEmailAddresses: z
      .array(z.string())
      .openapi({
        description: 'Additional email addresses to CC on emails pertaining to the request',
      }),
    ChargeToAccount: z.string().openapi({ description: 'The account to charge for the request' }),
    Deadline: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date by which the translations in the request are needed. Defaults to 30 days from the current date',
      }),
    Id: z.int32().exactOptional().openapi({ description: 'The ID of the request' }),
    LocaleIds: z
      .array(z.int32())
      .openapi({ description: 'Locale IDs to which these strings are requested to be translated' }),
    Notes: z.string().openapi({ description: 'Additional notes or comments about the request' }),
    QuestionsUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The ID of the user to which to address questions regarding the request',
      }),
    State: z
      .enum(['NotSubmitted', 'Submitted', 'Cancelled', 'Completed'])
      .openapi({ description: 'The state of the request' }),
    SubmittedBy: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the User that submitted the request' }),
    TranslatorEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address for the translator' }),
    TranslatorName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the translator' }),
  })
  .openapi({
    description: 'A request to translate specified strings into specified locales',
    required: ['ChargeToAccount', 'Deadline', 'Notes', 'State', 'CCEmailAddresses', 'LocaleIds'],
  })
  .openapi('GlobalResourcesSharedModelsTranslationRequest')

const APIIPagedResponseGlobalResourcesSharedModelsTranslationRequestSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsTranslationRequestSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest')

const GlobalResourcesSharedModelsTranslationSetAttributeSchema = z
  .object({
    ID: z.int32().exactOptional().openapi({ description: 'The ID of this attribute.' }),
    Name: z
      .string()
      .regex(/[a-zA-Z0-9]+/)
      .openapi({ description: 'The name of this Attribute.' }),
    TranslationSetID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the translation set to which this attribute belongs.' }),
    Value: z.string().exactOptional().openapi({ description: 'The value of this Attribute' }),
  })
  .openapi({ description: 'An attribute of a', required: ['Name'] })
  .openapi('GlobalResourcesSharedModelsTranslationSetAttribute')

const APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttributeSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsTranslationSetAttributeSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute')

const GlobalResourcesSharedModelsTranslationSetSourceStringSchema = z
  .object({
    DescriptionForTranslator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A description of the string to translate. This should contain context and parameter count.',
      }),
    LanguageID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the language from which to translate the string' }),
    StringID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the string to translate' }),
    StringValue: z.string().exactOptional().openapi({ description: 'The string to translate' }),
  })
  .openapi({
    description: 'Information needed to translate a string in a translation set',
    required: [],
  })
  .openapi('GlobalResourcesSharedModelsTranslationSetSourceString')

const APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceStringSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsTranslationSetSourceStringSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString')

const GlobalResourcesSharedModelsTranslationSetStringSchema = z
  .object({
    LanguageID: z
      .int32()
      .openapi({ description: 'The ID of the language into which to translate the string' }),
    StringID: z
      .string()
      .openapi({ description: 'The Id of the string translation that has been requested' }),
    StringValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The string value returned from the translator' }),
    TranslationSetId: z.int32().openapi({ description: 'The id of the TranslationSet' }),
  })
  .openapi({
    description:
      'The resulting translation in a translation set.  is the  to which the string will be translated.',
    required: ['TranslationSetId', 'StringID', 'LanguageID'],
  })
  .openapi('GlobalResourcesSharedModelsTranslationSetString')

const APIIPagedResponseGlobalResourcesSharedModelsTranslationSetStringSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsTranslationSetStringSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString')

const GlobalResourcesSharedModelsTranslationSetSchema = z
  .object({
    Attributes: z
      .array(GlobalResourcesSharedModelsTranslationSetAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Attributes of the Translation Set' }),
    FileIDs: z
      .array(z.string())
      .openapi({
        description:
          'IDs for files related to this translation set. For example, the original and processed files',
      }),
    Id: z.int32().exactOptional().openapi({ description: 'The id of the TranslationSet.' }),
    InDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read Only. The date the translation set was returned.' }),
    Notes: z.string().exactOptional().openapi({ description: 'Notes on the TranslationSet' }),
    OutDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read Only. The date the translation set was sent out.' }),
    State: z
      .enum([
        'OutForProcessing',
        'Processing',
        'PendingApproval',
        'OutForTranslation',
        'Cancelled',
        'Completed',
      ])
      .openapi({ description: 'An enum indicating the state of the translation set' }),
    TranslationRequestID: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Read Only. The Id of the TranslationRequest which generated this translation set.',
      }),
  })
  .openapi({
    description: 'A set of strings submitted for translation',
    required: ['State', 'FileIDs'],
  })
  .openapi('GlobalResourcesSharedModelsTranslationSet')

const APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSchema = z
  .object({
    Entities: z
      .array(GlobalResourcesSharedModelsTranslationSetSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseGlobalResourcesSharedModelsTranslationSet')

const OASSupportSharedModelsTranslationKeySchema = z
  .object({
    ID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The identifier for the translationKey. Read Only.' }),
    KeyName: z
      .string()
      .openapi({ description: 'The key name of the item. One example is tkODX_HWIKM14R01' }),
    StringID: z.string().openapi({ description: 'Foreign key to StringDefinitionID' }),
  })
  .openapi({
    description:
      'A translation key to map the relationship of keyNames, usually for ODX, and string Ids',
    required: ['KeyName', 'StringID'],
  })
  .openapi('OASSupportSharedModelsTranslationKey')

const APIIPagedResponseOASSupportSharedModelsTranslationKeySchema = z
  .object({
    Entities: z
      .array(OASSupportSharedModelsTranslationKeySchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIIPagedResponseOASSupportSharedModelsTranslationKey')

const APIModelsApiErrorSchema = z
  .object({
    DeveloperMessage: z.string().exactOptional(),
    ErrorCode: z.int32().exactOptional(),
    MoreInfo: z.string().exactOptional(),
    UserMessage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIModelsApiError')

const APIModelsAuthenticatedUserSchema = z
  .object({
    Email: z.string().exactOptional().openapi({ description: "The user's email address" }),
    MACId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MAC identifier to use for API access' }),
    MACToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MAC token to use for API access' }),
    Name: z.string().exactOptional().openapi({ description: "The user's name" }),
    Token: z.string().exactOptional().openapi({ description: 'The token to use for API access' }),
    UserID: z.int32().exactOptional().openapi({ description: 'The user ID' }),
    Username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username used for authentication' }),
  })
  .openapi({ required: [] })
  .openapi('APIModelsAuthenticatedUser')

const APIModelsCredentialsSchema = z
  .object({
    BearerAction: z
      .enum(['None', 'Reset', 'Disable'])
      .exactOptional()
      .openapi({
        description: 'The action to perform on the bearer token. Optional. Defaults to ‘None’.',
      }),
    MACAction: z
      .enum(['None', 'Reset', 'Disable'])
      .exactOptional()
      .openapi({
        description: 'The action to perform on the MAC token. Optional. Defaults to ‘None’.',
      }),
    password: z
      .string()
      .openapi({ description: 'A secret word or phrase that must be used to gain admission' }),
    username: z.string().openapi({ description: 'A unique ID a user needs to login with' }),
  })
  .openapi({ required: ['username', 'password'] })
  .openapi('APIModelsCredentials')

const APIModelsLogSchema = z
  .object({
    ID: z.string().exactOptional(),
    Message: z.string().exactOptional(),
    TimeStamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIModelsLog')

const APIModelsNotificationSchema = z
  .object({
    CC_Addresses: z.array(z.string()).exactOptional(),
    IsBodyHtml: z.boolean(),
    MessageBody: z.string(),
    Subject: z.string(),
    To_Addresses: z.array(z.string()),
  })
  .openapi({ required: ['To_Addresses', 'Subject', 'MessageBody', 'IsBodyHtml'] })
  .openapi('APIModelsNotification')

const APIModelsPasswordResetSchema = z
  .object({
    NewPassword: z.string().openapi({ description: 'The new password' }),
    Token: z.string().openapi({ description: 'The password reset token' }),
  })
  .openapi({ required: ['Token', 'NewPassword'] })
  .openapi('APIModelsPasswordReset')

const APIModelsPasswordResetRequestSchema = z
  .object({
    ParameterName: z
      .string()
      .openapi({
        description:
          'The query string parameter name to use for supplying the password reset token',
      }),
    Url: z.string().openapi({ description: 'The URL to direct the user to reset the password.' }),
    Username: z.string().openapi({ description: 'The username to reset the password for' }),
  })
  .openapi({ required: ['Username', 'Url', 'ParameterName'] })
  .openapi('APIModelsPasswordResetRequest')

const APIModelsPermissionSchema = z
  .object({
    DataDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of data to be provided with Role Authorization' }),
    DataRequired: z
      .enum(['Yes', 'No', 'Optional'])
      .openapi({ description: 'Indicates if data is required or optional' }),
    Description: z.string().exactOptional(),
    Id: z.int32().exactOptional().openapi({ description: 'The identifier of the permission.' }),
    Name: z.string().openapi({ description: 'The name of the permission.' }),
  })
  .openapi({ required: ['Name', 'DataRequired'] })
  .openapi('APIModelsPermission')

const APIModelsRoleSchema = z
  .object({
    Description: z.string().openapi({ description: 'Role description' }),
    Id: z.int32().exactOptional().openapi({ description: "The role's identifier." }),
    Name: z
      .string()
      .regex(/^[0-9a-zA-Z]*?[a-zA-Z]+[0-9a-zA-Z]*$/)
      .openapi({
        description:
          'The name of the role. Must be alpha-numeric strings separated by a period (.).',
      }),
  })
  .openapi({ description: 'Defines an API Role', required: ['Name', 'Description'] })
  .openapi('APIModelsRole')

const APIModelsRolePermissionChangeSchema = z
  .object({
    Action: z.enum(['Grant', 'Revoke']).openapi({ description: 'The action to take.' }),
    Permission: z
      .string()
      .openapi({ description: 'The name of the permission to grant or revoke.' }),
  })
  .openapi({
    description: 'Change to the Permissions that a Role is given.',
    required: ['Permission', 'Action'],
  })
  .openapi('APIModelsRolePermissionChange')

const APIModelsRoleUserChangeSchema = z
  .object({
    Action: z
      .enum(['Grant', 'Revoke'])
      .openapi({ description: 'The action to take with the user' }),
    Id: z.int32().openapi({ description: 'The Id of the User' }),
  })
  .openapi({ required: ['Id', 'Action'] })
  .openapi('APIModelsRoleUserChange')

const APIModelsTokenOptionsSchema = z
  .object({
    BearerAction: z
      .enum(['None', 'Reset', 'Disable'])
      .exactOptional()
      .openapi({
        description: 'The action to perform on the bearer token. Optional. Defaults to ‘None’.',
      }),
    MACAction: z
      .enum(['None', 'Reset', 'Disable'])
      .exactOptional()
      .openapi({
        description: 'The action to perform on the MAC token. Optional. Defaults to ‘None’.',
      }),
  })
  .openapi({ required: [] })
  .openapi('APIModelsTokenOptions')

const APIModelsUserSchema = z
  .object({
    ChangePassword: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Never Returned.  When changing a user's password, this field must contain the new password.",
      }),
    Email: z.string().exactOptional().openapi({ description: "The user's email address" }),
    Name: z.string().exactOptional().openapi({ description: "The user's name" }),
    Password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password.",
      }),
    UserID: z.int32().exactOptional().openapi({ description: 'The user ID' }),
    Username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username used for authentication' }),
  })
  .openapi({ required: [] })
  .openapi('APIModelsUser')

const APIModelsUserEffectivePermissionSchema = z
  .object({
    PermissionId: z.int32().exactOptional(),
    PermissionName: z.string().exactOptional(),
    UserID: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIModelsUserEffectivePermission')

const APIModelsUserRoleChangeSchema = z
  .object({
    Action: z
      .enum(['Grant', 'Revoke'])
      .openapi({ description: 'The action to take with the role' }),
    Name: z.string().openapi({ description: 'The name of the role' }),
  })
  .openapi({ required: ['Name', 'Action'] })
  .openapi('APIModelsUserRoleChange')

const APIPagedResponseAPIModelsLogSchema = z
  .object({
    Entities: z.array(APIModelsLogSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseAPIModelsLog')

const APIPagedResponseAPIModelsPermissionSchema = z
  .object({
    Entities: z.array(APIModelsPermissionSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseAPIModelsPermission')

const APIPagedResponseAPIModelsRoleSchema = z
  .object({
    Entities: z.array(APIModelsRoleSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseAPIModelsRole')

const APIPagedResponseAPIModelsUserEffectivePermissionSchema = z
  .object({
    Entities: z.array(APIModelsUserEffectivePermissionSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseAPIModelsUserEffectivePermission')

const APIPagedResponseAPIModelsUserSchema = z
  .object({
    Entities: z.array(APIModelsUserSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseAPIModelsUser')

const BuildSystemSharedDTOParameterValueSchema = z
  .object({
    Direction: z
      .enum(['Input', 'Output'])
      .exactOptional()
      .openapi({ description: 'The parameter direction (Input or Output)' }),
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the parameter this value is for' }),
    Value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The parameter value in string representation' }),
  })
  .openapi({ description: 'A DTO for an IParameterValue', required: [] })
  .openapi('BuildSystemSharedDTOParameterValue')

const BuildSystemSharedDTOActivityRunStatusSchema = z
  .object({
    CurrentStep: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The activity step currently executing, indicated by numeric order',
      }),
    Status: z
      .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
      .exactOptional()
      .openapi({ description: 'The status of the ActivityRun' }),
    StepProgress: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The percent progress from the currently executing step.  This value shall be null if progress is not available',
      }),
    StepStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status text from the currently executing step' }),
  })
  .openapi({ description: 'A DTO for an IActivityRunStatus', required: [] })
  .openapi('BuildSystemSharedDTOActivityRunStatus')

const BuildSystemSharedDTOParameterMappingSchema = z
  .object({
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the parameter this mapping applies to' }),
    Source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source of the value.  The meaning of this value is determined by the source type.  When the source type is “Constant” then source is the value formatted as a string.  When the source type is “Variable” then the source is the name of the variable',
      }),
    SourceType: z
      .enum(['Constant', 'Variable'])
      .exactOptional()
      .openapi({ description: 'The source type used for supplying the parameter' }),
  })
  .openapi({ description: 'A DTO for an IParameterMapping', required: [] })
  .openapi('BuildSystemSharedDTOParameterMapping')

const BuildSystemSharedDTOActivityStepSchema = z
  .object({
    ActivityID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The id of the activity this activity step belongs to' }),
    ActivityStepID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The id of this activity step' }),
    ImplementationID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The implementation id which is used to look up the step implementation',
      }),
    ParameterMappings: z
      .array(BuildSystemSharedDTOParameterMappingSchema)
      .exactOptional()
      .openapi({
        description: 'The mapping of values from a source to be used for the step parameters',
        readOnly: true,
      }),
    RunOrder: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The order of this activity step relative to other activity steps' }),
    StepID: z.int32().exactOptional().openapi({ description: 'The id of the step' }),
    StepName: z.string().exactOptional().openapi({ description: 'The name of the step' }),
    UseConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration',
      }),
  })
  .openapi({ description: 'A DTO for an IActivityStep', required: [] })
  .openapi('BuildSystemSharedDTOActivityStep')

const BuildSystemSharedDTOActivityRunSchema = z
  .object({
    ActivityRunID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The identifier for the ActivityRun' }),
    EndDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read Only. The UTC date and time when the activity completed' }),
    JobActivityID: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Read Only. The ID of the Job Activity that defines this activity run',
      }),
    JobRunID: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Read Only. The ID of the JobRun under which this ActivityRun is executing',
      }),
    Parameters: z
      .array(BuildSystemSharedDTOParameterValueSchema)
      .exactOptional()
      .openapi({
        description:
          'The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated.',
        readOnly: true,
      }),
    StartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read Only. The UTC date and time when the activity started' }),
    Status: BuildSystemSharedDTOActivityRunStatusSchema,
    Steps: z
      .array(BuildSystemSharedDTOActivityStepSchema)
      .exactOptional()
      .openapi({
        description:
          'Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A DTO for an IActivityRun', required: ['Status'] })
  .openapi('BuildSystemSharedDTOActivityRun')

const APIPagedResponseBuildSystemSharedDTOActivityRunSchema = z
  .object({
    Entities: z.array(BuildSystemSharedDTOActivityRunSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseBuildSystemSharedDTOActivityRun')

const BuildSystemSharedDTOParameterSchema = z
  .object({
    Direction: z
      .enum(['Input', 'Output'])
      .exactOptional()
      .openapi({ description: 'The parameter direction (Input or Output)' }),
    Name: z.string().exactOptional().openapi({ description: 'The name of the parameter' }),
    Type: z
      .enum(['String', 'Boolean', 'Integer', 'Float', 'StringDictionary'])
      .exactOptional()
      .openapi({ description: 'The data type of the parameter' }),
  })
  .openapi({ description: 'A DTO for an IParameter', required: [] })
  .openapi('BuildSystemSharedDTOParameter')

const BuildSystemSharedDTOActivitySchema = z
  .object({
    ActivityID: z.int32().exactOptional().openapi({ description: 'The ID of the activity' }),
    Deleted: z.boolean().exactOptional().openapi({ description: '' }),
    Name: z.string().exactOptional().openapi({ description: 'The name of the activity' }),
    Parameters: z
      .array(BuildSystemSharedDTOParameterSchema)
      .exactOptional()
      .openapi({ description: 'The parameters for this activity', readOnly: true }),
    Steps: z
      .array(BuildSystemSharedDTOActivityStepSchema)
      .exactOptional()
      .openapi({ description: 'The steps which are performed for this activity', readOnly: true }),
  })
  .openapi({ description: 'A DTO for an IActivity', required: [] })
  .openapi('BuildSystemSharedDTOActivity')

const APIPagedResponseBuildSystemSharedDTOActivitySchema = z
  .object({
    Entities: z.array(BuildSystemSharedDTOActivitySchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseBuildSystemSharedDTOActivity')

const BuildSystemSharedDTOAgentStatusSchema = z
  .object({
    LastStatusUpdate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'ReadOnly. The UTC date and time of the last status update' }),
    Online: z.boolean().openapi({ description: 'Indicates if the agent is online' }),
  })
  .openapi({ description: 'A DTO for an IAgentStatus', required: ['Online'] })
  .openapi('BuildSystemSharedDTOAgentStatus')

const BuildSystemSharedDTOStepConfigurationSchema = z
  .object({
    Configurations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The configuration names supported.  The configurations collection is empty for steps which do not require configuration.',
      }),
    StepImplementationID: z
      .string()
      .openapi({ description: 'The Implementation ID of the step this configuration is for' }),
  })
  .openapi({ description: 'Step Configuration', required: ['StepImplementationID'] })
  .openapi('BuildSystemSharedDTOStepConfiguration')

const BuildSystemSharedDTOAgentSchema = z
  .object({
    AgentID: z.int32().exactOptional().openapi({ description: 'The id of the Agent' }),
    KeepAliveInterval: z
      .int32()
      .openapi({ description: "The 'Heartbeat Interval' used by the Build Agent." }),
    MachineName: z
      .string()
      .openapi({ description: 'The machine name of the computer the agent is running on' }),
    Status: BuildSystemSharedDTOAgentStatusSchema,
    StepConfigurations: z
      .array(BuildSystemSharedDTOStepConfigurationSchema)
      .exactOptional()
      .openapi({ description: "The agent's step configurations", readOnly: true }),
    UserID: z.int32().openapi({ description: 'The UserID of the Agent' }),
  })
  .openapi({
    description: 'A DTO for an IAgent',
    required: ['UserID', 'MachineName', 'Status', 'KeepAliveInterval'],
  })
  .openapi('BuildSystemSharedDTOAgent')

const APIPagedResponseBuildSystemSharedDTOAgentSchema = z
  .object({
    Entities: z.array(BuildSystemSharedDTOAgentSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseBuildSystemSharedDTOAgent')

const BuildSystemSharedDTOJobRunSchema = z
  .object({
    ActivityRuns: z
      .array(BuildSystemSharedDTOActivityRunSchema)
      .exactOptional()
      .openapi({ description: 'The activity runs belonging to this JobRun', readOnly: true }),
    EndDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The UTC date and time when the job completed' }),
    JobID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the job that defines the run' }),
    JobRunID: z.int32().exactOptional().openapi({ description: 'The ID of this JobRun' }),
    Parameters: z
      .array(BuildSystemSharedDTOParameterValueSchema)
      .exactOptional()
      .openapi({ description: 'The parameters used for this run of the job', readOnly: true }),
    StartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The UTC date and time when the job started' }),
    Status: z
      .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
      .exactOptional()
      .openapi({ description: 'The status of this JobRun' }),
  })
  .openapi({ description: 'A DTO for an IJobRun', required: [] })
  .openapi('BuildSystemSharedDTOJobRun')

const APIPagedResponseBuildSystemSharedDTOJobRunSchema = z
  .object({
    Entities: z.array(BuildSystemSharedDTOJobRunSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseBuildSystemSharedDTOJobRun')

const BuildSystemSharedDTOJobActivitySchema = z
  .object({
    ActivityID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the activity to be run as part of the job' }),
    JobActivityID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of this job activity' }),
    JobID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the job this job activity belongs to' }),
    ParameterMappings: z
      .array(BuildSystemSharedDTOParameterMappingSchema)
      .exactOptional()
      .openapi({
        description: 'The mapping of values from a source to be used for the activity parameters',
        readOnly: true,
      }),
    RunOrder: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The order of this job activity relative to others in the job' }),
  })
  .openapi({ description: 'A DTO for an IJobActivity', required: [] })
  .openapi('BuildSystemSharedDTOJobActivity')

const BuildSystemSharedDTOJobSchema = z
  .object({
    Activities: z
      .array(BuildSystemSharedDTOJobActivitySchema)
      .exactOptional()
      .openapi({ description: 'The activities which are performed for the job', readOnly: true }),
    Deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the job has been deleted.' }),
    JobID: z.int32().exactOptional().openapi({ description: 'The ID of the job' }),
    Name: z.string().exactOptional().openapi({ description: 'The name of the job' }),
    Parameters: z
      .array(BuildSystemSharedDTOParameterSchema)
      .exactOptional()
      .openapi({ description: 'The parameters for the job', readOnly: true }),
  })
  .openapi({ description: 'A DTO for an IJob', required: [] })
  .openapi('BuildSystemSharedDTOJob')

const APIPagedResponseBuildSystemSharedDTOJobSchema = z
  .object({
    Entities: z.array(BuildSystemSharedDTOJobSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseBuildSystemSharedDTOJob')

const BuildSystemSharedDTOStepSchema = z
  .object({
    ConfigRequired: z
      .boolean()
      .openapi({
        description:
          'Indicates if the step requires configuration values to be provided by the build agent',
      }),
    Deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Read Only.  Indicates if the record is deleted.' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the step to be presented to a user' }),
    ImplementationID: z
      .string()
      .openapi({
        description:
          'The implementation ID used to lookup the step implementation when it is executed',
      }),
    Name: z.string().openapi({ description: 'The name of the step' }),
    Parameters: z
      .array(BuildSystemSharedDTOParameterSchema)
      .exactOptional()
      .openapi({ description: 'The parameters for this step', readOnly: true }),
    StepID: z.int32().exactOptional().openapi({ description: 'The ID of the step' }),
  })
  .openapi({ description: 'Step', required: ['Name', 'ConfigRequired', 'ImplementationID'] })
  .openapi('BuildSystemSharedDTOStep')

const APIPagedResponseBuildSystemSharedDTOStepSchema = z
  .object({
    Entities: z.array(BuildSystemSharedDTOStepSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseBuildSystemSharedDTOStep')

const ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema = z
  .object({
    ContentDefinitionID: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The ID of the content definition to which this attribute belongs.',
      }),
    ID: z.int32().exactOptional().openapi({ description: 'The ID of this attribute.' }),
    Name: z
      .string()
      .regex(/[a-zA-Z0-9]+/)
      .openapi({ description: 'The name of this Attribute.' }),
    Value: z.string().exactOptional().openapi({ description: 'The value of this Attribute' }),
  })
  .openapi({
    description: 'An attribute of a definition of the content for submission',
    required: ['Name'],
  })
  .openapi('ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute')

const APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema = z
  .object({
    Entities: z
      .array(ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema)
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute')

const ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema = z
  .object({
    Attributes: z
      .array(ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Attributes of this ContentDefinition' }),
    ContentDefinitionID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of this content definition.' }),
    Description: z
      .string()
      .openapi({
        description: 'The description used on the package type in the AGCO Update System',
      }),
    Name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of this content. Name must be valid for Attribute on PackageType.',
      }),
    PackageTypeID: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. The ID of the package type used for this content.' }),
    TypeID: z.int32().exactOptional().openapi({ description: 'The type of content.' }),
  })
  .openapi({
    description: 'The definition of the content for submission',
    required: ['Description'],
  })
  .openapi('ContentSubmissionSharedBusinessEntitiesContentDefinition')

const APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionSchema = z
  .object({
    Entities: z
      .array(ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema)
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition')

const ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema = z
  .object({
    ContentDefinitionID: z.int32().exactOptional().openapi({ description: 'ContentDefinitionID' }),
    ContentReleaseID: z.int32().exactOptional().openapi({ description: 'ContentReleaseID' }),
    Deleted: z.boolean().exactOptional().openapi({ description: 'deleted flag' }),
    PublisherUserID: z.int32().exactOptional().openapi({ description: 'PublisherUser ID' }),
    ReleaseID: z.int32().exactOptional().openapi({ description: 'rele4ase Id' }),
    TestReportUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL at which test reports for this content can be found' }),
    UpdatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Updated Date' }),
    Version: z.int32().exactOptional().openapi({ description: 'version' }),
  })
  .openapi({ description: 'ContentReleaseVersion class', required: [] })
  .openapi('ContentSubmissionSharedBusinessEntitiesContentReleaseVersion')

const APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema = z
  .object({
    Entities: z
      .array(ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema)
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion')

const ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema = z
  .object({
    ContentSubmissionID: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The ID of the content submission to which this attribute belongs.',
      }),
    ID: z.int32().exactOptional().openapi({ description: 'The ID of this attribute.' }),
    Name: z
      .string()
      .regex(/[a-zA-Z0-9]+/)
      .openapi({ description: 'The name of this Attribute.' }),
    Value: z.string().exactOptional().openapi({ description: 'The value of this Attribute' }),
  })
  .openapi({ description: 'The definition of the content for submission', required: ['Name'] })
  .openapi('ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute')

const APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema = z
  .object({
    Entities: z
      .array(ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema)
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute')

const ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema = z
  .object({
    Attributes: z
      .array(ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Attributes of this ContentSubmission' }),
    BuildID: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'ReadOnly. The ID of the Azure DevOps Build which will build the content package.',
      }),
    ContentDefinitionID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the Content Definition.' }),
    ContentSubmissionID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of this Content Submission.' }),
    Definition: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema.exactOptional(),
    JobRunID: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'ReadOnly. The ID of the JobRun which will build the content package.',
      }),
    PackageID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of package generated by this content submission.' }),
    ReleaseNotes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Release Notes for this ContentSubmission' }),
    Repository: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SVN repository used as the source of this content submission' }),
    Revision: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The SVN revision used as the source of this content submission.' }),
    SubmissionDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Read Only. The UTC date and time the content submission was made.',
      }),
    UserID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Read Only. The ID of the user who submitted the content' }),
    Version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional.  The version number assigned to this Content Submission and the resulting Package.\r\n            If not provided, version shall be 1 if it is the first content submission for the \r\n            ContentDefinitionID otherwise it shall be the highest content submission version for the\r\n            specified ContentDefinitionID incremented by 1.',
      }),
  })
  .openapi({ description: 'A content submission', required: [] })
  .openapi('ContentSubmissionSharedBusinessEntitiesContentSubmission')

const APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionSchema = z
  .object({
    Entities: z
      .array(ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema)
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission')

const ContentSubmissionSharedBusinessEntitiesReleaseSchema = z
  .object({
    BuildDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Build Date' }),
    BundleIDs: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of AUC Bundles associated with this Release.' }),
    ReleaseDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Release Date' }),
    ReleaseID: z.int32().exactOptional().openapi({ description: 'Release ID' }),
    ReleaseNumber: z.string().exactOptional().openapi({ description: 'Release Number' }),
    Visible: z.boolean().exactOptional().openapi({ description: 'Visible' }),
  })
  .openapi({ description: 'Release class', required: [] })
  .openapi('ContentSubmissionSharedBusinessEntitiesRelease')

const APIPagedResponseContentSubmissionSharedBusinessEntitiesReleaseSchema = z
  .object({
    Entities: z
      .array(ContentSubmissionSharedBusinessEntitiesReleaseSchema)
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease')

const ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema = z
  .object({
    ContentDefinitionID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the ContentDefinition.' }),
    UserContentDefinitionID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Read Only. The ID of the User to ContentDefinition relationship.' }),
    UserID: z.int32().exactOptional().openapi({ description: 'The ID of the user.' }),
  })
  .openapi({
    description: 'Relationship indicating that a User can manage submissions for the Content',
    required: [],
  })
  .openapi('ContentSubmissionSharedBusinessEntitiesUserContentDefinition')

const APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema = z
  .object({
    Entities: z
      .array(ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema)
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition')

const DealerDBModelsDealerSchema = z
  .object({
    BillingAddress: z.string().exactOptional(),
    BillingAddress2: z.string().exactOptional(),
    BillingAddress3: z.string().exactOptional(),
    BillingAddress4: z.string().exactOptional(),
    BillingCity: z.string().exactOptional(),
    BillingCountry: z.string().exactOptional(),
    BillingCountryCode: z.string().exactOptional(),
    BillingState: z.string().exactOptional(),
    BillingZip: z.string().exactOptional(),
    Brands: z.array(z.string()).exactOptional().openapi({ readOnly: true }),
    DealerCode: z.string().exactOptional(),
    DealerName: z.string().exactOptional(),
    DealerStatus: z.string().exactOptional(),
    DealerStatusUpdateDate: z.string().exactOptional(),
    Filler: z.string().exactOptional(),
    IsValid: z.boolean().exactOptional().openapi({ readOnly: true }),
    LanguagePreference: z.string().exactOptional(),
    Region1: z.string().exactOptional(),
    Region2: z.string().exactOptional(),
    RegionMapping: z.string().exactOptional(),
    RoleBrand: z.string().exactOptional(),
    ShippingAddress2: z.string().exactOptional(),
    ShippingAddress3: z.string().exactOptional(),
    ShippingAddress4: z.string().exactOptional(),
    ShippingCity: z.string().exactOptional(),
    ShippingCountry: z.string().exactOptional(),
    ShippingState: z.string().exactOptional(),
    ShippingStreet: z.string().exactOptional(),
    ShippingZip: z.string().exactOptional(),
    Telephone: z.string().exactOptional(),
    VATCode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DealerDBModelsDealer')

const APIPagedResponseDealerDBModelsDealerSchema = z
  .object({
    Entities: z.array(DealerDBModelsDealerSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseDealerDBModelsDealer')

const DealerDBModelsDealersPerCountrySchema = z
  .object({ Count: z.int32().exactOptional(), Country: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DealerDBModelsDealersPerCountry')

const APIPagedResponseDealerDBModelsDealersPerCountrySchema = z
  .object({
    Entities: z.array(DealerDBModelsDealersPerCountrySchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseDealerDBModelsDealersPerCountry')

const DealerDBModelsLicenseSchema = z
  .object({
    Active: z.boolean().exactOptional().openapi({ description: 'True if license is active.' }),
    CreatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date the license was created.' }),
    DeactivatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date the license was deactivated.' }),
    LicenseActivationType: z
      .enum(['EDT', 'EDTLite'])
      .exactOptional()
      .openapi({ description: 'The type of license (e.g. EDT, EDT Lite)' }),
    LicenseID: z.string().exactOptional().openapi({ description: 'The LicenseID' }),
    LicenseVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the license.' }),
    RefreshDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date the license was refreshed.' }),
    SystemInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Information about the system which is licensed.' }),
    UpdatedLicenseVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The updated version of the license.  A value in this field indicates that the update has not been confirmed.',
      }),
    VoucherCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The voucher code that generated the license.' }),
  })
  .openapi({ required: [] })
  .openapi('DealerDBModelsLicense')

const APIPagedResponseDealerDBModelsLicenseSchema = z
  .object({
    Entities: z.array(DealerDBModelsLicenseSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseDealerDBModelsLicense')

const DealerDBModelsVoucherHistorySchema = z
  .object({
    ChangedDate: z.iso.datetime({ offset: true }).exactOptional(),
    CreatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read-Only. The date the voucher was created.' }),
    DealerCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The dealer code the voucher is assigned to.  Required for commercial vouchers.',
      }),
    Deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Read-Only. True if voucher has been deleted.' }),
    Email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address. Required for Internal Vouchers' }),
    ExpirationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The expiration date of the voucher. Required for Temporary Vouchers.',
      }),
    ID: z.int32().exactOptional().openapi({ description: 'The id of the voucher history item' }),
    LicenseTo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for Internal Vouchers' }),
    ModifiedBy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Read-Only. The user that made the last modification to the voucher.',
      }),
    OrderNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The order number of a commercial license. Required for Commercial Vouchers. Not supported for other Vouchers.',
      }),
    Punched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if voucher has aleady been used.  False if the voucher has not been used.',
      }),
    PunchedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read-Only. The date the voucher was punched.' }),
    Purpose: z.string().exactOptional().openapi({ description: 'Required for Internal Vouchers' }),
    Type: z
      .enum(['Commercial', 'Internal', 'Temporary', 'RightToRepair'])
      .exactOptional()
      .openapi({ description: 'The type of voucher.' }),
    VoucherCode: z.string().exactOptional().openapi({ description: 'The voucher code.' }),
  })
  .openapi({ required: [] })
  .openapi('DealerDBModelsVoucherHistory')

const APIPagedResponseDealerDBModelsVoucherHistorySchema = z
  .object({
    Entities: z.array(DealerDBModelsVoucherHistorySchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseDealerDBModelsVoucherHistory')

const DealerDBModelsVoucherSchema = z
  .object({
    CreatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read-Only. The date the voucher was created.' }),
    DealerCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The dealer code the voucher is assigned to.  Required for commercial and right to repair vouchers.',
      }),
    Deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Read-Only. True if voucher has been deleted.' }),
    Email: z.string().exactOptional().openapi({ description: 'Required for internal vouchers.' }),
    ExpirationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The expiration date of the voucher. Required for Temporary and Right to Repair Vouchers.',
      }),
    LicenseTo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for Internal Vouchers' }),
    ModifiedBy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Read-Only. The user that made the last modification to the voucher.',
      }),
    OrderNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The order number of a license. Required for Commercial and Right To Repair Vouchers. Not supported for other Vouchers.',
      }),
    Punched: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if voucher has aleady been used.  False if the voucher has not been used.',
      }),
    PunchedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read-Only. The date the voucher was punched.' }),
    Purpose: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required for Internal Vouchers. Not supported for other Vouchers.',
      }),
    Type: z
      .enum(['Commercial', 'Internal', 'Temporary', 'RightToRepair'])
      .exactOptional()
      .openapi({ description: 'The type of voucher. Commercial is the default if not specified.' }),
    VoucherCode: z.string().exactOptional().openapi({ description: 'The voucher code.' }),
  })
  .openapi({ description: 'A voucher for EDT activation', required: [] })
  .openapi('DealerDBModelsVoucher')

const APIPagedResponseDealerDBModelsVoucherSchema = z
  .object({
    Entities: z.array(DealerDBModelsVoucherSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseDealerDBModelsVoucher')

const UpdateSystemModelsPackageTypeSchema = z
  .object({
    Attribute: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed.',
      }),
    Category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The inventory category (from the InventoryPackage) used to determine what version of this package type is installed.',
      }),
    Description: z.string().openapi({ description: 'The description of the package type' }),
    Icon: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional.  The icon to use for the PackageType, in base 64' }),
    InventoryFrequency: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours).',
      }),
    InventoryPackage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The inventory package used to determine what version of this package type is installed.',
      }),
    LocalizedDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The StringID used to localize the description of the PackageType',
      }),
    LocalizedName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The StringID used to localize the name of the PackageType',
      }),
    MaxDeltaPackages: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of "chained" delta packages to use when updating the client',
      }),
    PackageTypeID: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. The package type id.' }),
  })
  .openapi({ required: ['Description'] })
  .openapi('UpdateSystemModelsPackageType')

const UpdateSystemModelsAvailableSubscriptionSchema = z
  .object({
    PackageType: UpdateSystemModelsPackageTypeSchema.exactOptional(),
    SubscriptionType: z
      .enum(['Required', 'IncludeByDefault', 'ExcludeByDefault'])
      .exactOptional()
      .openapi({ description: 'The type of subscription supported.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsAvailableSubscription')

const UpdateSystemModelsUpdateGroupSchema = z
  .object({
    Description: z.string().openapi({ description: 'The description of the update group' }),
    ID: z.string().exactOptional(),
    InventoryFrequency: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The time in minutes between inventory checks. Default value is 1440 minutes (one day).',
      }),
    InventoryPackage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Package ID of the package used for inventory' }),
    LocalizedDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The StringID used to localize the description of the update group',
      }),
    LocalizedName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The StringID used to localize the name of the update group',
      }),
    Priority: z
      .int32()
      .min(1)
      .max(100)
      .openapi({
        description:
          'The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.',
      }),
    ReportField: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A field to return in the status report for this update group.\r\n            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})',
      }),
    UpdateType: z.string().openapi({ description: 'The update type name' }),
    ValidatingField: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A field used for validation in the status report for this update group.\r\n            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})',
      }),
    ValueToValidate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value to validate the ValidationField against.' }),
    Version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType',
      }),
  })
  .openapi({ required: ['Description', 'UpdateType', 'Priority'] })
  .openapi('UpdateSystemModelsUpdateGroup')

const UpdateSystemModelsAvailableUpdateGroupSubscriptionSchema = z
  .object({
    AvailableSubscriptions: z
      .array(UpdateSystemModelsAvailableSubscriptionSchema)
      .exactOptional()
      .openapi({ description: 'The available subscriptions for this update group.' }),
    UpdateGroup: UpdateSystemModelsUpdateGroupSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsAvailableUpdateGroupSubscription')

const APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscriptionSchema = z
  .object({
    Entities: z
      .array(UpdateSystemModelsAvailableUpdateGroupSubscriptionSchema)
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription')

const UpdateSystemModelsBundleSchema = z
  .object({
    Active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default Value: false. During the creation of the Bundle, this field must be false.',
      }),
    BundleID: z.string().exactOptional().openapi({ description: 'Read-Only.' }),
    BundleNumber: z.int32().openapi({ description: 'The bundle number' }),
    Description: z.string().openapi({ description: 'The Bundle description.' }),
    UpdateGroupID: z.string().openapi({ description: 'The update group this bundle belongs to.' }),
  })
  .openapi({ required: ['Description', 'UpdateGroupID', 'BundleNumber'] })
  .openapi('UpdateSystemModelsBundle')

const APIPagedResponseUpdateSystemModelsBundleSchema = z
  .object({
    Entities: z.array(UpdateSystemModelsBundleSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsBundle')

const UpdateSystemModelsClientStatusSchema = z
  .object({
    ClientID: z.string().exactOptional().openapi({ description: 'The Client ID' }),
    LastCheckin: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "The time of the client's last check-in" }),
    MinutesElapsed: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of minutes that have passed since the last check-in' }),
    ReportResult: z
      .string()
      .exactOptional()
      .openapi({ description: "The result for the client included in the UpdateGroup's report" }),
    ReportResultIsValid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the result for the client matches what is expected for the UpdateGroup',
      }),
    ReportValue: z
      .string()
      .exactOptional()
      .openapi({ description: "The value for the client included in the UpdateGroup's report" }),
    Tag: z.string().exactOptional().openapi({ description: 'A descriptive name for the client' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsClientStatus')

const UpdateSystemModelsPagedClientStatusMetadataSchema = z
  .object({
    Limit: z
      .int32()
      .openapi({
        description: 'The number of entities this paged response is limited to.',
        readOnly: true,
      }),
    Offset: z
      .int32()
      .openapi({
        description: 'The number of entities prior to this page of items.',
        readOnly: true,
      }),
    ReportResultExpected: z
      .string()
      .openapi({ description: 'The label for data contained in ClientStatus.ReportResults' }),
    ReportResultLabel: z
      .string()
      .openapi({ description: 'The label for data contained in ClientStatus.ReportResults' }),
    ReportValueLabel: z
      .string()
      .openapi({ description: 'The label for data contained in ClientStatus.ReportValue' }),
    TotalCount: z
      .int32()
      .openapi({
        description: 'The total number of entities matching the request.',
        readOnly: true,
      }),
  })
  .openapi({
    required: [
      'TotalCount',
      'Limit',
      'Offset',
      'ReportValueLabel',
      'ReportResultLabel',
      'ReportResultExpected',
    ],
  })
  .openapi('UpdateSystemModelsPagedClientStatusMetadata')

const APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadataSchema =
  z
    .object({
      Entities: z.array(UpdateSystemModelsClientStatusSchema).openapi({ readOnly: true }),
      Metadata: UpdateSystemModelsPagedClientStatusMetadataSchema,
    })
    .openapi({
      description: 'A response containing a page of results and metadata concerning the results',
      required: ['Metadata', 'Entities'],
    })
    .openapi(
      'APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata',
    )

const UpdateSystemModelsClientSchema = z
  .object({
    ClientID: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. The id of the client' }),
    LastCheckin: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "Read Only. The time of the client's last checkin with the server.",
      }),
    Tag: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the client that can be used for easy reference' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsClient')

const APIPagedResponseUpdateSystemModelsClientSchema = z
  .object({
    Entities: z.array(UpdateSystemModelsClientSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsClient')

const UpdateSystemModelsPackageStatusSchema = z
  .object({
    ClientID: z.string().exactOptional().openapi({ description: 'The id of the client' }),
    ClientKey: z.string().exactOptional().openapi({ description: "The client's tag" }),
    DownloadTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of time spent downloading' }),
    Downloaded: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of bytes downloaded' }),
    InstallCompleted: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the package completed' }),
    InstallResult: z.string().exactOptional().openapi({ description: 'The package result' }),
    InstallStarted: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the package was started' }),
    InstallTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of time required to run the package' }),
    Percentage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The download completion percentage' }),
    Size: z.string().exactOptional().openapi({ description: 'The total size of the package' }),
    Timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time the status was last updated' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsPackageStatus')

const UpdateSystemModelsPackageStatusSummarySchema = z
  .object({
    AverageDownloadTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The average time required to complete the download' }),
    AverageInstallTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The average time required to complete the install' }),
    Downloaded: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of clients that have completed the download',
      }),
    Error: z.int32().exactOptional().openapi({ description: 'The result of the install' }),
    Installed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of clients that have completed the install',
      }),
    Package: z.string().exactOptional().openapi({ description: 'The name of the package' }),
    PackageID: z.string().exactOptional().openapi({ description: 'The ID of the package' }),
    PackageStatusItems: z
      .array(UpdateSystemModelsPackageStatusSchema)
      .exactOptional()
      .openapi({ description: 'The individual package status items' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsPackageStatusSummary')

const APIPagedResponseUpdateSystemModelsPackageStatusSummarySchema = z
  .object({
    Entities: z.array(UpdateSystemModelsPackageStatusSummarySchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsPackageStatusSummary')

const UpdateSystemModelsPackageTypeIDtoBundleSchema = z
  .object({
    BundleID: z.string().openapi({ description: 'The bundle to include the package in.' }),
    PackageTypeID: z
      .string()
      .openapi({ description: 'The package type id of the package to include' }),
    PackageVersion: z
      .int32()
      .openapi({ description: 'The package version of the package to include' }),
    Priority: z
      .int32()
      .min(1)
      .max(100)
      .openapi({
        description:
          'The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.',
      }),
    SubscriptionType: z
      .enum(['Required', 'IncludeByDefault', 'ExcludeByDefault'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The type of subscription supported.  The default subscription type is Required.',
      }),
  })
  .openapi({ required: ['BundleID', 'PackageTypeID', 'PackageVersion', 'Priority'] })
  .openapi('UpdateSystemModelsPackageTypeIDtoBundle')

const APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundleSchema = z
  .object({
    Entities: z.array(UpdateSystemModelsPackageTypeIDtoBundleSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle')

const APIPagedResponseUpdateSystemModelsPackageTypeSchema = z
  .object({
    Entities: z.array(UpdateSystemModelsPackageTypeSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsPackageType')

const UpdateSystemModelsPackageSchema = z
  .object({
    Autorun: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Value is true if package should run automatically. Default value is false.',
      }),
    CRC: z.string().openapi({ description: 'The CRC used to validate the download.' }),
    Description: z.string().openapi({ description: 'The package description' }),
    LocalizedName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The StringID used to localize the name of the Package' }),
    Notes: z.string().exactOptional().openapi({ description: 'Notes about the package' }),
    PackageID: z.string().exactOptional().openapi({ description: 'Read Only. The package ID' }),
    PackageTypeID: z
      .string()
      .openapi({ description: 'The id of the package type this package belongs to.' }),
    PreviousVersion: z
      .int32()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.',
      }),
    ReleaseDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date the package was released' }),
    Released: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the package is released.  Default value is False.' }),
    RemoveOnSuccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True to remove the package after successful execution.  Default value is False.',
      }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.\r\n            If the size provided does not match the size in the response from the URL an error will be returned.',
      }),
    Switches: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The command line arguments for the package.  Default value is an empty string.',
      }),
    Url: z.string().openapi({ description: 'The Url to download the package from.' }),
    Version: z.int32().min(1).max(2147483647).openapi({ description: 'The version.' }),
  })
  .openapi({ required: ['PackageTypeID', 'Url', 'CRC', 'Version', 'Description', 'ReleaseDate'] })
  .openapi('UpdateSystemModelsPackage')

const APIPagedResponseUpdateSystemModelsPackageSchema = z
  .object({
    Entities: z.array(UpdateSystemModelsPackageSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsPackage')

const UpdateSystemModelsPriorityPackageSchema = z
  .object({
    Autorun: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Read Only. From the package specified by package ID.\r\n            Value is true if package should run automatically. Default value is false.',
      }),
    CRC: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. From the package specified by package ID.' }),
    ClientID: z
      .string()
      .openapi({ description: 'The ID of the client to receive the priority package' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. From the package specified by package ID.' }),
    Notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. From the package specified by package ID.' }),
    PackageID: z
      .string()
      .openapi({ description: 'The ID of the package to push as a priority package.' }),
    PackageTypeID: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. From the package specified by package ID.' }),
    PreviousVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Read Only. From the package specified by package ID.' }),
    PriorityPackageID: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. The ID of the priority package.' }),
    ReleaseDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Read Only. From the package specified by package ID.\r\n            The date the package was released',
      }),
    Released: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Read Only. From the package specified by package ID.' }),
    RemoveOnSuccess: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Read Only. From the package specified by package ID.' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Read Only. From the package specified by package ID.',
      }),
    Switches: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The command line arguments for the priority package.  Default value is an empty string.',
      }),
    TimeStamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read Only. The timestamp of the priority package.' }),
    Url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. From the package specified by package ID.' }),
    Version: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Read Only. From the package specified by package ID.' }),
  })
  .openapi({ required: ['ClientID', 'PackageID'] })
  .openapi('UpdateSystemModelsPriorityPackage')

const APIPagedResponseUpdateSystemModelsPriorityPackageSchema = z
  .object({
    Entities: z.array(UpdateSystemModelsPriorityPackageSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsPriorityPackage')

const UpdateSystemModelsUpdateGroupClientRelationshipSchema = z
  .object({
    Active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The subscription status.  The status is active by default.' }),
    ClientID: z
      .string()
      .openapi({ description: 'Read Only after creation. The client id of the subscriber.' }),
    LastCheckin: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'ReadOnly. The timestamp of the last checkin.' }),
    RelationshipID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation.',
      }),
    UpdateGroupID: z
      .string()
      .openapi({ description: 'Read Only after creation. The update group to subscribe to.' }),
  })
  .openapi({ required: ['UpdateGroupID', 'ClientID'] })
  .openapi('UpdateSystemModelsUpdateGroupClientRelationship')

const APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationshipSchema = z
  .object({
    Entities: z
      .array(UpdateSystemModelsUpdateGroupClientRelationshipSchema)
      .openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship')

const UpdateSystemModelsUpdateGroupSubscriptionSchema = z
  .object({
    ClientID: z.string().openapi({ description: 'The ClientID.' }),
    Include: z
      .boolean()
      .openapi({ description: 'True to receive content of type indicated by PackageTypeID.' }),
    PackageTypeID: z
      .string()
      .openapi({ description: 'The PackageType to set subscription status for' }),
    UpdateGroupID: z
      .string()
      .openapi({ description: 'The Update Group this subscription is relevant for.' }),
    UpdateGroupSubscriptionID: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.',
      }),
  })
  .openapi({ required: ['UpdateGroupID', 'PackageTypeID', 'ClientID', 'Include'] })
  .openapi('UpdateSystemModelsUpdateGroupSubscription')

const APIPagedResponseUpdateSystemModelsUpdateGroupSubscriptionSchema = z
  .object({
    Entities: z.array(UpdateSystemModelsUpdateGroupSubscriptionSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsUpdateGroupSubscription')

const APIPagedResponseUpdateSystemModelsUpdateGroupSchema = z
  .object({
    Entities: z.array(UpdateSystemModelsUpdateGroupSchema).openapi({ readOnly: true }),
    Metadata: APIPagedResponseMetadataSchema,
  })
  .openapi({
    description: 'A response containing a page of results and metadata concerning the results',
    required: ['Metadata', 'Entities'],
  })
  .openapi('APIPagedResponseUpdateSystemModelsUpdateGroup')

const AuthorizationCodesSharedModelsCodeValidationModelSchema = z
  .object({
    ExpirationDate: z.iso.datetime({ offset: true }).exactOptional(),
    IsValid: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorizationCodesSharedModelsCodeValidationModel')

const BuildSystemSharedInterfacesIParameterValueSchema = z
  .object({
    Direction: z
      .enum(['Input', 'Output'])
      .exactOptional()
      .openapi({
        description:
          'Gets or sets a value indicating whether the parameter value is an \r\n            input to the build part or an output from the build part.',
      }),
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the name of the parameter.' }),
    Value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the value of the parameter.' }),
  })
  .openapi({
    description: 'Declares members that must be implemented by parameter value objects.',
    required: [],
  })
  .openapi('BuildSystemSharedInterfacesIParameterValue')

const BuildSystemSharedInterfacesIActivityRunStatusSchema = z
  .object({
    CurrentStep: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Gets or sets the number of the step the activity is currently running.',
      }),
    Status: z
      .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
      .exactOptional()
      .openapi({ description: 'Gets or sets the status of the activity run.' }),
    StepProgress: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Gets or sets a measurement of the current progress of the current step.',
      }),
    StepStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Gets or sets a description of the current status of the currently \r\n            running step.',
      }),
  })
  .openapi({
    description:
      'Declares members of objects that communicate the progress of an \r\n            asynchronous activity run.',
    required: [],
  })
  .openapi('BuildSystemSharedInterfacesIActivityRunStatus')

const BuildSystemSharedInterfacesIParameterMappingSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'name' }),
    Source: z.string().exactOptional().openapi({ description: 'Source' }),
    SourceType: z
      .enum(['Constant', 'Variable'])
      .exactOptional()
      .openapi({ description: 'SourceType' }),
  })
  .openapi({ description: 'IParameterMapping', required: [] })
  .openapi('BuildSystemSharedInterfacesIParameterMapping')

const BuildSystemSharedInterfacesIActivityStepSchema = z
  .object({
    ActivityID: z.int32().exactOptional().openapi({ description: 'ActivityID' }),
    ActivityStepID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'ActivityStepID', readOnly: true }),
    ImplementationID: z
      .string()
      .exactOptional()
      .openapi({ description: 'Implementation ID', readOnly: true }),
    ParameterMappings: z
      .array(BuildSystemSharedInterfacesIParameterMappingSchema)
      .exactOptional()
      .openapi({ description: 'ParameterMappings' }),
    RunOrder: z.int32().exactOptional().openapi({ description: 'run order' }),
    StepID: z.int32().exactOptional().openapi({ description: 'step id' }),
    StepName: z.string().exactOptional().openapi({ description: 'steo name', readOnly: true }),
    UseConfig: z.string().exactOptional().openapi({ description: 'UseConfig' }),
  })
  .openapi({ description: 'IActivityStep', required: [] })
  .openapi('BuildSystemSharedInterfacesIActivityStep')

const BuildSystemSharedInterfacesIActivityRunSchema = z
  .object({
    ActivityRunID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'ActivityRunID', readOnly: true }),
    EndDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'EndDate', readOnly: true }),
    JobActivityID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'JobActivityID', readOnly: true }),
    JobRunID: z.int32().exactOptional().openapi({ description: 'JobRunID', readOnly: true }),
    Parameters: z
      .array(BuildSystemSharedInterfacesIParameterValueSchema)
      .exactOptional()
      .openapi({ description: 'Parameters' }),
    StartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'StartDate', readOnly: true }),
    Status: BuildSystemSharedInterfacesIActivityRunStatusSchema.exactOptional(),
    Steps: z
      .array(BuildSystemSharedInterfacesIActivityStepSchema)
      .exactOptional()
      .openapi({ description: 'Steps', readOnly: true }),
  })
  .openapi({ description: 'IActivityRun', required: [] })
  .openapi('BuildSystemSharedInterfacesIActivityRun')

const BuildSystemSharedInterfacesIJobRunSchema = z
  .object({
    ActivityRuns: z
      .array(BuildSystemSharedInterfacesIActivityRunSchema)
      .exactOptional()
      .openapi({ description: 'ActivityRuns' }),
    EndDate: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: 'end date' }),
    JobID: z.int32().exactOptional().openapi({ description: 'job id' }),
    JobRunID: z.int32().exactOptional().openapi({ description: 'JobRunID', readOnly: true }),
    Parameters: z
      .array(BuildSystemSharedInterfacesIParameterValueSchema)
      .exactOptional()
      .openapi({ description: 'Parameters', readOnly: true }),
    StartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Start Date' }),
    Status: z
      .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
      .exactOptional()
      .openapi({ description: 'status' }),
  })
  .openapi({ description: 'interface of JobRun', required: [] })
  .openapi('BuildSystemSharedInterfacesIJobRun')

const ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema = z
  .object({
    AttributeTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A template for the Attribute from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}',
      }),
    BuildDefinitionID: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The ID of the Azure DevOps Build Definition for which to create a Build. Either 'BuildDefinitionID' or 'JobID' is required.",
      }),
    CategoryTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A template for the category from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}',
      }),
    Description: z
      .string()
      .openapi({ description: 'A description for the Content Submission Type' }),
    Enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this submission type is available to be used' }),
    ID: z.int32().exactOptional().openapi({ description: 'The ID of the Content Submission Type' }),
    InventoryPackageID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Inventory Package from which to read the version of the package installed.',
      }),
    JobID: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The ID of the JobDefinition for which to initiate a Job. A value of '0' will cause a submission to fail. Either 'BuildDefinitionID' or 'JobID' is required.",
      }),
    Name: z.string().openapi({ description: 'The Name of the Content Submission Type' }),
    ReleaseNotesDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of how release notes for this Content Submission Type are used',
      }),
  })
  .openapi({
    description: 'A type of content available for submission',
    required: ['Name', 'Description'],
  })
  .openapi('ContentSubmissionSharedBusinessEntitiesContentSubmissionType')

const DealerDBModelsEDTLiteRegistrationSchema = z
  .object({
    DealerCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dealer code with which the EDT Lite was created.' }),
    ExpirationDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date at which the content of the EDT Lite expires.' }),
    InstanceID: z.string().openapi({ description: 'The identifier for the EDT Lite.' }),
    VoucherCode: z
      .string()
      .openapi({ description: 'The voucher code with which the EDT Lite was created.' }),
  })
  .openapi({
    description: 'Registration for an EDT Lite',
    required: ['InstanceID', 'VoucherCode', 'ExpirationDate'],
  })
  .openapi('DealerDBModelsEDTLiteRegistration')

const DealerDBModelsLicenseActivationSchema = z
  .object({
    Key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The license key in base64 format.  This is only provided when the LicenseData is a new license.',
      }),
    LicenseData: z
      .string()
      .exactOptional()
      .openapi({ description: 'The license data in base64 format.' }),
  })
  .openapi({ required: [] })
  .openapi('DealerDBModelsLicenseActivation')

const DealerDBModelsLicenseActivationConfirmSchema = z
  .object({ LicenseVersion: z.string().openapi({ description: 'The license version to confirm' }) })
  .openapi({ required: ['LicenseVersion'] })
  .openapi('DealerDBModelsLicenseActivationConfirm')

const DealerDBModelsLicenseActivationCreateSchema = z
  .object({
    DealerCode: z
      .string()
      .openapi({ description: 'The Dealer Code of the dealer activating the license' }),
    LicenseActivationType: z
      .enum(['EDT', 'EDTLite'])
      .exactOptional()
      .openapi({ description: 'The type of license to create (e.g. EDT, EDT Lite)' }),
    PostalCode: z.string().openapi({ description: "The dealer's postal code (zip code)" }),
    SystemInfo: z
      .string()
      .openapi({ description: 'Information about  the system being activated' }),
    VoucherCode: z.string().openapi({ description: 'The Voucher Code to use for activation' }),
  })
  .openapi({ required: ['VoucherCode', 'DealerCode', 'PostalCode', 'SystemInfo'] })
  .openapi('DealerDBModelsLicenseActivationCreate')

const DealerDBModelsLicenseActivationUpdateSchema = z
  .object({
    LicenseVersion: z.string().openapi({ description: 'The license version to update' }),
    SystemInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Information about  the system being activated' }),
  })
  .openapi({ required: ['LicenseVersion'] })
  .openapi('DealerDBModelsLicenseActivationUpdate')

const GlobalResourcesSharedModelsTranslationSetStatisticsSchema = z
  .object({
    LanguageIDs: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The IDs of languages for which translaions in this translation set have been requested',
      }),
    StringCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The count of unique string definitions contained in this translation set',
      }),
  })
  .openapi({ description: 'Statistics for a translation set', required: [] })
  .openapi('GlobalResourcesSharedModelsTranslationSetStatistics')

const SystemObjectSchema = z.object({}).openapi('SystemObject')

const UpdateSystemModelsAttributeValueSchema = z
  .object({
    Key: z.string().openapi({ description: 'The attribute name' }),
    TimeStamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Read Only. The timestamp.' }),
    Value: z.string().exactOptional().openapi({ description: 'The value' }),
  })
  .openapi({ required: ['Key'] })
  .openapi('UpdateSystemModelsAttributeValue')

const UpdateSystemModelsCategorySchema = z
  .object({
    Values: z.array(UpdateSystemModelsAttributeValueSchema).exactOptional(),
    category: z.string().openapi({ description: 'The category name' }),
  })
  .openapi({ required: ['category'] })
  .openapi('UpdateSystemModelsCategory')

const UpdateSystemModelsCheckinResultSchema = z
  .object({
    Packages: z
      .array(UpdateSystemModelsPackageSchema)
      .exactOptional()
      .openapi({ description: 'The packages for the client to run.' }),
    RemovePackages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The package ids for the client to remove.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsCheckinResult')

const UpdateSystemModelsPackageReportSchema = z
  .object({
    Categories: z
      .array(UpdateSystemModelsCategorySchema)
      .exactOptional()
      .openapi({ description: "The package report's categories." }),
    PackageDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Read Only. The package description' }),
    PackageID: z.string().exactOptional().openapi({ description: 'The PackageID.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsPackageReport')

const UpdateSystemModelsClientInfoSchema = z
  .object({
    ClientID: z.string().exactOptional().openapi({ description: 'The id of the client' }),
    Package: z
      .array(UpdateSystemModelsPackageReportSchema)
      .exactOptional()
      .openapi({ description: 'The packages' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsClientInfo')

const UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecordSchema = z
  .object({
    BundleNumber: z.int32().exactOptional(),
    ClientCount: z.int32().exactOptional(),
    ReleaseName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord')

const UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecordSchema = z
  .object({ ClientCount: z.int32().exactOptional(), State: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord')

const UpdateSystemModelsUpdateMetricsDataPackageErrorsRecordSchema = z
  .object({
    ClientCount: z.int32().exactOptional(),
    ErrorCode: z.string().exactOptional(),
    LongDescription: z.string().exactOptional(),
    ShortDescription: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord')

const UpdateSystemModelsUpdateMetricsDataSchema = z
  .object({
    ActiveVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Active version (bundle number) of update type.' }),
    ActiveVersionByClient: z
      .array(UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecordSchema)
      .exactOptional()
      .openapi({ description: 'Generic collection that is of type ActiveVersionByClientRecord' }),
    CurrentStateByClient: z
      .array(UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecordSchema)
      .exactOptional()
      .openapi({ description: 'Generic collection that is of type CurrentStateByClientRecord' }),
    CutOffDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date that has been configured to only show the most recent clients with a cut off date. (Ex. year from current date)',
      }),
    DataRefreshed: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Data was refreshed at this time.' }),
    FilteredClientCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sum of clients represented\r\n            Filtered by updateType and lastCheckedInDate',
      }),
    PackageErrors: z
      .array(UpdateSystemModelsUpdateMetricsDataPackageErrorsRecordSchema)
      .exactOptional()
      .openapi({ description: 'Generic collection that is of type PackageErrorsRecord' }),
    TotalClientCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total clients we have ever serviced' }),
  })
  .openapi({ description: 'Model that retrieves the data for UpdateMetrics', required: [] })
  .openapi('UpdateSystemModelsUpdateMetricsData')

const APIModelsUserRequestBody = {
  description: 'The user',
  content: {
    'application/json': { schema: APIModelsUserSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          ChangePassword: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "Never Returned.  When changing a user's password, this field must contain the new password.",
            }),
          Email: z.string().exactOptional().openapi({ description: "The user's email address" }),
          Name: z.string().exactOptional().openapi({ description: "The user's name" }),
          Password: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password.",
            }),
          UserID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({ description: 'The user ID' }),
          Username: z
            .string()
            .exactOptional()
            .openapi({ description: 'The username used for authentication' }),
        })
        .openapi({ required: [] }),
    },
    'application/xml': { schema: APIModelsUserSchema },
    'text/json': { schema: APIModelsUserSchema },
    'text/xml': { schema: APIModelsUserSchema },
  },
  required: true,
}

const AuthorizationCodesSharedModelsAuthorizationCodeDefinitionRequestBody = {
  description: 'An authorization code definition.',
  content: {
    'application/json': { schema: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          AuthorizationID: z
            .string()
            .exactOptional()
            .openapi({ description: 'The value used for securing codes generated.' }),
          CreatedByUserID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description: 'The ID of the user that created this definition. Read only.',
            }),
          CreatedDate: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description: 'A timestamp of when this definition was created. Read only.',
            }),
          DataFields: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z
                  .object({
                    DigitsPrecision: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          "The number of decimal digits to be used by this data field. Required only by the 'Float' data type. Must be in range 1 - 15.",
                      }),
                    MaxExponent: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          "The maximum exponent to be used by this data field. Required only by the 'Float' data type. May not be greater than 307.",
                      }),
                    MaxValue: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          "The maximum value that can be represented by this data field. Required only by the 'Decimal' data type.",
                      }),
                    MinExponent: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          "The minimum exponent to be used by this data field. Required only by the 'Float' data type. May not be less than -292.",
                      }),
                    MinValue: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          "The minimum value that can be represented by this data field. Required only by the 'Decimal' data type.",
                      }),
                    Name: z.string().openapi({ description: 'The name of the field.' }),
                    ScaleFactor: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          "The resolution of values that can be represented by this data field. The base value is multiplied by this to compute the final value. Required only by the 'Decimal' data type.",
                      }),
                    Signed: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        z.boolean(),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          "Indicates whether this value is signed. Required only by the 'Float' data type.",
                      }),
                    Type: z
                      .enum(['Boolean', 'Decimal', 'Float', 'VariableLengthByteArray'])
                      .openapi({ description: 'The type of this data field.' }),
                  })
                  .openapi({ required: ['Type', 'Name'] }),
              ),
            )
            .exactOptional()
            .openapi({
              description:
                'The defined fields to include in authorization codes generated from this definition. May not be updated.',
            }),
          DeletedByUserID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description: 'The ID of the user that deleted this definition. Read only.',
            }),
          DeletedDate: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description: 'A timestamp of when this definition was deleted. Read only.',
            }),
          Description: z
            .string()
            .exactOptional()
            .openapi({ description: 'A description of this definition. May not be updated.' }),
          DurationAccuracy: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description:
                'The number of bits used for timestamp verification. Defaults to 5. May not be updated.',
            }),
          DurationAmount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description:
                'The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated.',
            }),
          DurationUnits: z
            .enum(['Weeks', 'Days', 'Hours', 'Minutes'])
            .exactOptional()
            .openapi({
              description:
                "The units of duration used to calculate the Authorization Code. Defaults to 'Days'. May not be updated.",
            }),
          HashLength: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description:
                'The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated.',
            }),
          ID: z
            .string()
            .exactOptional()
            .openapi({ description: 'The ID of the authorization code definition. Read only.' }),
          IsDeleted: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional()
            .openapi({
              description:
                'Indicates whether this definition is enabled. True if generating codes is disabled.',
            }),
          Name: z
            .string()
            .openapi({
              description: 'The name of the authorization code definition. May not be updated.',
            }),
          RandomLength: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description:
                'The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of "identical" authorization codes containing the same timestamp. Defaults to 5. May not be updated.',
            }),
          ValidationFields: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(AuthorizationCodesSharedModelsValidationFieldSchema),
            )
            .exactOptional()
            .openapi({
              description:
                'The defined fields to verify when reading authorization codes generated from this definition. May not be updated.',
            }),
        })
        .openapi({
          description:
            'Represents the model used to define how a type of authorization code is generated.',
          required: ['Name'],
        }),
    },
    'application/xml': { schema: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema },
    'text/json': { schema: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema },
    'text/xml': { schema: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema },
  },
  required: true,
}

const AuthorizationCodesSharedModelsCategoryRequestBody = {
  description: 'An authorization category.',
  content: {
    'application/json': { schema: AuthorizationCodesSharedModelsCategorySchema },
    'application/x-www-form-urlencoded': { schema: AuthorizationCodesSharedModelsCategorySchema },
    'application/xml': { schema: AuthorizationCodesSharedModelsCategorySchema },
    'text/json': { schema: AuthorizationCodesSharedModelsCategorySchema },
    'text/xml': { schema: AuthorizationCodesSharedModelsCategorySchema },
  },
  required: true,
}

const ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeArrayRequestBody = {
  content: {
    'application/json': {
      schema: z.array(ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema),
    },
    'application/x-www-form-urlencoded': {
      schema: z.preprocess(
        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
        z.array(
          z
            .object({
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The ID of the content definition to which this attribute belongs.',
                }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this attribute.' }),
              Name: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .openapi({ description: 'The name of this Attribute.' }),
              Value: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value of this Attribute' }),
            })
            .openapi({
              description: 'An attribute of a definition of the content for submission',
              required: ['Name'],
            }),
        ),
      ),
    },
    'application/xml': {
      schema: z.array(ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema),
    },
    'text/json': {
      schema: z.array(ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema),
    },
    'text/xml': {
      schema: z.array(ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema),
    },
  },
  required: true,
}

const ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeArrayRequestBody = {
  content: {
    'application/json': {
      schema: z.array(ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema),
    },
    'application/x-www-form-urlencoded': {
      schema: z.preprocess(
        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
        z.array(
          z
            .object({
              ContentSubmissionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The ID of the content submission to which this attribute belongs.',
                }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this attribute.' }),
              Name: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .openapi({ description: 'The name of this Attribute.' }),
              Value: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value of this Attribute' }),
            })
            .openapi({
              description: 'The definition of the content for submission',
              required: ['Name'],
            }),
        ),
      ),
    },
    'application/xml': {
      schema: z.array(ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema),
    },
    'text/json': {
      schema: z.array(ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema),
    },
    'text/xml': {
      schema: z.array(ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema),
    },
  },
  required: true,
}

const ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeRequestBody = {
  description: 'The Content Submission Type',
  content: {
    'application/json': {
      schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema,
    },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          AttributeTemplate: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A template for the Attribute from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}',
            }),
          BuildDefinitionID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description:
                "The ID of the Azure DevOps Build Definition for which to create a Build. Either 'BuildDefinitionID' or 'JobID' is required.",
            }),
          CategoryTemplate: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A template for the category from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}',
            }),
          Description: z
            .string()
            .openapi({ description: 'A description for the Content Submission Type' }),
          Enabled: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional()
            .openapi({
              description: 'Indicates whether this submission type is available to be used',
            }),
          ID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({ description: 'The ID of the Content Submission Type' }),
          InventoryPackageID: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The ID of the Inventory Package from which to read the version of the package installed.',
            }),
          JobID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description:
                "The ID of the JobDefinition for which to initiate a Job. A value of '0' will cause a submission to fail. Either 'BuildDefinitionID' or 'JobID' is required.",
            }),
          Name: z.string().openapi({ description: 'The Name of the Content Submission Type' }),
          ReleaseNotesDescription: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A description of how release notes for this Content Submission Type are used',
            }),
        })
        .openapi({
          description: 'A type of content available for submission',
          required: ['Name', 'Description'],
        }),
    },
    'application/xml': {
      schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema,
    },
    'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema },
    'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema },
  },
  required: true,
}

const GlobalResourcesSharedModelsLanguageRequestBody = {
  content: {
    'application/json': { schema: GlobalResourcesSharedModelsLanguageSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          Description: z
            .string()
            .openapi({
              description: 'The description of the language (e.g. “English – United States”).',
            }),
          IsDeleted: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional()
            .openapi({
              description:
                'Indicates whether the API supports the language. Must be false when created. Read Only.',
            }),
          LocaleId: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .openapi({ description: 'The Locale Id of the language.' }),
        })
        .openapi({
          description: 'A language used for string translations.',
          required: ['LocaleId', 'Description'],
        }),
    },
    'application/xml': { schema: GlobalResourcesSharedModelsLanguageSchema },
    'text/json': { schema: GlobalResourcesSharedModelsLanguageSchema },
    'text/xml': { schema: GlobalResourcesSharedModelsLanguageSchema },
  },
  required: true,
}

const GlobalResourcesSharedModelsTranslationRequestRequestBody = {
  content: {
    'application/json': { schema: GlobalResourcesSharedModelsTranslationRequestSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          ApprovalUserId: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description: 'The ID of the user from which approval for the request is required',
            }),
          CCEmailAddresses: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string()),
            )
            .openapi({
              description: 'Additional email addresses to CC on emails pertaining to the request',
            }),
          ChargeToAccount: z
            .string()
            .openapi({ description: 'The account to charge for the request' }),
          Deadline: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'The date by which the translations in the request are needed. Defaults to 30 days from the current date',
            }),
          Id: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({ description: 'The ID of the request' }),
          LocaleIds: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                ),
              ),
            )
            .openapi({
              description: 'Locale IDs to which these strings are requested to be translated',
            }),
          Notes: z
            .string()
            .openapi({ description: 'Additional notes or comments about the request' }),
          QuestionsUserId: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description: 'The ID of the user to which to address questions regarding the request',
            }),
          State: z
            .enum(['NotSubmitted', 'Submitted', 'Cancelled', 'Completed'])
            .openapi({ description: 'The state of the request' }),
          SubmittedBy: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({ description: 'The ID of the User that submitted the request' }),
          TranslatorEmail: z
            .string()
            .exactOptional()
            .openapi({ description: 'The email address for the translator' }),
          TranslatorName: z
            .string()
            .exactOptional()
            .openapi({ description: 'The name of the translator' }),
        })
        .openapi({
          description: 'A request to translate specified strings into specified locales',
          required: [
            'ChargeToAccount',
            'Deadline',
            'Notes',
            'State',
            'CCEmailAddresses',
            'LocaleIds',
          ],
        }),
    },
    'application/xml': { schema: GlobalResourcesSharedModelsTranslationRequestSchema },
    'text/json': { schema: GlobalResourcesSharedModelsTranslationRequestSchema },
    'text/xml': { schema: GlobalResourcesSharedModelsTranslationRequestSchema },
  },
  required: true,
}

const GlobalResourcesSharedModelsTranslationSetAttributeRequestBody = {
  content: {
    'application/json': { schema: GlobalResourcesSharedModelsTranslationSetAttributeSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          ID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({ description: 'The ID of this attribute.' }),
          Name: z
            .string()
            .regex(/[a-zA-Z0-9]+/)
            .openapi({ description: 'The name of this Attribute.' }),
          TranslationSetID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description: 'The ID of the translation set to which this attribute belongs.',
            }),
          Value: z.string().exactOptional().openapi({ description: 'The value of this Attribute' }),
        })
        .openapi({ description: 'An attribute of a', required: ['Name'] }),
    },
    'application/xml': { schema: GlobalResourcesSharedModelsTranslationSetAttributeSchema },
    'text/json': { schema: GlobalResourcesSharedModelsTranslationSetAttributeSchema },
    'text/xml': { schema: GlobalResourcesSharedModelsTranslationSetAttributeSchema },
  },
  required: true,
}

const GlobalResourcesSharedModelsTranslationSetAttributeArrayRequestBody = {
  content: {
    'application/json': {
      schema: z.array(GlobalResourcesSharedModelsTranslationSetAttributeSchema),
    },
    'application/x-www-form-urlencoded': {
      schema: z.preprocess(
        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
        z.array(
          z
            .object({
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this attribute.' }),
              Name: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .openapi({ description: 'The name of this Attribute.' }),
              TranslationSetID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The ID of the translation set to which this attribute belongs.',
                }),
              Value: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value of this Attribute' }),
            })
            .openapi({ description: 'An attribute of a', required: ['Name'] }),
        ),
      ),
    },
    'application/xml': {
      schema: z.array(GlobalResourcesSharedModelsTranslationSetAttributeSchema),
    },
    'text/json': { schema: z.array(GlobalResourcesSharedModelsTranslationSetAttributeSchema) },
    'text/xml': { schema: z.array(GlobalResourcesSharedModelsTranslationSetAttributeSchema) },
  },
  required: true,
}

const OASSupportSharedModelsTranslationKeyRequestBody = {
  content: {
    'application/json': { schema: OASSupportSharedModelsTranslationKeySchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          ID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({ description: 'The identifier for the translationKey. Read Only.' }),
          KeyName: z
            .string()
            .openapi({ description: 'The key name of the item. One example is tkODX_HWIKM14R01' }),
          StringID: z.string().openapi({ description: 'Foreign key to StringDefinitionID' }),
        })
        .openapi({
          description:
            'A translation key to map the relationship of keyNames, usually for ODX, and string Ids',
          required: ['KeyName', 'StringID'],
        }),
    },
    'application/xml': { schema: OASSupportSharedModelsTranslationKeySchema },
    'text/json': { schema: OASSupportSharedModelsTranslationKeySchema },
    'text/xml': { schema: OASSupportSharedModelsTranslationKeySchema },
  },
  required: true,
}

const UpdateSystemModelsUpdateGroupSubscriptionArrayRequestBody = {
  content: {
    'application/json': { schema: z.array(UpdateSystemModelsUpdateGroupSubscriptionSchema) },
    'application/x-www-form-urlencoded': {
      schema: z.preprocess(
        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
        z.array(
          z
            .object({
              ClientID: z.string().openapi({ description: 'The ClientID.' }),
              Include: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description: 'True to receive content of type indicated by PackageTypeID.',
                }),
              PackageTypeID: z
                .string()
                .openapi({ description: 'The PackageType to set subscription status for' }),
              UpdateGroupID: z
                .string()
                .openapi({ description: 'The Update Group this subscription is relevant for.' }),
              UpdateGroupSubscriptionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.',
                }),
            })
            .openapi({ required: ['UpdateGroupID', 'PackageTypeID', 'ClientID', 'Include'] }),
        ),
      ),
    },
    'application/xml': { schema: z.array(UpdateSystemModelsUpdateGroupSubscriptionSchema) },
    'text/json': { schema: z.array(UpdateSystemModelsUpdateGroupSubscriptionSchema) },
    'text/xml': { schema: z.array(UpdateSystemModelsUpdateGroupSubscriptionSchema) },
  },
  required: true,
}

export const getApiV2AftermarketServicesCertificatesRoute = createRoute({
  method: 'get',
  path: '/api/v2/AftermarketServices/Certificates',
  tags: ['AftermarketServices'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'AftermarketServices_GetCerts',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2AftermarketServicesECUsSerialNumberRoute = createRoute({
  method: 'put',
  path: '/api/v2/AftermarketServices/ECUs/{serialNumber}',
  tags: ['AftermarketServices'],
  summary: 'Activate or Deactivate an ECU, or Report an ECU as Damaged.',
  description: 'No Documentation Found.',
  operationId: 'AftermarketServices_PutECU',
  request: {
    params: z.object({
      serialNumber: z
        .string()
        .openapi({
          param: {
            description: 'The serial number of the ECU.',
            in: 'path',
            name: 'serialNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      EDTInstanceId: z
        .string()
        .openapi({
          param: {
            description: 'The EDT Instance Id of the kit calling this method.',
            in: 'query',
            name: 'EDTInstanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The ecu to modify.',
      content: {
        'application/json': { schema: AGCOPowerServicesModelsECUSchema },
        'application/x-www-form-urlencoded': { schema: AGCOPowerServicesModelsECUSchema },
        'application/xml': { schema: AGCOPowerServicesModelsECUSchema },
        'text/json': { schema: AGCOPowerServicesModelsECUSchema },
        'text/xml': { schema: AGCOPowerServicesModelsECUSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: AGCOPowerServicesModelsECUSchema },
        'application/xml': { schema: AGCOPowerServicesModelsECUSchema },
        'text/json': { schema: AGCOPowerServicesModelsECUSchema },
        'text/xml': { schema: AGCOPowerServicesModelsECUSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute = createRoute({
  method: 'get',
  path: '/api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes',
  tags: ['AftermarketServices'],
  summary: 'Get injector codes given engine.',
  description: 'No Documentation Found.',
  operationId: 'AftermarketServices_GetEngineIQACodes',
  request: {
    params: z.object({
      serialNumber: z
        .string()
        .openapi({
          param: {
            description: 'The serial number of the engine.',
            in: 'path',
            name: 'serialNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      EDTInstanceId: z
        .string()
        .openapi({
          param: {
            description: 'The EDT Instance Id of the kit calling this method.',
            in: 'query',
            name: 'EDTInstanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute = createRoute({
  method: 'put',
  path: '/api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes',
  tags: ['AftermarketServices'],
  summary: 'Report the IQA codes used by an engine',
  description: 'No Documentation Found.',
  operationId: 'AftermarketServices_PutIQACodes',
  request: {
    params: z.object({
      serialNumber: z
        .string()
        .openapi({
          param: {
            description: 'The serial number of the Engine',
            in: 'path',
            name: 'serialNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      EDTInstanceId: z
        .string()
        .openapi({
          param: {
            description: 'The EDT Instance Id of the kit calling this method.',
            in: 'query',
            name: 'EDTInstanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'A string array of IQA codes in physical order',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          ),
        },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.boolean() },
        'application/xml': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
        'text/xml': { schema: z.boolean() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AftermarketServicesEnginesSerialNumberProductionDataRoute = createRoute({
  method: 'get',
  path: '/api/v2/AftermarketServices/Engines/{serialNumber}/ProductionData',
  tags: ['AftermarketServices'],
  summary: 'Get production calibration data for given engine.',
  description: 'No Documentation Found.',
  operationId: 'AftermarketServices_GetProductionData',
  request: {
    params: z.object({
      serialNumber: z
        .string()
        .openapi({
          param: {
            description: 'The serial number of the engine.',
            in: 'path',
            name: 'serialNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      EDTInstanceId: z
        .string()
        .openapi({
          param: {
            description: 'The EDT Instance Id of the kit calling this method.',
            in: 'query',
            name: 'EDTInstanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(AGCOPowerServicesModelsProductionDataSchema) },
        'application/xml': { schema: z.array(AGCOPowerServicesModelsProductionDataSchema) },
        'text/json': { schema: z.array(AGCOPowerServicesModelsProductionDataSchema) },
        'text/xml': { schema: z.array(AGCOPowerServicesModelsProductionDataSchema) },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AftermarketServicesHelloRoute = createRoute({
  method: 'get',
  path: '/api/v2/AftermarketServices/Hello',
  tags: ['AftermarketServices'],
  summary: 'Check whether there is connectivity to AGCO Power Web Services',
  description: 'No Documentation Found.',
  operationId: 'AftermarketServices_GetConnectionStatus',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.boolean() },
        'application/xml': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
        'text/xml': { schema: z.boolean() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AftermarketServicesUserStatusesRoute = createRoute({
  method: 'get',
  path: '/api/v2/AftermarketServices/UserStatuses',
  tags: ['AftermarketServices'],
  summary: 'Retrieve the status of an EDT Kit Registration with AGCO Power Web Services',
  description: 'No Documentation Found.',
  operationId: 'AftermarketServices_GetUserStatus',
  request: {
    query: z.object({
      voucherCode: z
        .string()
        .openapi({
          param: { in: 'query', name: 'voucherCode', required: true, schema: { type: 'string' } },
        }),
      dealerCode: z
        .string()
        .openapi({
          param: { in: 'query', name: 'dealerCode', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: AGCOPowerServicesModelsUserStatusSchema },
        'application/xml': { schema: AGCOPowerServicesModelsUserStatusSchema },
        'text/json': { schema: AGCOPowerServicesModelsUserStatusSchema },
        'text/xml': { schema: AGCOPowerServicesModelsUserStatusSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2AftermarketServicesUserStatusesRoute = createRoute({
  method: 'put',
  path: '/api/v2/AftermarketServices/UserStatuses',
  tags: ['AftermarketServices'],
  summary: 'Update the status of an EDT Kit Registration with AGCO Power Web Services',
  description: 'No Documentation Found.',
  operationId: 'AftermarketServices_UpdateUserStatus',
  request: {
    body: {
      content: {
        'application/json': { schema: AGCOPowerServicesModelsUserStatusSchema },
        'application/x-www-form-urlencoded': { schema: AGCOPowerServicesModelsUserStatusSchema },
        'application/xml': { schema: AGCOPowerServicesModelsUserStatusSchema },
        'text/json': { schema: AGCOPowerServicesModelsUserStatusSchema },
        'text/xml': { schema: AGCOPowerServicesModelsUserStatusSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.boolean() },
        'application/xml': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
        'text/xml': { schema: z.boolean() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2AuthenticatedUsersUserIDTokensRoute = createRoute({
  method: 'put',
  path: '/api/v2/AuthenticatedUsers/{UserID}/Tokens',
  tags: ['Authentication'],
  summary: 'Manage API tokens.',
  description: 'No Documentation Found.',
  operationId: 'Authentication_PutManageTokens',
  request: {
    params: z.object({
      UserID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'UserID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The options for token management.',
      content: {
        'application/json': { schema: APIModelsTokenOptionsSchema },
        'application/x-www-form-urlencoded': { schema: APIModelsTokenOptionsSchema },
        'application/xml': { schema: APIModelsTokenOptionsSchema },
        'text/json': { schema: APIModelsTokenOptionsSchema },
        'text/xml': { schema: APIModelsTokenOptionsSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiV2AuthenticationRoute = createRoute({
  method: 'post',
  path: '/api/v2/Authentication',
  tags: ['Authentication'],
  summary: 'Authenticate a user.',
  description: 'No Documentation Found.',
  operationId: 'Authentication_Default',
  request: {
    body: {
      description: 'Create a user account.',
      content: {
        'application/json': { schema: APIModelsCredentialsSchema },
        'application/x-www-form-urlencoded': { schema: APIModelsCredentialsSchema },
        'application/xml': { schema: APIModelsCredentialsSchema },
        'text/json': { schema: APIModelsCredentialsSchema },
        'text/xml': { schema: APIModelsCredentialsSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIModelsAuthenticatedUserSchema },
        'application/xml': { schema: APIModelsAuthenticatedUserSchema },
        'text/json': { schema: APIModelsAuthenticatedUserSchema },
        'text/xml': { schema: APIModelsAuthenticatedUserSchema },
      },
    },
  },
})

export const getApiV2AuthenticationIsAliveRoute = createRoute({
  method: 'get',
  path: '/api/v2/Authentication/IsAlive',
  tags: ['Authentication'],
  summary: 'Acknowledges the connection to the API',
  description: 'No Documentation Found.',
  operationId: 'Authentication_IsAlive',
  responses: { 204: { description: 'No Content' } },
})

export const postApiV2AuthenticationRequestPasswordResetRoute = createRoute({
  method: 'post',
  path: '/api/v2/Authentication/RequestPasswordReset',
  tags: ['Authentication'],
  summary: 'Request a password reset.',
  description: 'No Documentation Found.',
  operationId: 'Authentication_RequestPasswordReset',
  request: {
    body: {
      description: 'The password reset request.',
      content: {
        'application/json': { schema: APIModelsPasswordResetRequestSchema },
        'application/x-www-form-urlencoded': { schema: APIModelsPasswordResetRequestSchema },
        'application/xml': { schema: APIModelsPasswordResetRequestSchema },
        'text/json': { schema: APIModelsPasswordResetRequestSchema },
        'text/xml': { schema: APIModelsPasswordResetRequestSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiV2AuthenticationResetPaswordRoute = createRoute({
  method: 'post',
  path: '/api/v2/Authentication/ResetPasword',
  tags: ['Authentication'],
  summary: 'Reset a password',
  description: 'No Documentation Found.',
  operationId: 'Authentication_ResetPasword',
  request: {
    body: {
      description: 'The password reset detail.',
      content: {
        'application/json': { schema: APIModelsPasswordResetSchema },
        'application/x-www-form-urlencoded': { schema: APIModelsPasswordResetSchema },
        'application/xml': { schema: APIModelsPasswordResetSchema },
        'text/json': { schema: APIModelsPasswordResetSchema },
        'text/xml': { schema: APIModelsPasswordResetSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiV2AuthorizationCategoriesRoute = createRoute({
  method: 'get',
  path: '/api/v2/AuthorizationCategories',
  tags: ['AuthorizationCategories'],
  summary: 'Get authorization categories.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCategories_Get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter by categories visible to the provided user with the provided userID.',
            in: 'query',
            name: 'userID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      definitionID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter by categories containing a definition with the provided ID.',
            in: 'query',
            name: 'definitionID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsCategorySchema,
        },
        'application/xml': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsCategorySchema,
        },
        'text/json': { schema: APIIPagedResponseAuthorizationCodesSharedModelsCategorySchema },
        'text/xml': { schema: APIIPagedResponseAuthorizationCodesSharedModelsCategorySchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2AuthorizationCategoriesRoute = createRoute({
  method: 'post',
  path: '/api/v2/AuthorizationCategories',
  tags: ['AuthorizationCategories'],
  summary: 'Add an authorization category.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCategories_Post',
  request: { body: AuthorizationCodesSharedModelsCategoryRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AuthorizationCategoriesUsersRoute = createRoute({
  method: 'get',
  path: '/api/v2/AuthorizationCategories/Users',
  tags: ['AuthorizationCategories'],
  summary: 'Returns a report of access that users have to Authorization Categories.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCategories_GetUsers',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Defaults to 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Defaults to 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      userIDs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Includes only users with IDs on the provided comma-separated list.',
            in: 'query',
            name: 'userIDs',
            required: false,
            schema: { type: 'string' },
          },
        }),
      categoryIDs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Includes only users with categories with IDs on the provided comma-separated list.',
            in: 'query',
            name: 'categoryIDs',
            required: false,
            schema: { type: 'string' },
          },
        }),
      includeCategories: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include full Authorization Category detail. Defaults to false.',
            in: 'query',
            name: 'includeCategories',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      includeUsers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include full User detail. Defaults to false.',
            in: 'query',
            name: 'includeUsers',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      userSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Includes only users with a Name, Username, or Email containing the provided value.',
            in: 'query',
            name: 'userSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReportSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReportSchema,
        },
        'text/json': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReportSchema,
        },
        'text/xml': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReportSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2AuthorizationCategoriesIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/AuthorizationCategories/{id}',
  tags: ['AuthorizationCategories'],
  summary: 'Update an authorization category.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCategories_Put',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: AuthorizationCodesSharedModelsCategoryRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2AuthorizationCategoriesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/AuthorizationCategories/{id}',
  tags: ['AuthorizationCategories'],
  summary: 'Remove an authorization category.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCategories_Delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the authorization category.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const postApiV2AuthorizationCategoriesIdUsersUserIDRoute = createRoute({
  method: 'post',
  path: '/api/v2/AuthorizationCategories/{id}/Users/{userID}',
  tags: ['AuthorizationCategories'],
  summary: 'Add a category that a user can see.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCategories_AddUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2AuthorizationCategoriesIdUsersUserIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/AuthorizationCategories/{id}/Users/{userID}',
  tags: ['AuthorizationCategories'],
  summary: 'Deletes a category a user could see.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCategories_RemoveUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2AuthorizationCodeDefinitionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/AuthorizationCodeDefinitions',
  tags: ['AuthorizationCodeDefinitions'],
  summary: 'Get authorization code definitions.',
  description:
    'Additional searches: validationFields[Name]=true and dataFields[Name]=true. These can be used to search for authorization code definitions that have the specified data or validation fields.',
  operationId: 'AuthorizationCodeDefinitions_GetAuthorizationCodeDefinition',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If specified, filters definitions by name. Starting and ending wildcards (*) supported.',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdByUserID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If specified, filters definitions to those created by the given User ID.',
            in: 'query',
            name: 'createdByUserID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      deletedByUserID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If specified, filters definitions to those deleted by the given User ID.',
            in: 'query',
            name: 'deletedByUserID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: "Optional. Whether to include deleted definitions. 'False' by default.",
            in: 'query',
            name: 'includeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      categoryID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If specified, filters definitions with the designated categoryID.',
            in: 'query',
            name: 'categoryID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema,
        },
        'text/json': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema,
        },
        'text/xml': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2AuthorizationCodeDefinitionsRoute = createRoute({
  method: 'post',
  path: '/api/v2/AuthorizationCodeDefinitions',
  tags: ['AuthorizationCodeDefinitions'],
  summary: 'Add an authorization code definition.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodeDefinitions_PostAuthorizationCodeDefinition',
  request: { body: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute = createRoute({
  method: 'post',
  path: '/api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}',
  tags: ['AuthorizationCodeDefinitions'],
  summary: 'Add a category to an authorizationCodeDefintion.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodeDefinitions_AddCategoryToDefinition',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({ param: { in: 'path', name: 'ID', required: true, schema: { type: 'string' } } }),
      categoryID: z
        .string()
        .openapi({
          param: {
            description: 'A category ID, as a GUID.',
            in: 'path',
            name: 'categoryID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}',
  tags: ['AuthorizationCodeDefinitions'],
  summary: 'Deletes the category from the authorization code definition.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodeDefinitions_RemoveCategoryFromDefinition',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({ param: { in: 'path', name: 'ID', required: true, schema: { type: 'string' } } }),
      categoryID: z
        .string()
        .openapi({
          param: {
            description: 'A category ID, as a GUID.',
            in: 'path',
            name: 'categoryID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2AuthorizationCodeDefinitionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/AuthorizationCodeDefinitions/{id}',
  tags: ['AuthorizationCodeDefinitions'],
  summary: 'Get an authorization code definition by its ID',
  description: 'No Documentation Found.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the authorization code definition.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema,
        },
        'application/xml': {
          schema: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema,
        },
        'text/json': { schema: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema },
        'text/xml': { schema: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2AuthorizationCodeDefinitionsIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/AuthorizationCodeDefinitions/{id}',
  tags: ['AuthorizationCodeDefinitions'],
  summary: 'Update an authorization code definition',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodeDefinitions_PutAuthorizationCodeDefinition',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the authorization code definition.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2AuthorizationCodeDefinitionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/AuthorizationCodeDefinitions/{id}',
  tags: ['AuthorizationCodeDefinitions'],
  summary: 'Disable an authorization code definition',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodeDefinitions_DeleteAuthorizationCodeDefinition',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the authorization code definition.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2AuthorizationCodesRoute = createRoute({
  method: 'get',
  path: '/api/v2/AuthorizationCodes',
  tags: ['AuthorizationCodes'],
  summary: 'Get authorization codes.',
  description:
    'Additional searches: validationParameters[Name]=Value and dataParameters[Name]=Value. These can be used to search for authorization codes that have been generated using specified values for data or validation parameters.',
  operationId: 'AuthorizationCodes_GetAuthorizationCodes',
  request: {
    query: z.object({
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If provided, searches for entities with the provided authorization code.',
            in: 'query',
            name: 'code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      definitionID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. If specified, filters codes by definition id.',
            in: 'query',
            name: 'definitionID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdByUserID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If specified, filters codes to those created by the given User ID.',
            in: 'query',
            name: 'createdByUserID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      deletedByUserID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If specified, filters codes to those deleted by the given User ID.',
            in: 'query',
            name: 'deletedByUserID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: "Optional. Whether to include deleted codes. 'False' by default.",
            in: 'query',
            name: 'includeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeSchema,
        },
        'text/json': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeSchema,
        },
        'text/xml': {
          schema: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2AuthorizationCodesRoute = createRoute({
  method: 'post',
  path: '/api/v2/AuthorizationCodes',
  tags: ['AuthorizationCodes'],
  summary: 'Generates an authorization code using the provided definition and parameters.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodes_PostAuthorizationCode',
  request: {
    body: {
      description: 'The model from which to generate an authorization code.',
      content: {
        'application/json': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Code: z
                .string()
                .exactOptional()
                .openapi({ description: 'The code to enter to unlock a feature. Read only.' }),
              CreatedByUserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user that created this authorization code. Read only.',
                }),
              CreatedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'A timestamp of when this code was created. Read only.' }),
              DataParameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(AuthorizationCodesSharedModelsParameterSchema),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The parameters and values contained as data in this authorization code. May not be updated.',
                }),
              DefinitionID: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The id of the definition for this authorization code. May not be updated.',
                }),
              DeletedByUserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user that deleted this authorization code. Read only.',
                }),
              DeletedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'A timestamp of when this authorization code was deleted. Read only.',
                }),
              EffectiveDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'A date at which this code should begin being valid. Optional. Set on create only.',
                }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The identifier for the authorization code. Read only.' }),
              IsDeleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Indicates whether this code is deleted.' }),
              ValidationParameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(AuthorizationCodesSharedModelsParameterSchema),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The parameters and values used to validate this authorization code. May not be updated.',
                }),
            })
            .openapi({
              description:
                'Represents the model containing an authorization code used to unlock a feature in machines and EDT',
              required: [],
            }),
        },
        'application/xml': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
        'text/json': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
        'text/xml': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AuthorizationCodesIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/AuthorizationCodes/{id}',
  tags: ['AuthorizationCodes'],
  summary: 'Get an authorization code by its ID.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodes_GetAuthorizationCode',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the authorization code.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
        'application/xml': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
        'text/json': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
        'text/xml': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2AuthorizationCodesIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/AuthorizationCodes/{id}',
  tags: ['AuthorizationCodes'],
  summary: 'Update an authorization code.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodes_PutAuthorizationCode',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the authorization code.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The model from which to update an authorization code.',
      content: {
        'application/json': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Code: z
                .string()
                .exactOptional()
                .openapi({ description: 'The code to enter to unlock a feature. Read only.' }),
              CreatedByUserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user that created this authorization code. Read only.',
                }),
              CreatedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'A timestamp of when this code was created. Read only.' }),
              DataParameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(AuthorizationCodesSharedModelsParameterSchema),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The parameters and values contained as data in this authorization code. May not be updated.',
                }),
              DefinitionID: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The id of the definition for this authorization code. May not be updated.',
                }),
              DeletedByUserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user that deleted this authorization code. Read only.',
                }),
              DeletedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'A timestamp of when this authorization code was deleted. Read only.',
                }),
              EffectiveDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'A date at which this code should begin being valid. Optional. Set on create only.',
                }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The identifier for the authorization code. Read only.' }),
              IsDeleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Indicates whether this code is deleted.' }),
              ValidationParameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(AuthorizationCodesSharedModelsParameterSchema),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The parameters and values used to validate this authorization code. May not be updated.',
                }),
            })
            .openapi({
              description:
                'Represents the model containing an authorization code used to unlock a feature in machines and EDT',
              required: [],
            }),
        },
        'application/xml': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
        'text/json': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
        'text/xml': { schema: AuthorizationCodesSharedModelsAuthorizationCodeSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2AuthorizationCodesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/AuthorizationCodes/{id}',
  tags: ['AuthorizationCodes'],
  summary: 'Hide an authorization code.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodes_DeleteAuthorizationCode',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the authorization code.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2AuthorizationCodesIdContactInformationRoute = createRoute({
  method: 'get',
  path: '/api/v2/AuthorizationCodes/{id}/ContactInformation',
  tags: ['AuthorizationCodes'],
  summary: 'Get contact information for an authorization code.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodes_GetContactInformation',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the authorization code.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
        'application/xml': {
          schema: AuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
        'text/json': {
          schema: AuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
        'text/xml': { schema: AuthorizationCodesSharedModelsAuthorizationContactInformationSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AuthorizationCodesIdValidateRoute = createRoute({
  method: 'get',
  path: '/api/v2/AuthorizationCodes/{id}/Validate',
  tags: ['AuthorizationCodes'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationCodes_ValidateAuthorizationCode',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: AuthorizationCodesSharedModelsCodeValidationModelSchema },
        'application/xml': { schema: AuthorizationCodesSharedModelsCodeValidationModelSchema },
        'text/json': { schema: AuthorizationCodesSharedModelsCodeValidationModelSchema },
        'text/xml': { schema: AuthorizationCodesSharedModelsCodeValidationModelSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AuthorizationContactInformationRoute = createRoute({
  method: 'get',
  path: '/api/v2/AuthorizationContactInformation',
  tags: ['AuthorizationContactInformation'],
  summary: 'Get contact information for authorization codes.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationContactInformation_Get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      authorizationCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Search by authorization code.',
            in: 'query',
            name: 'authorizationCode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      afterDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Include only data for authorization codes created after a provided date.',
            in: 'query',
            name: 'afterDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      beforeDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Include only data for authorization codes created before a provided date.',
            in: 'query',
            name: 'beforeDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      dealerCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Search by dealer code.',
            in: 'query',
            name: 'dealerCode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema:
            APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
        'application/xml': {
          schema:
            APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
        'text/json': {
          schema:
            APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
        'text/xml': {
          schema:
            APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2AuthorizationContactInformationRoute = createRoute({
  method: 'post',
  path: '/api/v2/AuthorizationContactInformation',
  tags: ['AuthorizationContactInformation'],
  summary: 'Add contact information for authorization code.',
  description: 'No Documentation Found.',
  operationId: 'AuthorizationContactInformation_Post',
  request: {
    body: {
      description: 'A contact information.',
      content: {
        'application/json': {
          schema: AuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AuthorizationCodeID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({
                  description: 'AuthorizationCode ID that the contact information ties into.',
                }),
              Code: z
                .string()
                .exactOptional()
                .openapi({ description: 'The authorization code. Read Only.' }),
              Contact: z
                .string()
                .openapi({
                  description:
                    'Name of contact requesting an authorization code. Minimum length of 3 characters.',
                }),
              CreatedBy: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the user that created this code. Read Only.',
                }),
              CreatedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The date the authorization code was created.' }),
              DealerCode: z
                .string()
                .openapi({
                  description:
                    'Dealer code that relates to the dealership. Minimum length of 3 characters.',
                }),
              Dealership: z
                .string()
                .openapi({ description: 'Name of dealership. Minimum length of 3 characters.' }),
              DefinitionName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of the definition used for generating this authorization code. Read Only.',
                }),
              Email: z.string().exactOptional().openapi({ description: 'Email of contact.' }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'ID of authorizationContactInformation' }),
              Notes: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional notes used for internal use.' }),
              Phone: z.string().openapi({ description: 'Phone number of contact.' }),
            })
            .openapi({
              required: ['AuthorizationCodeID', 'Contact', 'Dealership', 'DealerCode', 'Phone'],
            }),
        },
        'application/xml': {
          schema: AuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
        'text/json': {
          schema: AuthorizationCodesSharedModelsAuthorizationContactInformationSchema,
        },
        'text/xml': { schema: AuthorizationCodesSharedModelsAuthorizationContactInformationSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2BrandsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Brands',
  tags: ['Brands'],
  summary: 'Gets a list of Brands.',
  description: 'No Documentation Found.',
  operationId: 'Brands_Brands',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2BundlesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Bundles',
  tags: ['Bundles'],
  summary: 'Get the list of bundles.',
  description: 'No Documentation Found.',
  operationId: 'Bundles_GetBundles',
  request: {
    query: z.object({
      UpdateGroupID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by UpdateGroup ID.',
            in: 'query',
            name: 'UpdateGroupID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      Active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by active status.',
            in: 'query',
            name: 'Active',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      BundleNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. If provided, filters by BundleNumber.',
            in: 'query',
            name: 'BundleNumber',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseUpdateSystemModelsBundleSchema },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsBundleSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2BundlesRoute = createRoute({
  method: 'post',
  path: '/api/v2/Bundles',
  tags: ['Bundles'],
  summary: 'Add a Bundle to the Update System.',
  description: 'No Documentation Found.',
  operationId: 'Bundles_PostBundle',
  request: {
    body: {
      description: 'The bundle to add',
      content: {
        'application/json': { schema: UpdateSystemModelsBundleSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Default Value: false. During the creation of the Bundle, this field must be false.',
                }),
              BundleID: z.string().exactOptional().openapi({ description: 'Read-Only.' }),
              BundleNumber: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The bundle number' }),
              Description: z.string().openapi({ description: 'The Bundle description.' }),
              UpdateGroupID: z
                .string()
                .openapi({ description: 'The update group this bundle belongs to.' }),
            })
            .openapi({ required: ['Description', 'UpdateGroupID', 'BundleNumber'] }),
        },
        'application/xml': { schema: UpdateSystemModelsBundleSchema },
        'text/json': { schema: UpdateSystemModelsBundleSchema },
        'text/xml': { schema: UpdateSystemModelsBundleSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2BundlesIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/Bundles/{ID}',
  tags: ['Bundles'],
  summary: 'Get a specific Bundle by ID.',
  description: 'No Documentation Found.',
  operationId: 'Bundles_GetBundle',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Bundle ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsBundleSchema },
        'application/xml': { schema: UpdateSystemModelsBundleSchema },
        'text/json': { schema: UpdateSystemModelsBundleSchema },
        'text/xml': { schema: UpdateSystemModelsBundleSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2BundlesIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/Bundles/{ID}',
  tags: ['Bundles'],
  summary: 'Modify a Bundle in the Update System.',
  description: 'No Documentation Found.',
  operationId: 'Bundles_PutBundle',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the Bundle',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The bundle to modify',
      content: {
        'application/json': { schema: UpdateSystemModelsBundleSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Default Value: false. During the creation of the Bundle, this field must be false.',
                }),
              BundleID: z.string().exactOptional().openapi({ description: 'Read-Only.' }),
              BundleNumber: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The bundle number' }),
              Description: z.string().openapi({ description: 'The Bundle description.' }),
              UpdateGroupID: z
                .string()
                .openapi({ description: 'The update group this bundle belongs to.' }),
            })
            .openapi({ required: ['Description', 'UpdateGroupID', 'BundleNumber'] }),
        },
        'application/xml': { schema: UpdateSystemModelsBundleSchema },
        'text/json': { schema: UpdateSystemModelsBundleSchema },
        'text/xml': { schema: UpdateSystemModelsBundleSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2BundlesIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/Bundles/{ID}',
  tags: ['Bundles'],
  summary: 'Delete a Bundle.',
  description: 'No Documentation Found.',
  operationId: 'Bundles_DeleteBundle',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Bundle ID to Delete',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ClientsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Clients',
  tags: ['Clients'],
  summary: 'Get a List of Clients in the Update System.',
  description: 'No Documentation Found.',
  operationId: 'Clients_Get',
  request: {
    query: z.object({
      Tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter clients by Tag. Wildcards are supported (*).',
            in: 'query',
            name: 'Tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseUpdateSystemModelsClientSchema },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsClientSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ClientsClientIDCachedFilesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Clients/{ClientID}/CachedFiles',
  tags: ['UpdateSystem'],
  summary: 'Get a list of Cached Files installed on the client Machine.',
  description: 'No Documentation Found.',
  operationId: 'UpdateSystem_GetCachedFiles',
  request: {
    params: z.object({
      ClientID: z
        .string()
        .openapi({
          param: {
            description: 'The ClientID of the Client',
            in: 'path',
            name: 'ClientID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      Expired: z
        .stringbool()
        .openapi({
          param: {
            description: 'Only Expired Files (true|false)',
            in: 'query',
            name: 'Expired',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ClientsClientIDPackageReportsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Clients/{ClientID}/PackageReports',
  tags: ['PackageReports'],
  summary: 'Get the package reports for a client.',
  description: 'No Documentation Found.',
  operationId: 'PackageReports_Default',
  request: {
    params: z.object({
      ClientID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            in: 'path',
            name: 'ClientID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(UpdateSystemModelsPackageReportSchema) },
        'application/xml': { schema: z.array(UpdateSystemModelsPackageReportSchema) },
        'text/json': { schema: z.array(UpdateSystemModelsPackageReportSchema) },
        'text/xml': { schema: z.array(UpdateSystemModelsPackageReportSchema) },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ClientsClientIDPackageReportsRoute = createRoute({
  method: 'put',
  path: '/api/v2/Clients/{ClientID}/PackageReports',
  tags: ['PackageReports'],
  summary: 'Submit a package report',
  description: 'No Documentation Found.',
  request: {
    params: z.object({
      ClientID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            in: 'path',
            name: 'ClientID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The Package Report',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageReportSchema },
        'application/x-www-form-urlencoded': { schema: UpdateSystemModelsPackageReportSchema },
        'application/xml': { schema: UpdateSystemModelsPackageReportSchema },
        'text/json': { schema: UpdateSystemModelsPackageReportSchema },
        'text/xml': { schema: UpdateSystemModelsPackageReportSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const putApiV2ClientsClientIDPackageReportsBatchRoute = createRoute({
  method: 'put',
  path: '/api/v2/Clients/{ClientID}/PackageReports/Batch',
  tags: ['PackageReports'],
  summary: 'Submit a batch of package reports',
  description: 'No Documentation Found.',
  operationId: 'PackageReports_Batch',
  request: {
    params: z.object({
      ClientID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            in: 'path',
            name: 'ClientID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The Package Reports',
      content: {
        'application/json': { schema: z.array(UpdateSystemModelsPackageReportSchema) },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(UpdateSystemModelsPackageReportSchema),
          ),
        },
        'application/xml': { schema: z.array(UpdateSystemModelsPackageReportSchema) },
        'text/json': { schema: z.array(UpdateSystemModelsPackageReportSchema) },
        'text/xml': { schema: z.array(UpdateSystemModelsPackageReportSchema) },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ClientsIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/Clients/{ID}',
  tags: ['Clients'],
  summary: 'Get a Client in the Update System.',
  description: 'No Documentation Found.',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsClientSchema },
        'application/xml': { schema: UpdateSystemModelsClientSchema },
        'text/json': { schema: UpdateSystemModelsClientSchema },
        'text/xml': { schema: UpdateSystemModelsClientSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ClientsIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/Clients/{ID}',
  tags: ['Clients'],
  summary: 'Update a Client.',
  description: 'No Documentation Found.',
  operationId: 'Clients_Put',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Client Object.',
      content: {
        'application/json': { schema: UpdateSystemModelsClientSchema },
        'application/x-www-form-urlencoded': { schema: UpdateSystemModelsClientSchema },
        'application/xml': { schema: UpdateSystemModelsClientSchema },
        'text/json': { schema: UpdateSystemModelsClientSchema },
        'text/xml': { schema: UpdateSystemModelsClientSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Clients/{ID}/AvailableUpdateGroupSubscriptions',
  tags: ['Clients'],
  summary: "Get a Client's Available Update Group Subscriptions",
  description: 'No Documentation Found.',
  operationId: 'Clients_GetAvailableSubscriptions',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      UpdateGroupID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Update Group.',
            in: 'query',
            name: 'UpdateGroupID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscriptionSchema,
        },
        'text/json': {
          schema: APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscriptionSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ClientsIDUpdateGroupSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Clients/{ID}/UpdateGroupSubscriptions',
  tags: ['Clients'],
  summary: "Get a Client's Current Update Group Subscriptions",
  description: 'No Documentation Found.',
  operationId: 'Clients_GetSubscriptions',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      UpdateGroupID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Update Group.',
            in: 'query',
            name: 'UpdateGroupID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseUpdateSystemModelsUpdateGroupSubscriptionSchema,
        },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsUpdateGroupSubscriptionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ContentDefinitionAttributesBatchRoute = createRoute({
  method: 'put',
  path: '/api/v2/ContentDefinitionAttributes/Batch',
  tags: ['ContentDefinitions'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'ContentDefinitions_PutContentDefinitionAttributes',
  request: {
    body: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeArrayRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}',
  tags: ['ContentDefinitions'],
  summary: 'Update an Attribute for a ContentDefinition',
  description: 'No Documentation Found.',
  operationId: 'ContentDefinitions_PutContentDefinitionAttributeAsync',
  request: {
    params: z.object({
      contentDefinitionAttributeID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Attribute to update.',
            in: 'path',
            name: 'contentDefinitionAttributeID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Attribute to update.',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The ID of the content definition to which this attribute belongs.',
                }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this attribute.' }),
              Name: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .openapi({ description: 'The name of this Attribute.' }),
              Value: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value of this Attribute' }),
            })
            .openapi({
              description: 'An attribute of a definition of the content for submission',
              required: ['Name'],
            }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
        'text/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
        'text/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}',
  tags: ['ContentDefinitions'],
  summary: 'Remove an Attribute from a ContentDefinition',
  description: 'No Documentation Found.',
  operationId: 'ContentDefinitions_DeleteContentDefinitionAttribute',
  request: {
    params: z.object({
      contentDefinitionAttributeID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Attribute to remove.',
            in: 'path',
            name: 'contentDefinitionAttributeID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ContentDefinitionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentDefinitions',
  tags: ['ContentDefinitions'],
  summary: 'Get ContentDefinitions',
  description:
    'Gets a collection of ContentDefinitions. When successful, the response is a PagedResponse of ContentDefinitions.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentDefinitions_GetContentDefinitions',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by UserID.',
            in: 'query',
            name: 'userID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeAttributes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.",
            in: 'query',
            name: 'includeAttributes',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Name. Supports beginning and ending wildcard (*).',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      typeID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by TypeID.',
            in: 'query',
            name: 'typeID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      packageTypeID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by PackageTypeID.',
            in: 'query',
            name: 'packageTypeID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionSchema,
        },
        'text/json': {
          schema: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ContentDefinitionsRoute = createRoute({
  method: 'post',
  path: '/api/v2/ContentDefinitions',
  tags: ['ContentDefinitions'],
  summary: 'Create a ContentDefinition',
  description:
    'Creates a ContentDefinition.  The body of the POST is the ContentDefinition to create.\r\n            The ContentDefinitionID will be assigned on creation of the Job.  When successful, the response\r\n            is the JobID.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentDefinitions_PostContentDefinition',
  request: {
    body: {
      description: 'The ContentDefinition to create.',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attributes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ContentDefinitionID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The ID of the content definition to which this attribute belongs.',
                          }),
                        ID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The ID of this attribute.' }),
                        Name: z
                          .string()
                          .regex(/[a-zA-Z0-9]+/)
                          .openapi({ description: 'The name of this Attribute.' }),
                        Value: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The value of this Attribute' }),
                      })
                      .openapi({
                        description: 'An attribute of a definition of the content for submission',
                        required: ['Name'],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'Attributes of this ContentDefinition' }),
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this content definition.' }),
              Description: z
                .string()
                .openapi({
                  description: 'The description used on the package type in the AGCO Update System',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of this content. Name must be valid for Attribute on PackageType.',
                }),
              PackageTypeID: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Read Only. The ID of the package type used for this content.',
                }),
              TypeID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The type of content.' }),
            })
            .openapi({
              description: 'The definition of the content for submission',
              required: ['Description'],
            }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ContentDefinitionsContentDefinitionIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentDefinitions/{contentDefinitionID}',
  tags: ['ContentDefinitions'],
  summary: 'Get a ContentDefinition by ID',
  description:
    'Gets a ContentDefinition by ID. When successful, the response is the requested ContentDefinition.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentDefinitions_GetContentDefinition',
  request: {
    params: z.object({
      contentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentDefinition to get.',
            in: 'path',
            name: 'contentDefinitionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      includeAttributes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.",
            in: 'query',
            name: 'includeAttributes',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema,
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ContentDefinitionsContentDefinitionIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/ContentDefinitions/{contentDefinitionID}',
  tags: ['ContentDefinitions'],
  summary: 'Update a ContentDefinition',
  description:
    'Updates a ContentDefinition.  The body of the PUT is the updated ContentDefinition.  \r\n            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentDefinitions_PutContentDefinition',
  request: {
    params: z.object({
      contentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentDefinition to update',
            in: 'path',
            name: 'contentDefinitionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated ContentDefinition',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attributes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ContentDefinitionID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The ID of the content definition to which this attribute belongs.',
                          }),
                        ID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The ID of this attribute.' }),
                        Name: z
                          .string()
                          .regex(/[a-zA-Z0-9]+/)
                          .openapi({ description: 'The name of this Attribute.' }),
                        Value: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The value of this Attribute' }),
                      })
                      .openapi({
                        description: 'An attribute of a definition of the content for submission',
                        required: ['Name'],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'Attributes of this ContentDefinition' }),
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this content definition.' }),
              Description: z
                .string()
                .openapi({
                  description: 'The description used on the package type in the AGCO Update System',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of this content. Name must be valid for Attribute on PackageType.',
                }),
              PackageTypeID: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Read Only. The ID of the package type used for this content.',
                }),
              TypeID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The type of content.' }),
            })
            .openapi({
              description: 'The definition of the content for submission',
              required: ['Description'],
            }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2ContentDefinitionsContentDefinitionIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/ContentDefinitions/{contentDefinitionID}',
  tags: ['ContentDefinitions'],
  summary: 'Delete a ContentDefinition',
  description:
    'Deletes an ContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate\r\n            ApiError is returned.',
  operationId: 'ContentDefinitions_DeleteContentDefinition',
  request: {
    params: z.object({
      contentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentDefinition to delete',
            in: 'path',
            name: 'contentDefinitionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ContentDefinitionsContentDefinitionIDAttributesRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentDefinitions/{contentDefinitionID}/Attributes',
  tags: ['ContentDefinitions'],
  summary: 'Get Attributes for a ContentDefinition',
  description: 'No Documentation Found.',
  operationId: 'ContentDefinitions_GetContentDefinitionAttributes',
  request: {
    params: z.object({
      contentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentDefinition.',
            in: 'path',
            name: 'contentDefinitionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter the attributes by Name.',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema:
            APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
        'text/json': {
          schema:
            APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ContentDefinitionsContentDefinitionIDAttributesRoute = createRoute({
  method: 'post',
  path: '/api/v2/ContentDefinitions/{contentDefinitionID}/Attributes',
  tags: ['ContentDefinitions'],
  summary: 'Add an Attribute to a ContentDefinition',
  description: 'No Documentation Found.',
  operationId: 'ContentDefinitions_PostContentDefinitionAttribute',
  request: {
    params: z.object({
      contentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentDefinition',
            in: 'path',
            name: 'contentDefinitionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Attribute to add.',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The ID of the content definition to which this attribute belongs.',
                }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this attribute.' }),
              Name: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .openapi({ description: 'The name of this Attribute.' }),
              Value: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value of this Attribute' }),
            })
            .openapi({
              description: 'An attribute of a definition of the content for submission',
              required: ['Name'],
            }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
        'text/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
        'text/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRoute = createRoute({
  method: 'post',
  path: '/api/v2/ContentDefinitions/{contentDefinitionID}/Attributes/Batch',
  tags: ['ContentDefinitions'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'ContentDefinitions_PostContentDefinitionAttributes',
  request: {
    params: z.object({
      contentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'contentDefinitionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeArrayRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ContentReleasesRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentReleases',
  tags: ['ContentRelease'],
  summary: 'Get ContentReleaseVersion',
  description:
    'Gets a collection of ContentReleaseVersion. When successful, the response is a PagedResponse of ContentReleaseVersion.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentRelease_GetContentReleaseVersion',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by deleted.',
            in: 'query',
            name: 'deleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      releaseID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by releaseID.',
            in: 'query',
            name: 'releaseID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by UserID.',
            in: 'query',
            name: 'userId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      contentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by ContentDefinitionID.',
            in: 'query',
            name: 'contentDefinitionID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Version.',
            in: 'query',
            name: 'version',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema:
            APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema,
        },
        'text/json': {
          schema:
            APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ContentReleasesRoute = createRoute({
  method: 'post',
  path: '/api/v2/ContentReleases',
  tags: ['ContentRelease'],
  summary: 'Create a ContentReleaseVersion',
  description:
    'Creates a ContentReleaseVersion.  The body of the POST is the ContentReleaseVersion to create.\r\n            The ContentReleaseId will be assigned on creation of the Job.  When successful, the response\r\n            is the contentReleaseId.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentRelease_PostContentRelease',
  request: {
    body: {
      description: 'The ContentReleaseVersion to create.',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'ContentDefinitionID' }),
              ContentReleaseID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'ContentReleaseID' }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'deleted flag' }),
              PublisherUserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'PublisherUser ID' }),
              ReleaseID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'rele4ase Id' }),
              TestReportUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The URL at which test reports for this content can be found',
                }),
              UpdatedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Updated Date' }),
              Version: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'version' }),
            })
            .openapi({ description: 'ContentReleaseVersion class', required: [] }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ContentReleasesContentReleaseIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentReleases/{ContentReleaseId}',
  tags: ['ContentRelease'],
  summary: 'Get a Content Release Version by ID',
  description:
    'Gets a ContentReleaseVersion by ID. When successful, the response is the requested ContentReleaseVersion.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  request: {
    params: z.object({
      ContentReleaseId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentReleaseVersion to get.',
            in: 'path',
            name: 'ContentReleaseId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema,
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ContentReleasesContentReleaseIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/ContentReleases/{ContentReleaseId}',
  tags: ['ContentRelease'],
  summary: 'Update a ContentReleaseVersion',
  description:
    'Updates a ContentReleaseVersion.  The body of the PUT is the updated ContentReleaseVersion.  \r\n            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentRelease_PutContentDefinition',
  request: {
    params: z.object({
      ContentReleaseId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentReleaseVersion to update',
            in: 'path',
            name: 'ContentReleaseId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated ContentReleaseVersion',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'ContentDefinitionID' }),
              ContentReleaseID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'ContentReleaseID' }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'deleted flag' }),
              PublisherUserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'PublisherUser ID' }),
              ReleaseID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'rele4ase Id' }),
              TestReportUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The URL at which test reports for this content can be found',
                }),
              UpdatedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Updated Date' }),
              Version: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'version' }),
            })
            .openapi({ description: 'ContentReleaseVersion class', required: [] }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentReleaseVersionSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2ContentReleasesContentReleaseIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/ContentReleases/{ContentReleaseId}',
  tags: ['ContentRelease'],
  summary: 'Delete a ContentReleaseVersion',
  description:
    'Deletes an ContentReleaseVersion. When successful, the response is empty.  If unsuccessful, an appropriate\r\n            ApiError is returned.',
  operationId: 'ContentRelease_DeleteContentReleaseVersionn',
  request: {
    params: z.object({
      ContentReleaseId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentReleaseVersion to delete',
            in: 'path',
            name: 'ContentReleaseId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const putApiV2ContentSubmissionAttributesBatchRoute = createRoute({
  method: 'put',
  path: '/api/v2/ContentSubmissionAttributes/Batch',
  tags: ['ContentSubmissions'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissions_PutContentSubmissionAttributes',
  request: {
    body: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeArrayRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}',
  tags: ['ContentSubmissions'],
  summary: 'Update an Attribute for a ContentSubmission',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissions_PutContentSubmissionAttributeAsync',
  request: {
    params: z.object({
      contentSubmissionAttributeID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Attribute to update.',
            in: 'path',
            name: 'contentSubmissionAttributeID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Attribute to update.',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ContentSubmissionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The ID of the content submission to which this attribute belongs.',
                }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this attribute.' }),
              Name: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .openapi({ description: 'The name of this Attribute.' }),
              Value: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value of this Attribute' }),
            })
            .openapi({
              description: 'The definition of the content for submission',
              required: ['Name'],
            }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
        'text/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
        'text/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}',
  tags: ['ContentSubmissions'],
  summary: 'Remove an Attribute from a ContentSubmission',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissions_DeleteContentSubmissionAttribute',
  request: {
    params: z.object({
      contentSubmissionAttributeID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Attribute to remove.',
            in: 'path',
            name: 'contentSubmissionAttributeID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ContentSubmissionTypesRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentSubmissionTypes',
  tags: ['ContentSubmissionTypes'],
  summary: 'Returns available Content Submission Types.',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissionTypes_GetContentSubmissionTypes',
  request: {
    query: z.object({
      enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'enabled', required: false, schema: { type: 'boolean' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema),
        },
        'application/xml': {
          schema: z.array(ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema),
        },
        'text/json': {
          schema: z.array(ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema),
        },
        'text/xml': {
          schema: z.array(ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema),
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ContentSubmissionTypesRoute = createRoute({
  method: 'post',
  path: '/api/v2/ContentSubmissionTypes',
  tags: ['ContentSubmissionTypes'],
  summary: 'Add a Content Submission Type',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissionTypes_PostContentSubmissionType',
  request: { body: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ContentSubmissionTypesIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentSubmissionTypes/{id}',
  tags: ['ContentSubmissionTypes'],
  summary: 'Retrieves a Content Submission Type by its ID.',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissionTypes_GetContentSubmissionType',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Content Submission Type',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema,
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ContentSubmissionTypesIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/ContentSubmissionTypes/{id}',
  tags: ['ContentSubmissionTypes'],
  summary: 'Update a Content Submission Type',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissionTypes_PutContentSubmissionType',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Content Submission Type',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2ContentSubmissionTypesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/ContentSubmissionTypes/{id}',
  tags: ['ContentSubmissionTypes'],
  summary: 'Remove a Content Submission Type',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissionTypes_DeleteContentSubmissionType',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Content Submission Type',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ContentSubmissionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentSubmissions',
  tags: ['ContentSubmissions'],
  summary: 'Get ContentSubmissions',
  description:
    'Gets a collection of ContentSubmissions. When successful, the response is a PagedResponse of ContentSubmissions. Additional searches: attributes[Name]=Value. This can be used to search for submissions that have the specified values for attributes. Beginning and ending wildcard (*) supported for value.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentSubmissions_GetContentSubmissions',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by UserID.',
            in: 'query',
            name: 'userID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      contentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by ContentDefinitionID',
            in: 'query',
            name: 'contentDefinitionID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeAttributes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.",
            in: 'query',
            name: 'includeAttributes',
            required: false,
            schema: { type: 'string' },
          },
        }),
      releaseID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter the submissions by whether they are part of the Release with the specified Release ID.',
            in: 'query',
            name: 'releaseID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      typeID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Optional. Filter submissions by their ContentDefinition's Type ID.",
            in: 'query',
            name: 'typeID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter submissions by their Version.',
            in: 'query',
            name: 'version',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeDefinition: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. If true, includes the ContentDefinition for each submission.',
            in: 'query',
            name: 'includeDefinition',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionSchema,
        },
        'text/json': {
          schema: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ContentSubmissionsRoute = createRoute({
  method: 'post',
  path: '/api/v2/ContentSubmissions',
  tags: ['ContentSubmissions'],
  summary: 'Create a ContentSubmission',
  description:
    'Creates a ContentSubmission.  The body of the POST is the ContentSubmission to create.\r\n            The ContentSubmissionID will be assigned on creation of the Job.  When successful, the response\r\n            is the ContentSubmissionID.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentSubmissions_PostContentSubmission',
  request: {
    body: {
      description: 'The ContentSubmission to create.',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attributes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ContentSubmissionID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The ID of the content submission to which this attribute belongs.',
                          }),
                        ID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The ID of this attribute.' }),
                        Name: z
                          .string()
                          .regex(/[a-zA-Z0-9]+/)
                          .openapi({ description: 'The name of this Attribute.' }),
                        Value: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The value of this Attribute' }),
                      })
                      .openapi({
                        description: 'The definition of the content for submission',
                        required: ['Name'],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'Attributes of this ContentSubmission' }),
              BuildID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'ReadOnly. The ID of the Azure DevOps Build which will build the content package.',
                }),
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the Content Definition.' }),
              ContentSubmissionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this Content Submission.' }),
              Definition: z
                .object({
                  Attributes: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            ContentDefinitionID: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'The ID of the content definition to which this attribute belongs.',
                              }),
                            ID: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({ description: 'The ID of this attribute.' }),
                            Name: z
                              .string()
                              .regex(/[a-zA-Z0-9]+/)
                              .openapi({ description: 'The name of this Attribute.' }),
                            Value: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'The value of this Attribute' }),
                          })
                          .openapi({
                            description:
                              'An attribute of a definition of the content for submission',
                            required: ['Name'],
                          }),
                      ),
                    )
                    .exactOptional()
                    .openapi({ description: 'Attributes of this ContentDefinition' }),
                  ContentDefinitionID: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'The ID of this content definition.' }),
                  Description: z
                    .string()
                    .openapi({
                      description:
                        'The description used on the package type in the AGCO Update System',
                    }),
                  Name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The name of this content. Name must be valid for Attribute on PackageType.',
                    }),
                  PackageTypeID: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Read Only. The ID of the package type used for this content.',
                    }),
                  TypeID: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'The type of content.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'The definition of the content for submission',
                  required: ['Description'],
                }),
              JobRunID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'ReadOnly. The ID of the JobRun which will build the content package.',
                }),
              PackageID: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ID of package generated by this content submission.',
                }),
              ReleaseNotes: z
                .string()
                .exactOptional()
                .openapi({ description: 'Release Notes for this ContentSubmission' }),
              Repository: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The SVN repository used as the source of this content submission',
                }),
              Revision: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The SVN revision used as the source of this content submission.',
                }),
              SubmissionDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Read Only. The UTC date and time the content submission was made.',
                }),
              UserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Read Only. The ID of the user who submitted the content',
                }),
              Version: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Optional.  The version number assigned to this Content Submission and the resulting Package.\r\n            If not provided, version shall be 1 if it is the first content submission for the \r\n            ContentDefinitionID otherwise it shall be the highest content submission version for the\r\n            specified ContentDefinitionID incremented by 1.',
                }),
            })
            .openapi({ description: 'A content submission', required: [] }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ContentSubmissionsContentSubmissionIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentSubmissions/{contentSubmissionID}',
  tags: ['ContentSubmissions'],
  summary: 'Get a ContentSubmission by ID',
  description:
    'Gets a ContentSubmission by ID. When successful, the response is the requested ContentSubmission.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentSubmissions_GetContentSubmission',
  request: {
    params: z.object({
      contentSubmissionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentSubmission to get.',
            in: 'path',
            name: 'contentSubmissionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      includeAttributes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Names of Attributes to include when retrieving this submission. This should be a comma-separated list.',
            in: 'query',
            name: 'includeAttributes',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema,
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ContentSubmissionsContentSubmissionIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/ContentSubmissions/{contentSubmissionID}',
  tags: ['ContentSubmissions'],
  summary: 'Update a ContentSubmission',
  description:
    'Updates a ContentSubmission.  The body of the PUT is the updated ContentSubmission.  \r\n            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ContentSubmissions_PutContentSubmission',
  request: {
    params: z.object({
      contentSubmissionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentSubmission to update',
            in: 'path',
            name: 'contentSubmissionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated ContentSubmission',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attributes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ContentSubmissionID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The ID of the content submission to which this attribute belongs.',
                          }),
                        ID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The ID of this attribute.' }),
                        Name: z
                          .string()
                          .regex(/[a-zA-Z0-9]+/)
                          .openapi({ description: 'The name of this Attribute.' }),
                        Value: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The value of this Attribute' }),
                      })
                      .openapi({
                        description: 'The definition of the content for submission',
                        required: ['Name'],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'Attributes of this ContentSubmission' }),
              BuildID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'ReadOnly. The ID of the Azure DevOps Build which will build the content package.',
                }),
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the Content Definition.' }),
              ContentSubmissionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this Content Submission.' }),
              Definition: z
                .object({
                  Attributes: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            ContentDefinitionID: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'The ID of the content definition to which this attribute belongs.',
                              }),
                            ID: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({ description: 'The ID of this attribute.' }),
                            Name: z
                              .string()
                              .regex(/[a-zA-Z0-9]+/)
                              .openapi({ description: 'The name of this Attribute.' }),
                            Value: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'The value of this Attribute' }),
                          })
                          .openapi({
                            description:
                              'An attribute of a definition of the content for submission',
                            required: ['Name'],
                          }),
                      ),
                    )
                    .exactOptional()
                    .openapi({ description: 'Attributes of this ContentDefinition' }),
                  ContentDefinitionID: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'The ID of this content definition.' }),
                  Description: z
                    .string()
                    .openapi({
                      description:
                        'The description used on the package type in the AGCO Update System',
                    }),
                  Name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The name of this content. Name must be valid for Attribute on PackageType.',
                    }),
                  PackageTypeID: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Read Only. The ID of the package type used for this content.',
                    }),
                  TypeID: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'The type of content.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'The definition of the content for submission',
                  required: ['Description'],
                }),
              JobRunID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'ReadOnly. The ID of the JobRun which will build the content package.',
                }),
              PackageID: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ID of package generated by this content submission.',
                }),
              ReleaseNotes: z
                .string()
                .exactOptional()
                .openapi({ description: 'Release Notes for this ContentSubmission' }),
              Repository: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The SVN repository used as the source of this content submission',
                }),
              Revision: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The SVN revision used as the source of this content submission.',
                }),
              SubmissionDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Read Only. The UTC date and time the content submission was made.',
                }),
              UserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Read Only. The ID of the user who submitted the content',
                }),
              Version: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Optional.  The version number assigned to this Content Submission and the resulting Package.\r\n            If not provided, version shall be 1 if it is the first content submission for the \r\n            ContentDefinitionID otherwise it shall be the highest content submission version for the\r\n            specified ContentDefinitionID incremented by 1.',
                }),
            })
            .openapi({ description: 'A content submission', required: [] }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2ContentSubmissionsContentSubmissionIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/ContentSubmissions/{contentSubmissionID}',
  tags: ['ContentSubmissions'],
  summary: 'Delete a ContentSubmission',
  description:
    'Deletes an ContentSubmission. When successful, the response is empty.  If unsuccessful, an appropriate\r\n            ApiError is returned.',
  operationId: 'ContentSubmissions_DeleteContentSubmission',
  request: {
    params: z.object({
      contentSubmissionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentSubmission to delete',
            in: 'path',
            name: 'contentSubmissionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ContentSubmissionsContentSubmissionIDAttributesRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentSubmissions/{contentSubmissionID}/Attributes',
  tags: ['ContentSubmissions'],
  summary: 'Get Attributes for a ContentSubmission',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissions_GetContentSubmissionAttributes',
  request: {
    params: z.object({
      contentSubmissionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentSubmission.',
            in: 'path',
            name: 'contentSubmissionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter the attributes by Name.',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema:
            APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
        'text/json': {
          schema:
            APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ContentSubmissionsContentSubmissionIDAttributesRoute = createRoute({
  method: 'post',
  path: '/api/v2/ContentSubmissions/{contentSubmissionID}/Attributes',
  tags: ['ContentSubmissions'],
  summary: 'Add an Attribute to a ContentSubmission',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissions_PostContentSubmissionAttribute',
  request: {
    params: z.object({
      contentSubmissionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentSubmission',
            in: 'path',
            name: 'contentSubmissionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Attribute to add.',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ContentSubmissionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The ID of the content submission to which this attribute belongs.',
                }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this attribute.' }),
              Name: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .openapi({ description: 'The name of this Attribute.' }),
              Value: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value of this Attribute' }),
            })
            .openapi({
              description: 'The definition of the content for submission',
              required: ['Name'],
            }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
        'text/json': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
        'text/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRoute = createRoute({
  method: 'post',
  path: '/api/v2/ContentSubmissions/{contentSubmissionID}/Attributes/Batch',
  tags: ['ContentSubmissions'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissions_PostContentSubmissionAttributes',
  request: {
    params: z.object({
      contentSubmissionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'contentSubmissionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeArrayRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ContentSubmissionsContentSubmissionIDStatusRoute = createRoute({
  method: 'get',
  path: '/api/v2/ContentSubmissions/{contentSubmissionID}/Status',
  tags: ['ContentSubmissions'],
  summary: 'Get the status of a ContentSubmission',
  description: 'No Documentation Found.',
  operationId: 'ContentSubmissions_GetContentSubmissionStatus',
  request: {
    params: z.object({
      contentSubmissionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ContentSubmission to get.',
            in: 'path',
            name: 'contentSubmissionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      includeActivityRunDetails: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'True to include all status details if JobRun. Defaults to false',
            in: 'query',
            name: 'includeActivityRunDetails',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedInterfacesIJobRunSchema },
        'application/xml': { schema: BuildSystemSharedInterfacesIJobRunSchema },
        'text/json': { schema: BuildSystemSharedInterfacesIJobRunSchema },
        'text/xml': { schema: BuildSystemSharedInterfacesIJobRunSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2DealerByCountryRoute = createRoute({
  method: 'get',
  path: '/api/v2/DealerByCountry',
  tags: ['DealerByCountry'],
  summary: 'Get a total count of dealers per country',
  description: 'No Documentation Found.',
  operationId: 'DealerByCountry_GetCountries',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseDealerDBModelsDealersPerCountrySchema },
        'text/json': { schema: APIPagedResponseDealerDBModelsDealersPerCountrySchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2DealersRoute = createRoute({
  method: 'get',
  path: '/api/v2/Dealers',
  tags: ['Dealers'],
  summary: 'Get a list of dealers.',
  description: 'No Documentation Found.',
  operationId: 'Dealers_GetDealers',
  request: {
    query: z.object({
      Brand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The brand to filter by.',
            in: 'query',
            name: 'Brand',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ShippingCountry: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The country to filter by.',
            in: 'query',
            name: 'ShippingCountry',
            required: false,
            schema: { type: 'string' },
          },
        }),
      DealerName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The partial Dealer Name to filter by. Wildcard supported (*).',
            in: 'query',
            name: 'DealerName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseDealerDBModelsDealerSchema },
        'text/json': { schema: APIPagedResponseDealerDBModelsDealerSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2DealersDealerCodeRoute = createRoute({
  method: 'get',
  path: '/api/v2/Dealers/{DealerCode}',
  tags: ['Dealers'],
  summary: 'Lookup a dealer using a dealer code.',
  description: 'No Documentation Found.',
  operationId: 'Dealers_GetDealerbyDealerCode',
  request: {
    params: z.object({
      DealerCode: z
        .string()
        .openapi({
          param: {
            description: 'The Dealer Code to Search for',
            in: 'path',
            name: 'DealerCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DealerDBModelsDealerSchema },
        'application/xml': { schema: DealerDBModelsDealerSchema },
        'text/json': { schema: DealerDBModelsDealerSchema },
        'text/xml': { schema: DealerDBModelsDealerSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2FilesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Files',
  tags: ['Files'],
  summary: 'Get a paged response of file metadata.',
  description: 'No Documentation Found.',
  operationId: 'Files_GetFiles',
  request: {
    query: z.object({
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates whether to include files marked as removed.',
            in: 'query',
            name: 'includeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsFileDownloadSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsFileDownloadSchema,
        },
        'text/json': { schema: APIIPagedResponseGlobalResourcesSharedModelsFileDownloadSchema },
        'text/xml': { schema: APIIPagedResponseGlobalResourcesSharedModelsFileDownloadSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2FilesRoute = createRoute({
  method: 'post',
  path: '/api/v2/Files',
  tags: ['Files'],
  summary:
    "Create the metadata for a file before uploading. The State of the File should be 'Created'.",
  description: 'No Documentation Found.',
  operationId: 'Files_PostFile',
  request: {
    body: {
      description: "The file's metadata.",
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CRC: z
                .string()
                .openapi({
                  description:
                    'The crc of the file (SHA256, HEX-encoded). Must be provided when creating a file.',
                }),
              ContentType: z
                .string()
                .openapi({ description: 'The type of file; sent as the content-type header.' }),
              Description: z.string().openapi({ description: 'The description of the file.' }),
              Id: z.string().exactOptional().openapi({ description: 'The Id of the file.' }),
              IsPublic: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    'Indicates whether this file is available to the public for download.',
                }),
              Name: z.string().openapi({ description: 'The name of the file when downloaded.' }),
              Path: z.string().openapi({ description: 'The Path of the file.' }),
              Size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    "The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only",
                }),
              State: z
                .enum(['Created', 'Available', 'Removed'])
                .openapi({
                  description: "Indicates the state of this file. Must be 'Created' when created.",
                }),
            })
            .openapi({
              description: 'A language used for string translations.',
              required: ['Name', 'Description', 'ContentType', 'State', 'IsPublic', 'CRC', 'Path'],
            }),
        },
        'application/xml': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
        'text/json': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2FilesIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/Files/{ID}',
  tags: ['Files'],
  summary: "Gets a file's metadata.",
  description: 'No Documentation Found.',
  operationId: 'Files_GetFile',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({ param: { in: 'path', name: 'ID', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
        'application/xml': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
        'text/json': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2FilesIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/Files/{ID}',
  tags: ['Files'],
  summary: 'Update the metadata for a file. Size may not be modified by the client.',
  description:
    "Update the metadata for a file. Size may not be modified by the client. \r\n                Set status to 'Available' to publish a file. The file must be uploaded.\r\n                Set status to 'Created' to reset a file's contents and re-upload. \r\n                A file may only be 'Removed' by the DELETE method.",
  operationId: 'Files_PutFile',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: "The file's id",
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "The file's metadata",
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CRC: z
                .string()
                .openapi({
                  description:
                    'The crc of the file (SHA256, HEX-encoded). Must be provided when creating a file.',
                }),
              ContentType: z
                .string()
                .openapi({ description: 'The type of file; sent as the content-type header.' }),
              Description: z.string().openapi({ description: 'The description of the file.' }),
              Id: z.string().exactOptional().openapi({ description: 'The Id of the file.' }),
              IsPublic: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    'Indicates whether this file is available to the public for download.',
                }),
              Name: z.string().openapi({ description: 'The name of the file when downloaded.' }),
              Path: z.string().openapi({ description: 'The Path of the file.' }),
              Size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    "The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only",
                }),
              State: z
                .enum(['Created', 'Available', 'Removed'])
                .openapi({
                  description: "Indicates the state of this file. Must be 'Created' when created.",
                }),
            })
            .openapi({
              description: 'A language used for string translations.',
              required: ['Name', 'Description', 'ContentType', 'State', 'IsPublic', 'CRC', 'Path'],
            }),
        },
        'application/xml': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
        'text/json': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsFileDownloadSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2FilesIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/Files/{ID}',
  tags: ['Files'],
  summary:
    "Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method",
  description: 'No Documentation Found.',
  operationId: 'Files_DeleteFile',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: "The file's id.",
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2FilesIDFileContentsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Files/{ID}/FileContents',
  tags: ['Files'],
  summary: "Download the contents of a file. The current State of the File should be 'Available'.",
  description: 'No Documentation Found.',
  operationId: 'Files_GetFileContents',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: "The file's metadata.",
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2FilesIDFileContentsRoute = createRoute({
  method: 'put',
  path: '/api/v2/Files/{ID}/FileContents',
  tags: ['Files'],
  summary: "Upload the contents of a file. The current State of the File should be 'Created'.",
  description: 'No Documentation Found.',
  operationId: 'Files_PutFileContents',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: "The file's metadata.",
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2GlobalImageCategoriesRoute = createRoute({
  method: 'get',
  path: '/api/v2/GlobalImageCategories',
  tags: ['GlobalImageCategories'],
  summary: 'Get a paged response of file metadata.',
  description: 'No Documentation Found.',
  operationId: 'GlobalImageCategories_GetFiles',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategorySchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategorySchema,
        },
        'text/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategorySchema,
        },
        'text/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategorySchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2GlobalImageCategoriesRoute = createRoute({
  method: 'post',
  path: '/api/v2/GlobalImageCategories',
  tags: ['GlobalImageCategories'],
  summary: "Create the metadata for a file before uploading. The State should be 'Created'.",
  description: 'No Documentation Found.',
  operationId: 'GlobalImageCategories_PostFile',
  request: {
    body: {
      description: "The file's metadata.",
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsGlobalImageCategorySchema },
        'application/x-www-form-urlencoded': {
          schema: GlobalResourcesSharedModelsGlobalImageCategorySchema,
        },
        'application/xml': { schema: GlobalResourcesSharedModelsGlobalImageCategorySchema },
        'text/json': { schema: GlobalResourcesSharedModelsGlobalImageCategorySchema },
        'text/xml': { schema: GlobalResourcesSharedModelsGlobalImageCategorySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2GlobalImageCategoriesIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/GlobalImageCategories/{ID}',
  tags: ['GlobalImageCategories'],
  summary: "Gets a file's metadata.",
  description: 'No Documentation Found.',
  operationId: 'GlobalImageCategories_GetFile',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: "The file's id.",
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsGlobalImageCategorySchema },
        'application/xml': { schema: GlobalResourcesSharedModelsGlobalImageCategorySchema },
        'text/json': { schema: GlobalResourcesSharedModelsGlobalImageCategorySchema },
        'text/xml': { schema: GlobalResourcesSharedModelsGlobalImageCategorySchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2GlobalImagesRoute = createRoute({
  method: 'get',
  path: '/api/v2/GlobalImages',
  tags: ['GlobalImages'],
  summary: 'Get a paged response of GlobalImage.',
  description: 'No Documentation Found.',
  operationId: 'GlobalImages_GetGlobalImages',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Searches for matching global images with the matching Category Name, Publisher or Description',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      categoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'categoryId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      publisher: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'publisher',
            required: false,
            schema: { type: 'string' },
          },
        }),
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates whether to include GlobalImages marked as removed.',
            in: 'query',
            name: 'includeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageSchema,
        },
        'text/json': { schema: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageSchema },
        'text/xml': { schema: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2GlobalImagesRoute = createRoute({
  method: 'post',
  path: '/api/v2/GlobalImages',
  tags: ['GlobalImages'],
  summary: "Create the metadata for a GlobalImage before uploading. The State should be 'Created'.",
  description: 'No Documentation Found.',
  operationId: 'GlobalImages_PostGlobalImage',
  request: {
    query: z.object({
      overridePublisherOrDate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to set the publisher and date to the provided values.',
            in: 'query',
            name: 'overridePublisherOrDate',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      description: "The file's metadata.",
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CRC: z
                .string()
                .openapi({ description: 'The Hash of the file (SHA256, HEX-encoded).' }),
              Categories: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(GlobalResourcesSharedModelsGlobalImageCategorySchema),
                )
                .exactOptional()
                .openapi({ description: 'The category of the file.' }),
              Date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The date of the file.' }),
              Description: z.string().openapi({ description: 'The description of the file.' }),
              Height: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The height of the file.' }),
              Id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Id of the GlobalImage Metadata.' }),
              Name: z.string().openapi({ description: 'The name of the file when downloaded.' }),
              Publisher: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Publisher of the file.' }),
              Size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    "The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only",
                }),
              State: z
                .enum(['Created', 'Available', 'Removed'])
                .openapi({
                  description:
                    "Indicates the state of this file. Must be 'Created' when created. Read Only.",
                }),
              ThumbnailCRC: z
                .string()
                .openapi({ description: 'The Hash of the thumbnail file (SHA256, HEX-encoded).' }),
              ThumbnailSize: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    "The size of the thumbnail file in bytes. Null until assigned by server when marked as 'Available'. Read Only",
                }),
              Width: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The width of the file.' }),
            })
            .openapi({
              description: 'An image from the Global Image library.',
              required: ['CRC', 'ThumbnailCRC', 'State', 'Name', 'Description', 'Width', 'Height'],
            }),
        },
        'application/xml': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
        'text/json': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2GlobalImagesIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/GlobalImages/{ID}',
  tags: ['GlobalImages'],
  summary: "Gets a GlobalImage's metadata.",
  description: 'No Documentation Found.',
  operationId: 'GlobalImages_GetGlobalImage',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: "The GlobalImage's id.",
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
        'application/xml': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
        'text/json': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2GlobalImagesIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/GlobalImages/{ID}',
  tags: ['GlobalImages'],
  summary: 'Update the metadata for an image.',
  description:
    "Update the metadata for an image. Size may not be modified by the client. \r\n                Set status to 'Available' to publish an image. Both the image and thumbnail must be uploaded.\r\n                Set status to 'Created' to reset an image's contents and re-upload. \r\n                A file may only be 'Removed' by the DELETE method.",
  operationId: 'GlobalImages_PutGlobalImage',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: "The GlobalImage's id.",
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      overridePublisherOrDate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to set the publisher and date to the provided values.',
            in: 'query',
            name: 'overridePublisherOrDate',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      description: "The GlobalImage's metadata",
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CRC: z
                .string()
                .openapi({ description: 'The Hash of the file (SHA256, HEX-encoded).' }),
              Categories: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(GlobalResourcesSharedModelsGlobalImageCategorySchema),
                )
                .exactOptional()
                .openapi({ description: 'The category of the file.' }),
              Date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The date of the file.' }),
              Description: z.string().openapi({ description: 'The description of the file.' }),
              Height: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The height of the file.' }),
              Id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Id of the GlobalImage Metadata.' }),
              Name: z.string().openapi({ description: 'The name of the file when downloaded.' }),
              Publisher: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Publisher of the file.' }),
              Size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    "The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only",
                }),
              State: z
                .enum(['Created', 'Available', 'Removed'])
                .openapi({
                  description:
                    "Indicates the state of this file. Must be 'Created' when created. Read Only.",
                }),
              ThumbnailCRC: z
                .string()
                .openapi({ description: 'The Hash of the thumbnail file (SHA256, HEX-encoded).' }),
              ThumbnailSize: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    "The size of the thumbnail file in bytes. Null until assigned by server when marked as 'Available'. Read Only",
                }),
              Width: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The width of the file.' }),
            })
            .openapi({
              description: 'An image from the Global Image library.',
              required: ['CRC', 'ThumbnailCRC', 'State', 'Name', 'Description', 'Width', 'Height'],
            }),
        },
        'application/xml': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
        'text/json': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsGlobalImageSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2GlobalImagesIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/GlobalImages/{ID}',
  tags: ['GlobalImages'],
  summary:
    "Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method",
  description: 'No Documentation Found.',
  operationId: 'GlobalImages_DeleteFile',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: "The GlobalImage's id.",
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2GlobalImagesIDImageContentsRoute = createRoute({
  method: 'get',
  path: '/api/v2/GlobalImages/{ID}/ImageContents',
  tags: ['GlobalImages'],
  summary:
    "Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.",
  description: 'No Documentation Found.',
  operationId: 'GlobalImages_GetGlobalImageContents',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The global image metadata id.',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      isFullImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Indicated whether to download the full image or the thumbnail. Defaults to 'true'.",
            in: 'query',
            name: 'isFullImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2GlobalImagesIDImageContentsRoute = createRoute({
  method: 'put',
  path: '/api/v2/GlobalImages/{ID}/ImageContents',
  tags: ['GlobalImages'],
  summary:
    "Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.",
  description:
    "Both the image and thumbnail must be uploaded.\r\n                Set isFullImage = 'True' for Full Image, isFullImage = 'False' for Thumbnail",
  operationId: 'GlobalImages_PutGlobalImageContents',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The global image metadata id.',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      isFullImage: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Indicated whether this is the full image or the thumbnail. Defaults to 'true'.",
            in: 'query',
            name: 'isFullImage',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2LanguagesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Languages',
  tags: ['Languages'],
  summary:
    'Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.',
  description: 'No Documentation Found.',
  operationId: 'Languages_GetLanguages',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit the number of Language objects returned. Optional (defaults to 10).',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of Language objects to skip. Optional (defaults to 0).',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'whether to include languages marked as deleted. Defaults to false',
            in: 'query',
            name: 'includeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIIPagedResponseGlobalResourcesSharedModelsLanguageSchema },
        'application/xml': { schema: APIIPagedResponseGlobalResourcesSharedModelsLanguageSchema },
        'text/json': { schema: APIIPagedResponseGlobalResourcesSharedModelsLanguageSchema },
        'text/xml': { schema: APIIPagedResponseGlobalResourcesSharedModelsLanguageSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2LanguagesRoute = createRoute({
  method: 'post',
  path: '/api/v2/Languages',
  tags: ['Languages'],
  summary:
    'Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.',
  description: 'No Documentation Found.',
  operationId: 'Languages_CreateLanguage',
  request: { body: GlobalResourcesSharedModelsLanguageRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2LanguagesLocaleIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/Languages/{LocaleID}',
  tags: ['Languages'],
  summary: 'Get a language by its id. Returns a Language object',
  description: 'No Documentation Found.',
  operationId: 'Languages_GetLanguage',
  request: {
    params: z.object({
      LocaleID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'LocaleID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsLanguageSchema },
        'application/xml': { schema: GlobalResourcesSharedModelsLanguageSchema },
        'text/json': { schema: GlobalResourcesSharedModelsLanguageSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsLanguageSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2LanguagesLocaleIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/Languages/{LocaleID}',
  tags: ['Languages'],
  summary: 'Update a language’s description. Accepts a Language object.',
  description: 'No Documentation Found.',
  operationId: 'Languages_UpdateLanguage',
  request: {
    params: z.object({
      LocaleID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'LocaleID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: GlobalResourcesSharedModelsLanguageRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2LanguagesLocaleIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/Languages/{LocaleID}',
  tags: ['Languages'],
  summary: 'Remove a Language from those supported for translations. Marks language as deleted.',
  description: 'No Documentation Found.',
  operationId: 'Languages_DeleteLanguage',
  request: {
    params: z.object({
      LocaleID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'LocaleID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const postApiV2LicenseActivationsRoute = createRoute({
  method: 'post',
  path: '/api/v2/LicenseActivations',
  tags: ['LicenseActivations'],
  summary: 'Create a license activation.',
  description: 'No Documentation Found.',
  operationId: 'LicenseActivations_Post',
  request: {
    body: {
      description: 'The data required for creating the license.',
      content: {
        'application/json': { schema: DealerDBModelsLicenseActivationCreateSchema },
        'application/x-www-form-urlencoded': {
          schema: DealerDBModelsLicenseActivationCreateSchema,
        },
        'application/xml': { schema: DealerDBModelsLicenseActivationCreateSchema },
        'text/json': { schema: DealerDBModelsLicenseActivationCreateSchema },
        'text/xml': { schema: DealerDBModelsLicenseActivationCreateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DealerDBModelsLicenseActivationSchema },
        'application/xml': { schema: DealerDBModelsLicenseActivationSchema },
        'text/json': { schema: DealerDBModelsLicenseActivationSchema },
        'text/xml': { schema: DealerDBModelsLicenseActivationSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2LicenseActivationsRegisterEDTLiteRoute = createRoute({
  method: 'post',
  path: '/api/v2/LicenseActivations/RegisterEDTLite',
  tags: ['LicenseActivations'],
  summary: 'Register an EDT Lite with the Server',
  description: 'No Documentation Found.',
  operationId: 'LicenseActivations_PostRegisterEDTLite',
  request: {
    body: {
      description: 'The information required for registration.',
      content: {
        'application/json': { schema: DealerDBModelsEDTLiteRegistrationSchema },
        'application/x-www-form-urlencoded': { schema: DealerDBModelsEDTLiteRegistrationSchema },
        'application/xml': { schema: DealerDBModelsEDTLiteRegistrationSchema },
        'text/json': { schema: DealerDBModelsEDTLiteRegistrationSchema },
        'text/xml': { schema: DealerDBModelsEDTLiteRegistrationSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.boolean() },
        'application/xml': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
        'text/xml': { schema: z.boolean() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2LicenseActivationsIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/LicenseActivations/{ID}',
  tags: ['LicenseActivations'],
  summary: 'Update a license activiation.',
  description: 'No Documentation Found.',
  operationId: 'LicenseActivations_Put',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the license.',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The data required for updating the license.',
      content: {
        'application/json': { schema: DealerDBModelsLicenseActivationUpdateSchema },
        'application/x-www-form-urlencoded': {
          schema: DealerDBModelsLicenseActivationUpdateSchema,
        },
        'application/xml': { schema: DealerDBModelsLicenseActivationUpdateSchema },
        'text/json': { schema: DealerDBModelsLicenseActivationUpdateSchema },
        'text/xml': { schema: DealerDBModelsLicenseActivationUpdateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DealerDBModelsLicenseActivationSchema },
        'application/xml': { schema: DealerDBModelsLicenseActivationSchema },
        'text/json': { schema: DealerDBModelsLicenseActivationSchema },
        'text/xml': { schema: DealerDBModelsLicenseActivationSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2LicenseActivationsIDConfirmRoute = createRoute({
  method: 'put',
  path: '/api/v2/LicenseActivations/{ID}/Confirm',
  tags: ['LicenseActivations'],
  summary: 'Confirm that the client has applied the updated license.',
  description: 'No Documentation Found.',
  operationId: 'LicenseActivations_PutConfirm',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the license',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The license data.',
      content: {
        'application/json': { schema: DealerDBModelsLicenseActivationConfirmSchema },
        'application/x-www-form-urlencoded': {
          schema: DealerDBModelsLicenseActivationConfirmSchema,
        },
        'application/xml': { schema: DealerDBModelsLicenseActivationConfirmSchema },
        'text/json': { schema: DealerDBModelsLicenseActivationConfirmSchema },
        'text/xml': { schema: DealerDBModelsLicenseActivationConfirmSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2LicensesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Licenses',
  tags: ['Licenses'],
  summary: 'Gets a list of licenses with the specified criteria.',
  description: 'No Documentation Found.',
  operationId: 'Licenses_Get',
  request: {
    query: z.object({
      VoucherCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by VoucherCode',
            in: 'query',
            name: 'VoucherCode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      DealerCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by DealerCode',
            in: 'query',
            name: 'DealerCode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      Status: z
        .enum(['Active', 'Inactive', 'All'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter by Status.  By default only active licenses will be returned.',
            in: 'query',
            name: 'Status',
            required: false,
            schema: { enum: ['Active', 'Inactive', 'All'], type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseDealerDBModelsLicenseSchema },
        'text/json': { schema: APIPagedResponseDealerDBModelsLicenseSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2LicensesIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/Licenses/{ID}',
  tags: ['Licenses'],
  summary: 'Get a license.',
  description: 'No Documentation Found.',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the license to get.',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DealerDBModelsLicenseSchema },
        'application/xml': { schema: DealerDBModelsLicenseSchema },
        'text/json': { schema: DealerDBModelsLicenseSchema },
        'text/xml': { schema: DealerDBModelsLicenseSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2LogsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Logs',
  tags: ['Logs'],
  summary: 'Get the API System logs, most recent first.',
  description: 'No Documentation Found.',
  operationId: 'Logs_GetLogs',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsLogSchema },
        'text/json': { schema: APIPagedResponseAPIModelsLogSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2LogsRoute = createRoute({
  method: 'post',
  path: '/api/v2/Logs',
  tags: ['Logs'],
  summary: 'Add a Log entry',
  description: 'No Documentation Found.',
  operationId: 'Logs_PostLog',
  request: {
    query: z.object({
      Message: z
        .string()
        .openapi({
          param: {
            description: 'Message to enter into the log',
            in: 'query',
            name: 'Message',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2LogsIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/Logs/{ID}',
  tags: ['Logs'],
  summary: 'Get a log by ID',
  description: 'No Documentation Found.',
  operationId: 'Logs_GetLog',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Log ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIModelsLogSchema },
        'application/xml': { schema: APIModelsLogSchema },
        'text/json': { schema: APIModelsLogSchema },
        'text/xml': { schema: APIModelsLogSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2NotificationsRoute = createRoute({
  method: 'post',
  path: '/api/v2/Notifications',
  tags: ['Notifications'],
  summary: 'Sends an email message.',
  description: 'No Documentation Found.',
  operationId: 'Notifications_PostMail',
  request: {
    body: {
      description: 'The Notification Object.',
      content: {
        'application/json': { schema: APIModelsNotificationSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CC_Addresses: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              IsBodyHtml: z.preprocess(
                ((read) => (val: unknown) => {
                  const result = read.safeParse(val)
                  return result.success ? result.data : val
                })(z.stringbool()),
                z.boolean(),
              ),
              MessageBody: z.string(),
              Subject: z.string(),
              To_Addresses: z.preprocess(
                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                z.array(z.string()),
              ),
            })
            .openapi({ required: ['To_Addresses', 'Subject', 'MessageBody', 'IsBodyHtml'] }),
        },
        'application/xml': { schema: APIModelsNotificationSchema },
        'text/json': { schema: APIModelsNotificationSchema },
        'text/xml': { schema: APIModelsNotificationSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2PackageTypesRoute = createRoute({
  method: 'get',
  path: '/api/v2/PackageTypes',
  tags: ['PackageTypes'],
  summary: 'Get all of the Package Types.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypes_Get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Optional. The user ID to sort packageTypes by the user's access",
            in: 'query',
            name: 'userID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseUpdateSystemModelsPackageTypeSchema },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsPackageTypeSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2PackageTypesRoute = createRoute({
  method: 'post',
  path: '/api/v2/PackageTypes',
  tags: ['PackageTypes'],
  summary: 'Add a Package Type.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypes_Post',
  request: {
    body: {
      description: 'The Package Type to add',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageTypeSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attribute: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed.',
                }),
              Category: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The inventory category (from the InventoryPackage) used to determine what version of this package type is installed.',
                }),
              Description: z
                .string()
                .openapi({ description: 'The description of the package type' }),
              Icon: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional.  The icon to use for the PackageType, in base 64',
                }),
              InventoryFrequency: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours).',
                }),
              InventoryPackage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The inventory package used to determine what version of this package type is installed.',
                }),
              LocalizedDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The StringID used to localize the description of the PackageType',
                }),
              LocalizedName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The StringID used to localize the name of the PackageType',
                }),
              MaxDeltaPackages: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of "chained" delta packages to use when updating the client',
                }),
              PackageTypeID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. The package type id.' }),
            })
            .openapi({ required: ['Description'] }),
        },
        'application/xml': { schema: UpdateSystemModelsPackageTypeSchema },
        'text/json': { schema: UpdateSystemModelsPackageTypeSchema },
        'text/xml': { schema: UpdateSystemModelsPackageTypeSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2PackageTypesIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/PackageTypes/{ID}',
  tags: ['PackageTypes'],
  summary: 'Get a specific Package Type.',
  description: 'No Documentation Found.',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Package Type ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageTypeSchema },
        'application/xml': { schema: UpdateSystemModelsPackageTypeSchema },
        'text/json': { schema: UpdateSystemModelsPackageTypeSchema },
        'text/xml': { schema: UpdateSystemModelsPackageTypeSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2PackageTypesIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/PackageTypes/{ID}',
  tags: ['PackageTypes'],
  summary: 'Modify a Package Type.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypes_Put',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Package Type',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The Package Type to update',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageTypeSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attribute: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed.',
                }),
              Category: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The inventory category (from the InventoryPackage) used to determine what version of this package type is installed.',
                }),
              Description: z
                .string()
                .openapi({ description: 'The description of the package type' }),
              Icon: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional.  The icon to use for the PackageType, in base 64',
                }),
              InventoryFrequency: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours).',
                }),
              InventoryPackage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The inventory package used to determine what version of this package type is installed.',
                }),
              LocalizedDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The StringID used to localize the description of the PackageType',
                }),
              LocalizedName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The StringID used to localize the name of the PackageType',
                }),
              MaxDeltaPackages: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of "chained" delta packages to use when updating the client',
                }),
              PackageTypeID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. The package type id.' }),
            })
            .openapi({ required: ['Description'] }),
        },
        'application/xml': { schema: UpdateSystemModelsPackageTypeSchema },
        'text/json': { schema: UpdateSystemModelsPackageTypeSchema },
        'text/xml': { schema: UpdateSystemModelsPackageTypeSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2PackageTypesIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/PackageTypes/{ID}',
  tags: ['PackageTypes'],
  summary: 'Delete a Package Type.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypes_Delete',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Package Type ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const postApiV2PackageTypesIdUsersUserIDRoute = createRoute({
  method: 'post',
  path: '/api/v2/PackageTypes/{id}/Users/{userID}',
  tags: ['PackageTypes'],
  summary: 'Add a package type that a user can see.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypes_AddPackageTypeUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Package Type',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The userID to link to the package type',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2PackageTypesIdUsersUserIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/PackageTypes/{id}/Users/{userID}',
  tags: ['PackageTypes'],
  summary: 'Deletes a package type a user could see.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypes_RemovePackageTypeUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Package Type',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The userID to link to the package type',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2PackageTypetoBundlesRoute = createRoute({
  method: 'get',
  path: '/api/v2/PackageTypetoBundles',
  tags: ['PackageTypetoBundles'],
  summary: 'Get all of the Package Type to Bundle Relationships.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypetoBundles_Get',
  request: {
    query: z.object({
      BundleID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by BundleID.',
            in: 'query',
            name: 'BundleID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundleSchema,
        },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundleSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2PackageTypetoBundlesRoute = createRoute({
  method: 'put',
  path: '/api/v2/PackageTypetoBundles',
  tags: ['PackageTypetoBundles'],
  summary: 'Update a Package Type ID to Bundle Relationship.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypetoBundles_Put',
  request: {
    body: {
      description: 'The PackageTypeToBundle to update.',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageTypeIDtoBundleSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              BundleID: z
                .string()
                .openapi({ description: 'The bundle to include the package in.' }),
              PackageTypeID: z
                .string()
                .openapi({ description: 'The package type id of the package to include' }),
              PackageVersion: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The package version of the package to include' }),
              Priority: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(100),
                )
                .openapi({
                  description:
                    'The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.',
                }),
              SubscriptionType: z
                .enum(['Required', 'IncludeByDefault', 'ExcludeByDefault'])
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The type of subscription supported.  The default subscription type is Required.',
                }),
            })
            .openapi({ required: ['BundleID', 'PackageTypeID', 'PackageVersion', 'Priority'] }),
        },
        'application/xml': { schema: UpdateSystemModelsPackageTypeIDtoBundleSchema },
        'text/json': { schema: UpdateSystemModelsPackageTypeIDtoBundleSchema },
        'text/xml': { schema: UpdateSystemModelsPackageTypeIDtoBundleSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const postApiV2PackageTypetoBundlesRoute = createRoute({
  method: 'post',
  path: '/api/v2/PackageTypetoBundles',
  tags: ['PackageTypetoBundles'],
  summary: 'Add a new Package Type ID to Bundle Relationship.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypetoBundles_Post',
  request: {
    body: {
      description: 'The PackageTypeToBundle to add.',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageTypeIDtoBundleSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              BundleID: z
                .string()
                .openapi({ description: 'The bundle to include the package in.' }),
              PackageTypeID: z
                .string()
                .openapi({ description: 'The package type id of the package to include' }),
              PackageVersion: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The package version of the package to include' }),
              Priority: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(100),
                )
                .openapi({
                  description:
                    'The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.',
                }),
              SubscriptionType: z
                .enum(['Required', 'IncludeByDefault', 'ExcludeByDefault'])
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The type of subscription supported.  The default subscription type is Required.',
                }),
            })
            .openapi({ required: ['BundleID', 'PackageTypeID', 'PackageVersion', 'Priority'] }),
        },
        'application/xml': { schema: UpdateSystemModelsPackageTypeIDtoBundleSchema },
        'text/json': { schema: UpdateSystemModelsPackageTypeIDtoBundleSchema },
        'text/xml': { schema: UpdateSystemModelsPackageTypeIDtoBundleSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2PackageTypetoBundlesRoute = createRoute({
  method: 'delete',
  path: '/api/v2/PackageTypetoBundles',
  tags: ['PackageTypetoBundles'],
  summary: 'Delete a Package Type to Bundle Relationship.',
  description: 'No Documentation Found.',
  operationId: 'PackageTypetoBundles_Delete',
  request: {
    query: z.object({
      BundleID: z
        .string()
        .openapi({
          param: {
            description: 'The BundleID',
            in: 'query',
            name: 'BundleID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      PackageTypeID: z
        .string()
        .openapi({
          param: {
            description: 'The PackageTypeID',
            in: 'query',
            name: 'PackageTypeID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2PackagesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Packages',
  tags: ['Packages'],
  summary: 'List Packages.',
  description: 'No Documentation Found.',
  operationId: 'Packages_GetPackages',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      PackageTypeID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. If provided, filters by PackageTypeID.',
            in: 'query',
            name: 'PackageTypeID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      Version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. If provided, filters by Version.',
            in: 'query',
            name: 'Version',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      Released: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. If provided, filters by Released.',
            in: 'query',
            name: 'Released',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseUpdateSystemModelsPackageSchema },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsPackageSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2PackagesRoute = createRoute({
  method: 'post',
  path: '/api/v2/Packages',
  tags: ['Packages'],
  summary: 'Add a Package to the Update System.',
  description: 'No Documentation Found.',
  operationId: 'Packages_PostPackage',
  request: {
    body: {
      description: 'The package to add.',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Autorun: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Value is true if package should run automatically. Default value is false.',
                }),
              CRC: z.string().openapi({ description: 'The CRC used to validate the download.' }),
              Description: z.string().openapi({ description: 'The package description' }),
              LocalizedName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional. The StringID used to localize the name of the Package',
                }),
              Notes: z.string().exactOptional().openapi({ description: 'Notes about the package' }),
              PackageID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. The package ID' }),
              PackageTypeID: z
                .string()
                .openapi({ description: 'The id of the package type this package belongs to.' }),
              PreviousVersion: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(0).max(2147483647),
                )
                .exactOptional()
                .openapi({
                  description:
                    'For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.',
                }),
              ReleaseDate: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date the package was released' }),
              Released: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'True if the package is released.  Default value is False.',
                }),
              RemoveOnSuccess: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'True to remove the package after successful execution.  Default value is False.',
                }),
              Size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.\r\n            If the size provided does not match the size in the response from the URL an error will be returned.',
                }),
              Switches: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The command line arguments for the package.  Default value is an empty string.',
                }),
              Url: z.string().openapi({ description: 'The Url to download the package from.' }),
              Version: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(2147483647),
                )
                .openapi({ description: 'The version.' }),
            })
            .openapi({
              required: ['PackageTypeID', 'Url', 'CRC', 'Version', 'Description', 'ReleaseDate'],
            }),
        },
        'application/xml': { schema: UpdateSystemModelsPackageSchema },
        'text/json': { schema: UpdateSystemModelsPackageSchema },
        'text/xml': { schema: UpdateSystemModelsPackageSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2PackagesIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/Packages/{ID}',
  tags: ['Packages'],
  summary: 'Find a Package.',
  description: 'No Documentation Found.',
  operationId: 'Packages_GetPackage',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Package ID to Search for',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageSchema },
        'application/xml': { schema: UpdateSystemModelsPackageSchema },
        'text/json': { schema: UpdateSystemModelsPackageSchema },
        'text/xml': { schema: UpdateSystemModelsPackageSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2PackagesIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/Packages/{ID}',
  tags: ['Packages'],
  summary: 'Modify a Packge to the Update System.',
  description: 'No Documentation Found.',
  operationId: 'Packages_PutPackage',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the Package',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The package to update.',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Autorun: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Value is true if package should run automatically. Default value is false.',
                }),
              CRC: z.string().openapi({ description: 'The CRC used to validate the download.' }),
              Description: z.string().openapi({ description: 'The package description' }),
              LocalizedName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional. The StringID used to localize the name of the Package',
                }),
              Notes: z.string().exactOptional().openapi({ description: 'Notes about the package' }),
              PackageID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. The package ID' }),
              PackageTypeID: z
                .string()
                .openapi({ description: 'The id of the package type this package belongs to.' }),
              PreviousVersion: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(0).max(2147483647),
                )
                .exactOptional()
                .openapi({
                  description:
                    'For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.',
                }),
              ReleaseDate: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date the package was released' }),
              Released: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'True if the package is released.  Default value is False.',
                }),
              RemoveOnSuccess: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'True to remove the package after successful execution.  Default value is False.',
                }),
              Size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.\r\n            If the size provided does not match the size in the response from the URL an error will be returned.',
                }),
              Switches: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The command line arguments for the package.  Default value is an empty string.',
                }),
              Url: z.string().openapi({ description: 'The Url to download the package from.' }),
              Version: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(2147483647),
                )
                .openapi({ description: 'The version.' }),
            })
            .openapi({
              required: ['PackageTypeID', 'Url', 'CRC', 'Version', 'Description', 'ReleaseDate'],
            }),
        },
        'application/xml': { schema: UpdateSystemModelsPackageSchema },
        'text/json': { schema: UpdateSystemModelsPackageSchema },
        'text/xml': { schema: UpdateSystemModelsPackageSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2PackagesIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/Packages/{ID}',
  tags: ['Packages'],
  summary: 'Delete a Package.',
  description: 'No Documentation Found.',
  operationId: 'Packages_DeletePackage',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Package ID to Delete',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2PermissionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Permissions',
  tags: ['Permissions'],
  summary: 'List Permissions',
  description: 'No Documentation Found.',
  operationId: 'Permissions_GetPermissions',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by permission name. Supports ending wildcard (*). Optional.',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsPermissionSchema },
        'text/json': { schema: APIPagedResponseAPIModelsPermissionSchema },
      },
    },
  },
})

export const postApiV2PermissionsRoute = createRoute({
  method: 'post',
  path: '/api/v2/Permissions',
  tags: ['Permissions'],
  summary: 'Adds a Permission',
  description: 'No Documentation Found.',
  operationId: 'Permissions_PostPermission',
  request: {
    body: {
      description: 'Permission to add',
      content: {
        'application/json': { schema: APIModelsPermissionSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              DataDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Description of data to be provided with Role Authorization',
                }),
              DataRequired: z
                .enum(['Yes', 'No', 'Optional'])
                .openapi({ description: 'Indicates if data is required or optional' }),
              Description: z.string().exactOptional(),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The identifier of the permission.' }),
              Name: z.string().openapi({ description: 'The name of the permission.' }),
            })
            .openapi({ required: ['Name', 'DataRequired'] }),
        },
        'application/xml': { schema: APIModelsPermissionSchema },
        'text/json': { schema: APIModelsPermissionSchema },
        'text/xml': { schema: APIModelsPermissionSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiV2PermissionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/Permissions/{id}',
  tags: ['Permissions'],
  summary: 'Gets a Permission',
  description: 'No Documentation Found.',
  operationId: 'Permissions_GetPermission',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Id of Permission',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIModelsPermissionSchema },
        'application/xml': { schema: APIModelsPermissionSchema },
        'text/json': { schema: APIModelsPermissionSchema },
        'text/xml': { schema: APIModelsPermissionSchema },
      },
    },
  },
})

export const putApiV2PermissionsIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/Permissions/{id}',
  tags: ['Permissions'],
  summary: 'Updates a Permission',
  description: 'No Documentation Found.',
  operationId: 'Permissions_PutPermission',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Id of Permission',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Updated Permission',
      content: {
        'application/json': { schema: APIModelsPermissionSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              DataDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Description of data to be provided with Role Authorization',
                }),
              DataRequired: z
                .enum(['Yes', 'No', 'Optional'])
                .openapi({ description: 'Indicates if data is required or optional' }),
              Description: z.string().exactOptional(),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The identifier of the permission.' }),
              Name: z.string().openapi({ description: 'The name of the permission.' }),
            })
            .openapi({ required: ['Name', 'DataRequired'] }),
        },
        'application/xml': { schema: APIModelsPermissionSchema },
        'text/json': { schema: APIModelsPermissionSchema },
        'text/xml': { schema: APIModelsPermissionSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteApiV2PermissionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/Permissions/{id}',
  tags: ['Permissions'],
  summary: 'Deletes a Permission',
  description: 'No Documentation Found.',
  operationId: 'Permissions_DeletePermission',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Id of Permission',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiV2PriorityPackagesRoute = createRoute({
  method: 'get',
  path: '/api/v2/PriorityPackages',
  tags: ['PriorityPackages'],
  summary: 'Get a list of Priority Packages by Client.',
  description: 'No Documentation Found.',
  operationId: 'PriorityPackages_GetPriorityPackages',
  request: {
    query: z.object({
      ClientID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter priority packages by ClientID.',
            in: 'query',
            name: 'ClientID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      Status: z
        .enum(['Active', 'Completed', 'All'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter returned packages by status. By default only active packages will be returned.',
            in: 'query',
            name: 'Status',
            required: false,
            schema: { enum: ['Active', 'Completed', 'All'], type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseUpdateSystemModelsPriorityPackageSchema },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsPriorityPackageSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2PriorityPackagesRoute = createRoute({
  method: 'post',
  path: '/api/v2/PriorityPackages',
  tags: ['PriorityPackages'],
  summary: 'Add a Priority Package for a Client.',
  description: 'No Documentation Found.',
  operationId: 'PriorityPackages_PostPriorityPackages',
  request: {
    body: {
      description: 'The PriorityPackage to add',
      content: {
        'application/json': { schema: UpdateSystemModelsPriorityPackageSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Autorun: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Read Only. From the package specified by package ID.\r\n            Value is true if package should run automatically. Default value is false.',
                }),
              CRC: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. From the package specified by package ID.' }),
              ClientID: z
                .string()
                .openapi({ description: 'The ID of the client to receive the priority package' }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. From the package specified by package ID.' }),
              Notes: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. From the package specified by package ID.' }),
              PackageID: z
                .string()
                .openapi({ description: 'The ID of the package to push as a priority package.' }),
              PackageTypeID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. From the package specified by package ID.' }),
              PreviousVersion: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Read Only. From the package specified by package ID.' }),
              PriorityPackageID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. The ID of the priority package.' }),
              ReleaseDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Read Only. From the package specified by package ID.\r\n            The date the package was released',
                }),
              Released: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Read Only. From the package specified by package ID.' }),
              RemoveOnSuccess: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Read Only. From the package specified by package ID.' }),
              Size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'Read Only. From the package specified by package ID.',
                }),
              Switches: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The command line arguments for the priority package.  Default value is an empty string.',
                }),
              TimeStamp: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Read Only. The timestamp of the priority package.' }),
              Url: z
                .string()
                .exactOptional()
                .openapi({ description: 'Read Only. From the package specified by package ID.' }),
              Version: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Read Only. From the package specified by package ID.' }),
            })
            .openapi({ required: ['ClientID', 'PackageID'] }),
        },
        'application/xml': { schema: UpdateSystemModelsPriorityPackageSchema },
        'text/json': { schema: UpdateSystemModelsPriorityPackageSchema },
        'text/xml': { schema: UpdateSystemModelsPriorityPackageSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2PriorityPackagesIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/PriorityPackages/{ID}',
  tags: ['PriorityPackages'],
  summary: 'Get a Priority Packages for a Client.',
  description: 'No Documentation Found.',
  operationId: 'PriorityPackages_GetPriorityPackage',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Priority Package ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsPriorityPackageSchema },
        'application/xml': { schema: UpdateSystemModelsPriorityPackageSchema },
        'text/json': { schema: UpdateSystemModelsPriorityPackageSchema },
        'text/xml': { schema: UpdateSystemModelsPriorityPackageSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const deleteApiV2PriorityPackagesIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/PriorityPackages/{ID}',
  tags: ['PriorityPackages'],
  summary: 'Delete a Priority Package for a Client.',
  description: 'No Documentation Found.',
  operationId: 'PriorityPackages_DeletePriorityPackages',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Priority Package ID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ReleasesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Releases',
  tags: ['Release'],
  summary: 'Get Release',
  description:
    'Gets a collection of Release. When successful, the response is a PagedResponse of Release.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Release_GetReleases',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      visible: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by visible.',
            in: 'query',
            name: 'visible',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      bundleID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by BundleID.',
            in: 'query',
            name: 'bundleID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseContentSubmissionSharedBusinessEntitiesReleaseSchema,
        },
        'text/json': {
          schema: APIPagedResponseContentSubmissionSharedBusinessEntitiesReleaseSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ReleasesRoute = createRoute({
  method: 'post',
  path: '/api/v2/Releases',
  tags: ['Release'],
  summary: 'Create a Release',
  description:
    'Creates a Release.  The body of the POST is the Release to create.\r\n            The ReleaseId will be assigned on creation of the Job.  When successful, the response\r\n            is the Release Id.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Release_PostRelease',
  request: {
    body: {
      description: 'The Release to create.',
      content: {
        'application/json': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              BuildDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Build Date' }),
              BundleIDs: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({ description: 'IDs of AUC Bundles associated with this Release.' }),
              ReleaseDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Release Date' }),
              ReleaseID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Release ID' }),
              ReleaseNumber: z.string().exactOptional().openapi({ description: 'Release Number' }),
              Visible: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Visible' }),
            })
            .openapi({ description: 'Release class', required: [] }),
        },
        'application/xml': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReleasesReleaseIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/Releases/{ReleaseId}',
  tags: ['Release'],
  summary: 'Get a  Release by ID',
  description:
    'Gets a Release by ID. When successful, the response is the requested Release.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Release_GetRelease',
  request: {
    params: z.object({
      ReleaseId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Release to get.',
            in: 'path',
            name: 'ReleaseId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
        'application/xml': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ReleasesReleaseIdBundleBundleIdRoute = createRoute({
  method: 'post',
  path: '/api/v2/Releases/{ReleaseId}/Bundle/{BundleId}',
  tags: ['Release'],
  summary: 'Associates the release with a bundle.',
  description: 'No Documentation Found.',
  operationId: 'Release_PostReleaseBundle',
  request: {
    params: z.object({
      ReleaseId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The release identifier.',
            in: 'path',
            name: 'ReleaseId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      BundleId: z
        .string()
        .openapi({
          param: {
            description: 'The bundle identifier.',
            in: 'path',
            name: 'BundleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2ReleasesReleaseIdBundleBundleIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/Releases/{ReleaseId}/Bundle/{BundleId}',
  tags: ['Release'],
  summary: 'Deletes the association between a release and a bundle.',
  description: 'No Documentation Found.',
  operationId: 'Release_DeleteReleaseBundle',
  request: {
    params: z.object({
      ReleaseId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The release identifier.',
            in: 'path',
            name: 'ReleaseId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      BundleId: z
        .string()
        .openapi({
          param: {
            description: 'The bundle identifier.',
            in: 'path',
            name: 'BundleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const putApiV2ReleasesReleaseId2Route = createRoute({
  method: 'put',
  path: '/api/v2/Releases/{releaseId}',
  tags: ['Release'],
  summary: 'Update a Release',
  description:
    'Updates a Release.  The body of the PUT is the updated Release.  \r\n            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Release_PutContentDefinition',
  request: {
    params: z.object({
      releaseId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Release to update',
            in: 'path',
            name: 'releaseId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated Release',
      content: {
        'application/json': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              BuildDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Build Date' }),
              BundleIDs: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({ description: 'IDs of AUC Bundles associated with this Release.' }),
              ReleaseDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Release Date' }),
              ReleaseID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Release ID' }),
              ReleaseNumber: z.string().exactOptional().openapi({ description: 'Release Number' }),
              Visible: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Visible' }),
            })
            .openapi({ description: 'Release class', required: [] }),
        },
        'application/xml': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesReleaseSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ReportingBundleStatusSummaryRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/BundleStatusSummary',
  tags: ['Reporting'],
  summary: 'Get a summary of all Packages in a Bundle',
  description: 'No Documentation Found.',
  operationId: 'Reporting_BundleStatusSummary',
  request: {
    query: z.object({
      BundleID: z
        .string()
        .openapi({
          param: {
            description: 'The BundleID',
            in: 'query',
            name: 'BundleID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseUpdateSystemModelsPackageStatusSummarySchema,
        },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsPackageStatusSummarySchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReportingBundlesInUpdateGroupRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/BundlesInUpdateGroup',
  tags: ['Reporting'],
  summary: 'Get a list of bundles for UpdateGroup.',
  description: 'No Documentation Found.',
  operationId: 'Reporting_BundlesInUpdateGroup',
  request: {
    query: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The UpdateGroupID',
            in: 'query',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      IncludeInactive: z
        .stringbool()
        .openapi({
          param: {
            description: 'Include Inactive Bundles (true|false)',
            in: 'query',
            name: 'IncludeInactive',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseUpdateSystemModelsBundleSchema },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsBundleSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReportingClientInfoRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/ClientInfo',
  tags: ['Reporting'],
  summary: 'Get Client Information',
  description: 'No Documentation Found.',
  operationId: 'Reporting_ClientInfo',
  request: {
    query: z.object({
      ClientID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            in: 'query',
            name: 'ClientID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsClientInfoSchema },
        'application/xml': { schema: UpdateSystemModelsClientInfoSchema },
        'text/json': { schema: UpdateSystemModelsClientInfoSchema },
        'text/xml': { schema: UpdateSystemModelsClientInfoSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReportingCurrentPackagesInUpdateGroupRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/CurrentPackagesInUpdateGroup',
  tags: ['Reporting'],
  summary: 'Get the current packages for an update group.',
  description: 'No Documentation Found.',
  operationId: 'Reporting_CurrentPackagesInUpdateGroup',
  request: {
    query: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The UpdateGroupID',
            in: 'query',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      SubscriptionTypeFilter: z
        .enum(['RequiredOnly', 'Default', 'All'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional.  The subscription type filter to use.  By default the Default packages (Required and IncludeByDefault) will be returned.',
            in: 'query',
            name: 'SubscriptionTypeFilter',
            required: false,
            schema: { enum: ['RequiredOnly', 'Default', 'All'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(UpdateSystemModelsPackageSchema) },
        'application/xml': { schema: z.array(UpdateSystemModelsPackageSchema) },
        'text/json': { schema: z.array(UpdateSystemModelsPackageSchema) },
        'text/xml': { schema: z.array(UpdateSystemModelsPackageSchema) },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReportingGetClientRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/GetClient',
  tags: ['Reporting'],
  summary: 'Get a Client in the Update System.',
  description: 'No Documentation Found.',
  operationId: 'Reporting_GetClient',
  request: {
    query: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            in: 'query',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsClientSchema },
        'application/xml': { schema: UpdateSystemModelsClientSchema },
        'text/json': { schema: UpdateSystemModelsClientSchema },
        'text/xml': { schema: UpdateSystemModelsClientSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReportingGetSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/GetSubscriptions',
  tags: ['Reporting'],
  summary: 'Get a list of current Client Subscriptions.',
  description: 'No Documentation Found.',
  operationId: 'Reporting_GetSubscriptions',
  request: {
    query: z.object({
      ClientID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Client ID',
            in: 'query',
            name: 'ClientID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      UpdateGroupID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Update Group ID',
            in: 'query',
            name: 'UpdateGroupID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationshipSchema,
        },
        'text/json': {
          schema: APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationshipSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReportingPackageStatusSummaryRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/PackageStatusSummary',
  tags: ['Reporting'],
  summary: 'Get a summary report for a Specific Package',
  description: 'No Documentation Found.',
  operationId: 'Reporting_PackageStatusSummary',
  request: {
    query: z.object({
      PackageID: z
        .string()
        .openapi({
          param: {
            description: 'The Package ID',
            in: 'query',
            name: 'PackageID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsPackageStatusSummarySchema },
        'application/xml': { schema: UpdateSystemModelsPackageStatusSummarySchema },
        'text/json': { schema: UpdateSystemModelsPackageStatusSummarySchema },
        'text/xml': { schema: UpdateSystemModelsPackageStatusSummarySchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReportingRegisteredClientsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/RegisteredClients',
  tags: ['Reporting'],
  summary: 'Get a list of subscribed clients',
  description: 'No Documentation Found.',
  operationId: 'Reporting_RegisteredClients',
  request: {
    query: z.object({
      UpdateGroupID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional but required when including any or all of following parameters: ReportValue, ReportResult, ReportResultIsValid. The Update Group ID. If not provided, all clients will be returned.',
            in: 'query',
            name: 'UpdateGroupID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ClientID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter where ClientID matches a value. Wildcards are supported (*).',
            in: 'query',
            name: 'ClientID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      Tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter where Tag matches a value. Wildcards are supported (*).',
            in: 'query',
            name: 'Tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ReportResult: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional and UpdateGroupID must be included. Filter where ReportResult matches a value. Wildcards are supported (*).',
            in: 'query',
            name: 'ReportResult',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ReportResultIsValid: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional and UpdateGroupID must be included. When 'true' filters results where ReportResult equals ReportResultExpected.  When 'false' filters results where ValueToValidate does not equal ReportResults.",
            in: 'query',
            name: 'ReportResultIsValid',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ReportValue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional and UpdateGroupID must be included. Filter where ReportValue matches a value. Wildcards are supported (*).',
            in: 'query',
            name: 'ReportValue',
            required: false,
            schema: { type: 'string' },
          },
        }),
      LastCheckInBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter where LastCheckIn occured before the provided date.',
            in: 'query',
            name: 'LastCheckInBefore',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      LastCheckInAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter where LastCheckIn occured after the provided date.',
            in: 'query',
            name: 'LastCheckInAfter',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      OrderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specify the order in which results should be returned. Use this format: [FieldName] [ASC|ASCENDING|DESC|DESCENDING],...   \r\n            If sort direction is not provided for a field, it will be sorted ascending.',
            in: 'query',
            name: 'OrderBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema:
            APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadataSchema,
        },
        'text/json': {
          schema:
            APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadataSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReportingUpdateGroupsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/UpdateGroups',
  tags: ['Reporting'],
  summary:
    'Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.',
  description: 'No Documentation Found.',
  operationId: 'Reporting_UpdateGroups',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseUpdateSystemModelsUpdateGroupSchema },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsUpdateGroupSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ReportingUpdateMetricsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Reporting/UpdateMetrics',
  tags: ['Reporting'],
  summary: 'Get data for pie charts in UpdateMetrics.',
  description: 'No Documentation Found.',
  operationId: 'Reporting_UpdateMetrics',
  request: {
    query: z.object({
      UpdateGroupID: z
        .string()
        .openapi({
          param: {
            description: 'The UpdateType in which clients must be for the report to include them.',
            in: 'query',
            name: 'UpdateGroupID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bundleNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Tells us which chart to show based upon filter.',
            in: 'query',
            name: 'bundleNumber',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateMetricsDataSchema },
        'application/xml': { schema: UpdateSystemModelsUpdateMetricsDataSchema },
        'text/json': { schema: UpdateSystemModelsUpdateMetricsDataSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateMetricsDataSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2RolesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Roles',
  tags: ['Roles'],
  summary: 'List Roles',
  description: 'No Documentation Found.',
  operationId: 'Roles_GetRoles',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Finds a role with the given name.',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      permissionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'permissionID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      permissionName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filters roles by whether they contain the provided permission.',
            in: 'query',
            name: 'permissionName',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsRoleSchema },
        'text/json': { schema: APIPagedResponseAPIModelsRoleSchema },
      },
    },
  },
})

export const postApiV2RolesRoute = createRoute({
  method: 'post',
  path: '/api/v2/Roles',
  tags: ['Roles'],
  summary: 'Adds a User Role',
  description: 'No Documentation Found.',
  operationId: 'Roles_PostRole',
  request: {
    body: {
      description: 'Role to add',
      content: {
        'application/json': { schema: APIModelsRoleSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Description: z.string().openapi({ description: 'Role description' }),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: "The role's identifier." }),
              Name: z
                .string()
                .regex(/^[0-9a-zA-Z]*?[a-zA-Z]+[0-9a-zA-Z]*$/)
                .openapi({
                  description:
                    'The name of the role. Must be alpha-numeric strings separated by a period (.).',
                }),
            })
            .openapi({ description: 'Defines an API Role', required: ['Name', 'Description'] }),
        },
        'application/xml': { schema: APIModelsRoleSchema },
        'text/json': { schema: APIModelsRoleSchema },
        'text/xml': { schema: APIModelsRoleSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
  },
})

export const getApiV2RolesIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/Roles/{id}',
  tags: ['Roles'],
  summary: 'Gets a User Role',
  description: 'No Documentation Found.',
  operationId: 'Roles_GetRole',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: "The role's id",
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIModelsRoleSchema },
        'application/xml': { schema: APIModelsRoleSchema },
        'text/json': { schema: APIModelsRoleSchema },
        'text/xml': { schema: APIModelsRoleSchema },
      },
    },
  },
})

export const putApiV2RolesIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/Roles/{id}',
  tags: ['Roles'],
  summary: 'Updates a User Role',
  description: 'No Documentation Found.',
  operationId: 'Roles_PutRole',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: "The role's id",
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Updated Role',
      content: {
        'application/json': { schema: APIModelsRoleSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Description: z.string().openapi({ description: 'Role description' }),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: "The role's identifier." }),
              Name: z
                .string()
                .regex(/^[0-9a-zA-Z]*?[a-zA-Z]+[0-9a-zA-Z]*$/)
                .openapi({
                  description:
                    'The name of the role. Must be alpha-numeric strings separated by a period (.).',
                }),
            })
            .openapi({ description: 'Defines an API Role', required: ['Name', 'Description'] }),
        },
        'application/xml': { schema: APIModelsRoleSchema },
        'text/json': { schema: APIModelsRoleSchema },
        'text/xml': { schema: APIModelsRoleSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteApiV2RolesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/Roles/{id}',
  tags: ['Roles'],
  summary: 'Deletes a User Role',
  description: 'No Documentation Found.',
  operationId: 'Roles_DeleteRole',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: "The role's id",
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiV2RolesIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Roles/{id}/Permissions',
  tags: ['Roles'],
  summary: 'Get the Permissions for a Role',
  description: 'No Documentation Found.',
  operationId: 'Roles_GetRolePermissions',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Role',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by permission name. Optional.',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsPermissionSchema },
        'text/json': { schema: APIPagedResponseAPIModelsPermissionSchema },
      },
    },
  },
})

export const putApiV2RolesIdPermissionsRoute = createRoute({
  method: 'put',
  path: '/api/v2/Roles/{id}/Permissions',
  tags: ['Roles'],
  summary: 'Manage the Permissions for a Role',
  description: 'No Documentation Found.',
  operationId: 'Roles_PutRolePermissions',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Role',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Permissions Changes for the Role',
      content: {
        'application/json': { schema: z.array(APIModelsRolePermissionChangeSchema) },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(APIModelsRolePermissionChangeSchema),
          ),
        },
        'application/xml': { schema: z.array(APIModelsRolePermissionChangeSchema) },
        'text/json': { schema: z.array(APIModelsRolePermissionChangeSchema) },
        'text/xml': { schema: z.array(APIModelsRolePermissionChangeSchema) },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiV2RolesIdUsersRoute = createRoute({
  method: 'get',
  path: '/api/v2/Roles/{id}/Users',
  tags: ['UserPermissions'],
  summary: "Get all user's in a role",
  description: 'No Documentation Found.',
  operationId: 'UserPermissions_GetUsers',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: "The Role's ID",
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsUserSchema },
        'text/json': { schema: APIPagedResponseAPIModelsUserSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2RolesIdUsersRoute = createRoute({
  method: 'put',
  path: '/api/v2/Roles/{id}/Users',
  tags: ['UserPermissions'],
  summary: "Update a Role's users",
  description: 'No Documentation Found.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: "The Role's ID",
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: "A list of changes to the Role's Users",
      content: {
        'application/json': { schema: z.array(APIModelsRoleUserChangeSchema) },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(
              z
                .object({
                  Action: z
                    .enum(['Grant', 'Revoke'])
                    .openapi({ description: 'The action to take with the user' }),
                  Id: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .openapi({ description: 'The Id of the User' }),
                })
                .openapi({ required: ['Id', 'Action'] }),
            ),
          ),
        },
        'application/xml': { schema: z.array(APIModelsRoleUserChangeSchema) },
        'text/json': { schema: z.array(APIModelsRoleUserChangeSchema) },
        'text/xml': { schema: z.array(APIModelsRoleUserChangeSchema) },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2StringDefinitionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/StringDefinitions',
  tags: ['StringDefinitions'],
  summary: 'Get a paged response of Global String Definitions.',
  description: 'No Documentation Found.',
  operationId: 'StringDefinitions_GetDefinitions',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The page limit. The default page limit is 10. Ignored if 'stringIds' is provided.",
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      modifiedAfterTimestamp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array.',
            in: 'query',
            name: 'modifiedAfterTimestamp',
            required: false,
            schema: { type: 'string' },
          },
        }),
      includeTranslations: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false.',
            in: 'query',
            name: 'includeTranslations',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      stringText: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The text for which to search in the StringDefinition object’s translations. Only StringDefinition objects for matching StringTranslation objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards. includeTranslations must be true.',
            in: 'query',
            name: 'stringText',
            required: false,
            schema: { type: 'string' },
          },
        }),
      descriptionText: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The text for which to search in the StringDefinition description field. Only matching objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards.',
            in: 'query',
            name: 'descriptionText',
            required: false,
            schema: { type: 'string' },
          },
        }),
      useFullText: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. This flag is used to determin whether to use the FullText Search or not.',
            in: 'query',
            name: 'useFullText',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      includeDeletedLanguages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false.',
            in: 'query',
            name: 'includeDeletedLanguages',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      languageIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty.',
            in: 'query',
            name: 'languageIds',
            required: false,
            schema: { type: 'string' },
          },
        }),
      stringIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. A comma-delimited list of string ids. Up to 40 string IDs may be provided. May not be used with 'modifiedAfterTimestamp', 'stringText', 'descriptionText', or 'useFullText'.",
            in: 'query',
            name: 'stringIds',
            required: false,
            schema: { type: 'string' },
          },
        }),
      matchingTranslationsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. If false, all translations for returned String Definitions are included. Must be used with 'stringText' provided and 'includeTranslations' = true.",
            in: 'query',
            name: 'matchingTranslationsOnly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsStringDefinitionSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsStringDefinitionSchema,
        },
        'text/json': { schema: APIIPagedResponseGlobalResourcesSharedModelsStringDefinitionSchema },
        'text/xml': { schema: APIIPagedResponseGlobalResourcesSharedModelsStringDefinitionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2StringDefinitionsBatchRoute = createRoute({
  method: 'put',
  path: '/api/v2/StringDefinitions/Batch',
  tags: ['StringDefinitions'],
  summary:
    'Update StringDefinition objects. Accepts an array of StringDefinition objects. This endpoint will add StringDefinitionChange objects to the database. The DescriptionForTranslator may not be modified after a String is submitted for translation.',
  description: 'No Documentation Found.',
  operationId: 'StringDefinitions_UpdateDefinitions',
  request: {
    body: {
      description: 'The Array of Definitions to update',
      content: {
        'application/json': { schema: z.array(GlobalResourcesSharedModelsStringDefinitionSchema) },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(
              z
                .object({
                  DescriptionForTranslator: z
                    .string()
                    .openapi({ description: 'The description of the string to be translated.' }),
                  DoNotTranslate: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'True if the string should not be translated. False by default.',
                    }),
                  Id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The identifier for the string. Read Only.' }),
                  ParameterCount: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'The number of parameters expected for the string.' }),
                  Timestamp: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'A value indicating the last modification of this string. Read Only.',
                    }),
                  Translations: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            AuthorId: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description: 'The id of the user to last edit thie translation',
                              }),
                            LanguageId: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description: 'The id of the language of the translation',
                              }),
                            State: z
                              .enum([
                                'Original',
                                'Requested',
                                'Processing',
                                'Processed',
                                'Validated',
                                'Invalidated',
                                'RequestPending',
                                'CreatePending',
                              ])
                              .exactOptional()
                              .openapi({ description: 'The state of the translation' }),
                            StringId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'The id of the string that is translated' }),
                            StringValue: z
                              .string()
                              .openapi({ description: 'The translated string' }),
                            Timestamp: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'A value indicating the last modification of this translation. Read Only.',
                              }),
                          })
                          .openapi({
                            description: 'A translation of a string in a specific language',
                            required: ['StringValue'],
                          }),
                      ),
                    )
                    .exactOptional()
                    .openapi({ description: 'Translations for the string.' }),
                })
                .openapi({
                  description: 'The definition of a string to be translated',
                  required: ['DescriptionForTranslator'],
                }),
            ),
          ),
        },
        'application/xml': { schema: z.array(GlobalResourcesSharedModelsStringDefinitionSchema) },
        'text/json': { schema: z.array(GlobalResourcesSharedModelsStringDefinitionSchema) },
        'text/xml': { schema: z.array(GlobalResourcesSharedModelsStringDefinitionSchema) },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const postApiV2StringDefinitionsBatchRoute = createRoute({
  method: 'post',
  path: '/api/v2/StringDefinitions/Batch',
  tags: ['StringDefinitions'],
  summary:
    'Create StringDefinition object. The originating translation must be provided. Accepts an array of StringDefinition objects. Returns nothing.',
  description: 'No Documentation Found.',
  operationId: 'StringDefinitions_PostDefinition',
  request: {
    body: {
      description: 'The StringDefinition Object array, along with originating translation.',
      content: {
        'application/json': { schema: z.array(GlobalResourcesSharedModelsStringDefinitionSchema) },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(
              z
                .object({
                  DescriptionForTranslator: z
                    .string()
                    .openapi({ description: 'The description of the string to be translated.' }),
                  DoNotTranslate: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'True if the string should not be translated. False by default.',
                    }),
                  Id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The identifier for the string. Read Only.' }),
                  ParameterCount: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'The number of parameters expected for the string.' }),
                  Timestamp: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'A value indicating the last modification of this string. Read Only.',
                    }),
                  Translations: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            AuthorId: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description: 'The id of the user to last edit thie translation',
                              }),
                            LanguageId: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description: 'The id of the language of the translation',
                              }),
                            State: z
                              .enum([
                                'Original',
                                'Requested',
                                'Processing',
                                'Processed',
                                'Validated',
                                'Invalidated',
                                'RequestPending',
                                'CreatePending',
                              ])
                              .exactOptional()
                              .openapi({ description: 'The state of the translation' }),
                            StringId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'The id of the string that is translated' }),
                            StringValue: z
                              .string()
                              .openapi({ description: 'The translated string' }),
                            Timestamp: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'A value indicating the last modification of this translation. Read Only.',
                              }),
                          })
                          .openapi({
                            description: 'A translation of a string in a specific language',
                            required: ['StringValue'],
                          }),
                      ),
                    )
                    .exactOptional()
                    .openapi({ description: 'Translations for the string.' }),
                })
                .openapi({
                  description: 'The definition of a string to be translated',
                  required: ['DescriptionForTranslator'],
                }),
            ),
          ),
        },
        'application/xml': { schema: z.array(GlobalResourcesSharedModelsStringDefinitionSchema) },
        'text/json': { schema: z.array(GlobalResourcesSharedModelsStringDefinitionSchema) },
        'text/xml': { schema: z.array(GlobalResourcesSharedModelsStringDefinitionSchema) },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2StringDefinitionsIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/StringDefinitions/{ID}',
  tags: ['StringDefinitions'],
  summary: 'Get a paged response of Global String Definitions.',
  description: 'No Documentation Found.',
  operationId: 'StringDefinitions_GetDefinition',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({ param: { in: 'path', name: 'ID', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      includeTranslations: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false.',
            in: 'query',
            name: 'includeTranslations',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      includeDeletedLanguages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false.',
            in: 'query',
            name: 'includeDeletedLanguages',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      languageIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty.',
            in: 'query',
            name: 'languageIds',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsStringDefinitionSchema },
        'application/xml': { schema: GlobalResourcesSharedModelsStringDefinitionSchema },
        'text/json': { schema: GlobalResourcesSharedModelsStringDefinitionSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsStringDefinitionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2StringTranslationsRoute = createRoute({
  method: 'get',
  path: '/api/v2/StringTranslations',
  tags: ['StringTranslations'],
  summary: 'Get a paged response of Global String Translations.',
  description: 'No Documentation Found.',
  operationId: 'StringTranslations_GetTranslations',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      modifiedAfterTimestamp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array.',
            in: 'query',
            name: 'modifiedAfterTimestamp',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsStringTranslationSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsStringTranslationSchema,
        },
        'text/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsStringTranslationSchema,
        },
        'text/xml': { schema: APIIPagedResponseGlobalResourcesSharedModelsStringTranslationSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2StringTranslationsBatchRoute = createRoute({
  method: 'put',
  path: '/api/v2/StringTranslations/Batch',
  tags: ['StringTranslations'],
  summary: 'Update corrections to string translations',
  description: 'No Documentation Found.',
  operationId: 'StringTranslations_UpdateTranslations',
  request: {
    body: {
      content: {
        'application/json': { schema: z.array(GlobalResourcesSharedModelsStringTranslationSchema) },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(
              z
                .object({
                  AuthorId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'The id of the user to last edit thie translation' }),
                  LanguageId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: 'The id of the language of the translation' }),
                  State: z
                    .enum([
                      'Original',
                      'Requested',
                      'Processing',
                      'Processed',
                      'Validated',
                      'Invalidated',
                      'RequestPending',
                      'CreatePending',
                    ])
                    .exactOptional()
                    .openapi({ description: 'The state of the translation' }),
                  StringId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The id of the string that is translated' }),
                  StringValue: z.string().openapi({ description: 'The translated string' }),
                  Timestamp: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'A value indicating the last modification of this translation. Read Only.',
                    }),
                })
                .openapi({
                  description: 'A translation of a string in a specific language',
                  required: ['StringValue'],
                }),
            ),
          ),
        },
        'application/xml': { schema: z.array(GlobalResourcesSharedModelsStringTranslationSchema) },
        'text/json': { schema: z.array(GlobalResourcesSharedModelsStringTranslationSchema) },
        'text/xml': { schema: z.array(GlobalResourcesSharedModelsStringTranslationSchema) },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2StringTranslationsStringIdLanguageIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/StringTranslations/{stringId}/{languageId}',
  tags: ['StringTranslations'],
  summary: 'Get a single translation based upon stringId and languageId',
  description: 'No Documentation Found.',
  operationId: 'StringTranslations_GetTranslation',
  request: {
    params: z.object({
      stringId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'stringId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      languageId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'languageId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsStringTranslationSchema },
        'application/xml': { schema: GlobalResourcesSharedModelsStringTranslationSchema },
        'text/json': { schema: GlobalResourcesSharedModelsStringTranslationSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsStringTranslationSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2StringTranslationsStringIdLanguageIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/StringTranslations/{stringId}/{languageId}',
  tags: ['StringTranslations'],
  summary: 'Update a string value or a state for a string translation.',
  description: 'No Documentation Found.',
  operationId: 'StringTranslations_UpdateTranslation',
  request: {
    params: z.object({
      stringId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'stringId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      languageId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'languageId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsStringTranslationSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AuthorId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The id of the user to last edit thie translation' }),
              LanguageId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The id of the language of the translation' }),
              State: z
                .enum([
                  'Original',
                  'Requested',
                  'Processing',
                  'Processed',
                  'Validated',
                  'Invalidated',
                  'RequestPending',
                  'CreatePending',
                ])
                .exactOptional()
                .openapi({ description: 'The state of the translation' }),
              StringId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the string that is translated' }),
              StringValue: z.string().openapi({ description: 'The translated string' }),
              Timestamp: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A value indicating the last modification of this translation. Read Only.',
                }),
            })
            .openapi({
              description: 'A translation of a string in a specific language',
              required: ['StringValue'],
            }),
        },
        'application/xml': { schema: GlobalResourcesSharedModelsStringTranslationSchema },
        'text/json': { schema: GlobalResourcesSharedModelsStringTranslationSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsStringTranslationSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2TranslationKeysRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationKeys',
  tags: ['TranslationKeys'],
  summary: 'Get a paged response of TranslationKeys.',
  operationId: 'TranslationKeys_Get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      keyNames: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can filter by keyNames, a comma deliminated list.',
            in: 'query',
            name: 'keyNames',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIIPagedResponseOASSupportSharedModelsTranslationKeySchema },
        'application/xml': { schema: APIIPagedResponseOASSupportSharedModelsTranslationKeySchema },
        'text/json': { schema: APIIPagedResponseOASSupportSharedModelsTranslationKeySchema },
        'text/xml': { schema: APIIPagedResponseOASSupportSharedModelsTranslationKeySchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2TranslationKeysRoute = createRoute({
  method: 'post',
  path: '/api/v2/TranslationKeys',
  tags: ['TranslationKeys'],
  summary: 'Create a translationKey object.',
  description: 'No Documentation Found.',
  operationId: 'TranslationKeys_CreateTranslationKey',
  request: { body: OASSupportSharedModelsTranslationKeyRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2TranslationKeysIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationKeys/{ID}',
  tags: ['TranslationKeys'],
  summary: 'Get TranslationKey by ID',
  description: 'No Documentation Found.',
  operationId: 'TranslationKeys_GetTranslationKey',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OASSupportSharedModelsTranslationKeySchema },
        'application/xml': { schema: OASSupportSharedModelsTranslationKeySchema },
        'text/json': { schema: OASSupportSharedModelsTranslationKeySchema },
        'text/xml': { schema: OASSupportSharedModelsTranslationKeySchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2TranslationKeysIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/TranslationKeys/{ID}',
  tags: ['TranslationKeys'],
  summary: 'Update the StringID of the translationKey object.',
  description: 'No Documentation Found.',
  operationId: 'TranslationKeys_UpdateTranslationKey',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: OASSupportSharedModelsTranslationKeyRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2TranslationRequestsRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationRequests',
  tags: ['TranslationRequests'],
  summary:
    'Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.',
  description: 'No Documentation Found.',
  operationId: 'TranslationRequests_GetTranslationRequests',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationRequestSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationRequestSchema,
        },
        'text/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationRequestSchema,
        },
        'text/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationRequestSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2TranslationRequestsRoute = createRoute({
  method: 'post',
  path: '/api/v2/TranslationRequests',
  tags: ['TranslationRequests'],
  summary:
    'Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.',
  description: 'No Documentation Found.',
  operationId: 'TranslationRequests_CreateTranslationRequest',
  request: { body: GlobalResourcesSharedModelsTranslationRequestRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2TranslationRequestsIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationRequests/{Id}',
  tags: ['TranslationRequests'],
  summary:
    'Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.',
  description: 'No Documentation Found.',
  operationId: 'TranslationRequests_GetTranslationRequest',
  request: {
    params: z.object({
      Id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'Id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsTranslationRequestSchema },
        'application/xml': { schema: GlobalResourcesSharedModelsTranslationRequestSchema },
        'text/json': { schema: GlobalResourcesSharedModelsTranslationRequestSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsTranslationRequestSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2TranslationRequestsIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/TranslationRequests/{Id}',
  tags: ['TranslationRequests'],
  summary: 'Update a TranslationRequest object by id. Accepts a TranslationRequest object.',
  description: 'No Documentation Found.',
  operationId: 'TranslationRequests_UpdateTranslationRequest',
  request: {
    params: z.object({
      Id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'Id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      doResendRequest: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'doResendRequest',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: GlobalResourcesSharedModelsTranslationRequestRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const putApiV2TranslationRequestsIdStringsRoute = createRoute({
  method: 'put',
  path: '/api/v2/TranslationRequests/{Id}/Strings',
  tags: ['TranslationRequests'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'TranslationRequests_UpdateTranslationRequestStrings',
  request: {
    params: z.object({
      Id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'Id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          ),
        },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const putApiV2TranslationSetAttributesBatchRoute = createRoute({
  method: 'put',
  path: '/api/v2/TranslationSetAttributes/Batch',
  tags: ['TranslationSets'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_UpdateTranslationSetAttributes',
  request: { body: GlobalResourcesSharedModelsTranslationSetAttributeArrayRequestBody },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const putApiV2TranslationSetAttributesIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/TranslationSetAttributes/{ID}',
  tags: ['TranslationSets'],
  summary: 'Update a TranslationSetAttribute object',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_UpdateTranslationSetAttribute',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: GlobalResourcesSharedModelsTranslationSetAttributeRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2TranslationSetAttributesIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/TranslationSetAttributes/{ID}',
  tags: ['TranslationSets'],
  summary: 'Delete a set of TranslationSetAttribute object',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_DeleteTranslationSetAttribute',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2TranslationSetsRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationSets',
  tags: ['TranslationSets'],
  summary:
    'Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_GetTranslationSets',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      translationRequestID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'translationRequestID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      state: z
        .enum([
          'OutForProcessing',
          'Processing',
          'PendingApproval',
          'OutForTranslation',
          'Cancelled',
          'Completed',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'state',
            required: false,
            schema: {
              enum: [
                'OutForProcessing',
                'Processing',
                'PendingApproval',
                'OutForTranslation',
                'Cancelled',
                'Completed',
              ],
              type: 'string',
            },
          },
        }),
      stringId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'stringId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      languageId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'languageId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeAttributes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.",
            in: 'query',
            name: 'includeAttributes',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSchema,
        },
        'text/json': { schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSchema },
        'text/xml': { schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2TranslationSetsIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationSets/{ID}',
  tags: ['TranslationSets'],
  summary: 'Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_GetTranslationSet',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      includeAttributes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Names of Attributes to include when retrieving this Translation set. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.",
            in: 'query',
            name: 'includeAttributes',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsTranslationSetSchema },
        'application/xml': { schema: GlobalResourcesSharedModelsTranslationSetSchema },
        'text/json': { schema: GlobalResourcesSharedModelsTranslationSetSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsTranslationSetSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2TranslationSetsIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/TranslationSets/{ID}',
  tags: ['TranslationSets'],
  summary:
    'Update a Translation Set. Accepts a TranslationSet object. Only the state property may be updated.',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_UpdateTranslationSet',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsTranslationSetSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Attributes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The ID of this attribute.' }),
                        Name: z
                          .string()
                          .regex(/[a-zA-Z0-9]+/)
                          .openapi({ description: 'The name of this Attribute.' }),
                        TranslationSetID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The ID of the translation set to which this attribute belongs.',
                          }),
                        Value: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The value of this Attribute' }),
                      })
                      .openapi({ description: 'An attribute of a', required: ['Name'] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'Attributes of the Translation Set' }),
              FileIDs: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .openapi({
                  description:
                    'IDs for files related to this translation set. For example, the original and processed files',
                }),
              Id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The id of the TranslationSet.' }),
              InDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Read Only. The date the translation set was returned.' }),
              Notes: z
                .string()
                .exactOptional()
                .openapi({ description: 'Notes on the TranslationSet' }),
              OutDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Read Only. The date the translation set was sent out.' }),
              State: z
                .enum([
                  'OutForProcessing',
                  'Processing',
                  'PendingApproval',
                  'OutForTranslation',
                  'Cancelled',
                  'Completed',
                ])
                .openapi({ description: 'An enum indicating the state of the translation set' }),
              TranslationRequestID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Read Only. The Id of the TranslationRequest which generated this translation set.',
                }),
            })
            .openapi({
              description: 'A set of strings submitted for translation',
              required: ['State', 'FileIDs'],
            }),
        },
        'application/xml': { schema: GlobalResourcesSharedModelsTranslationSetSchema },
        'text/json': { schema: GlobalResourcesSharedModelsTranslationSetSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsTranslationSetSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2TranslationSetsIDAttributesRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationSets/{ID}/Attributes',
  tags: ['TranslationSets'],
  summary: 'Get a PagedResponse of TranslationSetAttribute objects',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_GetTranslationSetAttributes',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttributeSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttributeSchema,
        },
        'text/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttributeSchema,
        },
        'text/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttributeSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2TranslationSetsIDAttributesRoute = createRoute({
  method: 'post',
  path: '/api/v2/TranslationSets/{ID}/Attributes',
  tags: ['TranslationSets'],
  summary: 'Create a TranslationSetAttribute object',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_PostTranslationSetAttribute',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: GlobalResourcesSharedModelsTranslationSetAttributeRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2TranslationSetsIDAttributesBatchRoute = createRoute({
  method: 'post',
  path: '/api/v2/TranslationSets/{ID}/Attributes/Batch',
  tags: ['TranslationSets'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_PostTranslationSetAttributes',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: GlobalResourcesSharedModelsTranslationSetAttributeArrayRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2TranslationSetsIDSourceStringsRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationSets/{ID}/SourceStrings',
  tags: ['TranslationSets'],
  summary: 'Gets the information needed to translate a string in a translation set',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_GetSourceStrings',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceStringSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceStringSchema,
        },
        'text/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceStringSchema,
        },
        'text/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceStringSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2TranslationSetsIDStatisticsRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationSets/{ID}/Statistics',
  tags: ['TranslationSets'],
  summary:
    'Gets the statistics for translation sets such as the language ids and count of string definitions.',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_GetStatistics',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GlobalResourcesSharedModelsTranslationSetStatisticsSchema },
        'application/xml': { schema: GlobalResourcesSharedModelsTranslationSetStatisticsSchema },
        'text/json': { schema: GlobalResourcesSharedModelsTranslationSetStatisticsSchema },
        'text/xml': { schema: GlobalResourcesSharedModelsTranslationSetStatisticsSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2TranslationSetsIDStringsRoute = createRoute({
  method: 'get',
  path: '/api/v2/TranslationSets/{ID}/Strings',
  tags: ['TranslationSets'],
  summary: 'Get a PagedResponse of TranslationSetString objects',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_GetTranslationSetStrings',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetStringSchema,
        },
        'application/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetStringSchema,
        },
        'text/json': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetStringSchema,
        },
        'text/xml': {
          schema: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetStringSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2TranslationSetsIDStringsRoute = createRoute({
  method: 'put',
  path: '/api/v2/TranslationSets/{ID}/Strings',
  tags: ['TranslationSets'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'TranslationSets_UpdateTranslationSetStrings',
  request: {
    params: z.object({
      ID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'ID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(GlobalResourcesSharedModelsTranslationSetStringSchema),
        },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(
              z
                .object({
                  LanguageID: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .openapi({
                      description: 'The ID of the language into which to translate the string',
                    }),
                  StringID: z
                    .string()
                    .openapi({
                      description: 'The Id of the string translation that has been requested',
                    }),
                  StringValue: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The string value returned from the translator' }),
                  TranslationSetId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .openapi({ description: 'The id of the TranslationSet' }),
                })
                .openapi({
                  description:
                    'The resulting translation in a translation set.  is the  to which the string will be translated.',
                  required: ['TranslationSetId', 'StringID', 'LanguageID'],
                }),
            ),
          ),
        },
        'application/xml': {
          schema: z.array(GlobalResourcesSharedModelsTranslationSetStringSchema),
        },
        'text/json': { schema: z.array(GlobalResourcesSharedModelsTranslationSetStringSchema) },
        'text/xml': { schema: z.array(GlobalResourcesSharedModelsTranslationSetStringSchema) },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2UpdateGroupClientRelationshipsRoute = createRoute({
  method: 'get',
  path: '/api/v2/UpdateGroupClientRelationships',
  tags: ['UpdateGroupClientRelationships'],
  summary: 'Get a list of current Client Subscriptions.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupClientRelationships_GetSubscriptions',
  request: {
    query: z.object({
      ClientID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Client ID',
            in: 'query',
            name: 'ClientID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      UpdateGroupID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Update Group ID',
            in: 'query',
            name: 'UpdateGroupID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      Active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Active',
            in: 'query',
            name: 'Active',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationshipSchema,
        },
        'text/json': {
          schema: APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationshipSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2UpdateGroupClientRelationshipsRoute = createRoute({
  method: 'put',
  path: '/api/v2/UpdateGroupClientRelationships',
  tags: ['UpdateGroupClientRelationships'],
  summary: 'DEPRECATED. Set client subscription status for an update group.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupClientRelationships_PutSubscriptionByClientIDUpdateGroupID',
  request: {
    query: z.object({
      ClientID: z
        .string()
        .openapi({
          param: {
            description:
              'The Client ID.  This can be a client ID that has not been registered yet.',
            in: 'query',
            name: 'ClientID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      UpdateGroupID: z
        .string()
        .openapi({
          param: {
            description: 'The Update Group ID',
            in: 'query',
            name: 'UpdateGroupID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Active: z
        .stringbool()
        .openapi({
          param: {
            description: 'Subscribe the client to the Update Group.',
            in: 'query',
            name: 'Active',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const postApiV2UpdateGroupClientRelationshipsRoute = createRoute({
  method: 'post',
  path: '/api/v2/UpdateGroupClientRelationships',
  tags: ['UpdateGroupClientRelationships'],
  summary: 'Add a subscription',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupClientRelationships_PostSubscription',
  request: {
    body: {
      description: 'The UpdateGroupClientRelationship to add.',
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'The subscription status.  The status is active by default.',
                }),
              ClientID: z
                .string()
                .openapi({
                  description: 'Read Only after creation. The client id of the subscriber.',
                }),
              LastCheckin: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'ReadOnly. The timestamp of the last checkin.' }),
              RelationshipID: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation.',
                }),
              UpdateGroupID: z
                .string()
                .openapi({
                  description: 'Read Only after creation. The update group to subscribe to.',
                }),
            })
            .openapi({ required: ['UpdateGroupID', 'ClientID'] }),
        },
        'application/xml': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
        'text/json': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2UpdateGroupClientRelationshipsRelationshipIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/UpdateGroupClientRelationships/{RelationshipID}',
  tags: ['UpdateGroupClientRelationships'],
  summary: 'Get a subscription by RelationshipID',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupClientRelationships_GetSubscription',
  request: {
    params: z.object({
      RelationshipID: z
        .string()
        .openapi({
          param: {
            description: 'The RelationshipID.',
            in: 'path',
            name: 'RelationshipID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
        'application/xml': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
        'text/json': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2UpdateGroupClientRelationshipsRelationshipIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/UpdateGroupClientRelationships/{RelationshipID}',
  tags: ['UpdateGroupClientRelationships'],
  summary: 'Updates a Subscription',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupClientRelationships_PutSubscription',
  request: {
    params: z.object({
      RelationshipID: z
        .string()
        .openapi({
          param: {
            description: 'The relationship id of the UpdateGroupClientRelationship',
            in: 'path',
            name: 'RelationshipID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The updated UpdateGroupClientRelationship',
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'The subscription status.  The status is active by default.',
                }),
              ClientID: z
                .string()
                .openapi({
                  description: 'Read Only after creation. The client id of the subscriber.',
                }),
              LastCheckin: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'ReadOnly. The timestamp of the last checkin.' }),
              RelationshipID: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation.',
                }),
              UpdateGroupID: z
                .string()
                .openapi({
                  description: 'Read Only after creation. The update group to subscribe to.',
                }),
            })
            .openapi({ required: ['UpdateGroupID', 'ClientID'] }),
        },
        'application/xml': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
        'text/json': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateGroupClientRelationshipSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2UpdateGroupSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/UpdateGroupSubscriptions',
  tags: ['UpdateGroupSubscriptions'],
  summary: 'Get Update Group Subscriptions',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupSubscriptions_GetUpdateGroupSubscriptions',
  request: {
    query: z.object({
      UpdateGroupID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Update Group ID.',
            in: 'query',
            name: 'UpdateGroupID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      PackageTypeID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Package Type ID.',
            in: 'query',
            name: 'PackageTypeID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ClientID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by Client ID.',
            in: 'query',
            name: 'ClientID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIPagedResponseUpdateSystemModelsUpdateGroupSubscriptionSchema,
        },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsUpdateGroupSubscriptionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2UpdateGroupSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/api/v2/UpdateGroupSubscriptions',
  tags: ['UpdateGroupSubscriptions'],
  summary: 'Add an Update Group Subscription',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupSubscriptions_PostUpdateGroupSubscription',
  request: {
    body: {
      description: 'The Update Group Subscription to add',
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ClientID: z.string().openapi({ description: 'The ClientID.' }),
              Include: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description: 'True to receive content of type indicated by PackageTypeID.',
                }),
              PackageTypeID: z
                .string()
                .openapi({ description: 'The PackageType to set subscription status for' }),
              UpdateGroupID: z
                .string()
                .openapi({ description: 'The Update Group this subscription is relevant for.' }),
              UpdateGroupSubscriptionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.',
                }),
            })
            .openapi({ required: ['UpdateGroupID', 'PackageTypeID', 'ClientID', 'Include'] }),
        },
        'application/xml': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
        'text/json': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2UpdateGroupSubscriptionsBatchRoute = createRoute({
  method: 'put',
  path: '/api/v2/UpdateGroupSubscriptions/Batch',
  tags: ['UpdateGroupSubscriptions'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupSubscriptions_PutUpdateGroupSubscriptions',
  request: { body: UpdateSystemModelsUpdateGroupSubscriptionArrayRequestBody },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const postApiV2UpdateGroupSubscriptionsBatchRoute = createRoute({
  method: 'post',
  path: '/api/v2/UpdateGroupSubscriptions/Batch',
  tags: ['UpdateGroupSubscriptions'],
  summary: 'No Documentation Found.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupSubscriptions_PostUpdateGroupSubscriptions',
  request: { body: UpdateSystemModelsUpdateGroupSubscriptionArrayRequestBody },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}',
  tags: ['UpdateGroupSubscriptions'],
  summary: 'Get an Update Group Subscription',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupSubscriptions_GetUpdateGroupSubscription',
  request: {
    params: z.object({
      UpdateGroupSubscriptionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The Update Group Subscription ID',
            in: 'path',
            name: 'UpdateGroupSubscriptionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
        'application/xml': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
        'text/json': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}',
  tags: ['UpdateGroupSubscriptions'],
  summary: 'Update an Update Group Subscription',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupSubscriptions_PutUpdateGroupSubscription',
  request: {
    params: z.object({
      UpdateGroupSubscriptionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The Update Group Subscription ID',
            in: 'path',
            name: 'UpdateGroupSubscriptionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated Update Group Subscription',
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ClientID: z.string().openapi({ description: 'The ClientID.' }),
              Include: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description: 'True to receive content of type indicated by PackageTypeID.',
                }),
              PackageTypeID: z
                .string()
                .openapi({ description: 'The PackageType to set subscription status for' }),
              UpdateGroupID: z
                .string()
                .openapi({ description: 'The Update Group this subscription is relevant for.' }),
              UpdateGroupSubscriptionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.',
                }),
            })
            .openapi({ required: ['UpdateGroupID', 'PackageTypeID', 'ClientID', 'Include'] }),
        },
        'application/xml': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
        'text/json': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateGroupSubscriptionSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}',
  tags: ['UpdateGroupSubscriptions'],
  summary: 'Delete an Update Group Subscription',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroupSubscriptions_DeleteUpdateGroupSubscription',
  request: {
    params: z.object({
      UpdateGroupSubscriptionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The Update Group Subscription ID to delete',
            in: 'path',
            name: 'UpdateGroupSubscriptionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2UpdateGroupsRoute = createRoute({
  method: 'get',
  path: '/api/v2/UpdateGroups',
  tags: ['UpdateGroups'],
  summary:
    'Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroups_Get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Optional. The user ID to sort update groups by the user's access",
            in: 'query',
            name: 'userID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseUpdateSystemModelsUpdateGroupSchema },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsUpdateGroupSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2UpdateGroupsRoute = createRoute({
  method: 'post',
  path: '/api/v2/UpdateGroups',
  tags: ['UpdateGroups'],
  summary:
    'Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroups_Post',
  request: {
    body: {
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateGroupSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Description: z
                .string()
                .openapi({ description: 'The description of the update group' }),
              ID: z.string().exactOptional(),
              InventoryFrequency: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The time in minutes between inventory checks. Default value is 1440 minutes (one day).',
                }),
              InventoryPackage: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Package ID of the package used for inventory' }),
              LocalizedDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The StringID used to localize the description of the update group',
                }),
              LocalizedName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The StringID used to localize the name of the update group',
                }),
              Priority: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(100),
                )
                .openapi({
                  description:
                    'The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.',
                }),
              ReportField: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A field to return in the status report for this update group.\r\n            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})',
                }),
              UpdateType: z.string().openapi({ description: 'The update type name' }),
              ValidatingField: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A field used for validation in the status report for this update group.\r\n            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})',
                }),
              ValueToValidate: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value to validate the ValidationField against.' }),
              Version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType',
                }),
            })
            .openapi({ required: ['Description', 'UpdateType', 'Priority'] }),
        },
        'application/xml': { schema: UpdateSystemModelsUpdateGroupSchema },
        'text/json': { schema: UpdateSystemModelsUpdateGroupSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateGroupSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2UpdateGroupsIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/UpdateGroups/{ID}',
  tags: ['UpdateGroups'],
  summary: 'Get a specific Update Group by ID.',
  description: 'No Documentation Found.',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Update Group',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateGroupSchema },
        'application/xml': { schema: UpdateSystemModelsUpdateGroupSchema },
        'text/json': { schema: UpdateSystemModelsUpdateGroupSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateGroupSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2UpdateGroupsIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/UpdateGroups/{ID}',
  tags: ['UpdateGroups'],
  summary: 'Modify an Update Group.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroups_Put',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Update Group',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The Update Group to update.',
      content: {
        'application/json': { schema: UpdateSystemModelsUpdateGroupSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Description: z
                .string()
                .openapi({ description: 'The description of the update group' }),
              ID: z.string().exactOptional(),
              InventoryFrequency: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The time in minutes between inventory checks. Default value is 1440 minutes (one day).',
                }),
              InventoryPackage: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Package ID of the package used for inventory' }),
              LocalizedDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The StringID used to localize the description of the update group',
                }),
              LocalizedName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The StringID used to localize the name of the update group',
                }),
              Priority: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1).max(100),
                )
                .openapi({
                  description:
                    'The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.',
                }),
              ReportField: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A field to return in the status report for this update group.\r\n            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})',
                }),
              UpdateType: z.string().openapi({ description: 'The update type name' }),
              ValidatingField: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A field used for validation in the status report for this update group.\r\n            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})',
                }),
              ValueToValidate: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value to validate the ValidationField against.' }),
              Version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType',
                }),
            })
            .openapi({ required: ['Description', 'UpdateType', 'Priority'] }),
        },
        'application/xml': { schema: UpdateSystemModelsUpdateGroupSchema },
        'text/json': { schema: UpdateSystemModelsUpdateGroupSchema },
        'text/xml': { schema: UpdateSystemModelsUpdateGroupSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2UpdateGroupsIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/UpdateGroups/{ID}',
  tags: ['UpdateGroups'],
  summary: 'Delete an Update Group.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroups_Delete',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Update Group to Delete',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2UpdateGroupsIDBundlesRoute = createRoute({
  method: 'get',
  path: '/api/v2/UpdateGroups/{ID}/Bundles',
  tags: ['UpdateGroups'],
  summary: 'Get a list of bundles for UpdateGroup.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroups_GetUpdateGroupBundles',
  request: {
    params: z.object({
      ID: z
        .string()
        .openapi({
          param: {
            description: 'The UpdateGroupID',
            in: 'path',
            name: 'ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      IncludeInactive: z
        .stringbool()
        .openapi({
          param: {
            description: 'Include Inactive Bundles (true|false)',
            in: 'query',
            name: 'IncludeInactive',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseUpdateSystemModelsBundleSchema },
        'text/json': { schema: APIPagedResponseUpdateSystemModelsBundleSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2UpdateGroupsIdUsersUserIDRoute = createRoute({
  method: 'post',
  path: '/api/v2/UpdateGroups/{id}/Users/{userID}',
  tags: ['UpdateGroups'],
  summary: 'Add an updateGroup that a user can see.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroups_AddUpdateGroupUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the update group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The userID to link to the update group',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2UpdateGroupsIdUsersUserIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/UpdateGroups/{id}/Users/{userID}',
  tags: ['UpdateGroups'],
  summary: 'Deletes an update group a user could see.',
  description: 'No Documentation Found.',
  operationId: 'UpdateGroups_RemoveUpdateGroupUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the update group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The userID to link to the update group',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2UpdateSystemRoute = createRoute({
  method: 'get',
  path: '/api/v2/UpdateSystem',
  tags: ['UpdateSystem'],
  summary: 'Checks the Client ID into the Update System.',
  description: 'No Documentation Found.',
  operationId: 'UpdateSystem_GetCheckin',
  request: {
    query: z.object({
      ClientID: z
        .string()
        .openapi({
          param: {
            description:
              'The Client ID to check-in.  If this is a new client ID it will be added to Clients.',
            in: 'query',
            name: 'ClientID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Preview: z
        .stringbool()
        .openapi({
          param: {
            description: 'Get Pkgs w\\o updating Datetimes(true|false)',
            in: 'query',
            name: 'Preview',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      RunAllInventories: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Force return inventories. Defaults to false.',
            in: 'query',
            name: 'RunAllInventories',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UpdateSystemModelsCheckinResultSchema },
        'application/xml': { schema: UpdateSystemModelsCheckinResultSchema },
        'text/json': { schema: UpdateSystemModelsCheckinResultSchema },
        'text/xml': { schema: UpdateSystemModelsCheckinResultSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2UserContentDefinitionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/UserContentDefinitions',
  tags: ['UserContentDefinitions'],
  summary: 'Get UserContentDefinitions',
  description:
    'Gets a collection of UserContentDefinitions. When successful, the response is a PagedResponse of UserContentDefinitions.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'UserContentDefinitions_GetUserContentDefinitions',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by UserID.',
            in: 'query',
            name: 'userID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      contentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter by ContentDefinitionID',
            in: 'query',
            name: 'contentDefinitionID',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema:
            APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema,
        },
        'text/json': {
          schema:
            APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema,
        },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2UserContentDefinitionsRoute = createRoute({
  method: 'post',
  path: '/api/v2/UserContentDefinitions',
  tags: ['UserContentDefinitions'],
  summary: 'Create a UserContentDefinition',
  description:
    'Creates a UserContentDefinition.  The body of the POST is the UserContentDefinition to create.\r\n            The UserContentDefinitionID will be assigned on creation of the Job.  When successful, the response\r\n            is the UserContentDefinitionID.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'UserContentDefinitions_PostUserContentDefinition',
  request: {
    body: {
      description: 'The UserContentDefinition to create.',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the ContentDefinition.' }),
              UserContentDefinitionID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'Read Only. The ID of the User to ContentDefinition relationship.',
                }),
              UserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the user.' }),
            })
            .openapi({
              description:
                'Relationship indicating that a User can manage submissions for the Content',
              required: [],
            }),
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2UserContentDefinitionsUserContentDefinitionIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/UserContentDefinitions/{userContentDefinitionID}',
  tags: ['UserContentDefinitions'],
  summary: 'Get a UserContentDefinition by ID',
  description:
    'Gets a UserContentDefinition by ID. When successful, the response is the requested UserContentDefinition.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'UserContentDefinitions_GetUserContentDefinition',
  request: {
    params: z.object({
      userContentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the UserContentDefinition to get.',
            in: 'path',
            name: 'userContentDefinitionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema,
        },
        'application/xml': {
          schema: ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema,
        },
        'text/json': { schema: ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema },
        'text/xml': { schema: ContentSubmissionSharedBusinessEntitiesUserContentDefinitionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const deleteApiV2UserContentDefinitionsUserContentDefinitionIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/UserContentDefinitions/{userContentDefinitionID}',
  tags: ['UserContentDefinitions'],
  summary: 'Delete a UserContentDefinition',
  description:
    'Deletes an UserContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate\r\n            ApiError is returned.',
  operationId: 'UserContentDefinitions_DeleteUserContentDefinition',
  request: {
    params: z.object({
      userContentDefinitionID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the UserContentDefinition to delete',
            in: 'path',
            name: 'userContentDefinitionID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2UsersRoute = createRoute({
  method: 'get',
  path: '/api/v2/Users',
  tags: ['Users'],
  summary: 'Get users',
  description: 'No Documentation Found.',
  operationId: 'Users_Get',
  request: {
    query: z.object({
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Search by username. Supports beginning and ending wildcards (*).',
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Search by email. Supports beginning and ending wildcards (*).',
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Search by name. Supports beginning and ending wildcards (*).',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hasRole: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Return only users having the provided role name.',
            in: 'query',
            name: 'hasRole',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsUserSchema },
        'text/json': { schema: APIPagedResponseAPIModelsUserSchema },
      },
    },
  },
})

export const postApiV2UsersRoute = createRoute({
  method: 'post',
  path: '/api/v2/Users',
  tags: ['Users'],
  summary: 'Create a user',
  description: 'No Documentation Found.',
  operationId: 'Users_Post',
  request: {
    body: {
      description: 'The user to create.',
      content: {
        'application/json': { schema: APIModelsUserSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ChangePassword: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Never Returned.  When changing a user's password, this field must contain the new password.",
                }),
              Email: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's email address" }),
              Name: z.string().exactOptional().openapi({ description: "The user's name" }),
              Password: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password.",
                }),
              UserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The user ID' }),
              Username: z
                .string()
                .exactOptional()
                .openapi({ description: 'The username used for authentication' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: APIModelsUserSchema },
        'text/json': { schema: APIModelsUserSchema },
        'text/xml': { schema: APIModelsUserSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIModelsUserSchema },
        'application/xml': { schema: APIModelsUserSchema },
        'text/json': { schema: APIModelsUserSchema },
        'text/xml': { schema: APIModelsUserSchema },
      },
    },
  },
})

export const getApiV2UsersCurrentRoute = createRoute({
  method: 'get',
  path: '/api/v2/Users/Current',
  tags: ['Users'],
  summary: 'Gets the current user',
  description: 'No Documentation Found.',
  operationId: 'Users_GetCurrentUser',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIModelsUserSchema },
        'application/xml': { schema: APIModelsUserSchema },
        'text/json': { schema: APIModelsUserSchema },
        'text/xml': { schema: APIModelsUserSchema },
      },
    },
  },
})

export const putApiV2UsersCurrentRoute = createRoute({
  method: 'put',
  path: '/api/v2/Users/Current',
  tags: ['Users'],
  summary: 'Update a user',
  description: 'No Documentation Found.',
  operationId: 'Users_PutCurrentUser',
  request: { body: APIModelsUserRequestBody },
  responses: { 204: { description: 'No Content' } },
})

export const getApiV2UsersCurrentPermissionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Users/Current/Permissions',
  tags: ['UserPermissions'],
  summary: "Get a user's permissions",
  description: 'No Documentation Found.',
  request: {
    query: z.object({
      Permission: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by permission name. Supports ending wildcard (*). Optional.',
            in: 'query',
            name: 'Permission',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsUserEffectivePermissionSchema },
        'text/json': { schema: APIPagedResponseAPIModelsUserEffectivePermissionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2UsersCurrentRolesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Users/Current/Roles',
  tags: ['UserPermissions'],
  summary: "Gets the current user's roles",
  description: 'No Documentation Found.',
  operationId: 'UserPermissions_GetCurrentUserRoles',
  request: {
    query: z.object({
      Role: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by role name. Supports ending wildcard (*). Optional.',
            in: 'query',
            name: 'Role',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsRoleSchema },
        'text/json': { schema: APIPagedResponseAPIModelsRoleSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2UsersIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/Users/{id}',
  tags: ['Users'],
  summary: 'Get a specific user',
  description: 'No Documentation Found.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The user ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIModelsUserSchema },
        'application/xml': { schema: APIModelsUserSchema },
        'text/json': { schema: APIModelsUserSchema },
        'text/xml': { schema: APIModelsUserSchema },
      },
    },
  },
})

export const putApiV2UsersIdRoute = createRoute({
  method: 'put',
  path: '/api/v2/Users/{id}',
  tags: ['Users'],
  summary: 'Update a user',
  description: 'No Documentation Found.',
  operationId: 'Users_Put',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The user id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: APIModelsUserRequestBody,
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteApiV2UsersIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/Users/{id}',
  tags: ['Users'],
  summary: 'Delete a user',
  description: 'No Documentation Found.',
  operationId: 'Users_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The user id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiV2UsersIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/Users/{id}/Permissions',
  tags: ['UserPermissions'],
  summary: "Get a user's permissions",
  description: 'No Documentation Found.',
  operationId: 'UserPermissions_GetPermissions',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: "The User's ID",
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      Permission: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by permission name. Supports ending wildcard (*). Optional.',
            in: 'query',
            name: 'Permission',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsUserEffectivePermissionSchema },
        'text/json': { schema: APIPagedResponseAPIModelsUserEffectivePermissionSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2UsersIdRolesRoute = createRoute({
  method: 'get',
  path: '/api/v2/Users/{id}/Roles',
  tags: ['UserPermissions'],
  summary: "Get a user's roles",
  description: 'No Documentation Found.',
  operationId: 'UserPermissions_GetRoles',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: "The User's ID",
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      Role: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by role name. Supports ending wildcard (*). Optional.',
            in: 'query',
            name: 'Role',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseAPIModelsRoleSchema },
        'text/json': { schema: APIPagedResponseAPIModelsRoleSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2UsersIdRolesRoute = createRoute({
  method: 'put',
  path: '/api/v2/Users/{id}/Roles',
  tags: ['UserPermissions'],
  summary: "Update a user's roles",
  description: 'No Documentation Found.',
  operationId: 'UserPermissions_Put',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: "The User's ID",
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: "A list of changes to the User's Roles",
      content: {
        'application/json': { schema: z.array(APIModelsUserRoleChangeSchema) },
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(APIModelsUserRoleChangeSchema),
          ),
        },
        'application/xml': { schema: z.array(APIModelsUserRoleChangeSchema) },
        'text/json': { schema: z.array(APIModelsUserRoleChangeSchema) },
        'text/xml': { schema: z.array(APIModelsUserRoleChangeSchema) },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2VoucherHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v2/VoucherHistory',
  tags: ['VoucherHistory'],
  summary: 'Gets voucher history data',
  description: 'No Documentation Found.',
  operationId: 'VoucherHistory_GetVoucherHistory',
  request: {
    query: z.object({
      VoucherCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter history data by Voucher Code.',
            in: 'query',
            name: 'VoucherCode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ChangedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter history data where changes occured before provided date.',
            in: 'query',
            name: 'ChangedBefore',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      ChangedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter history data where changes occured after provided date.',
            in: 'query',
            name: 'ChangedAfter',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseDealerDBModelsVoucherHistorySchema },
        'text/json': { schema: APIPagedResponseDealerDBModelsVoucherHistorySchema },
      },
    },
  },
})

export const getApiV2VouchersRoute = createRoute({
  method: 'get',
  path: '/api/v2/Vouchers',
  tags: ['Vouchers'],
  summary: 'Gets a list of vouchers',
  description: 'No Documentation Found.',
  operationId: 'Vouchers_Get',
  request: {
    query: z.object({
      Type: z
        .enum(['Commercial', 'Internal', 'Temporary', 'RightToRepair'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by Type',
            in: 'query',
            name: 'Type',
            required: false,
            schema: {
              enum: ['Commercial', 'Internal', 'Temporary', 'RightToRepair'],
              type: 'string',
            },
          },
        }),
      DealerCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by DealerCode',
            in: 'query',
            name: 'DealerCode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      LicenseTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by LicenseTo. Wildcard supported (*).',
            in: 'query',
            name: 'LicenseTo',
            required: false,
            schema: { type: 'string' },
          },
        }),
      Purpose: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by Purpose. Wildcard supported (*).',
            in: 'query',
            name: 'Purpose',
            required: false,
            schema: { type: 'string' },
          },
        }),
      OrderNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by OrderNumber',
            in: 'query',
            name: 'OrderNumber',
            required: false,
            schema: { type: 'string' },
          },
        }),
      Email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by Email. Wildcard supported (*).',
            in: 'query',
            name: 'Email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ModifiedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by ModifiedBy',
            in: 'query',
            name: 'ModifiedBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      CreatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by CreatedDate',
            in: 'query',
            name: 'CreatedAfter',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      CreatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by CreatedDate',
            in: 'query',
            name: 'CreatedBefore',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      PunchedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by PunchedDate',
            in: 'query',
            name: 'PunchedAfter',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      PunchedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by PunchedDate',
            in: 'query',
            name: 'PunchedBefore',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      Punched: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by Punched status',
            in: 'query',
            name: 'Punched',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ExpirationAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by ExpirationDate',
            in: 'query',
            name: 'ExpirationAfter',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      ExpirationBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter vouchers by ExpirationDate',
            in: 'query',
            name: 'ExpirationBefore',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      Deleted: z
        .enum(['NotDeleted', 'Deleted', 'All'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.',
            in: 'query',
            name: 'Deleted',
            required: false,
            schema: { enum: ['NotDeleted', 'Deleted', 'All'], type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseDealerDBModelsVoucherSchema },
        'text/json': { schema: APIPagedResponseDealerDBModelsVoucherSchema },
      },
    },
  },
})

export const postApiV2VouchersRoute = createRoute({
  method: 'post',
  path: '/api/v2/Vouchers',
  tags: ['Vouchers'],
  summary: 'Create a voucher',
  description: 'No Documentation Found.',
  operationId: 'Vouchers_Post',
  request: {
    body: {
      description: 'The voucher to add.',
      content: {
        'application/json': { schema: DealerDBModelsVoucherSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CreatedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Read-Only. The date the voucher was created.' }),
              DealerCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The dealer code the voucher is assigned to.  Required for commercial and right to repair vouchers.',
                }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Read-Only. True if voucher has been deleted.' }),
              Email: z
                .string()
                .exactOptional()
                .openapi({ description: 'Required for internal vouchers.' }),
              ExpirationDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The expiration date of the voucher. Required for Temporary and Right to Repair Vouchers.',
                }),
              LicenseTo: z
                .string()
                .exactOptional()
                .openapi({ description: 'Required for Internal Vouchers' }),
              ModifiedBy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Read-Only. The user that made the last modification to the voucher.',
                }),
              OrderNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The order number of a license. Required for Commercial and Right To Repair Vouchers. Not supported for other Vouchers.',
                }),
              Punched: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'True if voucher has aleady been used.  False if the voucher has not been used.',
                }),
              PunchedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Read-Only. The date the voucher was punched.' }),
              Purpose: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Required for Internal Vouchers. Not supported for other Vouchers.',
                }),
              Type: z
                .enum(['Commercial', 'Internal', 'Temporary', 'RightToRepair'])
                .exactOptional()
                .openapi({
                  description: 'The type of voucher. Commercial is the default if not specified.',
                }),
              VoucherCode: z.string().exactOptional().openapi({ description: 'The voucher code.' }),
            })
            .openapi({ description: 'A voucher for EDT activation', required: [] }),
        },
        'application/xml': { schema: DealerDBModelsVoucherSchema },
        'text/json': { schema: DealerDBModelsVoucherSchema },
        'text/xml': { schema: DealerDBModelsVoucherSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
})

export const getApiV2VouchersVoucherCodeRoute = createRoute({
  method: 'get',
  path: '/api/v2/Vouchers/{VoucherCode}',
  tags: ['Vouchers'],
  summary: 'Get a voucher',
  description: 'No Documentation Found.',
  request: {
    params: z.object({
      VoucherCode: z
        .string()
        .openapi({
          param: {
            description: 'The voucher code of the voucher to get.',
            in: 'path',
            name: 'VoucherCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      Deleted: z
        .enum(['NotDeleted', 'Deleted', 'All'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.',
            in: 'query',
            name: 'Deleted',
            required: false,
            schema: { enum: ['NotDeleted', 'Deleted', 'All'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DealerDBModelsVoucherSchema },
        'application/xml': { schema: DealerDBModelsVoucherSchema },
        'text/json': { schema: DealerDBModelsVoucherSchema },
        'text/xml': { schema: DealerDBModelsVoucherSchema },
      },
    },
  },
})

export const putApiV2VouchersVoucherCodeRoute = createRoute({
  method: 'put',
  path: '/api/v2/Vouchers/{VoucherCode}',
  tags: ['Vouchers'],
  summary: 'Update a voucher',
  description: 'No Documentation Found.',
  operationId: 'Vouchers_Put',
  request: {
    params: z.object({
      VoucherCode: z
        .string()
        .openapi({
          param: {
            description: 'The voucher code of the voucher to update.',
            in: 'path',
            name: 'VoucherCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The updated voucher.',
      content: {
        'application/json': { schema: DealerDBModelsVoucherSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CreatedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Read-Only. The date the voucher was created.' }),
              DealerCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The dealer code the voucher is assigned to.  Required for commercial and right to repair vouchers.',
                }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Read-Only. True if voucher has been deleted.' }),
              Email: z
                .string()
                .exactOptional()
                .openapi({ description: 'Required for internal vouchers.' }),
              ExpirationDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The expiration date of the voucher. Required for Temporary and Right to Repair Vouchers.',
                }),
              LicenseTo: z
                .string()
                .exactOptional()
                .openapi({ description: 'Required for Internal Vouchers' }),
              ModifiedBy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Read-Only. The user that made the last modification to the voucher.',
                }),
              OrderNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The order number of a license. Required for Commercial and Right To Repair Vouchers. Not supported for other Vouchers.',
                }),
              Punched: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'True if voucher has aleady been used.  False if the voucher has not been used.',
                }),
              PunchedDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Read-Only. The date the voucher was punched.' }),
              Purpose: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Required for Internal Vouchers. Not supported for other Vouchers.',
                }),
              Type: z
                .enum(['Commercial', 'Internal', 'Temporary', 'RightToRepair'])
                .exactOptional()
                .openapi({
                  description: 'The type of voucher. Commercial is the default if not specified.',
                }),
              VoucherCode: z.string().exactOptional().openapi({ description: 'The voucher code.' }),
            })
            .openapi({ description: 'A voucher for EDT activation', required: [] }),
        },
        'application/xml': { schema: DealerDBModelsVoucherSchema },
        'text/json': { schema: DealerDBModelsVoucherSchema },
        'text/xml': { schema: DealerDBModelsVoucherSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteApiV2VouchersVoucherCodeRoute = createRoute({
  method: 'delete',
  path: '/api/v2/Vouchers/{VoucherCode}',
  tags: ['Vouchers'],
  summary: 'Delete a voucher',
  description: 'No Documentation Found.',
  operationId: 'Vouchers_Delete',
  request: {
    params: z.object({
      VoucherCode: z
        .string()
        .openapi({
          param: {
            description: 'The voucher code of the voucher to delete.',
            in: 'path',
            name: 'VoucherCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiV2VouchersVoucherCodeVoucherHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v2/Vouchers/{VoucherCode}/VoucherHistory',
  tags: ['Vouchers'],
  summary: "Get a voucher's history.",
  description: 'No Documentation Found.',
  operationId: 'Vouchers_GetVoucherHistory',
  request: {
    params: z.object({
      VoucherCode: z
        .string()
        .openapi({
          param: {
            description: 'The voucher code to get history for.',
            in: 'path',
            name: 'VoucherCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page limit. The default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The page offset. The default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseDealerDBModelsVoucherHistorySchema },
        'text/json': { schema: APIPagedResponseDealerDBModelsVoucherHistorySchema },
      },
    },
  },
})

export const getApiV2ActivitiesRoute = createRoute({
  method: 'get',
  path: '/api/v2/activities',
  tags: ['Activities'],
  summary: 'Get Activities',
  description:
    'Gets a collection of Activities. When successful, the response is a PagedResponse of Activities.  \r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Activities_GetActivities',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      isIncludeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Does it include deleted activity, or not',
            in: 'query',
            name: 'isIncludeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseBuildSystemSharedDTOActivitySchema },
        'text/json': { schema: APIPagedResponseBuildSystemSharedDTOActivitySchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2ActivitiesRoute = createRoute({
  method: 'post',
  path: '/api/v2/activities',
  tags: ['Activities'],
  summary: 'Create an Activity',
  description:
    'Creates an Activity.  The body of the POST is the Activity to create.  The ActivityID will be assigned\r\n            on creation of the Activity.  When successful, the response is the ActivityID.  If unsuccessful, an \r\n            appropriate ApiError is returned.',
  operationId: 'Activities_PostActivity',
  request: {
    body: {
      description:
        'The activity to create.  The ActivityID will be assigned on creation of the Activity.',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivitySchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ActivityID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the activity' }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: '' }),
              Name: z.string().exactOptional().openapi({ description: 'The name of the activity' }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterSchema),
                )
                .exactOptional()
                .openapi({ description: 'The parameters for this activity', readOnly: true }),
              Steps: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'The id of the activity this activity step belongs to',
                          }),
                        ActivityStepID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The id of this activity step' }),
                        ImplementationID: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The implementation id which is used to look up the step implementation',
                          }),
                        ParameterMappings: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(BuildSystemSharedDTOParameterMappingSchema),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The mapping of values from a source to be used for the step parameters',
                            readOnly: true,
                          }),
                        RunOrder: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The order of this activity step relative to other activity steps',
                          }),
                        StepID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The id of the step' }),
                        StepName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The name of the step' }),
                        UseConfig: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration',
                          }),
                      })
                      .openapi({ description: 'A DTO for an IActivityStep', required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description: 'The steps which are performed for this activity',
                  readOnly: true,
                }),
            })
            .openapi({ description: 'A DTO for an IActivity', required: [] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOActivitySchema },
        'text/json': { schema: BuildSystemSharedDTOActivitySchema },
        'text/xml': { schema: BuildSystemSharedDTOActivitySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ActivitiesActivityIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/activities/{activityID}',
  tags: ['Activities'],
  summary: 'Get an Activity by ID',
  description:
    'Gets an Activity by ID. When successful, the response is the requested Activity.  If unsuccessful,\r\n            an appropriate ApiError is returned.',
  operationId: 'Activities_GetActivity',
  request: {
    params: z.object({
      activityID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Activity to get.',
            in: 'path',
            name: 'activityID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      isIncludeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Does it include deleted activity, or not',
            in: 'query',
            name: 'isIncludeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivitySchema },
        'application/xml': { schema: BuildSystemSharedDTOActivitySchema },
        'text/json': { schema: BuildSystemSharedDTOActivitySchema },
        'text/xml': { schema: BuildSystemSharedDTOActivitySchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ActivitiesActivityIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/activities/{activityID}',
  tags: ['Activities'],
  summary: 'Update an Activity',
  description:
    'Updates an Activity.  The body of the PUT is the updated Activity.  When successful, the response is empty.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Activities_PutActivity',
  request: {
    params: z.object({
      activityID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the activity to update',
            in: 'path',
            name: 'activityID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated activity',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivitySchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ActivityID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the activity' }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: '' }),
              Name: z.string().exactOptional().openapi({ description: 'The name of the activity' }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterSchema),
                )
                .exactOptional()
                .openapi({ description: 'The parameters for this activity', readOnly: true }),
              Steps: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'The id of the activity this activity step belongs to',
                          }),
                        ActivityStepID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The id of this activity step' }),
                        ImplementationID: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The implementation id which is used to look up the step implementation',
                          }),
                        ParameterMappings: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(BuildSystemSharedDTOParameterMappingSchema),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The mapping of values from a source to be used for the step parameters',
                            readOnly: true,
                          }),
                        RunOrder: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The order of this activity step relative to other activity steps',
                          }),
                        StepID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The id of the step' }),
                        StepName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The name of the step' }),
                        UseConfig: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration',
                          }),
                      })
                      .openapi({ description: 'A DTO for an IActivityStep', required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description: 'The steps which are performed for this activity',
                  readOnly: true,
                }),
            })
            .openapi({ description: 'A DTO for an IActivity', required: [] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOActivitySchema },
        'text/json': { schema: BuildSystemSharedDTOActivitySchema },
        'text/xml': { schema: BuildSystemSharedDTOActivitySchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2ActivitiesActivityIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/activities/{activityID}',
  tags: ['Activities'],
  summary: 'Mark the delete flag for the Activity',
  description:
    'Deletes an Activity. When successful, the response is empty.  If unsuccessful, an appropriate\r\n            ApiError is returned.',
  operationId: 'Activities_DeleteActivity',
  request: {
    params: z.object({
      activityID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the activity to delete',
            in: 'path',
            name: 'activityID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ActivityRunsRoute = createRoute({
  method: 'get',
  path: '/api/v2/activityRuns',
  tags: ['ActivityRuns'],
  summary: 'Get ActivityRuns',
  description:
    'Gets a collection of ActivityRuns. When successful, the response is a PagedResponse of ActivityRuns.  \r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ActivityRuns_GetActivityRuns',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      status: z
        .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter activity runs by status.  Value should be a comma separated list of status to include.\r\n            If not specified, the default status filter is “InProgress”.',
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              enum: ['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseBuildSystemSharedDTOActivityRunSchema },
        'text/json': { schema: APIPagedResponseBuildSystemSharedDTOActivityRunSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2ActivityRunsActivityRunIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/activityRuns/{activityRunID}',
  tags: ['ActivityRuns'],
  summary: 'Get an ActivityRun by ID',
  description:
    'Gets an ActivityRun by ID. When successful, the response is the requested ActivityRun.  If unsuccessful,\r\n            an appropriate ApiError is returned.',
  operationId: 'ActivityRuns_GetActivityRun',
  request: {
    params: z.object({
      activityRunID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ActivityRun to get.',
            in: 'path',
            name: 'activityRunID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'application/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ActivityRunsActivityRunIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/activityRuns/{activityRunID}',
  tags: ['ActivityRuns'],
  summary: 'Update an ActivityRun',
  description:
    'Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.\r\n            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ActivityRuns_PutActivityRun',
  request: {
    params: z.object({
      activityRunID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ActivityRun to update ActivityRunStatus for.',
            in: 'path',
            name: 'activityRunID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated ActivityRun.',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ActivityRunID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The identifier for the ActivityRun' }),
              EndDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Read Only. The UTC date and time when the activity completed',
                }),
              JobActivityID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Read Only. The ID of the Job Activity that defines this activity run',
                }),
              JobRunID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Read Only. The ID of the JobRun under which this ActivityRun is executing',
                }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterValueSchema),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated.',
                  readOnly: true,
                }),
              StartDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Read Only. The UTC date and time when the activity started',
                }),
              Status: z
                .object({
                  CurrentStep: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The activity step currently executing, indicated by numeric order',
                    }),
                  Status: z
                    .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
                    .exactOptional()
                    .openapi({ description: 'The status of the ActivityRun' }),
                  StepProgress: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The percent progress from the currently executing step.  This value shall be null if progress is not available',
                    }),
                  StepStatus: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The status text from the currently executing step' }),
                })
                .openapi({ description: 'A DTO for an IActivityRunStatus', required: [] }),
              Steps: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'The id of the activity this activity step belongs to',
                          }),
                        ActivityStepID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The id of this activity step' }),
                        ImplementationID: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The implementation id which is used to look up the step implementation',
                          }),
                        ParameterMappings: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(BuildSystemSharedDTOParameterMappingSchema),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The mapping of values from a source to be used for the step parameters',
                            readOnly: true,
                          }),
                        RunOrder: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The order of this activity step relative to other activity steps',
                          }),
                        StepID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The id of the step' }),
                        StepName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The name of the step' }),
                        UseConfig: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration',
                          }),
                      })
                      .openapi({ description: 'A DTO for an IActivityStep', required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep',
                  readOnly: true,
                }),
            })
            .openapi({ description: 'A DTO for an IActivityRun', required: ['Status'] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2ActivityRunsActivityRunIDStatusRoute = createRoute({
  method: 'get',
  path: '/api/v2/activityRuns/{activityRunID}/status',
  tags: ['ActivityRuns'],
  summary: 'Get the ActivityRunStatus of an ActivityRun',
  description:
    'Gets the ActivityRunStatus of an ActivityRun.  When successful, the response is the requested ActivityRunStatus.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ActivityRuns_GetActivityRunStatus',
  request: {
    params: z.object({
      activityRunID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ActivityRun to get ActivityRunStatus for.',
            in: 'path',
            name: 'activityRunID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivityRunStatusSchema },
        'application/xml': { schema: BuildSystemSharedDTOActivityRunStatusSchema },
        'text/json': { schema: BuildSystemSharedDTOActivityRunStatusSchema },
        'text/xml': { schema: BuildSystemSharedDTOActivityRunStatusSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2ActivityRunsActivityRunIDStatusRoute = createRoute({
  method: 'put',
  path: '/api/v2/activityRuns/{activityRunID}/status',
  tags: ['ActivityRuns'],
  summary: 'Update the ActivityRunStatus of an ActivityRun',
  description:
    'Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.\r\n            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'ActivityRuns_PutActivityRunStatus',
  request: {
    params: z.object({
      activityRunID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the ActivityRun to update ActivityRunStatus for.',
            in: 'path',
            name: 'activityRunID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated ActivityRunStatus.',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivityRunStatusSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CurrentStep: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'The activity step currently executing, indicated by numeric order',
                }),
              Status: z
                .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
                .exactOptional()
                .openapi({ description: 'The status of the ActivityRun' }),
              StepProgress: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The percent progress from the currently executing step.  This value shall be null if progress is not available',
                }),
              StepStatus: z
                .string()
                .exactOptional()
                .openapi({ description: 'The status text from the currently executing step' }),
            })
            .openapi({ description: 'A DTO for an IActivityRunStatus', required: [] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOActivityRunStatusSchema },
        'text/json': { schema: BuildSystemSharedDTOActivityRunStatusSchema },
        'text/xml': { schema: BuildSystemSharedDTOActivityRunStatusSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2AgentsRoute = createRoute({
  method: 'get',
  path: '/api/v2/agents',
  tags: ['Agents'],
  summary: 'Get Agents',
  description:
    'Gets a collection of Agents. When successful, the response is a PagedResponse of Agents.  \r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Agents_GetAgents',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseBuildSystemSharedDTOAgentSchema },
        'text/json': { schema: APIPagedResponseBuildSystemSharedDTOAgentSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2AgentsRoute = createRoute({
  method: 'post',
  path: '/api/v2/agents',
  tags: ['Agents'],
  summary: 'Create an Agent',
  description:
    'Creates an Agent.  The body of the POST is the Agent to create.  The AgentID will be assigned\r\n            on creation of the Agent.  When successful, the response is the AgentID.  If unsuccessful, an\r\n            appropriate ApiError is returned.',
  operationId: 'Agents_PostAgent',
  request: {
    body: {
      description: 'The Agent to create.  The AgentID will be assigned on creation of the Agent.',
      content: {
        'application/json': { schema: BuildSystemSharedDTOAgentSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AgentID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The id of the Agent' }),
              KeepAliveInterval: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: "The 'Heartbeat Interval' used by the Build Agent." }),
              MachineName: z
                .string()
                .openapi({
                  description: 'The machine name of the computer the agent is running on',
                }),
              Status: z
                .object({
                  LastStatusUpdate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({
                      description: 'ReadOnly. The UTC date and time of the last status update',
                    }),
                  Online: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .openapi({ description: 'Indicates if the agent is online' }),
                })
                .openapi({ description: 'A DTO for an IAgentStatus', required: ['Online'] }),
              StepConfigurations: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOStepConfigurationSchema),
                )
                .exactOptional()
                .openapi({ description: "The agent's step configurations", readOnly: true }),
              UserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The UserID of the Agent' }),
            })
            .openapi({
              description: 'A DTO for an IAgent',
              required: ['UserID', 'MachineName', 'Status', 'KeepAliveInterval'],
            }),
        },
        'application/xml': { schema: BuildSystemSharedDTOAgentSchema },
        'text/json': { schema: BuildSystemSharedDTOAgentSchema },
        'text/xml': { schema: BuildSystemSharedDTOAgentSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AgentsCurrentRoute = createRoute({
  method: 'get',
  path: '/api/v2/agents/Current',
  tags: ['Agents'],
  summary: 'Get Agent associated with the current user',
  description:
    'Gets the Agent associated with the current user. When successful, the response is the requested Agent.  If unsuccessful,\r\n            an appropriate ApiError is returned.',
  operationId: 'Agents_GetCurrentAgentAsync',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOAgentSchema },
        'application/xml': { schema: BuildSystemSharedDTOAgentSchema },
        'text/json': { schema: BuildSystemSharedDTOAgentSchema },
        'text/xml': { schema: BuildSystemSharedDTOAgentSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AgentsCurrentActivityRunRoute = createRoute({
  method: 'get',
  path: '/api/v2/agents/Current/ActivityRun',
  tags: ['Agents'],
  summary: 'Get the ActivityRun of Agent associated with the current user',
  description:
    'Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun\r\n            assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Agents_GetCurrentAgentActivityRun',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'application/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2AgentsAgentIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/agents/{agentID}',
  tags: ['Agents'],
  summary: 'Get Agent',
  description:
    'Gets an Agent by ID. When successful, the response is the requested Agent.  If unsuccessful,\r\n            an appropriate ApiError is returned.',
  operationId: 'Agents_GetAgentAsync',
  request: {
    params: z.object({
      agentID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Agent to get.',
            in: 'path',
            name: 'agentID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOAgentSchema },
        'application/xml': { schema: BuildSystemSharedDTOAgentSchema },
        'text/json': { schema: BuildSystemSharedDTOAgentSchema },
        'text/xml': { schema: BuildSystemSharedDTOAgentSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2AgentsAgentIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/agents/{agentID}',
  tags: ['Agents'],
  summary: 'Update an Agent',
  description:
    'Updates an Agent.  The body of the PUT is the updated Agent.  When successful, the response is empty.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Agents_PutAgent',
  request: {
    params: z.object({
      agentID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Agent to update.',
            in: 'path',
            name: 'agentID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated Agent',
      content: {
        'application/json': { schema: BuildSystemSharedDTOAgentSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AgentID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The id of the Agent' }),
              KeepAliveInterval: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: "The 'Heartbeat Interval' used by the Build Agent." }),
              MachineName: z
                .string()
                .openapi({
                  description: 'The machine name of the computer the agent is running on',
                }),
              Status: z
                .object({
                  LastStatusUpdate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({
                      description: 'ReadOnly. The UTC date and time of the last status update',
                    }),
                  Online: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .openapi({ description: 'Indicates if the agent is online' }),
                })
                .openapi({ description: 'A DTO for an IAgentStatus', required: ['Online'] }),
              StepConfigurations: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOStepConfigurationSchema),
                )
                .exactOptional()
                .openapi({ description: "The agent's step configurations", readOnly: true }),
              UserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The UserID of the Agent' }),
            })
            .openapi({
              description: 'A DTO for an IAgent',
              required: ['UserID', 'MachineName', 'Status', 'KeepAliveInterval'],
            }),
        },
        'application/xml': { schema: BuildSystemSharedDTOAgentSchema },
        'text/json': { schema: BuildSystemSharedDTOAgentSchema },
        'text/xml': { schema: BuildSystemSharedDTOAgentSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2AgentsAgentIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/agents/{agentID}',
  tags: ['Agents'],
  summary: 'Delete an Agent',
  description:
    'Deletes an Agent. When successful, the response is empty.  If unsuccessful, an appropriate\r\n            ApiError is returned.',
  operationId: 'Agents_DeleteAgent',
  request: {
    params: z.object({
      agentID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Agent to delete.',
            in: 'path',
            name: 'agentID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2AgentsAgentIDActivityRunRoute = createRoute({
  method: 'get',
  path: '/api/v2/agents/{agentID}/ActivityRun',
  tags: ['Agents'],
  summary: "Get an Agent's ActivityRun",
  description:
    'Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun\r\n            assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Agents_GetAgentActivityRun',
  request: {
    params: z.object({
      agentID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Agent to get.',
            in: 'path',
            name: 'agentID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'application/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2AgentsAgentIDActivityRunRoute = createRoute({
  method: 'put',
  path: '/api/v2/agents/{agentID}/ActivityRun',
  tags: ['Agents'],
  summary: 'Update the ActivityRun assigned to the Agent.',
  description: 'No Documentation Found.',
  operationId: 'Agents_PutAgentActivityRun',
  request: {
    params: z.object({
      agentID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Agent to update.',
            in: 'path',
            name: 'agentID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The ActivityRun assigned to the agent.  Only the ActivityRunID is used.',
      content: {
        'application/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ActivityRunID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The identifier for the ActivityRun' }),
              EndDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Read Only. The UTC date and time when the activity completed',
                }),
              JobActivityID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Read Only. The ID of the Job Activity that defines this activity run',
                }),
              JobRunID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Read Only. The ID of the JobRun under which this ActivityRun is executing',
                }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterValueSchema),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated.',
                  readOnly: true,
                }),
              StartDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Read Only. The UTC date and time when the activity started',
                }),
              Status: z
                .object({
                  CurrentStep: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The activity step currently executing, indicated by numeric order',
                    }),
                  Status: z
                    .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
                    .exactOptional()
                    .openapi({ description: 'The status of the ActivityRun' }),
                  StepProgress: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The percent progress from the currently executing step.  This value shall be null if progress is not available',
                    }),
                  StepStatus: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The status text from the currently executing step' }),
                })
                .openapi({ description: 'A DTO for an IActivityRunStatus', required: [] }),
              Steps: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'The id of the activity this activity step belongs to',
                          }),
                        ActivityStepID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The id of this activity step' }),
                        ImplementationID: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The implementation id which is used to look up the step implementation',
                          }),
                        ParameterMappings: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(BuildSystemSharedDTOParameterMappingSchema),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The mapping of values from a source to be used for the step parameters',
                            readOnly: true,
                          }),
                        RunOrder: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The order of this activity step relative to other activity steps',
                          }),
                        StepID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The id of the step' }),
                        StepName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The name of the step' }),
                        UseConfig: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration',
                          }),
                      })
                      .openapi({ description: 'A DTO for an IActivityStep', required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep',
                  readOnly: true,
                }),
            })
            .openapi({ description: 'A DTO for an IActivityRun', required: ['Status'] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/json': { schema: BuildSystemSharedDTOActivityRunSchema },
        'text/xml': { schema: BuildSystemSharedDTOActivityRunSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const putApiV2AgentsAgentIDStatusRoute = createRoute({
  method: 'put',
  path: '/api/v2/agents/{agentID}/Status',
  tags: ['Agents'],
  summary: 'Update an Agent',
  description:
    'Updates the status of an Agent.The body of the PUT is the updated Agent status.  When successful,\r\n            the response is empty.If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Agents_PutAgentStatus',
  request: {
    params: z.object({
      agentID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Agent to update.',
            in: 'path',
            name: 'agentID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated AgentStatus.',
      content: {
        'application/json': { schema: BuildSystemSharedDTOAgentStatusSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              LastStatusUpdate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'ReadOnly. The UTC date and time of the last status update',
                }),
              Online: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({ description: 'Indicates if the agent is online' }),
            })
            .openapi({ description: 'A DTO for an IAgentStatus', required: ['Online'] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOAgentStatusSchema },
        'text/json': { schema: BuildSystemSharedDTOAgentStatusSchema },
        'text/xml': { schema: BuildSystemSharedDTOAgentStatusSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2JobRunsRoute = createRoute({
  method: 'get',
  path: '/api/v2/jobRuns',
  tags: ['JobRuns'],
  summary: 'Get JobRuns',
  description:
    'Gets a collection of JobRuns. When successful, the response is a PagedResponse of JobRuns.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'JobRuns_GetJobRuns',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeActivityRunDetails: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Indicates whether to include ActivityRun details.  Defaults to false.',
            in: 'query',
            name: 'includeActivityRunDetails',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseBuildSystemSharedDTOJobRunSchema },
        'text/json': { schema: APIPagedResponseBuildSystemSharedDTOJobRunSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2JobRunsRoute = createRoute({
  method: 'post',
  path: '/api/v2/jobRuns',
  tags: ['JobRuns'],
  summary: 'Create a JobRun',
  description:
    'Creates a JobRun.  The body of the POST is the JobRun to create.  The JobRunID will be assigned on\r\n            creation of the JobRun.  When successful, the response is the JobRunID.  If unsuccessful, an \r\n            appropriate ApiError is returned.',
  operationId: 'JobRuns_PostJobRun',
  request: {
    body: {
      description:
        'The JobRun to create.  The JobRunID will be assigned on creation of the JobRun.',
      content: {
        'application/json': { schema: BuildSystemSharedDTOJobRunSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ActivityRuns: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ActivityRunID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The identifier for the ActivityRun' }),
                        EndDate: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The UTC date and time when the activity completed',
                          }),
                        JobActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The ID of the Job Activity that defines this activity run',
                          }),
                        JobRunID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The ID of the JobRun under which this ActivityRun is executing',
                          }),
                        Parameters: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(BuildSystemSharedDTOParameterValueSchema),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated.',
                            readOnly: true,
                          }),
                        StartDate: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The UTC date and time when the activity started',
                          }),
                        Status: z
                          .object({
                            CurrentStep: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'The activity step currently executing, indicated by numeric order',
                              }),
                            Status: z
                              .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
                              .exactOptional()
                              .openapi({ description: 'The status of the ActivityRun' }),
                            StepProgress: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'The percent progress from the currently executing step.  This value shall be null if progress is not available',
                              }),
                            StepStatus: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The status text from the currently executing step',
                              }),
                          })
                          .openapi({
                            description: 'A DTO for an IActivityRunStatus',
                            required: [],
                          }),
                        Steps: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  ActivityID: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.int32(),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The id of the activity this activity step belongs to',
                                    }),
                                  ActivityStepID: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.int32(),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'The id of this activity step' }),
                                  ImplementationID: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The implementation id which is used to look up the step implementation',
                                    }),
                                  ParameterMappings: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(BuildSystemSharedDTOParameterMappingSchema),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The mapping of values from a source to be used for the step parameters',
                                      readOnly: true,
                                    }),
                                  RunOrder: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.int32(),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The order of this activity step relative to other activity steps',
                                    }),
                                  StepID: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.int32(),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'The id of the step' }),
                                  StepName: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'The name of the step' }),
                                  UseConfig: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration',
                                    }),
                                })
                                .openapi({
                                  description: 'A DTO for an IActivityStep',
                                  required: [],
                                }),
                            ),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep',
                            readOnly: true,
                          }),
                      })
                      .openapi({ description: 'A DTO for an IActivityRun', required: ['Status'] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description: 'The activity runs belonging to this JobRun',
                  readOnly: true,
                }),
              EndDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The UTC date and time when the job completed' }),
              JobID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the job that defines the run' }),
              JobRunID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this JobRun' }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterValueSchema),
                )
                .exactOptional()
                .openapi({
                  description: 'The parameters used for this run of the job',
                  readOnly: true,
                }),
              StartDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The UTC date and time when the job started' }),
              Status: z
                .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
                .exactOptional()
                .openapi({ description: 'The status of this JobRun' }),
            })
            .openapi({ description: 'A DTO for an IJobRun', required: [] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOJobRunSchema },
        'text/json': { schema: BuildSystemSharedDTOJobRunSchema },
        'text/xml': { schema: BuildSystemSharedDTOJobRunSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2JobRunsJobRunIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/jobRuns/{jobRunID}',
  tags: ['JobRuns'],
  summary: 'Get a JobRun by ID',
  description:
    'Gets a JobRun by ID. When successful, the response is the requested JobRun.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'JobRuns_GetJobRun',
  request: {
    params: z.object({
      jobRunID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the JobRun to get.',
            in: 'path',
            name: 'jobRunID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      includeActivityRunDetails: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Indicates whether to include ActivityRun details.  Defaults to false.',
            in: 'query',
            name: 'includeActivityRunDetails',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOJobRunSchema },
        'application/xml': { schema: BuildSystemSharedDTOJobRunSchema },
        'text/json': { schema: BuildSystemSharedDTOJobRunSchema },
        'text/xml': { schema: BuildSystemSharedDTOJobRunSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2JobRunsJobRunIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/jobRuns/{jobRunID}',
  tags: ['JobRuns'],
  summary: 'Update a JobRun',
  description:
    '/// \r\n            Updates a JobRun.  The body of the PUT is the updated JobRun.\r\n            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'JobRuns_PutJobRun',
  request: {
    params: z.object({
      jobRunID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the JobRun to update',
            in: 'path',
            name: 'jobRunID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated JobRun',
      content: {
        'application/json': { schema: BuildSystemSharedDTOJobRunSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ActivityRuns: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ActivityRunID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The identifier for the ActivityRun' }),
                        EndDate: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The UTC date and time when the activity completed',
                          }),
                        JobActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The ID of the Job Activity that defines this activity run',
                          }),
                        JobRunID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The ID of the JobRun under which this ActivityRun is executing',
                          }),
                        Parameters: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(BuildSystemSharedDTOParameterValueSchema),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated.',
                            readOnly: true,
                          }),
                        StartDate: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The UTC date and time when the activity started',
                          }),
                        Status: z
                          .object({
                            CurrentStep: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'The activity step currently executing, indicated by numeric order',
                              }),
                            Status: z
                              .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
                              .exactOptional()
                              .openapi({ description: 'The status of the ActivityRun' }),
                            StepProgress: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'The percent progress from the currently executing step.  This value shall be null if progress is not available',
                              }),
                            StepStatus: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The status text from the currently executing step',
                              }),
                          })
                          .openapi({
                            description: 'A DTO for an IActivityRunStatus',
                            required: [],
                          }),
                        Steps: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  ActivityID: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.int32(),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The id of the activity this activity step belongs to',
                                    }),
                                  ActivityStepID: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.int32(),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'The id of this activity step' }),
                                  ImplementationID: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The implementation id which is used to look up the step implementation',
                                    }),
                                  ParameterMappings: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(BuildSystemSharedDTOParameterMappingSchema),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The mapping of values from a source to be used for the step parameters',
                                      readOnly: true,
                                    }),
                                  RunOrder: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.int32(),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The order of this activity step relative to other activity steps',
                                    }),
                                  StepID: z
                                    .preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.int32(),
                                    )
                                    .exactOptional()
                                    .openapi({ description: 'The id of the step' }),
                                  StepName: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'The name of the step' }),
                                  UseConfig: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration',
                                    }),
                                })
                                .openapi({
                                  description: 'A DTO for an IActivityStep',
                                  required: [],
                                }),
                            ),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep',
                            readOnly: true,
                          }),
                      })
                      .openapi({ description: 'A DTO for an IActivityRun', required: ['Status'] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description: 'The activity runs belonging to this JobRun',
                  readOnly: true,
                }),
              EndDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The UTC date and time when the job completed' }),
              JobID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the job that defines the run' }),
              JobRunID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of this JobRun' }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterValueSchema),
                )
                .exactOptional()
                .openapi({
                  description: 'The parameters used for this run of the job',
                  readOnly: true,
                }),
              StartDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The UTC date and time when the job started' }),
              Status: z
                .enum(['Ready', 'InProgress', 'Succeeded', 'Cancelled', 'Failed'])
                .exactOptional()
                .openapi({ description: 'The status of this JobRun' }),
            })
            .openapi({ description: 'A DTO for an IJobRun', required: [] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOJobRunSchema },
        'text/json': { schema: BuildSystemSharedDTOJobRunSchema },
        'text/xml': { schema: BuildSystemSharedDTOJobRunSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2JobRunsJobRunIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/jobRuns/{jobRunID}',
  tags: ['JobRuns'],
  summary: 'Delete a JobRun',
  description:
    'Deletes a JobRun. When successful, the response is empty.  If unsuccessful, an appropriate\r\n            ApiError is returned.',
  operationId: 'JobRuns_DeleteJobRun',
  request: {
    params: z.object({
      jobRunID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the JobRun to delete',
            in: 'path',
            name: 'jobRunID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2JobsRoute = createRoute({
  method: 'get',
  path: '/api/v2/jobs',
  tags: ['Jobs'],
  summary: 'Get Jobs',
  description:
    'Gets a collection of Jobs. When successful, the response is a PagedResponse of Jobs.\r\n            If unsuccessful, an appropriate ApiError is returned. \r\n            ///',
  operationId: 'Jobs_GetJobs',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      isIncludeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Does it include deleted job, or not',
            in: 'query',
            name: 'isIncludeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseBuildSystemSharedDTOJobSchema },
        'text/json': { schema: APIPagedResponseBuildSystemSharedDTOJobSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2JobsRoute = createRoute({
  method: 'post',
  path: '/api/v2/jobs',
  tags: ['Jobs'],
  summary: 'Create a Job',
  description:
    'Creates a Job.  The body of the POST is the Job to create.  The JobID will be assigned on\r\n            creation of the Job.  When successful, the response is the JobID.  If unsuccessful, an \r\n            appropriate ApiError is returned.',
  operationId: 'Jobs_PostJob',
  request: {
    body: {
      description: 'The job to create.  The JobID will be assigned on creation of the Job.',
      content: {
        'application/json': { schema: BuildSystemSharedDTOJobSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Activities: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'The ID of the activity to be run as part of the job',
                          }),
                        JobActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The ID of this job activity' }),
                        JobID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'The ID of the job this job activity belongs to',
                          }),
                        ParameterMappings: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(BuildSystemSharedDTOParameterMappingSchema),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The mapping of values from a source to be used for the activity parameters',
                            readOnly: true,
                          }),
                        RunOrder: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The order of this job activity relative to others in the job',
                          }),
                      })
                      .openapi({ description: 'A DTO for an IJobActivity', required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description: 'The activities which are performed for the job',
                  readOnly: true,
                }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Indicates if the job has been deleted.' }),
              JobID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the job' }),
              Name: z.string().exactOptional().openapi({ description: 'The name of the job' }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterSchema),
                )
                .exactOptional()
                .openapi({ description: 'The parameters for the job', readOnly: true }),
            })
            .openapi({ description: 'A DTO for an IJob', required: [] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOJobSchema },
        'text/json': { schema: BuildSystemSharedDTOJobSchema },
        'text/xml': { schema: BuildSystemSharedDTOJobSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2JobsJobIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/jobs/{jobID}',
  tags: ['Jobs'],
  summary: 'Get a Job by ID',
  description:
    'Gets a Job by ID. When successful, the response is the requested Job.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Jobs_GetJob',
  request: {
    params: z.object({
      jobID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Job to get.',
            in: 'path',
            name: 'jobID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      isIncludeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Does it include deleted job, or not',
            in: 'query',
            name: 'isIncludeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOJobSchema },
        'application/xml': { schema: BuildSystemSharedDTOJobSchema },
        'text/json': { schema: BuildSystemSharedDTOJobSchema },
        'text/xml': { schema: BuildSystemSharedDTOJobSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2JobsJobIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/jobs/{jobID}',
  tags: ['Jobs'],
  summary: 'Update a Job',
  description:
    'Updates a Job.  The body of the PUT is the updated Job.  When successful, the response is empty.\r\n            If unsuccessful, an appropriate ApiError is returned.',
  operationId: 'Jobs_PutJob',
  request: {
    params: z.object({
      jobID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the job to update',
            in: 'path',
            name: 'jobID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated job',
      content: {
        'application/json': { schema: BuildSystemSharedDTOJobSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Activities: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'The ID of the activity to be run as part of the job',
                          }),
                        JobActivityID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The ID of this job activity' }),
                        JobID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'The ID of the job this job activity belongs to',
                          }),
                        ParameterMappings: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(BuildSystemSharedDTOParameterMappingSchema),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The mapping of values from a source to be used for the activity parameters',
                            readOnly: true,
                          }),
                        RunOrder: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The order of this job activity relative to others in the job',
                          }),
                      })
                      .openapi({ description: 'A DTO for an IJobActivity', required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description: 'The activities which are performed for the job',
                  readOnly: true,
                }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Indicates if the job has been deleted.' }),
              JobID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the job' }),
              Name: z.string().exactOptional().openapi({ description: 'The name of the job' }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterSchema),
                )
                .exactOptional()
                .openapi({ description: 'The parameters for the job', readOnly: true }),
            })
            .openapi({ description: 'A DTO for an IJob', required: [] }),
        },
        'application/xml': { schema: BuildSystemSharedDTOJobSchema },
        'text/json': { schema: BuildSystemSharedDTOJobSchema },
        'text/xml': { schema: BuildSystemSharedDTOJobSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const deleteApiV2JobsJobIDRoute = createRoute({
  method: 'delete',
  path: '/api/v2/jobs/{jobID}',
  tags: ['Jobs'],
  summary: 'Mark the delete flag for the Job',
  description:
    'Deletes a Job. When successful, the response is empty.  If unsuccessful, an appropriate\r\n            ApiError is returned.',
  operationId: 'Jobs_DeleteJob',
  request: {
    params: z.object({
      jobID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the job to delete',
            in: 'path',
            name: 'jobID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})

export const getApiV2StepsRoute = createRoute({
  method: 'get',
  path: '/api/v2/steps',
  tags: ['Steps'],
  summary: 'Get Steps',
  description:
    'Gets a collection of Steps. When successful, the response is a PagedResponse of Steps.\r\n            If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.',
  operationId: 'Steps_GetSteps',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page limit.  If not specified, the default page limit is 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The page offset.  If not specified, the default page offset is 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Does it include deleted step, or not',
            in: 'query',
            name: 'includeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: APIPagedResponseBuildSystemSharedDTOStepSchema },
        'text/json': { schema: APIPagedResponseBuildSystemSharedDTOStepSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const postApiV2StepsRoute = createRoute({
  method: 'post',
  path: '/api/v2/steps',
  tags: ['Steps'],
  summary: 'Create a Step',
  description: 'No Documentation Found.',
  operationId: 'Steps_PostStep',
  request: {
    body: {
      description: 'The step to create',
      content: {
        'application/json': { schema: BuildSystemSharedDTOStepSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ConfigRequired: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    'Indicates if the step requires configuration values to be provided by the build agent',
                }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Read Only.  Indicates if the record is deleted.' }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A description of the step to be presented to a user' }),
              ImplementationID: z
                .string()
                .openapi({
                  description:
                    'The implementation ID used to lookup the step implementation when it is executed',
                }),
              Name: z.string().openapi({ description: 'The name of the step' }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterSchema),
                )
                .exactOptional()
                .openapi({ description: 'The parameters for this step', readOnly: true }),
              StepID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the step' }),
            })
            .openapi({
              description: 'Step',
              required: ['Name', 'ConfigRequired', 'ImplementationID'],
            }),
        },
        'application/xml': { schema: BuildSystemSharedDTOStepSchema },
        'text/json': { schema: BuildSystemSharedDTOStepSchema },
        'text/xml': { schema: BuildSystemSharedDTOStepSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.int32() },
        'application/xml': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/xml': { schema: z.int32() },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const getApiV2StepsStepIDRoute = createRoute({
  method: 'get',
  path: '/api/v2/steps/{stepID}',
  tags: ['Steps'],
  summary: 'Get a Step by ID',
  description:
    'Gets a Step by ID. When successful, the response is the requested Step.\r\n            If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.',
  operationId: 'Steps_GetStep',
  request: {
    params: z.object({
      stepID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the Step to get.',
            in: 'path',
            name: 'stepID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      isIncludeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Does it include deleted step, or not',
            in: 'query',
            name: 'isIncludeDeleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BuildSystemSharedDTOStepSchema },
        'application/xml': { schema: BuildSystemSharedDTOStepSchema },
        'text/json': { schema: BuildSystemSharedDTOStepSchema },
        'text/xml': { schema: BuildSystemSharedDTOStepSchema },
      },
    },
    default: {
      description: 'API Error Response',
      content: {
        'application/json': { schema: APIModelsApiErrorSchema },
        'application/xml': { schema: APIModelsApiErrorSchema },
        'text/json': { schema: APIModelsApiErrorSchema },
        'text/xml': { schema: APIModelsApiErrorSchema },
      },
    },
  },
})

export const putApiV2StepsStepIDRoute = createRoute({
  method: 'put',
  path: '/api/v2/steps/{stepID}',
  tags: ['Steps'],
  summary: 'Update a Step',
  description: 'No Documentation Found.',
  operationId: 'Steps_PutStep',
  request: {
    params: z.object({
      stepID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The step ID of the step to update',
            in: 'path',
            name: 'stepID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The updated step',
      content: {
        'application/json': { schema: BuildSystemSharedDTOStepSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ConfigRequired: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    'Indicates if the step requires configuration values to be provided by the build agent',
                }),
              Deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Read Only.  Indicates if the record is deleted.' }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A description of the step to be presented to a user' }),
              ImplementationID: z
                .string()
                .openapi({
                  description:
                    'The implementation ID used to lookup the step implementation when it is executed',
                }),
              Name: z.string().openapi({ description: 'The name of the step' }),
              Parameters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(BuildSystemSharedDTOParameterSchema),
                )
                .exactOptional()
                .openapi({ description: 'The parameters for this step', readOnly: true }),
              StepID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the step' }),
            })
            .openapi({
              description: 'Step',
              required: ['Name', 'ConfigRequired', 'ImplementationID'],
            }),
        },
        'application/xml': { schema: BuildSystemSharedDTOStepSchema },
        'text/json': { schema: BuildSystemSharedDTOStepSchema },
        'text/xml': { schema: BuildSystemSharedDTOStepSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'API Error Response',
      content: { '*/*': { schema: APIModelsApiErrorSchema } },
    },
  },
})
