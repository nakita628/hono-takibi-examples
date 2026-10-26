import { createRoute, z } from '@hono/zod-openapi'

const _400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('the value of a field is either too short or too long')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('the value of a field does not conform to the expected format')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('the value of a field is invalid').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_ARRAY_LENGTH').exactOptional(),
              description: z
                .literal('the number of items in an array parameter is too small or too large')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_ARRAY_LENGTH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_400')

const _401Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('AUTHORIZATION_ERROR').exactOptional(),
              description: z.literal('This API call is not authorized').exactOptional(),
            })
            .openapi({ title: 'AUTHORIZATION_ERROR', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_401')

const _403Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('PERMISSION_DENIED').exactOptional(),
              description: z
                .literal(
                  'You do not have permission to access or perform operations on this resource.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'PERMISSION_DENIED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_403')

const _422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_NOT_FOUND').exactOptional(),
              description: z.literal('Account for this Partner ID does not exist.').exactOptional(),
            })
            .openapi({ title: 'USER_NOT_FOUND', required: [] }),
          z
            .object({
              issue: z.literal('ACCOUNT_STATUS_ERROR').exactOptional(),
              description: z.string().exactOptional(),
            })
            .openapi({ title: 'ACCOUNT_STATUS_ERROR', required: [] }),
          z
            .object({
              issue: z.literal('PRODUCT_PPCP_UNAUTHORIZED').exactOptional(),
              description: z
                .literal('Account has not been configured to use PayPal Complete Payments')
                .exactOptional(),
            })
            .openapi({ title: 'PRODUCT_PPCP_UNAUTHORIZED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_422')

const NameSchema = z
  .object({
    prefix: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "The prefix, or title, to the party's name." }),
    given_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's given, or first, name." }),
    surname: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
      }),
    middle_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.",
      }),
    suffix: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "The suffix for the party's name." }),
    full_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's full name." }),
  })
  .openapi({ title: 'Name', description: 'The name of the party.', required: [] })
  .openapi('Name')

const PersonNameTypeSchema = z
  .literal('LEGAL')
  .openapi({
    description: "The person's name type.",
    title: 'Person name type',
    'x-enumDescriptions': [
      { value: 'LEGAL', description: 'Indicates that this name is the legal name of the user.' },
    ],
  })
  .openapi('PersonNameType')

const PersonNameSchema = NameSchema.and(
  z
    .object({
      type: PersonNameTypeSchema.exactOptional().openapi({
        description: 'The type of name. Currently supported values are: `LEGAL`.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Person name',
        description: 'The name of the person.',
        required: ['type'],
      }),
  )
  .openapi('PersonName')

const PersonNameListSchema = z
  .array(PersonNameSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'The name of the person.' })
  .openapi('PersonNameList')

const CountryCodeSchema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [two-character ISO 3166-1 code](/docs/api/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode')

const AddressDetailsSchema = z
  .object({
    street_number: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The street number.' }),
    street_name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The street name. Just `Drury` in `Drury Lane`.' }),
    street_type: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The street type. For example, avenue, boulevard, road, or expressway.',
      }),
    delivery_service: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The delivery service. Post office box, bag number, or post office name.',
      }),
    building_name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'A named locations that represents the premise. Usually a building name or number or collection of buildings with a common name or number. For example, <code>Craven House</code>.',
      }),
    sub_building: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The first-order entity below a named building or location that represents the sub-premise. Usually a single building within a collection of buildings with a common name. Can be a flat, story, floor, room, or apartment.',
      }),
  })
  .openapi({
    title: 'Address Details',
    description:
      'The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.',
    required: [],
  })
  .openapi('AddressDetails')

const AddressPortableSchema = z
  .object({
    address_line_1: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.',
      }),
    address_line_2: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description: 'The second line of the address. For example, suite or apartment number.',
      }),
    address_line_3: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The third line of the address, if needed. For example, a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.',
      }),
    admin_area_4: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The neighborhood, ward, or district. Smaller than `admin_area_level_3` or `sub_locality`. Value is:<ul><li>The postal sorting code for Guernsey and many French territories, such as French Guiana.</li><li>The fine-grained administrative levels in China.</li></ul>',
      }),
    admin_area_3: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'A sub-locality, suburb, neighborhood, or district. Smaller than `admin_area_level_2`. Value is:<ul><li>Brazil. Suburb, bairro, or neighborhood.</li><li>India. Sub-locality or district. Street name information is not always available but a sub-locality or district can be a very small area.</li></ul>',
      }),
    admin_area_2: z
      .string()
      .max(120)
      .exactOptional()
      .openapi({ description: 'A city, town, or village. Smaller than `admin_area_level_1`.' }),
    admin_area_1: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A kanton.</li></ul>',
      }),
    postal_code: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({
        description:
          'The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
      }),
    country_code: CountryCodeSchema,
    address_details: AddressDetailsSchema.exactOptional(),
  })
  .openapi({
    title: 'Portable Postal Address (Medium-Grained)',
    description:
      'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
    required: ['country_code'],
  })
  .openapi('AddressPortable')

const PersonAddressTypeSchema = z
  .literal('HOME')
  .openapi({
    description: 'The address type under which the provided address is tagged.',
    title: 'Person address type',
    'x-enumDescriptions': [{ value: 'HOME', description: 'The home address of the customer.' }],
  })
  .openapi('PersonAddressType')

const PersonAddressDetailSchema = AddressPortableSchema.and(
  z
    .object({
      type: PersonAddressTypeSchema.exactOptional().openapi({
        description: 'The address type under which this is classified.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Person address detail',
        description: 'A simple postal address with coarse-grained fields.',
        required: ['type'],
      }),
  )
  .openapi('PersonAddressDetail')

const PersonAddressDetailListSchema = z
  .array(PersonAddressDetailSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'The list of addresses associated with the person.' })
  .openapi('PersonAddressDetailList')

const PhoneSchema = z
  .object({
    country_code: z
      .string()
      .regex(/^[0-9]{1,3}?$/)
      .min(1)
      .max(3)
      .openapi({
        description:
          'The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
    national_number: z
      .string()
      .regex(/^[0-9]{1,14}?$/)
      .min(1)
      .max(14)
      .openapi({
        description:
          'The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
    extension_number: z
      .string()
      .regex(/^[0-9]{1,15}?$/)
      .min(1)
      .max(15)
      .exactOptional()
      .openapi({ description: 'The extension number.' }),
  })
  .openapi({
    title: 'Phone',
    description:
      'The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
    required: ['country_code', 'national_number'],
  })
  .openapi('Phone')

const PhoneTypeSchema = z
  .enum(['FAX', 'HOME', 'MOBILE', 'OTHER', 'PAGER'])
  .openapi({
    title: 'Phone Type',
    description: 'The phone type.',
    'x-enumDescriptions': [
      { value: 'FAX', description: 'A fax machine.' },
      { value: 'HOME', description: 'A home phone.' },
      { value: 'MOBILE', description: 'A mobile phone.' },
      { value: 'OTHER', description: 'Other.' },
      { value: 'PAGER', description: 'A pager.' },
    ],
  })
  .openapi('PhoneType')

const PersonPhoneDetailSchema = PhoneSchema.and(
  z
    .object({
      type: PhoneTypeSchema.exactOptional().openapi({
        description: 'The type of phone number provided. For example, home, work, or mobile.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Phone details',
        description:
          'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
        required: ['type'],
      }),
  )
  .openapi('PersonPhoneDetail')

const PersonPhoneDetailListSchema = z
  .array(PersonPhoneDetailSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'The list of phone numbers associated with the person.' })
  .openapi('PersonPhoneDetailList')

const DateNoTimeSchema = z
  .string()
  .regex(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)
  .length(10)
  .openapi({
    description:
      'The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.',
  })
  .openapi('DateNoTime')

const BirthDetailsSchema = z
  .object({
    date_of_birth: DateNoTimeSchema.openapi({
      description:
        'date of birth, fomrat [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
  })
  .openapi({
    title: 'Birth details',
    description: 'Date of birth data provided by the user',
    required: ['date_of_birth'],
  })
  .openapi('BirthDetails')

const LabelsSchema = z.string().openapi({ description: 'A document label.' }).openapi('Labels')

const LabelsListSchema = z
  .array(LabelsSchema)
  .min(1)
  .max(50)
  .openapi({
    description:
      'The document labels. A document could be classfied to multiple categories. For example, a bill document can be classfified as `BILL DOCUMENT` and `UTILITY DOCUMENT`.',
  })
  .openapi('LabelsList')

const DateTimeSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .openapi({
    description:
      'The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>',
  })
  .openapi('DateTime')

const FileReferenceSchema = z
  .object({
    id: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The ID of the referenced file.' }),
    reference_url: z
      .url()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The reference URL for the file.' }),
    content_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [Internet Assigned Numbers Authority (IANA) media type of the file](https://www.iana.org/assignments/media-types/media-types.xhtml).',
      }),
    create_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the file was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    size: z
      .string()
      .regex(/^[0-9]+$/)
      .exactOptional()
      .openapi({ description: 'The size of the file, in bytes.' }),
  })
  .openapi({
    title: 'File Reference',
    description:
      'The file reference. Can be a file in PayPal MediaServ, PayPal DMS, or another custom store.',
    required: [],
  })
  .openapi('FileReference')

const FileReferenceListSchema = z
  .array(FileReferenceSchema)
  .min(1)
  .max(50)
  .openapi({
    description:
      'The files contained in the document. For example, a document could be represented by a front page file and a back page file, etc.',
  })
  .openapi('FileReferenceList')

const LinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT', 'OPTIONS', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription')

const LinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(1)
  .max(10)
  .openapi({ readOnly: true, description: 'The HATEOAS links.' })
  .openapi('LinkDescriptionList')

const DocumentSchema = z
  .object({
    id: z
      .string()
      .regex(/^[0-9A-Z]+$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({ description: 'The encrypted identifier for the document.', readOnly: true }),
    labels: LabelsListSchema.exactOptional(),
    name: z
      .string()
      .regex(/^[0-9A-Za-z_-]+$/)
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({ description: 'The file name.' }),
    identification_number: z
      .string()
      .regex(/^[a-zA-Z0-9-]+$/)
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The number for the document. It is the ID number if the document is `ID CARD`, the passport number if the document is `PASSPORT`, etc.',
      }),
    issue_date: DateNoTimeSchema.exactOptional().openapi({
      description: 'The issue date of the document.',
    }),
    expiry_date: DateNoTimeSchema.exactOptional().openapi({
      description: 'The expire data of the document.',
    }),
    issuing_country_code: CountryCodeSchema.exactOptional().openapi({
      description: 'The country code of the document.',
    }),
    files: FileReferenceListSchema.exactOptional(),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({ title: 'Document', description: 'The document object.', required: [] })
  .openapi('Document')

const PersonDocumentTypeSchema = z
  .enum([
    'SOCIAL_SECURITY_NUMBER',
    'EMPLOYMENT_IDENTIFICATION_NUMBER',
    'TAX_IDENTIFICATION_NUMBER',
    'PASSPORT_NUMBER',
    'PENSION_FUND_ID',
    'MEDICAL_INSURANCE_ID',
    'CNPJ',
    'CPF',
    'PAN',
    'NATIONAL_ID_CARD',
  ])
  .openapi({
    title: 'Document type',
    description: 'The type of documents.',
    'x-enumDescriptions': [
      { description: 'A social security number.', value: 'SOCIAL_SECURITY_NUMBER' },
      {
        description: 'The employee identification number.',
        value: 'EMPLOYMENT_IDENTIFICATION_NUMBER',
      },
      { description: 'A tax identification number.', value: 'TAX_IDENTIFICATION_NUMBER' },
      { description: 'The passport number.', value: 'PASSPORT_NUMBER' },
      { description: 'A pension fund ID.', value: 'PENSION_FUND_ID' },
      { description: 'The medical insurance ID.', value: 'MEDICAL_INSURANCE_ID' },
      {
        description:
          'The identification number issued to Brazilian companies by the Department of Federal Revenue of Brazil.',
        value: 'CNPJ',
      },
      {
        description: "A Brazilian individual's taxpayer registry identification number.",
        value: 'CPF',
      },
      {
        description: 'The permanent account number issued by the Indian Income Tax Department.',
        value: 'PAN',
      },
      { description: 'A National ID card number.', value: 'NATIONAL_ID_CARD' },
    ],
  })
  .openapi('PersonDocumentType')

const PersonDocumentSchema = DocumentSchema.and(
  z
    .object({
      type: PersonDocumentTypeSchema.exactOptional().openapi({
        description: 'The actual type of the document. It could be `ID_CARD`, `PASSPORT`, etc.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .any()
      .openapi({
        title: 'Person document',
        description: 'The documents associated with the person.',
      }),
  )
  .openapi('PersonDocument')

const PersonDocumentListSchema = z
  .array(PersonDocumentSchema)
  .min(0)
  .max(20)
  .openapi({
    description:
      "A person's or party's related document data collected from the customer. For example SSN, ITIN, or business registration number collected from the user. <blockquote><strong>Note:</strong> This field is not applicable for POST [/v2/customer/partner-referrals](/docs/api/partner-referrals/v2/#partner-referrals_create) API calls.</blockquote>",
  })
  .openapi('PersonDocumentList')

const PersonSchema = z
  .object({
    id: z
      .string()
      .regex(/^[0-9A-Z]+$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({ description: 'The encrypted party ID.', readOnly: true }),
    names: PersonNameListSchema.exactOptional(),
    citizenship: CountryCodeSchema.exactOptional().openapi({
      description: 'The citizenship country code of the person.',
    }),
    addresses: PersonAddressDetailListSchema.exactOptional(),
    phones: PersonPhoneDetailListSchema.exactOptional(),
    birth_details: BirthDetailsSchema.exactOptional().openapi({
      description: "The person's birth details.",
    }),
    documents: PersonDocumentListSchema.exactOptional(),
  })
  .openapi({ title: 'Person', description: 'Details of the person or party.', required: [] })
  .openapi('Person')

const IndividualOwnerTypeSchema = z
  .literal('PRIMARY')
  .openapi({
    description: 'Role of the person party played in the account.',
    title: 'Individual owner role type',
    'x-enumDescriptions': [{ value: 'PRIMARY', description: 'Primary account holder.' }],
  })
  .openapi('IndividualOwnerType')

const IndividualOwnerSchema = PersonSchema.and(
  z
    .object({
      type: IndividualOwnerTypeSchema.exactOptional().openapi({
        description: 'The actual role of this user on the account, PRIMARY/SECONDARY.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .any()
      .openapi({ title: 'Individual_owner', description: 'The individual owner of the account.' }),
  )
  .openapi('IndividualOwner')

const IndividualOwnerListSchema = z
  .array(IndividualOwnerSchema)
  .min(0)
  .max(2)
  .openapi({
    description:
      'List of owners in the account. There should be only one primary account owner which is mentioned in their role_type.',
  })
  .openapi('IndividualOwnerList')

const BusinessTypeSchema = z
  .enum([
    'ANY_OTHER_BUSINESS_ENTITY',
    'ASSOCIATION',
    'CORPORATION',
    'GENERAL_PARTNERSHIP',
    'GOVERNMENT',
    'INDIVIDUAL',
    'LIMITED_LIABILITY_PARTNERSHIP',
    'LIMITED_LIABILITY_PROPRIETORS',
    'LIMITED_LIABILITY_PRIVATE_CORPORATION',
    'LIMITED_PARTNERSHIP',
    'LIMITED_PARTNERSHIP_PRIVATE_CORPORATION',
    'NONPROFIT',
    'ONLY_BUY_OR_SEND_MONEY',
    'OTHER_CORPORATE_BODY',
    'PARTNERSHIP',
    'PRIVATE_PARTNERSHIP',
    'PROPRIETORSHIP',
    'PROPRIETORSHIP_CRAFTSMAN',
    'PROPRIETORY_COMPANY',
    'PRIVATE_CORPORATION',
    'PUBLIC_COMPANY',
    'PUBLIC_CORPORATION',
    'PUBLIC_PARTNERSHIP',
    'REGISTERED_COOPERATIVE',
  ])
  .openapi({
    description: 'The business types classified',
    title: 'Business type',
    'x-enumDescriptions': [
      { value: 'ANY_OTHER_BUSINESS_ENTITY', description: 'The any other business entity. ' },
      { value: 'ASSOCIATION', description: 'The association.' },
      { value: 'CORPORATION', description: 'The corporation.' },
      { value: 'GENERAL_PARTNERSHIP', description: 'The general partnership.' },
      { value: 'GOVERNMENT', description: 'The government.' },
      { value: 'INDIVIDUAL', description: 'The individual.' },
      { value: 'LIMITED_LIABILITY_PARTNERSHIP', description: 'The limited liability partnership.' },
      { value: 'LIMITED_LIABILITY_PROPRIETORS', description: 'The limited liability proprietors.' },
      {
        value: 'LIMITED_LIABILITY_PRIVATE_CORPORATION',
        description: 'The limited liability private corporation. ',
      },
      { value: 'LIMITED_PARTNERSHIP', description: 'The limited partnership.' },
      {
        value: 'LIMITED_PARTNERSHIP_PRIVATE_CORPORATION',
        description: 'The limited partnership private corporation.',
      },
      { value: 'NONPROFIT', description: 'The nonprofit.' },
      { value: 'ONLY_BUY_OR_SEND_MONEY', description: 'The only buy and send money.' },
      { value: 'OTHER_CORPORATE_BODY', description: 'The other corporate body.' },
      { value: 'PARTNERSHIP', description: 'The partnership.' },
      { value: 'PRIVATE_PARTNERSHIP', description: 'The private partnership.' },
      { value: 'PROPRIETORSHIP', description: 'The proprietorship.' },
      { value: 'PROPRIETORSHIP_CRAFTSMAN', description: 'The proprietorship craftsman.' },
      { value: 'PROPRIETORY_COMPANY', description: 'The proprietory company.' },
      { value: 'PRIVATE_CORPORATION', description: 'The private corporation.' },
      { value: 'PUBLIC_COMPANY', description: 'The public company.' },
      { value: 'PUBLIC_CORPORATION', description: 'The public corporation.' },
      { value: 'PUBLIC_PARTNERSHIP', description: 'The public partnership.' },
      { value: 'REGISTERED_COOPERATIVE', description: 'Registered Co-operative.' },
    ],
  })
  .openapi('BusinessType')

const BusinessSubTypeSchema = z
  .enum([
    'ASSO_TYPE_INCORPORATED',
    'ASSO_TYPE_NON_INCORPORATED',
    'GOVT_TYPE_ENTITY',
    'GOVT_TYPE_EMANATION',
    'GOVT_TYPE_ESTD_COMM',
    'GOVT_TYPE_ESTD_FC',
    'GOVT_TYPE_ESTD_ST_TR',
  ])
  .openapi({
    description: 'Sub classification of the business type',
    title: 'The business sub type.',
    'x-enumDescriptions': [
      { value: 'ASSO_TYPE_INCORPORATED', description: 'The asso type incorporated. ' },
      { value: 'ASSO_TYPE_NON_INCORPORATED', description: 'The asso type non incorporated.' },
      { value: 'GOVT_TYPE_ENTITY', description: 'The govt type entity. ' },
      { value: 'GOVT_TYPE_EMANATION', description: 'The govt type emanation. ' },
      { value: 'GOVT_TYPE_ESTD_COMM', description: 'The govt type estd comm. ' },
      { value: 'GOVT_TYPE_ESTD_FC', description: 'The govt type estd fc. ' },
      { value: 'GOVT_TYPE_ESTD_ST_TR', description: 'The govt type estd st tr. ' },
    ],
  })
  .openapi('BusinessSubType')

const BusinessTypeInfoSchema = z
  .object({
    type: BusinessTypeSchema.exactOptional().openapi({
      description: 'Type of business entity like corporation, sole prop, governmental.',
    }),
    subtype: BusinessSubTypeSchema.exactOptional().openapi({
      description: 'The sub classification of the business type.',
    }),
  })
  .openapi({
    title: 'Business type information',
    description: 'The type and subtype of the business.',
    required: [],
  })
  .openapi('BusinessTypeInfo')

const BusinessIndustrySchema = z
  .object({
    category: z
      .string()
      .regex(/^\d+$/)
      .min(1)
      .max(20)
      .openapi({
        description:
          "The customer's business category code. PayPal uses industry standard seller category codes.",
      }),
    mcc_code: z
      .string()
      .regex(/^\d+$/)
      .min(1)
      .max(20)
      .openapi({
        description:
          "The customer's business seller category code. PayPal uses industry standard seller category codes.",
      }),
    subcategory: z
      .string()
      .regex(/^\d+$/)
      .min(1)
      .max(20)
      .openapi({
        description:
          "The customer's business subcategory code. PayPal uses industry standard seller subcategory codes.",
      }),
  })
  .openapi({
    title: 'Business industry',
    description: 'The category, subcategory and MCC code of the business.',
    required: ['category', 'mcc_code', 'subcategory'],
  })
  .openapi('BusinessIndustry')

const BusinessNameSchema = z
  .object({
    business_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: 'Required. The business name of the party.' }),
  })
  .openapi({ title: 'Business Name', description: 'The business name of the party.', required: [] })
  .openapi('BusinessName')

const BusinessNameTypeSchema = z
  .enum(['DOING_BUSINESS_AS', 'LEGAL_NAME'])
  .openapi({
    description: 'Business name type',
    title: 'The business name type.',
    'x-enumDescriptions': [
      { value: 'DOING_BUSINESS_AS', description: 'The trading name of the business.' },
      { value: 'LEGAL_NAME', description: 'The legal name of the business.' },
    ],
  })
  .openapi('BusinessNameType')

const BusinessNameDetailSchema = BusinessNameSchema.and(
  z
    .object({
      type: BusinessNameTypeSchema.exactOptional().openapi({
        description: 'The type of business name. For example, trading name.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Business name',
        description: 'Name of the business provided.',
        required: ['type'],
      }),
  )
  .openapi('BusinessNameDetail')

const BusinessNameDetailListSchema = z
  .array(BusinessNameDetailSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'Name of the business.' })
  .openapi('BusinessNameDetailList')

const EmailAddressSchema = z
  .string()
  .regex(/^.+@[^"\-].+$/)
  .min(3)
  .max(254)
  .openapi({
    description:
      'The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>',
  })
  .openapi('EmailAddress')

const EmailSchema = z
  .object({
    type: z
      .literal('CUSTOMER_SERVICE')
      .openapi({
        description: 'The role of the email address.',
        'x-enumDescriptions': [
          {
            value: 'CUSTOMER_SERVICE',
            description: 'The email ID to be used to contact the customer service of the business.',
          },
        ],
      }),
    email: EmailAddressSchema,
  })
  .openapi({
    title: 'Email of a person orbusiness',
    description: 'An email address at which the person or business can be contacted.',
    required: ['email', 'type'],
  })
  .openapi('Email')

const EmailListSchema = z
  .array(EmailSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'Email addresses of the business.' })
  .openapi('EmailList')

const BusinessAddressTypeSchema = z
  .literal('WORK')
  .openapi({
    description: 'Address type under which the provided address is tagged',
    title: 'Business address type',
    'x-enumDescriptions': [{ value: 'WORK', description: 'The address of the business.' }],
  })
  .openapi('BusinessAddressType')

const BusinessAddressDetailSchema = AddressPortableSchema.and(
  z
    .object({
      type: BusinessAddressTypeSchema.exactOptional().openapi({
        description:
          'The address type under which this is classified. For example, shipping or dropoff.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Business_address_detail',
        description: 'A simple postal address with coarse-grained fields.',
        required: ['type'],
      }),
  )
  .openapi('BusinessAddressDetail')

const BusinessAddressDetailListSchema = z
  .array(BusinessAddressDetailSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'List of addresses associated with the business entity.' })
  .openapi('BusinessAddressDetailList')

const BusinessPhoneTypeSchema = z
  .enum(['CUSTOMER_SERVICE', 'BUSINESS'])
  .openapi({
    title: 'Phone type',
    description: 'The type of phone number provided. For example, home, work, or mobile.',
    'x-enumDescriptions': [
      { value: 'CUSTOMER_SERVICE', description: 'The customer service phone number.' },
      { value: 'BUSINESS', description: 'The business phone number.' },
    ],
  })
  .openapi('BusinessPhoneType')

const BusinessPhoneDetailSchema = PhoneSchema.and(
  z
    .object({
      type: BusinessPhoneTypeSchema.exactOptional().openapi({
        description: 'The type of phone number provided. For example, home, work, or mobile.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Phone details',
        description:
          'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
        required: ['type'],
      }),
  )
  .openapi('BusinessPhoneDetail')

const BusinessPhoneDetailListSchema = z
  .array(BusinessPhoneDetailSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'List of phone number associated with the business.' })
  .openapi('BusinessPhoneDetailList')

const BusinessDocumentTypeSchema = z
  .enum([
    'SOCIAL_SECURITY_NUMBER',
    'EMPLOYMENT_IDENTIFICATION_NUMBER',
    'TAX_IDENTIFICATION_NUMBER',
    'PASSPORT_NUMBER',
    'PENSION_FUND_ID',
    'MEDICAL_INSURANCE_ID',
    'CNPJ',
    'CPF',
    'PAN',
    'BUSINESS_REGISTRATION',
  ])
  .openapi({
    title: 'Document type',
    description: 'The type of documents.',
    'x-enumDescriptions': [
      { description: 'A social security number.', value: 'SOCIAL_SECURITY_NUMBER' },
      {
        description: 'The employee identification number.',
        value: 'EMPLOYMENT_IDENTIFICATION_NUMBER',
      },
      { description: 'The tax identification number.', value: 'TAX_IDENTIFICATION_NUMBER' },
      { description: 'A passport number.', value: 'PASSPORT_NUMBER' },
      { description: 'A pension fund ID.', value: 'PENSION_FUND_ID' },
      { description: 'A medical insurance ID.', value: 'MEDICAL_INSURANCE_ID' },
      {
        description:
          'The identification number issued to Brazilian companies by the Department of Federal Revenue of Brazil.',
        value: 'CNPJ',
      },
      {
        description: "A Brazilian individual's taxpayer registry identification number.",
        value: 'CPF',
      },
      {
        description: 'The Permanent account number issued by the Indian Income Tax Department.',
        value: 'PAN',
      },
      {
        description: 'A unique identifier for business entities issued by the governing agency.',
        value: 'BUSINESS_REGISTRATION',
      },
    ],
  })
  .openapi('BusinessDocumentType')

const BusinessDocumentSchema = DocumentSchema.and(
  z
    .object({
      type: BusinessDocumentTypeSchema.exactOptional().openapi({
        description: 'The actual type of the document.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .any()
      .openapi({
        title: 'Business document',
        description: 'The documents associated with the business.',
      }),
  )
  .openapi('BusinessDocument')

const BusinessDocumentListSchema = z
  .array(BusinessDocumentSchema)
  .min(0)
  .max(20)
  .openapi({
    description:
      'Business Party related Document data collected from the customer.. For example SSN, ITIN, Business registration number that were collected from the user.',
  })
  .openapi('BusinessDocumentList')

const BusinessSchema = z
  .object({
    business_type: BusinessTypeInfoSchema.exactOptional().openapi({
      description:
        'Information related to the business like the nature of business, started date etc.',
    }),
    business_industry: BusinessIndustrySchema.exactOptional().openapi({
      description:
        'Information related to the business like the nature of business, started date etc.',
    }),
    business_incorporation: z
      .object({
        incorporation_country_code: CountryCodeSchema.exactOptional().openapi({
          description: 'The incorporation country code.',
        }),
        incorporation_date: DateNoTimeSchema.exactOptional().openapi({
          description: 'date of incorporation',
        }),
      })
      .exactOptional()
      .openapi({
        description: 'Business incorporation information.',
        title: 'Business_incorporation',
        required: [],
      }),
    names: BusinessNameDetailListSchema.exactOptional(),
    emails: EmailListSchema.exactOptional(),
    website: z
      .url()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'Website of the business.' }),
    addresses: BusinessAddressDetailListSchema.exactOptional(),
    phones: BusinessPhoneDetailListSchema.exactOptional(),
    documents: BusinessDocumentListSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Business')

const PercentageSchema = z
  .string()
  .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
  .openapi({
    description:
      'The percentage, as a fixed-point, signed decimal number. For example, define a 19.99% interest rate as `19.99`.',
  })
  .openapi('Percentage')

const IndividualBeneficialOwnerSchema = PersonSchema.and(
  z
    .object({
      percentage_of_ownership: PercentageSchema.exactOptional().openapi({
        description: 'The percentage of shares this person owns in the company.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .any()
      .openapi({
        title: 'Individual_beneficial_owner',
        description: 'The individual owner of the account.',
      }),
  )
  .openapi('IndividualBeneficialOwner')

const IndividualBeneficialOwnerListSchema = z
  .array(IndividualBeneficialOwnerSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'Individual beneficial owners.' })
  .openapi('IndividualBeneficialOwnerList')

const BusinessBeneficialOwnerSchema = BusinessSchema.and(
  z
    .object({
      percentage_of_ownership: PercentageSchema.exactOptional().openapi({
        description: 'The percentage of shares this person owns in the company.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .any()
      .openapi({
        title: 'Business_beneficial_owner',
        description: 'The business beneficial owner of the account.',
      }),
  )
  .openapi('BusinessBeneficialOwner')

const BusinessBeneficialOwnerListSchema = z
  .array(BusinessBeneficialOwnerSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'Business beneficial owners.' })
  .openapi('BusinessBeneficialOwnerList')

const BeneficialOwnersSchema = z
  .object({
    individual_beneficial_owners: IndividualBeneficialOwnerListSchema.exactOptional(),
    business_beneficial_owners: BusinessBeneficialOwnerListSchema.exactOptional(),
  })
  .openapi({
    title: 'Beneficial_owners',
    description: 'Beneficial owners of the entity.',
    required: [],
  })
  .openapi('BeneficialOwners')

const CurrencyCodeSchema = z
  .string()
  .length(3)
  .openapi({
    description:
      'The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.',
  })
  .openapi('CurrencyCode')

const MoneySchema = z
  .object({
    currency_code: CurrencyCodeSchema,
    value: z
      .string()
      .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
      .max(32)
      .openapi({
        description:
          'The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/docs/integration/direct/rest/currency-codes/).',
      }),
  })
  .openapi({
    title: 'Money',
    description:
      'The currency and amount for a financial transaction, such as a balance or payment due.',
    required: ['currency_code', 'value'],
  })
  .openapi('Money')

const CurrencyRangeSchema = z
  .strictObject({
    minimum_amount: MoneySchema.exactOptional().openapi({
      description: 'The minimum inclusive amount for the range.',
    }),
    maximum_amount: MoneySchema.exactOptional().openapi({
      description: 'The maximum inclusive amount for the range.',
    }),
  })
  .openapi({
    title: 'Currency Range',
    description:
      'The currency range, from the minimum inclusive amount to the maximum inclusive amount.',
    required: [],
  })
  .openapi('CurrencyRange')

const PurposeCodeEnumSchema = z
  .enum([
    'P0104',
    'P0301',
    'P0801',
    'P0802',
    'P0803',
    'P0805',
    'P0806',
    'P0902',
    'P1004',
    'P1005',
    'P1006',
    'P1007',
    'P1008',
    'P1009',
  ])
  .openapi({
    title: 'Purpose Code',
    description:
      'The purpose code. Required only for India. For more information, see the Reserve Bank Of India web site. Value is:<ul><li><code>P0104</code>. Cross border delivery of goods and services.</li><li><code>P0301</code>. Business related travel purchase.</li><li><code>P0801</code>. Hardware consulting.</li><li><code>P0802</code>. Software consulting.</li><li><code>P0803</code>. Data processing consulting.</li><li><code>P0805</code>. Freelance journalism.</li><li><code>P0806</code>. Other information services.</li><li><code>P0902</code>. Licensing revenues.</li><li><code>P1004</code>. Legal.</li><li><code>P1005</code>. Accounting and tax.</li><li><code>P1006</code>. Business and management consultancy.</li><li><code>P1007</code>. Advertising and market research.</li><li><code>P1008</code>. Research and development.</li><li><code>P1009</code>. Architectural services.</li></ul>',
    'x-enumDescriptions': [
      { value: 'P0104', description: 'Cross border delivery of goods and services.' },
      { value: 'P0301', description: 'Business related travel purchase.' },
      { value: 'P0801', description: 'Hardware consulting.' },
      { value: 'P0802', description: 'Software consulting.' },
      { value: 'P0803', description: ' Data processing consulting.' },
      { value: 'P0805', description: 'Freelance journalism.' },
      { value: 'P0806', description: 'Other information services.' },
      { value: 'P0902', description: 'Licensing revenues.' },
      { value: 'P1004', description: 'Legal.' },
      { value: 'P1005', description: 'Accounting and tax.' },
      { value: 'P1006', description: 'Business and management consultancy.' },
      { value: 'P1007', description: 'Advertising and market research.' },
      { value: 'P1008', description: 'Research and development.' },
      { value: 'P1009', description: 'Architectural services.' },
    ],
  })
  .openapi('PurposeCodeEnum')

const BusinessEntitySchema = BusinessSchema.openapi({
  description: 'Common business information section.',
})
  .and(z.any().openapi({ description: 'Common business information section.' }))
  .and(
    z
      .object({
        beneficial_owners: BeneficialOwnersSchema.exactOptional().openapi({
          description:
            'List of beneficial owners part of the entity. They can be either a Person or a business entity.',
        }),
        annual_sales_volume_range: CurrencyRangeSchema.exactOptional().openapi({
          description: 'The range for the total annual sales volume of the business.',
        }),
        average_monthly_volume_range: CurrencyRangeSchema.exactOptional().openapi({
          description: 'The range for the average monthly volume of the business.',
        }),
        purpose_code: z
          .unknown()
          .superRefine((val, ctx) => {
            if (Array.isArray(val)) {
              {
                const Schema = PurposeCodeEnumSchema
                for (let i = 0; i < val.length; i++) {
                  if (!Schema.safeParse(val[i]).success) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              }
            }
          })
          .exactOptional()
          .openapi({ description: "The account's purpose code." }),
        business_description: z
          .string()
          .min(1)
          .max(256)
          .exactOptional()
          .openapi({
            description: 'The business goals description. For example, a mission statement.',
          }),
      })
      .openapi({ description: 'Additional business information section.', required: [] }),
  )
  .and(
    z
      .any()
      .openapi({ title: 'Business_entity', description: 'The business entity of the account.' }),
  )
  .openapi('BusinessEntity')

const AccountSchema = z
  .object({
    individual_owners: IndividualOwnerListSchema.exactOptional(),
    business_entity: BusinessEntitySchema.exactOptional().openapi({
      description: 'Business entity of the account.',
    }),
  })
  .openapi({
    title: 'Account',
    description: 'Common account object to hold the account related details of the customer.',
    required: [],
  })
  .openapi('Account')

const IdentifierSchema = z
  .strictObject({
    type: z
      .enum([
        'BANK_CODE',
        'BI_CODE',
        'BRANCH_CODE',
        'ROUTING_NUMBER_1',
        'ROUTING_NUMBER_2',
        'ROUTING_NUMBER_3',
        'SWIFT_CODE',
        'BRANCH_CODE',
        'INTERMEDIARY_SWIFT_CODE',
        'BBAN',
        'BBAN_ENCRYPTED',
        'BBAN_HMAC',
        'AGGREGATOR_YODLEE',
      ])
      .exactOptional()
      .openapi({
        description: 'The bank account ID type.',
        'x-enumDescriptions': [
          { value: 'BANK_CODE', description: 'The bank code.' },
          { value: 'BI_CODE', description: 'The BI code.' },
          { value: 'BRANCH_CODE', description: 'The bank branch code.' },
          { value: 'ROUTING_NUMBER_1', description: 'The bank routing number.' },
          { value: 'ROUTING_NUMBER_2', description: 'The bank routing number.' },
          { value: 'ROUTING_NUMBER_3', description: 'The bank routing number.' },
          { value: 'SWIFT_CODE', description: 'The bank swift code.' },
          { value: 'BRANCH_CODE', description: 'Branch code.' },
          { value: 'INTERMEDIARY_SWIFT_CODE', description: 'Swift code.' },
          { value: 'BBAN', description: 'BBAN.' },
          { value: 'BBAN_ENCRYPTED', description: 'BBAN enrypted.' },
          { value: 'BBAN_HMAC', description: 'BBAN HMAC.' },
          { value: 'AGGREGATOR_YODLEE', description: 'Aggregator Yodlee.' },
        ],
      }),
    value: z
      .string()
      .regex(/^[A-Za-z0-9-_.+\/ =]+/)
      .min(1)
      .max(125)
      .exactOptional()
      .openapi({ description: 'The value of account identifier.' }),
  })
  .openapi({
    title: 'Bank Account Identifier',
    description: 'The bank account ID. An ID with `ROUTING_NUMBER_1` is required.',
    required: [],
  })
  .openapi('Identifier')

const IdentifierListSchema = z
  .array(IdentifierSchema)
  .min(0)
  .max(20)
  .openapi({
    description:
      'An array of instrument institute attributes. Used with the account number to uniquely identify the instrument. Value is:<ul><li>For banks with IBAN information, the IBAN number.</li><li>For banks with BBAN information, the BBAN number.</li><li>For banks with both IBAN and BBAN information, the IBAN number.</li></ul>',
  })
  .openapi('IdentifierList')

const CountryCode_2Schema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [two-character ISO 3166-1 code](/docs/integration/direct/rest/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode_2')

const MandateSchema = z
  .strictObject({
    accepted: z.boolean().openapi({ description: 'Whether mandate was accepted or not.' }),
  })
  .openapi({
    title: 'Mandate',
    description: 'Seller’s consent to operate on this financial instrument.',
    required: ['accepted'],
  })
  .openapi('Mandate')

const BankSchema = z
  .strictObject({
    nick_name: z
      .string()
      .regex(/^[0-9A-Za-z_-]+$/)
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: "The user-provided short name for the user's bank account." }),
    account_number: z
      .string()
      .regex(/\d+/)
      .min(1)
      .max(50)
      .openapi({ description: 'The bank account number.' }),
    account_type: z.enum(['CHECKING', 'SAVINGS']).openapi({
      description: 'The type of bank account.',
      'x-enumDescriptions': [
        { value: 'CHECKING', description: 'Checking account.' },
        { value: 'SAVINGS', description: 'Savings account.' },
      ],
    }),
    currency_code: CurrencyCodeSchema.exactOptional().openapi({
      description: 'The primary currency code of the bank account.',
    }),
    identifiers: IdentifierListSchema.exactOptional(),
    branch_location: z
      .object({
        address_line_1: z
          .string()
          .max(300)
          .exactOptional()
          .openapi({
            description:
              'The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.',
          }),
        address_line_2: z
          .string()
          .max(300)
          .exactOptional()
          .openapi({
            description: 'The second line of the address. For example, suite or apartment number.',
          }),
        admin_area_2: z
          .string()
          .max(120)
          .exactOptional()
          .openapi({ description: 'A city, town, or village. Smaller than `admin_area_level_1`.' }),
        admin_area_1: z
          .string()
          .max(300)
          .exactOptional()
          .openapi({
            description:
              'The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A kanton.</li></ul>',
          }),
        postal_code: z
          .string()
          .max(60)
          .exactOptional()
          .openapi({
            description:
              'The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
          }),
        country_code: CountryCode_2Schema,
      })
      .exactOptional()
      .openapi({
        description:
          'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
        title: 'Portable Postal Address (Medium-Grained)',
        required: ['country_code'],
      }),
    mandate: MandateSchema.exactOptional().openapi({
      description: 'Mandate for this bank account.',
    }),
  })
  .openapi({
    title: 'Bank Account',
    description: 'The bank account information.',
    required: ['account_number', 'account_type'],
  })
  .openapi('Bank')

const BankListSchema = z
  .array(BankSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'An array of banks attached to this managed account.' })
  .openapi('BankList')

const BillingExperiencePreferenceSchema = z
  .strictObject({
    experience_id: z
      .string()
      .regex(/^[a-zA-Z0-9-]+$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({ description: 'The ID of the payment web experience profile.' }),
    billing_context_set: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the partner has already displayed the billing context to the seller.',
      }),
  })
  .openapi({
    title: 'Billing Experience Preference',
    description: 'The preference that customizes the billing experience of the customer.',
    required: [],
  })
  .openapi('BillingExperiencePreference')

const BillingAgreementSchema = z
  .strictObject({
    description: z
      .string()
      .regex(/^.+$/)
      .min(1)
      .max(125)
      .exactOptional()
      .openapi({ description: 'The billing agreement description.' }),
    billing_experience_preference: BillingExperiencePreferenceSchema.exactOptional(),
    merchant_custom_data: z
      .string()
      .regex(/^[a-zA-Z0-9-]+$/)
      .min(1)
      .max(125)
      .exactOptional()
      .openapi({ description: 'The custom data for the billing agreement.' }),
    approval_url: z
      .url()
      .min(1)
      .max(125)
      .exactOptional()
      .openapi({
        description: 'The URL to which to redirect seller to accept the billing agreement.',
      }),
    ec_token: z
      .string()
      .regex(/^[0-9A-Z_-]+$/)
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'The billing agreement token for the agreement.' }),
  })
  .openapi({
    title: 'Billing Agreement',
    description: 'The details of the billing agreement between the partner and a seller.',
    required: [],
  })
  .openapi('BillingAgreement')

const CapabilitiesSchema = z
  .enum(['PAYPAL_WALLET_VAULTING_ADVANCED', 'PAY_UPON_INVOICE', 'APPLE_PAY', 'GOOGLE_PAY'])
  .openapi({
    description:
      'Optional capabilities of the selected PayPal product for which the customer is being onboarded.',
    title: 'Capability',
    'x-enumDescriptions': [
      {
        value: 'PAYPAL_WALLET_VAULTING_ADVANCED',
        description:
          'Enables capability to save payment methods. Supported only when ADVANCED_VAULTING is requested and EXPRESS_CHECKOUT or PPCP is also requested.',
      },
      {
        value: 'PAY_UPON_INVOICE',
        description:
          'Enables Pay Upon Invoice (PUI) which is a deferred payment method that allows a buyer to buy now and pay later. Supported only when PAYMENT_METHODS is requested.',
      },
      {
        value: 'APPLE_PAY',
        description:
          'Enables Apple Pay capability. Supported only when PAYMENT_METHODS is requested.',
      },
      {
        value: 'GOOGLE_PAY',
        description:
          'Enables Google Pay capability. Supported only when PAYMENT_METHODS is requested.',
      },
    ],
  })
  .openapi('Capabilities')

const CapabilitiesListSchema = z
  .array(CapabilitiesSchema)
  .min(1)
  .max(5)
  .openapi({
    description:
      'An array of capabilities which the partner wants to enable for the selected products. Supported only when products are specified.',
  })
  .openapi('CapabilitiesList')

const ClassicApiIntegrationSchema = z
  .strictObject({})
  .openapi({
    title: 'CLASSIC API integration',
    description: 'The integration details for PayPal CLASSIC endpoints.',
  })
  .openapi('ClassicApiIntegration')

const CurrencyCode_2Schema = z
  .string()
  .length(3)
  .openapi({
    description:
      'The [three-character ISO-4217 currency code](/docs/api/reference/currency-codes/) that identifies the currency.',
  })
  .openapi('CurrencyCode_2')

const CurrencyCodeListSchema = z
  .array(CurrencyCode_2Schema)
  .min(1)
  .max(50)
  .openapi({ description: 'Requested Currencies for a Transfer Method.' })
  .openapi('CurrencyCodeList')

const TransferMethodSchema = z
  .strictObject({
    transfer_method_type: z
      .enum(['BANK_ACCOUNT', 'PAYPAL', 'VENMO', 'WIRE_ACCOUNT'])
      .exactOptional()
      .openapi({
        description: 'Transfer Method type.',
        'x-enumDescriptions': [
          { value: 'BANK_ACCOUNT', description: 'Transfer method type- Bank Account' },
          { value: 'PAYPAL', description: 'Transfer method type- Bank Account' },
          { value: 'VENMO', description: 'Transfer method type- Bank Account' },
          { value: 'WIRE_ACCOUNT', description: 'Transfer method type- Bank Account' },
        ],
      }),
    currencies: CurrencyCodeListSchema.exactOptional(),
  })
  .openapi({
    title: 'Requested transfer method and currency for a country',
    description: 'Requested transfer method and currency for a country.',
    required: [],
  })
  .openapi('TransferMethod')

const TransferMethodListSchema = z
  .array(TransferMethodSchema)
  .min(1)
  .max(50)
  .openapi({ description: 'Requested transfer method and currency for a country.' })
  .openapi('TransferMethodList')

const CountryTransferMethodCurrencySelectionSchema = z
  .strictObject({
    country: CountryCodeSchema.exactOptional().openapi({ description: 'Country.' }),
    transfer_methods: TransferMethodListSchema.exactOptional(),
  })
  .openapi({
    title: 'Requested country, transfer method and currency',
    description: 'Requested country, transfer method and currency.',
    required: [],
  })
  .openapi('CountryTransferMethodCurrencySelection')

const CountryTransferMethodCurrencySelectionListSchema = z
  .array(CountryTransferMethodCurrencySelectionSchema)
  .min(1)
  .max(50)
  .openapi({ description: 'Requested country, transfer method and currency.' })
  .openapi('CountryTransferMethodCurrencySelectionList')

const DefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(1)
  .max(10)
  .openapi({
    title: 'Links',
    description: 'An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).',
    readOnly: true,
  })
  .openapi('DefinitionsLinkDescriptionList')

const CreateReferralDataResponseSchema = z
  .object({ links: DefinitionsLinkDescriptionListSchema.exactOptional() })
  .openapi({
    title: 'Create Referral Data Response',
    description: 'The shared referral data.',
    required: [],
  })
  .openapi('CreateReferralDataResponse')

const DependentProcessSchema = z.any().openapi('DependentProcess')

const DependentProcessListSchema = z
  .array(DependentProcessSchema)
  .min(1)
  .max(5)
  .openapi({ description: 'An array of dependent processes.' })
  .openapi('DependentProcessList')

const ErrorLocationSchema = z
  .enum(['body', 'path', 'query'])
  .default('body')
  .openapi({
    description:
      'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
  })
  .openapi('ErrorLocation')

const ErrorDetailsSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: ErrorLocationSchema.exactOptional(),
    issue: z
      .string()
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.',
      }),
  })
  .openapi({
    title: 'Error Details',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['issue'],
  })
  .openapi('ErrorDetails')

const ErrorLinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(20000)
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(100)
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('ErrorLinkDescription')

const Error_400Schema = z
  .object({
    name: z.literal('INVALID_REQUEST').exactOptional(),
    message: z
      .literal('Request is not well-formed, syntactically incorrect, or violates schema.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Bad Request Error',
    description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
    required: [],
  })
  .openapi('Error_400')

const Error_401Schema = z
  .object({
    name: z.literal('AUTHENTICATION_FAILURE').exactOptional(),
    message: z
      .literal(
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unauthorized Error',
    description:
      'Authentication failed due to missing Authorization header, or invalid authentication credentials.',
    required: [],
  })
  .openapi('Error_401')

const Error_403Schema = z
  .object({
    name: z.literal('NOT_AUTHORIZED').exactOptional(),
    message: z.literal('Authorization failed due to insufficient permissions.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not Authorized Error',
    description:
      'The client is not authorized to access this resource, although it may have valid credentials. ',
    required: [],
  })
  .openapi('Error_403')

const Error_404Schema = z
  .object({
    name: z.literal('RESOURCE_NOT_FOUND').exactOptional(),
    message: z.literal('The specified resource does not exist.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not found Error',
    description:
      'The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.',
    required: [],
  })
  .openapi('Error_404')

const Error_409Schema = z
  .object({
    name: z.literal('RESOURCE_CONFLICT').exactOptional(),
    message: z
      .literal('The server has detected a conflict while processing this request.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Resource Conflict Error',
    description: 'The server has detected a conflict while processing this request.',
    required: [],
  })
  .openapi('Error_409')

const Error_415Schema = z
  .object({
    name: z.literal('UNSUPPORTED_MEDIA_TYPE').exactOptional(),
    message: z
      .literal("The server does not support the request payload's media type.")
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unsupported Media Type Error',
    description: "The server does not support the request payload's media type.",
    required: [],
  })
  .openapi('Error_415')

const Error_422Schema = z
  .object({
    name: z.literal('UNPROCESSABLE_ENTITY').exactOptional(),
    message: z
      .literal(
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unprocessable Entity Error',
    description:
      'The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.',
    required: [],
  })
  .openapi('Error_422')

const Error_500Schema = z
  .object({
    name: z.literal('INTERNAL_SERVER_ERROR').exactOptional(),
    message: z.literal('An internal server error occurred.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Internal Server Error',
    description:
      'This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.',
    example: {
      name: 'INTERNAL_SERVER_ERROR',
      message: 'An internal server error occurred.',
      debug_id: '90957fca61718',
      links: [
        {
          href: 'https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR',
          rel: 'information_link',
        },
      ],
    },
    required: [],
  })
  .openapi('Error_500')

const Error_503Schema = z
  .object({
    name: z.literal('SERVICE_UNAVAILABLE').exactOptional(),
    message: z.literal('Service Unavailable.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Service Unavailable Error',
    description:
      'The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.',
    example: {
      name: 'SERVICE_UNAVAILABLE',
      message: 'Service Unavailable.',
      debug_id: '90957fca61718',
      information_link:
        'https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE',
    },
    required: [],
  })
  .openapi('Error_503')

const ErrorDefaultSchema = z
  .xor([
    Error_400Schema,
    Error_401Schema,
    Error_403Schema,
    Error_404Schema,
    Error_409Schema,
    Error_415Schema,
    Error_422Schema,
    Error_500Schema,
    Error_503Schema,
  ])
  .openapi({ description: 'The default error response.' })
  .openapi('ErrorDefault')

const FinancialInstrumentsSchema = z
  .strictObject({ banks: BankListSchema.exactOptional() })
  .openapi({
    title: 'Financial instrument.',
    description: 'Financial instruments attached to this account.',
    required: [],
  })
  .openapi('FinancialInstruments')

const RestEndpointFeaturesEnumSchema = z
  .enum([
    'PAYOUTS',
    'PAYMENT',
    'REFUND',
    'FUTURE_PAYMENT',
    'DIRECT_PAYMENT',
    'PARTNER_FEE',
    'DELAY_FUNDS_DISBURSEMENT',
    'READ_SELLER_DISPUTE',
    'UPDATE_SELLER_DISPUTE',
    'ADVANCED_TRANSACTIONS_SEARCH',
    'SWEEP_FUNDS_EXTERNAL_SINK',
    'ACCESS_MERCHANT_INFORMATION',
    'TRACKING_SHIPMENT_READWRITE',
    'INVOICE_READ_WRITE',
    'DISPUTE_READ_BUYER',
    'UPDATE_CUSTOMER_DISPUTES',
    'VAULT',
    'BILLING_AGREEMENT',
    'WITHDRAWALS',
    'LINKED_FINANCIAL_INSTRUMENTS',
    'USER_PROFILE',
    'TRANSACTION_RISK_DATA',
    'PAYPAL_BALANCE',
    'EXCHANGE_CURRENCY',
  ])
  .openapi({
    title: 'REST Endpoint Features',
    description: 'The REST endpoint.',
    'x-enumDescriptions': [
      { value: 'PAYOUTS', description: 'Payout feature.' },
      { value: 'PAYMENT', description: 'Payment feature.' },
      { value: 'REFUND', description: 'Refund feature.' },
      { value: 'FUTURE_PAYMENT', description: 'Future Payment feature.' },
      { value: 'DIRECT_PAYMENT', description: 'Direct Payment feature.' },
      { value: 'PARTNER_FEE', description: 'Partner fee feature.' },
      { value: 'DELAY_FUNDS_DISBURSEMENT', description: 'Delay funds disbursement feature.' },
      { value: 'READ_SELLER_DISPUTE', description: 'Read seller dispute feature.' },
      { value: 'UPDATE_SELLER_DISPUTE', description: 'update seller dispute feature.' },
      {
        value: 'ADVANCED_TRANSACTIONS_SEARCH',
        description: 'Advanced transaction search feature.',
      },
      { value: 'SWEEP_FUNDS_EXTERNAL_SINK', description: 'Sweep funds external sink feature.' },
      { value: 'ACCESS_MERCHANT_INFORMATION', description: 'Access merchant information feature.' },
      { value: 'TRACKING_SHIPMENT_READWRITE', description: 'Tracking Shipment readwrite feature.' },
      { value: 'INVOICE_READ_WRITE', description: 'Invoice readwrite feature.' },
      { value: 'DISPUTE_READ_BUYER', description: 'Read the buyer disputes.' },
      { value: 'UPDATE_CUSTOMER_DISPUTES', description: 'Update the buyer disputes.' },
      { value: 'VAULT', description: 'Manage the payment methods that my customers save.' },
      {
        value: 'BILLING_AGREEMENT',
        description: 'Obtain prior approval for future payments(billing agreements).',
      },
      {
        value: 'WITHDRAWALS',
        description: 'Execute a withdrawal and fetch details of a withdrawal',
      },
      {
        value: 'LINKED_FINANCIAL_INSTRUMENTS',
        description: 'Read and update linked financial instruments information.',
      },
      { value: 'USER_PROFILE', description: 'Read and update business and user information.' },
      { value: 'TRANSACTION_RISK_DATA', description: 'Read PayPal risk data from a transaction' },
      { value: 'PAYPAL_BALANCE', description: 'Read the merchant balance amount.' },
      { value: 'EXCHANGE_CURRENCY', description: 'Read the exchange currency rate for withdraw.' },
    ],
  })
  .openapi('RestEndpointFeaturesEnum')

const RestEndpointFeaturesEnumListSchema = z
  .array(RestEndpointFeaturesEnumSchema)
  .openapi({
    description:
      'An array of features that partner can access, or use, in PayPal on behalf of the seller. The seller grants permission for these features to the partner.',
  })
  .openapi('RestEndpointFeaturesEnumList')

const FirstPartyDetailsSchema = z
  .object({
    features: RestEndpointFeaturesEnumListSchema,
    seller_nonce: z
      .string()
      .regex(/^[a-zA-Z0-9-_:]+$/)
      .min(44)
      .max(128)
      .openapi({
        description:
          'S256 - The code verifier must be high-entropy cryptographic random string with a byte length of 43-128 range.',
      }),
  })
  .openapi({
    title: 'REST First-Party Details',
    description: 'The integration details for PayPal first party REST endpoints.',
    required: ['features', 'seller_nonce'],
  })
  .openapi('FirstPartyDetails')

const RestApiIntegrationRestEndpointFeaturesEnumListSchema = z
  .array(RestEndpointFeaturesEnumSchema)
  .min(0)
  .max(20)
  .openapi({
    description:
      'An array of features that partner can access, or use, in PayPal on behalf of the seller. The seller grants permission for these features to the partner.',
  })
  .openapi('RestApiIntegrationRestEndpointFeaturesEnumList')

const SignupModeSchema = z
  .literal('VERIFY_WITH_PAYPAL')
  .openapi({
    title: 'Signup Mode',
    description: 'Signup Mode to be used for sellers for third party integration.',
    'x-enumDescriptions': [
      { value: 'VERIFY_WITH_PAYPAL', description: 'Sign up mode that uses Verify with Paypal.' },
    ],
  })
  .openapi('SignupMode')

const ThirdPartyDetailsSchema = z
  .object({
    features: RestApiIntegrationRestEndpointFeaturesEnumListSchema.exactOptional(),
    signup_mode: SignupModeSchema.exactOptional(),
    organization: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The organization to which the account will belong in the partner’s hierarchy, as a path.',
      }),
  })
  .openapi({
    title: 'REST Third-Party Details',
    description: 'The integration details for PayPal REST endpoints.',
    required: [],
  })
  .openapi('ThirdPartyDetails')

const RestApiIntegrationSchema = z
  .object({
    integration_method: z
      .enum(['BRAINTREE', 'PAYPAL', 'SDK'])
      .default('PAYPAL')
      .exactOptional()
      .openapi({
        description: 'The REST-credential integration method.',
        'x-enumDescriptions': [
          { value: 'BRAINTREE', description: 'Braintree integration method.' },
          { value: 'PAYPAL', description: 'PayPal integration method.' },
          {
            value: 'SDK',
            description: 'Indicates that merchant onboarding will be done via the Embedded SDK.',
          },
        ],
      }),
    integration_type: z.enum(['FIRST_PARTY', 'THIRD_PARTY']).openapi({
      title: 'Integration Type',
      description:
        'The type of REST-endpoint integration. To integrate with Braintree v.zero for PayPal REST endpoints, specify `third_party_details`.',
      'x-enumDescriptions': [
        { value: 'FIRST_PARTY', description: 'A first-party integration.' },
        { value: 'THIRD_PARTY', description: 'A third-party integration.' },
      ],
    }),
    first_party_details: FirstPartyDetailsSchema.exactOptional(),
    third_party_details: ThirdPartyDetailsSchema.exactOptional(),
  })
  .openapi({
    title: 'REST API Integration',
    description: 'The integration details for PayPal REST endpoints.',
    required: ['integration_type'],
  })
  .openapi('RestApiIntegration')

const IntegrationDetailsSchema = z
  .object({
    classic_api_integration: ClassicApiIntegrationSchema.exactOptional(),
    rest_api_integration: RestApiIntegrationSchema.exactOptional(),
  })
  .openapi({
    title: 'Integration Details',
    description:
      'The integration details for the partner and customer relationship. Required if `operation` is `API_INTEGRATION`.',
    required: [],
  })
  .openapi('IntegrationDetails')

const LanguageSchema = z
  .string()
  .regex(/^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}))?$/)
  .min(2)
  .max(10)
  .openapi({
    description:
      'The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/docs/integration/direct/rest/country-codes/).',
  })
  .openapi('Language')

const LegalConsentSchema = z
  .object({
    type: z
      .literal('SHARE_DATA_CONSENT')
      .openapi({
        description:
          "The type of consent. `SHARE_DATA_CONSENT` gives consent to you to share your customer's data with PayPal.",
        'x-enumDescriptions': [
          {
            value: 'SHARE_DATA_CONSENT',
            description: 'The consent given by the customer to share their data with paypal.',
          },
        ],
      }),
    granted: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the customer agreed to share this type of data. To give consent, specify `true`. To withhold consent, specify `false`.',
      }),
  })
  .openapi({
    title: 'Legal Consent',
    description: 'The customer-provided consent.',
    required: ['type', 'granted'],
  })
  .openapi('LegalConsent')

const LegalConsentListSchema = z
  .array(LegalConsentSchema)
  .min(1)
  .max(5)
  .openapi({
    description:
      'An array of all consents that the partner has received from this seller. If `SHARE_DATA_CONSENT` is not granted, PayPal does not store customer data.',
  })
  .openapi('LegalConsentList')

const OfflineOnboardingPreferenceSchema = z
  .object({})
  .openapi({
    title: 'Offline Oboarding Preference',
    description: 'The preference details for offline onboarding without UI.',
  })
  .openapi('OfflineOnboardingPreference')

const OperationSchema = z
  .object({
    operation: z
      .enum([
        'API_INTEGRATION',
        'BANK_ADDITION',
        'BILLING_AGREEMENT',
        'CONTEXTUAL_MARKETING_CONSENT',
        'OFFLINE_ONBOARDING',
        'SALESFORCE_REFERRAL',
      ])
      .openapi({
        description:
          'The operation to enable for the customer. To enable the collection of the API permissions that you require to integrate with the customer, specify `API_INTEGRATION`. `BANK_ADDITION` is supported only for the US.',
        'x-enumDescriptions': [
          {
            value: 'API_INTEGRATION',
            description:
              'The operation used by partner request permission for customers api access.',
          },
          { value: 'BANK_ADDITION', description: 'Captured state of an order.' },
          {
            value: 'BILLING_AGREEMENT',
            description: 'The operation to create a billing agreement.',
          },
          {
            value: 'CONTEXTUAL_MARKETING_CONSENT',
            description: 'The operation to create a contextual marketing consent.',
          },
          {
            value: 'OFFLINE_ONBOARDING',
            description:
              'The operation to create merchant account using referral data without UIs.',
          },
          {
            value: 'SALESFORCE_REFERRAL',
            description: 'The operation to be used to distinguish traffic coming from Salesforce.',
          },
        ],
      }),
    api_integration_preference: IntegrationDetailsSchema.exactOptional(),
    offline_onboarding_preference: OfflineOnboardingPreferenceSchema.exactOptional(),
    billing_agreement: BillingAgreementSchema.exactOptional(),
  })
  .openapi({
    title: 'Operation',
    description: 'The required operation to share data.',
    required: ['operation'],
  })
  .openapi('Operation')

const OperationListSchema = z
  .array(OperationSchema)
  .min(1)
  .max(5)
  .openapi({
    description: 'An array of operations to perform for the customer while they share their data.',
  })
  .openapi('OperationList')

const PartnerConfigOverrideSchema = z
  .strictObject({
    return_url: z
      .url()
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The URL to which to redirect the customer upon completion of the onboarding process.',
      }),
    return_url_description: z
      .string()
      .regex(/^.+$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The description of the return URL.' }),
    show_add_credit_card: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether to show an add credit card page.' }),
  })
  .openapi({
    title: 'Partner Configuration Override',
    description:
      "The preference to customize the web experience of the customer by overriding that is set at the Partner's Account.",
    required: [],
  })
  .openapi('PartnerConfigOverride')

const PayoutAttributesSchema = z
  .strictObject({
    marketplace: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `true`, specifies that the merchant or platform is offering goods or services on behalf of 3rd party sellers.',
      }),
    kyc_required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If `true`, specifies that the Kyc is required for the merchant.' }),
    country_transfer_method_currency_selection:
      CountryTransferMethodCurrencySelectionListSchema.exactOptional(),
  })
  .openapi({ title: 'Payout Attributes', description: 'Payout specific attributes.', required: [] })
  .openapi('PayoutAttributes')

const ProductSchema = z
  .enum([
    'ALIPAY',
    'BANCONTACT',
    'BLIK',
    'EPS',
    'PPCP',
    'EXPRESS_CHECKOUT',
    'PAYMENT_METHODS',
    'ADVANCED_VAULTING',
    'IDEAL',
    'MB_WAY',
    'MULTIBANCO',
    'PAYPAL_COMMERCE_PLATFORM_BUSINESS',
    'PPPLUS',
    'PRZELEWY24',
    'SATISPAY',
    'TRUSTLY',
    'WECHAT_PAY',
    'WEBSITE_PAYMENT_PRO',
    'ZETTLE',
    'PAYPAL_COMMERCE_PLATFORM_BUSINESS',
    'HYPERWALLET_PAYOUTS',
  ])
  .openapi({
    description: 'The PayPal product for which the customer is onboarded.',
    title: 'Product Name',
    'x-enumDescriptions': [
      {
        value: 'ALIPAY',
        description:
          'Alipay is a China-based payment method that allows customers to complete transactions online using their Alipay wallet. Include only if Alipay alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'BANCONTACT',
        description:
          'Bancontact is a Belgium-based payment method that allows customers to complete transactions online using their bank credentials. Include only if Bancontact alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'BLIK',
        description:
          'Blik is a Poland-based payment method that allows customers to complete transactions online using their bank credentials. Include only if Blik alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'EPS',
        description:
          'EPS is an Austria-based payment method that allows customers to complete transactions online using their bank credentials. Include only if EPS alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'PPCP',
        description:
          'PayPal Complete Payments product, which includes Express Checkout, advanced credit and debit card payments, Apple Pay, and Google Pay. Use PPCP if all features are required.',
      },
      { value: 'EXPRESS_CHECKOUT', description: 'Express checkout product.' },
      {
        value: 'PAYMENT_METHODS',
        description:
          'PayPal Alternative Payment Methods product. Include only if Apple Pay or Google Pay or both are required alone. You can use PPCP if all features are required.',
      },
      {
        value: 'ADVANCED_VAULTING',
        description:
          'PayPal Advanced Vaulting product. Must be requested along with either EXPRESS_CHECKOUT or PPCP. Include only if ADVANCED_VAULTING alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'IDEAL',
        description:
          'iDEAL is a Netherlands-based payment method that allows customers to complete transactions online using their bank credentials. Include only if iDEAL alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'MB_WAY',
        description:
          'MB Way is a Portugal-based payment method that allows customers to complete transactions online using their MB Way wallet. Include only if MB Way alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'MULTIBANCO',
        description:
          'Multibanco is a Portugal-based payment method that allows customers to complete transactions online using their bank credentials or pay in cash at a bank branch. Include only if Multibanco alone is required. You can use PPCP if all features are required.',
      },
      { value: 'PAYPAL_COMMERCE_PLATFORM_BUSINESS', description: 'PayPal PayIn product.' },
      { value: 'PPPLUS', description: 'PayPal PLUS product.' },
      {
        value: 'PRZELEWY24',
        description:
          'Przelewy24 is a Poland-based payment method that allows customers to complete transactions online. Include only if Przelewy24 alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'SATISPAY',
        description:
          'Satispay is an Italy-based payment method that allows customers to complete transactions online using their bank credentials. Include only if Satispay alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'TRUSTLY',
        description:
          'Trustly is a payment method that allows customers from (Austria (AT), Germany (DE), Denmark (DK), Estonia (EE), Spain (ES), Finland (FI), Great Britain (GB), Lithuania (LT), Latvia (LV), Netherlands (NL), Norway (NO), Sweden (SE)) to complete transactions online using their bank credentials. Include only if Trustly alone is required. You can use PPCP if all features are required.',
      },
      {
        value: 'WECHAT_PAY',
        description:
          'WeChat Pay is a China-based payment method that allows customers to complete transactions online using their WeChat Pay wallet. Include only if WeChat Pay alone is required. You can use PPCP if all features are required.',
      },
      { value: 'WEBSITE_PAYMENT_PRO', description: 'PayPal Professional product.' },
      { value: 'ZETTLE', description: 'PayPal Zettle in-person payments product.' },
      { value: 'PAYPAL_COMMERCE_PLATFORM_BUSINESS', description: 'PayPal PayIn product.' },
      { value: 'HYPERWALLET_PAYOUTS', description: 'Hyperwallet payouts product' },
    ],
  })
  .openapi('Product')

const ProductListSchema = z
  .array(ProductSchema)
  .min(1)
  .max(5)
  .openapi({
    description: 'An array of PayPal products to which the partner wants to onboard the customer.',
  })
  .openapi('ProductList')

const ReferralDataSchema = AccountSchema.openapi({
  description: 'The common account model representing the basic account structure.',
})
  .and(
    z
      .object({
        email: EmailAddressSchema.exactOptional().openapi({
          description: 'Email address of the customer used to create the account.',
        }),
        preferred_language_code: LanguageSchema.exactOptional().openapi({
          description:
            'The preferred [locale code](/docs/api/reference/locale-codes/) to use in the onboarding flow for the customer.',
        }),
        tracking_id: z
          .string()
          .min(1)
          .max(127)
          .exactOptional()
          .openapi({
            description:
              "The partner's unique identifier for this customer in their system which can be used to track user in PayPal.",
          }),
        partner_config_override: PartnerConfigOverrideSchema.exactOptional().openapi({
          description:
            'The configuration property that the partner intends to override for this onboarding request.',
        }),
        financial_instruments: FinancialInstrumentsSchema.exactOptional().openapi({
          description: "Array of financial instruments attached to the customer's account.",
        }),
        operations: OperationListSchema.exactOptional(),
        products: ProductListSchema.exactOptional(),
        capabilities: CapabilitiesListSchema.exactOptional(),
        outside_process_dependencies: DependentProcessListSchema.exactOptional(),
        legal_consents: LegalConsentListSchema.exactOptional(),
        payout_attributes: PayoutAttributesSchema.exactOptional().openapi({
          description: 'Payout specific attributes.',
        }),
        legal_country_code: CountryCodeSchema.exactOptional().openapi({
          description: 'Legal Country Code.',
        }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    title: 'Customer Data',
    description: "The customer's referral data that partners share with PayPal.",
    required: ['operations', 'legal_consents'],
  })
  .openapi('ReferralData')

const ReferralDataResponseDefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(0)
  .max(2)
  .openapi({
    title: 'Links',
    description: 'An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).',
    readOnly: true,
  })
  .openapi('ReferralDataResponseDefinitionsLinkDescriptionList')

const ReferralDataResponseSchema = z
  .object({
    partner_referral_id: z
      .string()
      .regex(/^[A-Za-z0-9+\/=]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description: "The ID to access the customer's data shared by the partner with PayPal.",
        readOnly: true,
      }),
    submitter_payer_id: z
      .string()
      .regex(/^[0-9A-Z]+$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({
        description: 'The payer ID of the partner who shared the referral data.',
        readOnly: true,
      }),
    submitter_client_id: z
      .string()
      .regex(/^[a-zA-Z0-9-_]+$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The client ID of the partner who shared the referral data. This cliend ID will be returned only when the caller is determined as an internal partner, which means the scope of the caller\'s security context only have "https://uri.paypal.com/services/customer/partner-referrals", For more information, see <a href="https://github.paypal.com/Customers-R/partnselleronbnodeserv/blob/b0a631c43e80a4dd43d34c01f479c272b3287796/src/helpers/securityContextHelpers.js#L143">Api Actor type in Typhoon service</a>.',
        readOnly: true,
      }),
    referral_data: ReferralDataSchema.exactOptional(),
    links: ReferralDataResponseDefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Referral Data Response',
    description: 'The share referral data response.',
    required: [],
  })
  .openapi('ReferralDataResponse')

const DefaultResponse = {
  description: 'The default response.',
  content: { 'application/json': { schema: ErrorDefaultSchema } },
}

const PartnerReferralIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'partner_referral_id',
      in: 'path',
      description: 'The ID of the partner-referrals data for which to show details.',
      required: true,
      schema: { type: 'string' },
    },
  })

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/services/customer/partner': 'Manage seller resources.',
        'https://uri.paypal.com/services/customer/partner-referrals/readwrite':
          'Manage external referral data with PayPal',
        'https://uri.paypal.com/services/customer/partner-referrals':
          'Manage referral data shared by Partner with PayPal. To be used by only internal apps',
      },
    },
  },
}

export const postV2CustomerPartnerReferralsRoute = createRoute({
  method: 'post',
  path: '/v2/customer/partner-referrals',
  tags: ['partner-referrals'],
  summary: 'Create partner referral',
  description:
    "Creates a partner referral that is shared by the partner or API caller. The partner referral is used to onboard the seller, and contains the seller's personal, business, financial and operations.",
  operationId: 'partner-referrals.create',
  request: {
    body: { content: { 'application/json': { schema: ReferralDataSchema } }, required: true },
  },
  responses: {
    201: {
      description:
        'A successful request returns the HTTP `201 Created` status code and a JSON response body that contains a [HATEOAS link](/docs/api/overview/#hateoas-links) to show the referral data and an `action_url` to which you redirect the customer in a browser to complete the signup process. The `partner_referral_id` token is appended to the URL.',
      content: { 'application/json': { schema: CreateReferralDataResponseSchema } },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: Error_400Schema.and(_400Schema) } },
    },
    401: {
      description: 'The API call is not authorized.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description:
        'Authorization failed due to insufficient permissions or missing scopes on the caller account.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    422: {
      description: 'The caller is not a business account or the account is closed or locked.',
      content: { 'application/json': { schema: Error_422Schema.and(_422Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/customer/partner-referrals/readwrite'] }],
})

export const getV2CustomerPartnerReferralsPartnerReferralIdRoute = createRoute({
  method: 'get',
  path: '/v2/customer/partner-referrals/{partner_referral_id}',
  tags: ['partner-referrals'],
  summary: 'Show referral data',
  description:
    'Shows details by ID for referral data that was shared by the partner or API caller.',
  operationId: 'partner-referrals.read',
  request: { params: z.object({ partner_referral_id: PartnerReferralIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows referral data.',
      content: {
        'application/json': {
          schema: ReferralDataResponseSchema,
          examples: {
            referral_data: {
              value: {
                individual_owners: [
                  {
                    names: [
                      {
                        prefix: 'Mr.',
                        given_name: 'John',
                        surname: 'Doe',
                        middle_name: 'Middle',
                        suffix: 'Jr.',
                        full_name: 'John Middle Doe Jr.',
                        type: 'LEGAL',
                      },
                    ],
                    citizenship: 'US',
                    addresses: [
                      {
                        address_line_1: 'One Washington Square',
                        address_line_2: 'Apt 123',
                        admin_area_2: 'San Jose',
                        admin_area_1: 'CA',
                        postal_code: '95112',
                        country_code: 'US',
                        type: 'HOME',
                      },
                    ],
                    phones: [
                      {
                        country_code: '1',
                        national_number: '6692468839',
                        extension_number: '1234',
                        type: 'MOBILE',
                      },
                    ],
                    birth_details: { date_of_birth: '1955-12-29' },
                    type: 'PRIMARY',
                  },
                ],
                business_entity: {
                  business_type: { type: 'INDIVIDUAL', subtype: 'ASSO_TYPE_INCORPORATED' },
                  business_industry: { category: '1004', mcc_code: '8931', subcategory: '2025' },
                  business_incorporation: {
                    incorporation_country_code: 'US',
                    incorporation_date: '1986-12-29',
                  },
                  names: [{ business_name: 'Test Enterprise', type: 'LEGAL_NAME' }],
                  emails: [{ type: 'CUSTOMER_SERVICE', email: 'customerservice@example.com' }],
                  website: 'https://mystore.testenterprises.com',
                  addresses: [
                    {
                      address_line_1: 'One Washington Square',
                      address_line_2: 'Apt 123',
                      admin_area_2: 'San Jose',
                      admin_area_1: 'CA',
                      postal_code: '95112',
                      country_code: 'US',
                      type: 'WORK',
                    },
                  ],
                  phones: [
                    {
                      country_code: '1',
                      national_number: '6692478833',
                      extension_number: '1234',
                      type: 'CUSTOMER_SERVICE',
                    },
                  ],
                  beneficial_owners: {
                    individual_beneficial_owners: [
                      {
                        names: [
                          {
                            prefix: 'Mr.',
                            given_name: 'John',
                            surname: 'Doe',
                            middle_name: 'Middle',
                            suffix: 'Jr.',
                            full_name: 'John Middle Doe Jr.',
                            type: 'LEGAL',
                          },
                        ],
                        citizenship: 'US',
                        addresses: [
                          {
                            address_line_1: 'One Washington Square',
                            address_line_2: 'Apt 123',
                            admin_area_2: 'San Jose',
                            admin_area_1: 'CA',
                            postal_code: '95112',
                            country_code: 'US',
                            type: 'HOME',
                          },
                        ],
                        phones: [
                          {
                            country_code: '1',
                            national_number: '6692468839',
                            extension_number: '1234',
                            type: 'MOBILE',
                          },
                        ],
                        birth_details: { date_of_birth: '1955-12-29' },
                        percentage_of_ownership: '50',
                      },
                    ],
                    business_beneficial_owners: [
                      {
                        business_type: { type: 'INDIVIDUAL', subtype: 'ASSO_TYPE_INCORPORATED' },
                        business_industry: {
                          category: '1004',
                          mcc_code: '8931',
                          subcategory: '2025',
                        },
                        business_incorporation: {
                          incorporation_country_code: 'US',
                          incorporation_date: '1986-12-29',
                        },
                        names: [{ business_name: 'Test Enterprise', type: 'LEGAL_NAME' }],
                        emails: [
                          { type: 'CUSTOMER_SERVICE', email: 'customerservice@example.com' },
                        ],
                        website: 'https://mystore.testenterprises.com',
                        addresses: [
                          {
                            address_line_1: 'One Washington Square',
                            address_line_2: 'Apt 123',
                            admin_area_2: 'San Jose',
                            admin_area_1: 'CA',
                            postal_code: '95112',
                            country_code: 'US',
                            type: 'WORK',
                          },
                        ],
                        phones: [
                          {
                            country_code: '1',
                            national_number: '6692478833',
                            extension_number: '1234',
                            type: 'CUSTOMER_SERVICE',
                          },
                        ],
                        percentage_of_ownership: '50',
                      },
                    ],
                  },
                  office_bearers: [
                    {
                      names: [
                        {
                          prefix: 'Mr.',
                          given_name: 'John',
                          surname: 'Doe',
                          middle_name: 'Middle',
                          suffix: 'Jr.',
                          full_name: 'John Middle Doe Jr.',
                          type: 'LEGAL',
                        },
                      ],
                      citizenship: 'US',
                      addresses: [
                        {
                          address_line_1: 'One Washington Square',
                          address_line_2: 'Apt 123',
                          admin_area_2: 'San Jose',
                          admin_area_1: 'CA',
                          postal_code: '95112',
                          country_code: 'US',
                          type: 'HOME',
                        },
                      ],
                      phones: [
                        {
                          country_code: '1',
                          national_number: '6692468839',
                          extension_number: '1234',
                          type: 'MOBILE',
                        },
                      ],
                      birth_details: { date_of_birth: '1955-12-29' },
                      role: 'DIRECTOR',
                    },
                  ],
                  annual_sales_volume_range: {
                    minimum_amount: { currency_code: 'USD', value: '10000' },
                    maximum_amount: { currency_code: 'USD', value: '50000' },
                  },
                  average_monthly_volume_range: {
                    minimum_amount: { currency_code: 'USD', value: '1000' },
                    maximum_amount: { currency_code: 'USD', value: '50000' },
                  },
                  purpose_code: 'P0104',
                },
                email: 'accountemail@example.com',
                preferred_language_code: 'en-US',
                tracking_id: 'testenterprices123122',
                partner_config_override: {
                  partner_logo_url:
                    'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg',
                  return_url: 'https://testenterprises.com/merchantonboarded',
                  return_url_description:
                    'the url to return the merchant after the paypal onboarding process.',
                  action_renewal_url: 'https://testenterprises.com/renew-exprired-url',
                  show_add_credit_card: true,
                },
                operations: [{ operation: 'BANK_ADDITION' }],
                financial_instruments: {
                  banks: [
                    {
                      nick_name: 'Bank of America',
                      account_number: '123405668293',
                      account_type: 'CHECKING',
                      currency_code: 'USD',
                      identifiers: [{ type: 'ROUTING_NUMBER_1', value: '123456789' }],
                    },
                  ],
                },
                legal_consents: [{ type: 'SHARE_DATA_CONSENT', granted: true }],
                products: ['EXPRESS_CHECKOUT'],
              },
            },
          },
        },
      },
    },
    401: {
      description: 'The API call is not authorized.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description:
        'Authorization failed due to insufficient permissions or missing scopes on the caller Account.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/customer/partner-referrals/readwrite'] },
    { Oauth2: ['https://uri.paypal.com/services/customer/partner-referrals'] },
  ],
})
