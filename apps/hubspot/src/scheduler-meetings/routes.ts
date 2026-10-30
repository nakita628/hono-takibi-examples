import { createRoute, z } from '@hono/zod-openapi'

const AssociationSpecSchema = z
  .object({
    associationCategory: z
      .enum(['HUBSPOT_DEFINED', 'INTEGRATOR_DEFINED', 'USER_DEFINED', 'WORK'])
      .openapi({
        description:
          "A string indicating the category of the association. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.",
        example: null,
      }),
    associationTypeId: z
      .int32()
      .openapi({
        description: 'An integer representing the unique identifier for the type of association.',
        example: null,
      }),
  })
  .openapi({
    required: ['associationCategory', 'associationTypeId'],
    description:
      'Defines the type, direction, and details of the relationship between two CRM objects.',
    example: null,
  })
  .openapi('AssociationSpec')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description: 'A string representing the paging cursor token for the next set of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the URL link to the next page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description: 'A string token used to retrieve the previous page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides a direct link to the previous page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const ExternalLinkMetadataSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the meeting link was created, in ISO 8601 format.',
        example: null,
      }),
    defaultLink: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this is the default meeting link.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the meeting link.', example: null }),
    link: z.string().openapi({ description: 'The full URL of the meeting link.', example: null }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the meeting link.', example: null }),
    organizerUserId: z
      .string()
      .openapi({
        description: 'The unique identifier of the user who organized the meeting.',
        example: null,
      }),
    paymentLinkId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the identifier for the payment link associated with the meeting.',
        example: null,
      }),
    slug: z
      .string()
      .openapi({
        description: 'A string representing the unique part of the URL for the meeting link.',
        example: null,
      }),
    type: z
      .enum(['GROUP_CALENDAR', 'PERSONAL_LINK', 'ROUND_ROBIN_CALENDAR'])
      .openapi({
        description:
          "The type of meeting link. Valid values include 'PERSONAL_LINK', 'GROUP_CALENDAR', and 'ROUND_ROBIN_CALENDAR'.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the meeting link was last updated, in ISO 8601 format.',
        example: null,
      }),
    userIdsOfLinkMembers: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of user IDs representing the members associated with the meeting link.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'defaultLink',
      'id',
      'link',
      'organizerUserId',
      'slug',
      'type',
      'userIdsOfLinkMembers',
    ],
    example: null,
  })
  .openapi('ExternalLinkMetadata')

const CollectionResponseWithTotalExternalLinkMetadataSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(ExternalLinkMetadataSchema)
      .openapi({
        description:
          'An array of external link metadata objects. Each object contains details about an external meeting link.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description:
          'The total number of external link metadata entries available. This is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalExternalLinkMetadata')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const PublicObjectIdSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier for the public object. It is a string that serves as a reference to the object within the API.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], description: 'Contains the Id of a Public Object', example: null })
  .openapi('PublicObjectId')

const ExternalAssociationCreateRequestSchema = z
  .object({
    to: PublicObjectIdSchema,
    types: z
      .array(AssociationSpecSchema)
      .openapi({
        description:
          'An array of association specifications, detailing the types of associations to be created. Each item in the array is an object that defines the association type.',
        example: null,
      }),
  })
  .openapi({ required: ['to', 'types'], example: null })
  .openapi('ExternalAssociationCreateRequest')

const ExternalBookingFormFieldSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'The name of the form field, represented as a string.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'The value associated with the form field, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['name', 'value'], example: null })
  .openapi('ExternalBookingFormField')

const ExternalTimeRangeSchema = z
  .object({
    end: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The end of the time range, represented as an integer in int64 format.',
        example: null,
      }),
    start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The start of the time range, represented as an integer in int64 format.',
        example: null,
      }),
  })
  .openapi({ required: ['end', 'start'], example: null })
  .openapi('ExternalTimeRange')

const ExternalUserProfileSchema = z
  .object({
    email: z
      .string()
      .openapi({
        description: 'The email address of the user. This is a required string property.',
        example: null,
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the user. It is a string.', example: null }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The full name of the user, combining first and last names. It is a string.',
        example: null,
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the user. It is a string.', example: null }),
  })
  .openapi({ required: ['email'], example: null })
  .openapi('ExternalUserProfile')

const ExternalMeetingsUserSchema = z
  .object({
    calendarProvider: z
      .enum(['EXCHANGE', 'GOOGLE', 'OFFICE365', 'UNKNOWN'])
      .openapi({
        description:
          "The calendar service provider used by the user. Valid values include 'GOOGLE', 'OFFICE365', 'EXCHANGE', and 'UNKNOWN'.",
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the meetings user.', example: null }),
    isSalesStarter: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the user is a sales starter.',
        example: null,
      }),
    userId: z
      .string()
      .openapi({
        description: 'The unique identifier for the user associated with the meetings service.',
        example: null,
      }),
    userProfile: ExternalUserProfileSchema,
  })
  .openapi({
    required: ['calendarProvider', 'id', 'isSalesStarter', 'userId', 'userProfile'],
    example: null,
  })
  .openapi('ExternalMeetingsUser')

const ExternalUserBusyTimesSchema = z
  .object({
    busyTimes: z
      .array(ExternalTimeRangeSchema)
      .openapi({
        description:
          'An array of time ranges during which the user is busy. Each time range is represented by an object with start and end times.',
        example: null,
      }),
    isOffline: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the user is currently offline.',
        example: null,
      }),
    meetingsUser: ExternalMeetingsUserSchema,
  })
  .openapi({ required: ['busyTimes', 'isOffline', 'meetingsUser'], example: null })
  .openapi('ExternalUserBusyTimes')

const ExternalBrandingMetadataSchema = z
  .object({
    accent2Color: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The second accent color used for branding, represented as a string.',
        example: null,
      }),
    accentColor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The accent color used for branding, represented as a string.',
        example: null,
      }),
    companyAddressLine1: z
      .string()
      .exactOptional()
      .openapi({ description: "The first line of the company's address.", example: null }),
    companyAddressLine2: z
      .string()
      .exactOptional()
      .openapi({
        description: "The second line of the company's address, if applicable.",
        example: null,
      }),
    companyAvatar: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the company's avatar image.", example: null }),
    companyCity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city where the company is located.', example: null }),
    companyCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the company is located.', example: null }),
    companyDomain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The domain of the company, typically used in URLs.',
        example: null,
      }),
    companyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the company.', example: null }),
    companyState: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state or region where the company is located.', example: null }),
    companyZip: z
      .string()
      .exactOptional()
      .openapi({ description: "The postal or ZIP code of the company's location.", example: null }),
    logoAltText: z
      .string()
      .openapi({
        description: 'The alternative text for the company logo, used for accessibility.',
        example: null,
      }),
    logoHeight: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The height of the company logo in pixels.', example: null }),
    logoUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the company logo image.', example: null }),
    logoWidth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The width of the company logo in pixels.', example: null }),
    primaryColor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The primary color used for branding, represented as a string.',
        example: null,
      }),
    secondaryColor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The secondary color used for branding, represented as a string.',
        example: null,
      }),
    showMarketingAd: z
      .boolean()
      .openapi({
        description:
          'Indicates whether a marketing advertisement should be displayed. This is a boolean value.',
        example: null,
      }),
    showSalesAd: z
      .boolean()
      .openapi({
        description:
          'Indicates whether a sales advertisement should be displayed. This is a boolean value.',
        example: null,
      }),
  })
  .openapi({ required: ['logoAltText', 'showMarketingAd', 'showSalesAd'], example: null })
  .openapi('ExternalBrandingMetadata')

const ExternalClosedRangeSchema = z
  .object({
    end: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The ending point of the range, represented as an integer in int64 format.',
        example: null,
      }),
    start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The starting point of the range, represented as an integer in int64 format.',
        example: null,
      }),
  })
  .openapi({ required: ['end', 'start'], example: null })
  .openapi('ExternalClosedRange')

const ExternalLinkDisplayInfoSchema = z
  .object({
    avatar: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL of the avatar image to be displayed.',
        example: null,
      }),
    companyAvatar: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL of the company avatar image to be displayed.',
        example: null,
      }),
    headline: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the headline text to be displayed with the meeting link.',
        example: null,
      }),
    publicDisplayAvatarOption: z
      .enum(['COMPANY_LOGO', 'CUSTOM_AVATAR', 'PROFILE_IMAGE'])
      .exactOptional()
      .openapi({
        description:
          "A string indicating the avatar display option, with valid values including 'PROFILE_IMAGE', 'COMPANY_LOGO', and 'CUSTOM_AVATAR'.",
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ExternalLinkDisplayInfo')

const ExternalOptionSchema = z
  .object({
    description: z
      .string()
      .openapi({
        description: 'A string providing a detailed description of the option.',
        example: null,
      }),
    displayOrder: z
      .int32()
      .openapi({
        description:
          'An integer indicating the order in which the option should be displayed relative to other options.',
        example: null,
      }),
    doubleData: z
      .number()
      .openapi({
        description: 'A number that may hold additional data associated with the option.',
        example: null,
      }),
    hidden: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the option is hidden from display.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description: 'A string representing the display name of the option.',
        example: null,
      }),
    readOnly: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the option is read-only and cannot be modified.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'A string representing the internal value associated with the option.',
        example: null,
      }),
  })
  .openapi({
    required: ['description', 'displayOrder', 'doubleData', 'hidden', 'label', 'readOnly', 'value'],
    example: null,
  })
  .openapi('ExternalOption')

const ExternalLinkFormFieldSchema = z
  .object({
    fieldType: z
      .string()
      .openapi({
        description:
          'The type of the form field, represented as a string, indicating the kind of input expected.',
        example: null,
      }),
    isCustom: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the form field is a custom field defined by the user.',
        example: null,
      }),
    isRequired: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the form field is mandatory for the user to fill out.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description:
          'The display label for the form field, shown to users, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The unique name identifier for the form field, represented as a string.',
        example: null,
      }),
    options: z
      .array(ExternalOptionSchema)
      .openapi({
        description:
          'An array of options available for the form field, applicable if the field type supports multiple choices.',
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description: 'The specific data type of the form field, represented as a string.',
        example: null,
      }),
  })
  .openapi({
    required: ['fieldType', 'isCustom', 'isRequired', 'label', 'name', 'options', 'type'],
    example: null,
  })
  .openapi('ExternalLinkFormField')

const ExternalGuestSettingsSchema = z
  .object({
    canAddGuests: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether guests can be added to the meeting.',
        example: null,
      }),
    maxGuestCount: z
      .int32()
      .openapi({
        description:
          'An integer specifying the maximum number of guests that can be added to the meeting.',
        example: null,
      }),
  })
  .openapi({ required: ['canAddGuests', 'maxGuestCount'], example: null })
  .openapi('ExternalGuestSettings')

const ExternalCommunicationConsentCheckboxSchema = z
  .object({
    communicationTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier for the type of communication this checkbox pertains to.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description:
          'A string that contains the text label displayed next to the checkbox, describing the communication type or purpose.',
        example: null,
      }),
    required: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether this checkbox must be checked by the user to proceed, signifying mandatory consent.',
        example: null,
      }),
  })
  .openapi({ required: ['communicationTypeId', 'label', 'required'], example: null })
  .openapi('ExternalCommunicationConsentCheckbox')

const ExternalLegalConsentOptionsSchema = z
  .object({
    communicationConsentCheckboxes: z
      .array(ExternalCommunicationConsentCheckboxSchema)
      .openapi({
        description:
          'An array of communication consent checkboxes, each defined by an ExternalCommunicationConsentCheckbox object.',
        example: null,
      }),
    communicationConsentText: z
      .string()
      .openapi({
        description: 'A string containing the text for communication consent.',
        example: null,
      }),
    isLegitimateInterest: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether legitimate interest is applicable.',
        example: null,
      }),
    legitimateInterestLegalBasis: z
      .enum([
        'CONSENT_WITH_NOTICE',
        'LEGITIMATE_INTEREST_CLIENT',
        'LEGITIMATE_INTEREST_OTHER',
        'LEGITIMATE_INTEREST_PQL',
        'NON_GDPR',
        'PERFORMANCE_OF_CONTRACT',
        'PROCESS_AND_STORE',
      ])
      .exactOptional()
      .openapi({
        description:
          "A string indicating the legal basis for legitimate interest. Valid values include 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.",
        example: null,
      }),
    legitimateInterestSubscriptionTypes: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description:
          'An array of integers representing the subscription types that fall under legitimate interest.',
        example: null,
      }),
    privacyPolicyText: z
      .string()
      .openapi({
        description: 'A string containing the text for the privacy policy.',
        example: null,
      }),
    processingConsentCheckboxLabel: z
      .string()
      .openapi({
        description: 'A string representing the label for the processing consent checkbox.',
        example: null,
      }),
    processingConsentFooterText: z
      .string()
      .openapi({
        description: 'A string containing the footer text for processing consent.',
        example: null,
      }),
    processingConsentText: z
      .string()
      .openapi({
        description: 'A string containing the text for processing consent.',
        example: null,
      }),
    processingConsentType: z
      .enum(['IMPLICIT', 'REQUIRED_CHECKBOX'])
      .openapi({
        description:
          "A string indicating the type of processing consent. Valid values are 'IMPLICIT' and 'REQUIRED_CHECKBOX'.",
        example: null,
      }),
  })
  .openapi({
    required: [
      'communicationConsentCheckboxes',
      'communicationConsentText',
      'isLegitimateInterest',
      'legitimateInterestSubscriptionTypes',
      'privacyPolicyText',
      'processingConsentCheckboxLabel',
      'processingConsentFooterText',
      'processingConsentText',
      'processingConsentType',
    ],
    example: null,
  })
  .openapi('ExternalLegalConsentOptions')

const ExternalMeetingsWelcomeScreenInfoSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A descriptive text shown on the welcome screen. It is a string value.',
        example: null,
      }),
    logoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the logo image displayed on the welcome screen. It is a string value.',
        example: null,
      }),
    showWelcomeScreen: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether the welcome screen should be displayed to users.',
        example: null,
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The title displayed on the welcome screen. It is a string value.',
        example: null,
      }),
    useCompanyLogo: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "A boolean indicating whether the company's logo should be used on the welcome screen.",
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ExternalMeetingsWelcomeScreenInfo')

const ExternalMeetingsLinkSettingsSchema = z
  .object({
    availability: z
      .record(z.string(), ExternalClosedRangeSchema)
      .openapi({
        description:
          'An object representing the availability settings for the meeting link, with additional properties for closed ranges.',
        example: null,
      }),
    customAvailabilityEndDate: z
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
          'An integer representing the custom availability end date as a Unix timestamp in milliseconds.',
        example: null,
      }),
    customAvailabilityStartDate: z
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
          'An integer representing the custom availability start date as a Unix timestamp in milliseconds.',
        example: null,
      }),
    displayInfo: ExternalLinkDisplayInfoSchema.exactOptional(),
    durations: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description:
          'An array of integers representing the possible durations for meetings in milliseconds.',
        example: null,
      }),
    formFields: z
      .array(ExternalLinkFormFieldSchema)
      .openapi({
        description: 'An array of form fields that are included in the meeting link form.',
        example: null,
      }),
    guestSettings: ExternalGuestSettingsSchema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the language setting for the meeting link.',
        example: null,
      }),
    legalConsentEnabled: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether legal consent is required for the meeting link.',
        example: null,
      }),
    legalConsentOptions: ExternalLegalConsentOptionsSchema.exactOptional(),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the locale setting for the meeting link.',
        example: null,
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the location information for the meeting.',
        example: null,
      }),
    meetingBufferTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer representing the buffer time between meetings in milliseconds.',
        example: null,
      }),
    ownerPrioritized: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the meeting owner is prioritized in scheduling.',
        example: null,
      }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the URL to which users are redirected after booking a meeting.',
        example: null,
      }),
    startTimeIncrementMinutes: z
      .enum([
        'FIFTEEN',
        'FIVE',
        'FORTY_FIVE',
        'MEETING_DURATION',
        'NINETY',
        'ONE_HUNDRED_TWENTY',
        'SIXTY',
        'TEN',
        'THIRTY',
        'TWENTY',
      ])
      .openapi({
        description:
          "A string indicating the increment for start times, with valid values including 'MEETING_DURATION', 'FIVE', 'TEN', 'FIFTEEN', 'TWENTY', 'THIRTY', 'FORTY_FIVE', 'SIXTY', 'NINETY', and 'ONE_HUNDRED_TWENTY'.",
        example: null,
      }),
    weeksToAdvertise: z
      .int32()
      .openapi({
        description: 'An integer representing the number of weeks to advertise the meeting link.',
        example: null,
      }),
    welcomeScreenInfo: ExternalMeetingsWelcomeScreenInfoSchema.exactOptional(),
  })
  .openapi({
    required: [
      'availability',
      'durations',
      'formFields',
      'legalConsentEnabled',
      'meetingBufferTime',
      'ownerPrioritized',
      'startTimeIncrementMinutes',
      'weeksToAdvertise',
    ],
    example: null,
  })
  .openapi('ExternalMeetingsLinkSettings')

const ExternalMeetingAvailabilitySchema = z
  .object({
    endMillisUtc: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The end time of the meeting availability, represented as a Unix timestamp in milliseconds.',
        example: null,
      }),
    startMillisUtc: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The start time of the meeting availability, represented as a Unix timestamp in milliseconds.',
        example: null,
      }),
  })
  .openapi({ required: ['endMillisUtc', 'startMillisUtc'], example: null })
  .openapi('ExternalMeetingAvailability')

const ExternalLinkAvailabilityForDurationSchema = z
  .object({
    availabilities: z
      .array(ExternalMeetingAvailabilitySchema)
      .openapi({
        description:
          "An array of available time slots for the specified meeting duration. Each item in the array is an object representing a time slot's start and end times.",
        example: null,
      }),
    meetingDurationMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The duration of the meeting in milliseconds. This is an integer value representing the length of the meeting.',
        example: null,
      }),
  })
  .openapi({ required: ['availabilities', 'meetingDurationMillis'], example: null })
  .openapi('ExternalLinkAvailabilityForDuration')

const ExternalLinkAvailabilitySchema = z
  .object({
    hasMore: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether there are more available meeting times beyond those currently provided.',
        example: null,
      }),
    linkAvailabilityByDuration: z
      .record(z.string(), ExternalLinkAvailabilityForDurationSchema)
      .openapi({
        description:
          'An object where each key is a duration and the value is an availability object for that duration. This provides detailed availability information for each specified meeting duration.',
        example: null,
      }),
  })
  .openapi({ required: ['hasMore', 'linkAvailabilityByDuration'], example: null })
  .openapi('ExternalLinkAvailability')

const ExternalBookingInfoSchema = z
  .object({
    allUsersBusyTimes: z
      .array(ExternalUserBusyTimesSchema)
      .openapi({
        description:
          'An array of objects representing the busy times for all users associated with the meeting link.',
        example: null,
      }),
    brandingMetadata: ExternalBrandingMetadataSchema.exactOptional(),
    customParams: ExternalMeetingsLinkSettingsSchema,
    isOffline: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the meeting link is offline.',
        example: null,
      }),
    linkAvailability: ExternalLinkAvailabilitySchema.exactOptional(),
    linkId: z
      .string()
      .openapi({ description: 'The unique identifier for the meeting link.', example: null }),
    linkType: z
      .enum(['GROUP_CALENDAR', 'PERSONAL_LINK', 'ROUND_ROBIN_CALENDAR'])
      .openapi({
        description:
          "The type of meeting link. Valid values include 'PERSONAL_LINK', 'GROUP_CALENDAR', and 'ROUND_ROBIN_CALENDAR'.",
        example: null,
      }),
  })
  .openapi({
    required: ['allUsersBusyTimes', 'customParams', 'isOffline', 'linkId', 'linkType'],
    example: null,
  })
  .openapi('ExternalBookingInfo')

const ExternalCalendarMeetingEventCreatePropertiesSchema = z
  .object({
    hs_activity_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of activity for the meeting. This is a string value.',
        example: null,
      }),
    hs_attachment_ids: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the IDs of attachments associated with the meeting.',
        example: null,
      }),
    hs_attendee_owner_ids: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the IDs of the owners of the attendees for the meeting.',
        example: null,
      }),
    hs_internal_meeting_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Internal notes for the meeting. This is a string value.',
        example: null,
      }),
    hs_meeting_body: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The body content or description of the meeting. This is a string value.',
        example: null,
      }),
    hs_meeting_end_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The end time of the meeting, in ISO 8601 format.', example: null }),
    hs_meeting_location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The location of the meeting. This is a string value.',
        example: null,
      }),
    hs_meeting_location_type: z
      .enum(['ADDRESS', 'CUSTOM', 'PHONE'])
      .exactOptional()
      .openapi({
        description:
          "The type of location for the meeting. Valid values include 'PHONE', 'ADDRESS', and 'CUSTOM'.",
        example: null,
      }),
    hs_meeting_outcome: z
      .string()
      .openapi({ description: 'A string representing the outcome of the meeting.', example: null }),
    hs_meeting_start_time: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start time of the meeting, in ISO 8601 format.',
        example: null,
      }),
    hs_meeting_title: z
      .string()
      .openapi({ description: 'The title of the meeting. This is a string value.', example: null }),
    hs_timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'A timestamp indicating when the meeting event was created, in ISO 8601 format.',
        example: null,
      }),
    hubspot_owner_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the HubSpot owner associated with the meeting.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'hs_meeting_end_time',
      'hs_meeting_outcome',
      'hs_meeting_start_time',
      'hs_meeting_title',
      'hs_timestamp',
      'hubspot_owner_id',
    ],
    example: null,
  })
  .openapi('ExternalCalendarMeetingEventCreateProperties')

const ExternalReminderSchema = z
  .object({
    numberOfTimeUnits: z
      .int32()
      .openapi({
        description:
          'The number of time units before the meeting when the reminder should be sent. This is an integer value.',
        example: null,
      }),
    timeUnit: z
      .enum(['DAYS', 'HOURS', 'MINUTES', 'WEEKS'])
      .openapi({
        description:
          "The unit of time for the reminder. Valid values include 'WEEKS', 'DAYS', 'HOURS', and 'MINUTES'.",
        example: null,
      }),
  })
  .openapi({ required: ['numberOfTimeUnits', 'timeUnit'], example: null })
  .openapi('ExternalReminder')

const ExternalEmailReminderScheduleSchema = z
  .object({
    reminders: z
      .array(ExternalReminderSchema)
      .openapi({
        description:
          'An array of ExternalReminder objects that specify the timing and frequency of the email reminders.',
        example: null,
      }),
    shouldIncludeInviteDescription: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the invite description should be included in the email reminder.',
        example: null,
      }),
  })
  .openapi({ required: ['reminders', 'shouldIncludeInviteDescription'], example: null })
  .openapi('ExternalEmailReminderSchedule')

const ExternalCalendarMeetingEventCreateRequestSchema = z
  .object({
    associations: z
      .array(ExternalAssociationCreateRequestSchema)
      .openapi({
        description:
          'An array of associations related to the meeting event, each represented by an ExternalAssociationCreateRequest object.',
        example: null,
      }),
    emailReminderSchedule: ExternalEmailReminderScheduleSchema,
    properties: ExternalCalendarMeetingEventCreatePropertiesSchema,
    timezone: z
      .string()
      .openapi({
        description: 'A string representing the timezone in which the meeting event is scheduled.',
        example: null,
      }),
  })
  .openapi({
    required: ['associations', 'emailReminderSchedule', 'properties', 'timezone'],
    example: null,
  })
  .openapi('ExternalCalendarMeetingEventCreateRequest')

const ExternalCalendarMeetingEventResponsePropertiesSchema = z
  .object({
    hs_activity_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of activity associated with the meeting.', example: null }),
    hs_attachment_ids: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of unique identifiers for attachments associated with the meeting.',
        example: null,
      }),
    hs_attendee_owner_ids: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of unique identifiers for the owners of the attendees.',
        example: null,
      }),
    hs_engagement_source: z
      .enum([
        'ACADEMY',
        'ACCEPTANCE_TEST',
        'ACTIVITY_AUTO_ASSOCIATE',
        'ACTIVITY_LOG_REVERT',
        'ADS',
        'AI_GROUP',
        'ANALYTICS',
        'API',
        'APPROVALS',
        'ASSISTS',
        'ASSOCIATIONS',
        'AUTO_ASSOCIATE_BY_DOMAIN',
        'AUTOMATION_JOURNEY',
        'AUTOMATION_PLATFORM',
        'AVATARS_SERVICE',
        'BATCH_UPDATE',
        'BCC_TO_CRM',
        'BEHAVIORAL_EVENTS',
        'BET_ASSIGNMENT',
        'BET_CRM_CONNECTOR',
        'BIDEN',
        'BILLING',
        'BOT',
        'BREEZE_AGENT',
        'CALCULATED',
        'CENTRAL_EXCHANGE_RATES',
        'CHATSPOT',
        'CLONE_OBJECTS',
        'COMMUNICATOR',
        'COMPANIES',
        'COMPANY_FAMILIES',
        'COMPANY_INSIGHTS',
        'CONNECTED_ACCOUNT',
        'CONTACTS',
        'CONTACTS_WEB',
        'CONTENT_MEMBERSHIP',
        'CONVERSATIONAL_ENRICHMENT',
        'CONVERSATIONS',
        'CRM_PROCESSES_PLATFORM',
        'CRM_UI',
        'CRM_UI_BULK_ACTION',
        'CUSTOMER_AGENT',
        'CUSTOMER_PORTAL',
        'DATA_ENRICHMENT',
        'DATA_QUALITY',
        'DATASET',
        'DEALS',
        'DEFAULT',
        'DELETE_OBJECTS',
        'DI_WRITE_TO_CRM',
        'EMAIL',
        'EMAIL_INBOX_IMPORT',
        'EMAIL_INTEGRATION',
        'ENGAGEMENTS',
        'EXTENSION',
        'FILE_MANAGER',
        'FLYWHEEL_PRODUCT_DATA_SYNC',
        'FORECASTING',
        'FORM',
        'FORWARD_TO_CRM',
        'GMAIL_INTEGRATION',
        'GOALS',
        'HEISENBERG',
        'HELP_DESK',
        'HELP_DESK_AI',
        'IMPORT',
        'INTEGRATION',
        'INTEGRATIONS_PLATFORM',
        'INTEGRATIONS_SYNC',
        'INTENT',
        'INTERNAL_PROCESSING',
        'LEADIN',
        'LEGAL_BASIS_REMEDIATION',
        'MARKET_SOURCING',
        'MARKETPLACE',
        'MARKETS',
        'MEETINGS',
        'MERGE_COMPANIES',
        'MERGE_CONTACTS',
        'MERGE_OBJECTS',
        'MERGE_REVERT_OBJECTS',
        'MICROAPPS',
        'MIGRATION',
        'MOBILE_ANDROID',
        'MOBILE_IOS',
        'PAYMENTS',
        'PIPELINE_SETTINGS',
        'PLAYBOOKS',
        'PORTAL_OBJECT_SYNC',
        'PORTAL_USER_ASSOCIATOR',
        'PRESENTATIONS',
        'PRIMARY_AUTOMATION',
        'PROPERTY_DEFAULT_VALUE',
        'PROPERTY_RESTORE',
        'PROPERTY_SETTINGS',
        'PROSPECTING_AGENT',
        'QUOTAS',
        'QUOTES',
        'RECYCLING_BIN',
        'RESTORE_OBJECTS',
        'REVENUE_PLATFORM',
        'SALES',
        'SALES_MESSAGES',
        'SALESFORCE',
        'SEQUENCES',
        'SETTINGS',
        'SIDEKICK',
        'SIGNALS',
        'SLACK_INTEGRATION',
        'SMART_DATA_CAPTURE',
        'SOCIAL',
        'SUCCESS',
        'TALLY',
        'TASK',
        'UNKNOWN',
        'WAL_INCREMENTAL',
        'WORK_UI',
        'WORKFLOW_CONTACT_DELETE_ACTION',
        'WORKFLOWS',
      ])
      .openapi({
        description:
          "The source of the engagement. Valid values include a wide range of sources such as 'UNKNOWN', 'IMPORT', 'API', 'FORM', and many others.",
        example: null,
      }),
    hs_engagement_source_id: z
      .string()
      .openapi({
        description: 'The unique identifier for the source of the engagement.',
        example: null,
      }),
    hs_include_description_in_reminder: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the meeting description should be included in reminders.',
        example: null,
      }),
    hs_internal_meeting_notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal notes related to the meeting.', example: null }),
    hs_meeting_body: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body or description of the meeting.', example: null }),
    hs_meeting_end_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The end time of the meeting, in ISO 8601 format.', example: null }),
    hs_meeting_external_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The external URL associated with the meeting.', example: null }),
    hs_meeting_location: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location where the meeting is held.', example: null }),
    hs_meeting_location_type: z
      .enum(['ADDRESS', 'CUSTOM', 'PHONE'])
      .exactOptional()
      .openapi({
        description:
          "The type of location for the meeting. Valid values include 'PHONE', 'ADDRESS', and 'CUSTOM'.",
        example: null,
      }),
    hs_meeting_outcome: z
      .string()
      .openapi({ description: 'The outcome of the meeting.', example: null }),
    hs_meeting_start_time: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start time of the meeting, in ISO 8601 format.',
        example: null,
      }),
    hs_meeting_title: z
      .string()
      .openapi({ description: 'The title of the meeting.', example: null }),
    hs_timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'A timestamp indicating when the meeting event was recorded, in ISO 8601 format.',
        example: null,
      }),
    hs_unique_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the meeting event.', example: null }),
    hubspot_owner_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the HubSpot owner associated with the meeting.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'hs_engagement_source',
      'hs_engagement_source_id',
      'hs_meeting_end_time',
      'hs_meeting_outcome',
      'hs_meeting_start_time',
      'hs_meeting_title',
      'hs_timestamp',
    ],
    example: null,
  })
  .openapi('ExternalCalendarMeetingEventResponseProperties')

const ExternalCalenderMeetingEventResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the calendar meeting event was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the calendar meeting event.',
        example: null,
      }),
    lastUpdatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the calendar meeting event was last updated, in ISO 8601 format.',
        example: null,
      }),
    properties: ExternalCalendarMeetingEventResponsePropertiesSchema,
  })
  .openapi({ required: ['createdAt', 'id', 'lastUpdatedAt', 'properties'], example: null })
  .openapi('ExternalCalenderMeetingEventResponse')

const ExternalLegalConsentResponseSchema = z
  .object({
    communicationTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier for the type of communication for which consent is being recorded.',
        example: null,
      }),
    consented: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the user has given consent for the communication type. It is true if consent is given, otherwise false.',
        example: null,
      }),
  })
  .openapi({ required: ['communicationTypeId', 'consented'], example: null })
  .openapi('ExternalLegalConsentResponse')

const ExternalLinkAvailabilityAndBusyTimesSchema = z
  .object({
    allUsersBusyTimes: z
      .array(ExternalUserBusyTimesSchema)
      .openapi({
        description:
          "An array of objects representing the busy times for all users associated with the meeting link. Each object includes the user's busy time ranges.",
        example: null,
      }),
    linkAvailability: ExternalLinkAvailabilitySchema.exactOptional(),
  })
  .openapi({ required: ['allUsersBusyTimes'], example: null })
  .openapi('ExternalLinkAvailabilityAndBusyTimes')

const ExternalMeetingBookingSchema = z
  .object({
    duration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer representing the duration of the meeting in minutes.',
        example: null,
      }),
    email: z
      .string()
      .openapi({
        description: 'The email address of the person booking the meeting.',
        example: null,
      }),
    firstName: z
      .string()
      .openapi({ description: 'The first name of the person booking the meeting.', example: null }),
    formFields: z
      .array(ExternalBookingFormFieldSchema)
      .openapi({
        description:
          'An array of form fields filled out by the participant, each containing a name and value.',
        example: null,
      }),
    lastName: z
      .string()
      .openapi({ description: 'The last name of the person booking the meeting.', example: null }),
    legalConsentResponses: z
      .array(ExternalLegalConsentResponseSchema)
      .openapi({
        description:
          'An array of legal consent responses, each detailing the consent given by the participant.',
        example: null,
      }),
    likelyAvailableUserIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the user IDs of those likely available for the meeting.',
        example: null,
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the locale of the person booking the meeting.',
        example: null,
      }),
    slug: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the meeting link.',
        example: null,
      }),
    startTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start time of the meeting in ISO 8601 date-time format.',
        example: null,
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the timezone of the person booking the meeting.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'duration',
      'email',
      'firstName',
      'formFields',
      'lastName',
      'legalConsentResponses',
      'likelyAvailableUserIds',
      'slug',
      'startTime',
    ],
    example: null,
  })
  .openapi('ExternalMeetingBooking')

const ExternalValidatedFormFieldSchema = z
  .object({
    fieldType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of the form field, represented as a string.',
        example: null,
      }),
    isCustom: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the form field is custom-defined.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description: 'The display label for the form field, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the form field, represented as a string.',
        example: null,
      }),
    translatedLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The translated label for the form field, represented as a string.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'The value assigned to the form field, represented as a string.',
        example: null,
      }),
    valueLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: "A label for the field's value, represented as a string.",
        example: null,
      }),
  })
  .openapi({ required: ['isCustom', 'label', 'name', 'value'], example: null })
  .openapi('ExternalValidatedFormField')

const ExternalMeetingBookingResponseSchema = z
  .object({
    bookingTimezone: z
      .string()
      .openapi({
        description: 'The timezone in which the meeting was booked, represented as a string.',
        example: null,
      }),
    calendarEventId: z
      .string()
      .openapi({
        description: 'The unique identifier for the calendar event associated with this meeting.',
        example: null,
      }),
    contactId: z
      .string()
      .openapi({
        description: 'The unique identifier for the contact associated with this meeting.',
        example: null,
      }),
    duration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The duration of the meeting in minutes, represented as an integer.',
        example: null,
      }),
    end: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The end date and time of the meeting, in ISO 8601 format.',
        example: null,
      }),
    formFields: z
      .array(ExternalValidatedFormFieldSchema)
      .openapi({
        description:
          'An array of validated form fields submitted during the booking process, each represented by an ExternalValidatedFormField object.',
        example: null,
      }),
    guestEmails: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of email addresses for the guests invited to the meeting.',
        example: null,
      }),
    isOffline: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the meeting is offline (true) or online (false).',
        example: null,
      }),
    legalConsentResponses: z
      .array(ExternalLegalConsentResponseSchema)
      .openapi({
        description:
          'An array of legal consent responses associated with the meeting, each represented by an ExternalLegalConsentResponse object.',
        example: null,
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The locale setting for the meeting, represented as a string.',
        example: null,
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The location of the meeting, represented as a string.',
        example: null,
      }),
    start: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start date and time of the meeting, in ISO 8601 format.',
        example: null,
      }),
    subject: z
      .string()
      .openapi({
        description: 'The subject or title of the meeting, represented as a string.',
        example: null,
      }),
    webConferenceMeetingId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the web conference meeting, if applicable.',
        example: null,
      }),
    webConferenceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL for the web conference associated with the meeting, if applicable.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'bookingTimezone',
      'calendarEventId',
      'contactId',
      'duration',
      'end',
      'formFields',
      'guestEmails',
      'isOffline',
      'legalConsentResponses',
      'start',
      'subject',
    ],
    example: null,
  })
  .openapi('ExternalMeetingBookingResponse')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {
        'crm.objects.appointments.sensitive.write.v2': '',
        'crm.objects.appointments.write': '',
        'crm.objects.commercepayments.write': '',
        'crm.objects.companies.highly_sensitive.write.v2': '',
        'crm.objects.companies.sensitive.write.v2': '',
        'crm.objects.companies.write': '',
        'crm.objects.contacts.highly_sensitive.write.v2': '',
        'crm.objects.contacts.sensitive.write.v2': '',
        'crm.objects.contacts.write': '',
        'crm.objects.courses.write': '',
        'crm.objects.deals.highly_sensitive.write.v2': '',
        'crm.objects.deals.sensitive.write.v2': '',
        'crm.objects.deals.write': '',
        'crm.objects.goals.write': '',
        'crm.objects.line_items.write': '',
        'crm.objects.listings.write': '',
        'crm.objects.products.write': '',
        'crm.objects.projects.highly_sensitive.write': '',
        'crm.objects.projects.sensitive.write': '',
        'crm.objects.projects.write': '',
        'crm.objects.services.write': '',
        'crm.schemas.meetings.write': '',
        'scheduler.meetings.meeting-link.read': '',
        'tickets.highly_sensitive.v2': '',
        'tickets.sensitive.v2': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postScheduler202609MeetingsCalendarRoute = createRoute({
  method: 'post',
  path: '/scheduler/2026-09/meetings/calendar',
  tags: ['Advanced'],
  summary: 'Create meeting',
  description:
    'Create a new calendar meeting event in your HubSpot account. This endpoint allows you to specify details such as the meeting title, start and end times, and associated users. The organizerUserId is required to identify the meeting organizer.',
  operationId: 'post-/scheduler/2026-09/meetings/calendar',
  request: {
    query: z.object({
      organizerUserId: z
        .string()
        .openapi({
          param: {
            name: 'organizerUserId',
            in: 'query',
            description: '',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ExternalCalendarMeetingEventCreateRequestSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ExternalCalenderMeetingEventResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.meetings.write'] },
  ],
})

export const getScheduler202609MeetingsMeetingLinksRoute = createRoute({
  method: 'get',
  path: '/scheduler/2026-09/meetings/meeting-links',
  tags: ['Basic'],
  summary: 'List Meeting Links',
  description:
    'Retrieve a list of meeting links available in the HubSpot account. This endpoint allows filtering by various criteria such as meeting name, organizer user ID, and meeting type. It supports pagination to navigate through large sets of results.',
  operationId: 'get-/scheduler/2026-09/meetings/meeting-links',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
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
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: '',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      organizerUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'organizerUserId',
            in: 'query',
            description: '',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      type: z
        .enum(['GROUP_CALENDAR', 'PERSONAL_LINK', 'ROUND_ROBIN_CALENDAR'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: '',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              example: null,
              enum: ['GROUP_CALENDAR', 'PERSONAL_LINK', 'ROUND_ROBIN_CALENDAR'],
            },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalExternalLinkMetadataSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['scheduler.meetings.meeting-link.read'] }],
})

export const postScheduler202609MeetingsMeetingLinksBookRoute = createRoute({
  method: 'post',
  path: '/scheduler/2026-09/meetings/meeting-links/book',
  tags: ['Advanced'],
  summary: 'Book Meeting',
  description:
    "Book a meeting using a specified meeting link. This endpoint allows you to create a meeting by providing necessary details such as duration, email, and start time. It is useful for scheduling meetings programmatically through HubSpot's API.",
  operationId: 'post-/scheduler/2026-09/meetings/meeting-links/book',
  request: {
    body: {
      content: { 'application/json': { schema: ExternalMeetingBookingSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ExternalMeetingBookingResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.meetings.write'] },
  ],
})

export const getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugRoute = createRoute({
  method: 'get',
  path: '/scheduler/2026-09/meetings/meeting-links/book/availability-page/{slug}',
  tags: ['Basic'],
  summary: 'Retrieve availability',
  description:
    'Retrieve the availability and busy times for a specific meeting link. This endpoint is useful for checking available slots for booking meetings based on the provided slug. It requires specifying the timezone and optionally allows adjusting the month view with an offset.',
  operationId: 'get-/scheduler/2026-09/meetings/meeting-links/book/availability-page/{slug}',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description: '',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      timezone: z
        .string()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            description: '',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      monthOffset: z
        .preprocess(
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
            name: 'monthOffset',
            in: 'query',
            description: '',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ExternalLinkAvailabilityAndBusyTimesSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['scheduler.meetings.meeting-link.read'] }],
})

export const getScheduler202609MeetingsMeetingLinksBookSlugRoute = createRoute({
  method: 'get',
  path: '/scheduler/2026-09/meetings/meeting-links/book/{slug}',
  tags: ['Basic'],
  summary: 'Retrieve booking info',
  description:
    'Retrieve detailed booking information for a specific meeting link using its slug. This endpoint provides insights into the availability and settings associated with the meeting link. It is useful for understanding the booking context and ensuring that the correct timezone is applied.',
  operationId: 'get-/scheduler/2026-09/meetings/meeting-links/book/{slug}',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description: '',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      timezone: z
        .string()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            description: '',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ExternalBookingInfoSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['scheduler.meetings.meeting-link.read'] }],
})
