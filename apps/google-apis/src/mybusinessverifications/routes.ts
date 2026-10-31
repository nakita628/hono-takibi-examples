import { createRoute, z } from '@hono/zod-openapi'

const PostalAddressSchema = z
  .object({
    addressLines: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).',
      }),
    administrativeArea: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don\'t use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address\' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.',
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The name of the organization at the address.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).',
      }),
    recipients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.',
      }),
    sortingCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d\'Ivoire).',
      }),
    sublocality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.',
      }),
  })
  .openapi({
    description:
      'Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478',
    required: [],
  })
  .openapi('PostalAddress')

const AddressVerificationDataSchema = z
  .object({
    address: PostalAddressSchema.exactOptional().openapi({
      description: 'Address that a postcard can be sent to.',
    }),
    business: z.string().exactOptional().openapi({ description: "Merchant's business name." }),
    expectedDeliveryDaysRegion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Expected number of days it takes to deliver a postcard to the address's region.",
      }),
  })
  .openapi({ description: 'Display data for verifications through postcard.', required: [] })
  .openapi('AddressVerificationData')

const CompleteVerificationRequestSchema = z
  .object({
    pin: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. PIN code received by the merchant to complete the verification.',
      }),
  })
  .openapi({
    description: 'Request message for Verifications.CompleteVerificationAction.',
    required: [],
  })
  .openapi('CompleteVerificationRequest')

const VerificationSchema = z
  .object({
    announcement: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. Response announcement set only if the method is VETTED_PARTNER.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp when the verification is requested.' }),
    method: z
      .enum([
        'VERIFICATION_METHOD_UNSPECIFIED',
        'ADDRESS',
        'EMAIL',
        'PHONE_CALL',
        'SMS',
        'AUTO',
        'VETTED_PARTNER',
      ])
      .exactOptional()
      .openapi({ description: 'The method of the verification.' }),
    name: z.string().exactOptional().openapi({ description: 'Resource name of the verification.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'COMPLETED', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'The state of the verification.' }),
  })
  .openapi({
    description: 'A verification represents a verification attempt on a location.',
    required: [],
  })
  .openapi('Verification')

const CompleteVerificationResponseSchema = z
  .object({
    verification: VerificationSchema.exactOptional().openapi({
      description: 'The completed verification.',
    }),
  })
  .openapi({
    description: 'Response message for Verifications.CompleteVerificationAction.',
    required: [],
  })
  .openapi('CompleteVerificationResponse')

const ComplyWithGuidelinesSchema = z
  .object({
    recommendationReason: z
      .enum([
        'RECOMMENDATION_REASON_UNSPECIFIED',
        'BUSINESS_LOCATION_SUSPENDED',
        'BUSINESS_LOCATION_DISABLED',
      ])
      .exactOptional()
      .openapi({
        description: 'The reason why the location is being recommended to comply with guidelines.',
      }),
  })
  .openapi({
    description:
      'Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).',
    required: [],
  })
  .openapi('ComplyWithGuidelines')

const EmailVerificationDataSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Domain name in the email address. e.g. "gmail.com" in foo@gmail.com',
      }),
    isUserNameEditable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether client is allowed to provide a different user name.' }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'User name in the email address. e.g. "foo" in foo@gmail.com' }),
  })
  .openapi({ description: 'Display data for verifications through email.', required: [] })
  .openapi('EmailVerificationData')

const ServiceBusinessContextSchema = z
  .object({
    address: PostalAddressSchema.exactOptional().openapi({
      description:
        'The verification address of the location. It is used to either enable more verification options or send a postcard.',
    }),
  })
  .openapi({ description: 'Additional data for service business verification.', required: [] })
  .openapi('ServiceBusinessContext')

const FetchVerificationOptionsRequestSchema = z
  .object({
    context: ServiceBusinessContextSchema.exactOptional().openapi({
      description:
        'Optional. Extra context information for the verification of service businesses. Can only be applied to the locations whose business type is CUSTOMER_LOCATION_ONLY. Specifying an accurate address could enable more options. INVALID_ARGUMENT will be thrown if it is set for other business types of locations.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language.',
      }),
  })
  .openapi({
    description: 'Request message for Verifications.FetchVerificationOptions.',
    required: [],
  })
  .openapi('FetchVerificationOptionsRequest')

const VerificationOptionSchema = z
  .object({
    addressData: AddressVerificationDataSchema.exactOptional().openapi({
      description: 'Set only if the method is MAIL.',
    }),
    announcement: z
      .string()
      .exactOptional()
      .openapi({ description: 'Set only if the method is VETTED_PARTNER.' }),
    emailData: EmailVerificationDataSchema.exactOptional().openapi({
      description: 'Set only if the method is EMAIL.',
    }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set only if the method is PHONE_CALL or SMS. Phone number that the PIN will be sent to.',
      }),
    verificationMethod: z
      .enum([
        'VERIFICATION_METHOD_UNSPECIFIED',
        'ADDRESS',
        'EMAIL',
        'PHONE_CALL',
        'SMS',
        'AUTO',
        'VETTED_PARTNER',
      ])
      .exactOptional()
      .openapi({ description: 'Method to verify the location.' }),
  })
  .openapi({
    description:
      'The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).',
    required: [],
  })
  .openapi('VerificationOption')

const FetchVerificationOptionsResponseSchema = z
  .object({
    options: z
      .array(VerificationOptionSchema)
      .exactOptional()
      .openapi({ description: 'The available verification options.' }),
  })
  .openapi({
    description: 'Response message for Verifications.FetchVerificationOptions.',
    required: [],
  })
  .openapi('FetchVerificationOptionsResponse')

const LocationSchema = z
  .object({
    address: PostalAddressSchema.exactOptional().openapi({
      description:
        'Required. A precise, accurate address to describe your business location. PO boxes or mailboxes located at remote locations are not acceptable. At this time, you can specify a maximum of five `address_lines` values in the address.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Location name should reflect your business\'s real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don\'t add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don\'t include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").',
      }),
    primaryCategoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Id of the category that best describes the core business this location engages in. e.g. gcid:bakery.',
      }),
    primaryPhone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible.',
      }),
    websiteUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.',
      }),
  })
  .openapi({
    description:
      'A subset of location info. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.',
    required: [],
  })
  .openapi('Location')

const GenerateVerificationTokenRequestSchema = z
  .object({
    location: LocationSchema.exactOptional().openapi({
      description:
        "Required. The target location. Note: The location information should exactly match the target Location, otherwise the generated verification token won't be able to verify the target Location.",
    }),
  })
  .openapi({
    description: 'Request message for Verifications.GenerateVerificationToken.',
    required: [],
  })
  .openapi('GenerateVerificationTokenRequest')

const VerificationTokenSchema = z
  .object({ tokenString: z.string().exactOptional().openapi({ description: 'The token string.' }) })
  .openapi({
    description:
      'Token generated by a vetted [partner](https://support.google.com/business/answer/7674102).',
    required: [],
  })
  .openapi('VerificationToken')

const GenerateVerificationTokenResponseSchema = z
  .object({
    token: VerificationTokenSchema.exactOptional().openapi({
      description: 'The generated token to verify the location.',
    }),
  })
  .openapi({
    description: 'Response message for Verifications.GenerateVerificationToken.',
    required: [],
  })
  .openapi('GenerateVerificationTokenResponse')

const ListVerificationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of verifications exceeded the requested page size, this field will be populated with a token to fetch the next page of verification on a subsequent call. If there are no more attributes, this field will not be present in the response.',
      }),
    verifications: z
      .array(VerificationSchema)
      .exactOptional()
      .openapi({ description: 'List of the verifications.' }),
  })
  .openapi({ description: 'Response message for Verifications.ListVerifications.', required: [] })
  .openapi('ListVerificationsResponse')

const ResolveOwnershipConflictSchema = z
  .object({})
  .openapi({
    description:
      'Indicates that the location duplicates another location that is in good standing.',
  })
  .openapi('ResolveOwnershipConflict')

const VerifySchema = z
  .object({
    hasPendingVerification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether a verification process has already started, and can be completed by the location.',
      }),
  })
  .openapi({
    description:
      'Indicates that the location requires verification. Contains information about the current verification actions performed on the location.',
    required: [],
  })
  .openapi('Verify')

const VerifyLocationRequestSchema = z
  .object({
    context: ServiceBusinessContextSchema.exactOptional().openapi({
      description:
        'Optional. Extra context information for the verification of service businesses. It is only required for the locations whose business type is CUSTOMER_LOCATION_ONLY. For ADDRESS verification, the address will be used to send out postcard. For other methods, it should be the same as the one that is passed to GetVerificationOptions. INVALID_ARGUMENT will be thrown if it is set for other types of business locations.',
    }),
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The input for EMAIL method. Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The BCP 47 language code representing the language that is to be used for the verification process.',
      }),
    mailerContact: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The input for ADDRESS method. Contact name the mail should be sent to.',
      }),
    method: z
      .enum([
        'VERIFICATION_METHOD_UNSPECIFIED',
        'ADDRESS',
        'EMAIL',
        'PHONE_CALL',
        'SMS',
        'AUTO',
        'VETTED_PARTNER',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Verification method.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The input for PHONE_CALL/SMS method The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options.',
      }),
    token: VerificationTokenSchema.exactOptional().openapi({
      description:
        'Optional. The input for VETTED_PARTNER method available to select [partners.](https://support.google.com/business/answer/7674102) The input is not needed for a vetted account. Token that is associated to the location. Token that is associated to the location.',
    }),
  })
  .openapi({ description: 'Request message for Verifications.VerifyLocation.', required: [] })
  .openapi('VerifyLocationRequest')

const VerifyLocationResponseSchema = z
  .object({
    verification: VerificationSchema.exactOptional().openapi({
      description: 'The created verification request.',
    }),
  })
  .openapi({ description: 'Response message for Verifications.VerifyLocation.', required: [] })
  .openapi('VerifyLocationResponse')

const WaitForVoiceOfMerchantSchema = z
  .object({})
  .openapi({
    description: 'Indicates that the location will gain voice of merchant after passing review.',
  })
  .openapi('WaitForVoiceOfMerchant')

const VoiceOfMerchantStateSchema = z
  .object({
    complyWithGuidelines: ComplyWithGuidelinesSchema.exactOptional().openapi({
      description:
        'The location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177) and requires additional steps for reinstatement. To fix this issue, consult the [Help Center Article](https://support.google.com/business/answer/4569145).',
    }),
    hasBusinessAuthority: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the location has the authority (ownership) over the business on Google. If true, another location cannot take over and become the dominant listing on Maps. However, edits will not become live unless Voice of Merchant is gained (i.e. has_voice_of_merchant is true).',
      }),
    hasVoiceOfMerchant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the location is in good standing and has control over the business on Google. Any edits made to the location will propagate to Maps after passing the review phase.',
      }),
    resolveOwnershipConflict: ResolveOwnershipConflictSchema.exactOptional().openapi({
      description:
        "This location duplicates another location that is in good standing. If you have access to the location in good standing, use that location's id to perform operations. Otherwise, request access from the current owner.",
    }),
    verify: VerifySchema.exactOptional().openapi({
      description: 'Start or continue the verification process.',
    }),
    waitForVoiceOfMerchant: WaitForVoiceOfMerchantSchema.exactOptional().openapi({
      description:
        'Wait to gain Voice of Merchant. The location is under review for quality purposes.',
    }),
  })
  .openapi({
    description: 'Response message for VoiceOfMerchant.GetVoiceOfMerchantState.',
    required: [],
  })
  .openapi('VoiceOfMerchantState')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

export const postV1VerificationTokensGenerateRoute = createRoute({
  method: 'post',
  path: '/v1/verificationTokens:generate',
  tags: ['verificationTokens'],
  description:
    "Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.",
  operationId: 'mybusinessverifications.verificationTokens.generate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: GenerateVerificationTokenRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenerateVerificationTokenResponseSchema } },
    },
  },
})

export const postV1LocationFetchVerificationOptionsRoute = createRoute({
  method: 'post',
  path: '/v1/{location}:fetchVerificationOptions',
  tags: ['locations'],
  description: 'Reports all eligible verification options for a location in a specific language.',
  operationId: 'mybusinessverifications.locations.fetchVerificationOptions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description: 'Required. The location to verify.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FetchVerificationOptionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FetchVerificationOptionsResponseSchema } },
    },
  },
})

export const getV1NameVoiceOfMerchantStateRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/VoiceOfMerchantState',
  tags: ['locations'],
  description: 'Gets the VoiceOfMerchant state.',
  operationId: 'mybusinessverifications.locations.getVoiceOfMerchantState',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource name of the location.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VoiceOfMerchantStateSchema } },
    },
  },
})

export const postV1NameCompleteRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:complete',
  tags: ['locations'],
  description:
    'Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.',
  operationId: 'mybusinessverifications.locations.verifications.complete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource name of the verification to complete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CompleteVerificationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CompleteVerificationResponseSchema } },
    },
  },
})

export const postV1NameVerifyRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:verify',
  tags: ['locations'],
  description: 'Starts the verification process for a location.',
  operationId: 'mybusinessverifications.locations.verify',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource name of the location to verify.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VerifyLocationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VerifyLocationResponseSchema } },
    },
  },
})

export const getV1ParentVerificationsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/verifications',
  tags: ['locations'],
  description: 'List verifications of a location, ordered by create time.',
  operationId: 'mybusinessverifications.locations.verifications.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many verification to include per page. Minimum is 1, and the default and maximum page size is 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, returns the next page of verifications.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the location that verification requests belong to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListVerificationsResponseSchema } },
    },
  },
})
