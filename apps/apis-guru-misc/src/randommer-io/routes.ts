import { createRoute, z } from '@hono/zod-openapi'

const CaseTypeSchema = z
  .enum(['LowerCase', 'UpperCase', 'SentenceCase', 'TitleCase'])
  .openapi('CaseType')

const IdTypeSchema = z.enum(['VAT', 'SSN']).openapi('IdType')

const LoremTypeSchema = z.enum(['normal', 'business']).openapi('LoremType')

const NameTypeSchema = z.enum(['firstname', 'surname', 'fullname']).openapi('NameType')

const NumberValidationSchema = z
  .strictObject({ country: z.string().min(1).max(2), number: z.string().min(1).max(100) })
  .openapi({ required: ['country', 'number'] })
  .openapi('NumberValidation')

const TextActionTypeSchema = z.enum(['Transform', 'Replace']).openapi('TextActionType')

const TextDtoSchema = z
  .strictObject({ text: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('TextDto')

const TextTypeSchema = z.enum(['paragraphs', 'words']).openapi('TextType')

export const getApiCardRoute = createRoute({
  method: 'get',
  path: '/api/Card',
  tags: ['Card'],
  summary: 'Get Card',
  request: {
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiCardTypesRoute = createRoute({
  method: 'get',
  path: '/api/Card/Types',
  tags: ['Card'],
  summary: 'Get available card types',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiFinanceCountriesRoute = createRoute({
  method: 'get',
  path: '/api/Finance/Countries',
  tags: ['Finance'],
  summary: 'Get available countries',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiFinanceCryptoAddressRoute = createRoute({
  method: 'get',
  path: '/api/Finance/CryptoAddress',
  tags: ['Finance'],
  summary: 'Get crypto address',
  request: {
    query: z.object({
      cryptoType: z
        .string()
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'cryptoType',
            schema: { maxLength: 100, type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiFinanceCryptoAddressTypesRoute = createRoute({
  method: 'get',
  path: '/api/Finance/CryptoAddress/Types',
  tags: ['Finance'],
  summary: 'Get available crypto types',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiFinanceIbanCountryCodeRoute = createRoute({
  method: 'get',
  path: '/api/Finance/Iban/{countryCode}',
  tags: ['Finance'],
  summary: 'Get IBAN by countryCode',
  request: {
    params: z.object({
      countryCode: z
        .string()
        .max(2)
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'countryCode',
            required: true,
            schema: { maxLength: 2, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiFinanceVatValidatorRoute = createRoute({
  method: 'post',
  path: '/api/Finance/Vat/Validator',
  tags: ['Finance'],
  request: {
    query: z.object({
      country: z
        .string()
        .openapi({
          param: { in: 'query', name: 'country', required: true, schema: { type: 'string' } },
        }),
      vat: z
        .string()
        .openapi({
          param: { in: 'query', name: 'vat', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiMiscCulturesRoute = createRoute({
  method: 'get',
  path: '/api/Misc/Cultures',
  tags: ['Misc'],
  request: {
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiMiscRandomAddressRoute = createRoute({
  method: 'get',
  path: '/api/Misc/Random-Address',
  tags: ['Misc'],
  request: {
    query: z.object({
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      culture: z
        .string()
        .max(100)
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'culture',
            schema: { default: 'en', maxLength: 100, type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiNameRoute = createRoute({
  method: 'get',
  path: '/api/Name',
  tags: ['Name'],
  summary: 'Get name',
  request: {
    query: z.object({
      nameType: NameTypeSchema.openapi({
        param: {
          description: '',
          in: 'query',
          name: 'nameType',
          required: true,
          schema: { $ref: '#/components/schemas/NameType' },
        },
      }),
      quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(5000),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'quantity',
            required: true,
            schema: { format: 'int32', maximum: 5000, minimum: 1, type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiNameBrandNameRoute = createRoute({
  method: 'post',
  path: '/api/Name/BrandName',
  tags: ['Name'],
  summary: 'Generate brand name suggestions',
  request: {
    query: z.object({
      startingWords: z
        .string()
        .max(100)
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'startingWords',
            required: true,
            schema: { maxLength: 100, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiNameBusinessNameRoute = createRoute({
  method: 'post',
  path: '/api/Name/BusinessName',
  tags: ['Name'],
  summary: 'Get business names for a specific culture',
  request: {
    query: z.object({
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      cultureCode: z
        .string()
        .default('en_US')
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'cultureCode',
            schema: { default: 'en_US', type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiNameCulturesRoute = createRoute({
  method: 'get',
  path: '/api/Name/Cultures',
  tags: ['Name'],
  summary: 'Get available cultures',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiNameSuggestionsRoute = createRoute({
  method: 'get',
  path: '/api/Name/Suggestions',
  tags: ['Name'],
  summary: 'Get business name suggestions',
  request: {
    query: z.object({
      startingWords: z
        .string()
        .max(100)
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'startingWords',
            required: true,
            schema: { maxLength: 100, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiPhoneCountriesRoute = createRoute({
  method: 'get',
  path: '/api/Phone/Countries',
  tags: ['Phone'],
  summary: 'Get available countries',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiPhoneGenerateRoute = createRoute({
  method: 'get',
  path: '/api/Phone/Generate',
  tags: ['Phone'],
  summary: 'Get bulk telephone numbers for a country',
  request: {
    query: z.object({
      CountryCode: z
        .string()
        .max(2)
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'CountryCode',
            required: true,
            schema: { maxLength: 2, type: 'string' },
          },
        }),
      Quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'Quantity',
            required: true,
            schema: { format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiPhoneIMEIRoute = createRoute({
  method: 'get',
  path: '/api/Phone/IMEI',
  tags: ['Phone'],
  summary: 'Get bulk imeis',
  request: {
    query: z.object({
      Quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'Quantity',
            required: true,
            schema: { format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiPhoneValidateRoute = createRoute({
  method: 'get',
  path: '/api/Phone/Validate',
  tags: ['Phone'],
  summary: 'Validate a phone number',
  request: {
    query: z.object({
      telephone: z
        .string()
        .max(25)
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'telephone',
            required: true,
            schema: { maxLength: 25, type: 'string' },
          },
        }),
      CountryCode: z
        .string()
        .max(2)
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'CountryCode',
            schema: { maxLength: 2, type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiSocialNumberRoute = createRoute({
  method: 'get',
  path: '/api/SocialNumber',
  tags: ['SocialNumber'],
  summary: 'Generate a social security number',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiSocialNumberRoute = createRoute({
  method: 'post',
  path: '/api/SocialNumber',
  tags: ['SocialNumber'],
  summary: 'Validate VAT/identity numbers',
  request: {
    query: z.object({
      idType: IdTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'idType',
          required: true,
          schema: { $ref: '#/components/schemas/IdType' },
        },
      }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: NumberValidationSchema },
        'application/json': { schema: NumberValidationSchema },
        'application/json-patch+json': { schema: NumberValidationSchema },
        'text/json': { schema: NumberValidationSchema },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiTextHumanizeRoute = createRoute({
  method: 'post',
  path: '/api/Text/Humanize',
  tags: ['Text'],
  summary: 'Humanize text',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: TextDtoSchema },
        'application/json': { schema: TextDtoSchema },
        'application/json-patch+json': { schema: TextDtoSchema },
        'text/json': { schema: TextDtoSchema },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiTextLoremIpsumRoute = createRoute({
  method: 'get',
  path: '/api/Text/LoremIpsum',
  tags: ['Text'],
  summary: 'Generate lorem ipsum',
  request: {
    query: z.object({
      loremType: LoremTypeSchema.openapi({
        param: {
          description: '',
          in: 'query',
          name: 'loremType',
          required: true,
          schema: { $ref: '#/components/schemas/LoremType' },
        },
      }),
      type: TextTypeSchema.openapi({
        param: {
          description: '',
          in: 'query',
          name: 'type',
          required: true,
          schema: { $ref: '#/components/schemas/TextType' },
        },
      }),
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(2147483647),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'int32', maximum: 2147483647, minimum: 1, type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiTextPasswordRoute = createRoute({
  method: 'get',
  path: '/api/Text/Password',
  tags: ['Text'],
  summary: 'Generate password',
  request: {
    query: z.object({
      length: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(3).max(250),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'length',
            required: true,
            schema: { format: 'int32', maximum: 250, minimum: 3, type: 'integer' },
          },
        }),
      hasDigits: z
        .stringbool()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'hasDigits',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      hasUppercase: z
        .stringbool()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'hasUppercase',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      hasSpecial: z
        .stringbool()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'hasSpecial',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiTextReviewRoute = createRoute({
  method: 'post',
  path: '/api/Text/Review',
  tags: ['Text'],
  summary: 'Get reviews (max quantity=500)',
  request: {
    query: z.object({
      product: z
        .string()
        .max(50)
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'product',
            required: true,
            schema: { maxLength: 50, type: 'string' },
          },
        }),
      quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(500),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'quantity',
            required: true,
            schema: { format: 'int32', maximum: 500, minimum: 1, type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiTextTransformRoute = createRoute({
  method: 'post',
  path: '/api/Text/Transform',
  tags: ['Text'],
  summary: 'Transform text',
  request: {
    query: z.object({
      textActionType: TextActionTypeSchema.openapi({
        param: {
          description: '',
          in: 'query',
          name: 'textActionType',
          required: true,
          schema: { $ref: '#/components/schemas/TextActionType' },
        },
      }),
      caseType: CaseTypeSchema.openapi({
        param: {
          description: '',
          in: 'query',
          name: 'caseType',
          schema: { $ref: '#/components/schemas/CaseType' },
          required: false,
        },
      }).exactOptional(),
      find: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'find',
            schema: { type: 'string' },
            required: false,
          },
        }),
      replace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'replace',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Api-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter your key',
            in: 'header',
            name: 'X-Api-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: TextDtoSchema },
        'application/json': { schema: TextDtoSchema },
        'application/json-patch+json': { schema: TextDtoSchema },
        'text/json': { schema: TextDtoSchema },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})
