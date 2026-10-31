import { createRoute, z } from '@hono/zod-openapi'

const AddressAutoCompleteSchema = z.any().openapi('AddressAutoComplete')

const CallerIDSchema = z.any().openapi('CallerID')

const ContactEnrichmentSchema = z.any().openapi('ContactEnrichment')

const EmailIDSchema = z.any().openapi('EmailID')

const IDVerificationSchema = z.any().openapi('IDVerification')

const SearchBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          Address: z
            .object({
              addressLine1: z.string().exactOptional(),
              addressLine2: z.string().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Age: z.number().exactOptional(),
          Dob: z.string().exactOptional(),
          Email: z.string().exactOptional(),
          FirstName: z.string().exactOptional(),
          LastName: z.string().exactOptional(),
          MiddleName: z.string().exactOptional(),
          PhoneNumber: z.string().exactOptional(),
        })
        .openapi({
          example: {
            Address: { addressLine1: '', addressLine2: '' },
            Age: 0,
            Dob: '',
            Email: '',
            FirstName: '',
            LastName: '',
            MiddleName: '',
            PhoneNumber: '',
          },
          required: [],
        }),
    },
  },
}

export const postAddressAutocompleteRoute = createRoute({
  method: 'post',
  path: '/address/autocomplete',
  tags: [],
  summary: 'Search',
  description:
    '###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*\n\nPerform a search:\n\n1. Add your key and key secret to the request headers.\n    + galaxy-ap-name: [Key]\n    + galaxy-ap-password: [Secret]\n    + galaxy-search-type: DevAPIAddressAutoComplete\n\n2.  Add search criteria to your request.\n    ~~~html\n            {\n                "Input":"1821 Q"\n            }\n    ~~~\n\n3.  Submit your search\n\nThe JSON request should have parts of the address.\n\n+ <code>Input</code> = null (optional, string) ... address.',
  request: {
    headers: z.object({
      'galaxy-ap-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Key',
            example: 'Key',
            in: 'header',
            name: 'galaxy-ap-name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-ap-password': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Secret',
            example: 'Secret',
            in: 'header',
            name: 'galaxy-ap-password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-search-type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. DevAPIAddressAutoComplete',
            example: 'DevAPIAddressAutoComplete',
            in: 'header',
            name: 'galaxy-search-type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ Input: z.string().exactOptional() })
            .openapi({ example: { Input: '1821 Q' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postContactEnrichRoute = createRoute({
  method: 'post',
  path: '/contact/enrich',
  tags: [],
  summary: 'Search',
  description:
    '###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*\n\nPerform a search:\n\n1. Add your key and key secret to the request headers.\n    + galaxy-ap-name: [Key]\n    + galaxy-ap-password: [Secret]\n    + galaxy-search-type: DevAPIContactEnrich\n\n2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.\n    ~~~html\n            {\n                "FirstName": "John",\n                "MiddleName": "T",\n                "LastName": "Lawrence",\n                "Dob":"",\n                "Age": 0,\n                "Address": {\n                    "addressLine1":"123 Q Street",\n                    "addressLine2":"Sacramento, CA"\n                },\n                "PhoneNumber":"",\n                "Email":""\n            }\n    ~~~\n\n3.  Submit your search\n\nA complete list of JSON request properties follows.\n\n+ <code>FirstName</code>= null (optional, string) ... First name.\n\n+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.\n\n+ <code>LastName</code> = null (optional, string) ... Last name.\n\n+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).\n\n+ <code>Age</code> = null (optional, int) ... Age.\n\n+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.\n    + <code>Members</code>\n        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).\n        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).\n\n+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).\n\n+ <code>Email</code> = null (optional, string) ... E-mail address.',
  request: {
    headers: z.object({
      'galaxy-ap-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Key',
            example: 'Key',
            in: 'header',
            name: 'galaxy-ap-name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-ap-password': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Secret',
            example: 'Secret',
            in: 'header',
            name: 'galaxy-ap-password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-search-type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. DevAPIContactEnrich',
            example: 'DevAPIContactEnrich',
            in: 'header',
            name: 'galaxy-search-type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: SearchBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postEmailEnrichRoute = createRoute({
  method: 'post',
  path: '/email/enrich',
  tags: [],
  summary: 'Search',
  description:
    '###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*\n\nPerform a search:\n\n1. Add your Access Profile username and password to the request headers.\n    + galaxy-ap-name: [Key]\n    + galaxy-ap-password: [Secret]\n    + galaxy-search-type: DevAPIEmailID\n\n2.  Add search criteria to your request.\n    ~~~html\n            {\n                "Email":"johnsmith@somedomain"\n            }\n    ~~~\n\n3.  Submit your search\n\nThe JSON request should have an email.\n\n+ <code>Email</code> = null (optional, string) ... E-mail address.',
  request: {
    headers: z.object({
      'galaxy-ap-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Key',
            example: 'Key',
            in: 'header',
            name: 'galaxy-ap-name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-ap-password': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Secret',
            example: 'Secret',
            in: 'header',
            name: 'galaxy-ap-password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-search-type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. DevAPIEmailID',
            example: 'DevAPIEmailID',
            in: 'header',
            name: 'galaxy-search-type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ Email: z.string().exactOptional() })
            .openapi({ example: { Email: '' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postIdentityVerifyIdRoute = createRoute({
  method: 'post',
  path: '/identity/verify_id',
  tags: [],
  summary: 'Search',
  description:
    '###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*\n\nPerform a search:\n\n1. Add your key and key secret to the request headers.\n    + galaxy-ap-name: [Key]\n    + galaxy-ap-password: [Secret]\n    + galaxy-search-type: DevAPIIDVerification\n\n2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.\n    ~~~html\n            {\n                "FirstName": "John",\n                "MiddleName": "T",\n                "LastName": "Lawrence",\n                "Dob":"",\n                "Age": 0,\n                "Address": {\n                    "addressLine1":"123 Q Street, Unit 102",\n                    "addressLine2":"Sacramento, CA"\n                },\n                "PhoneNumber":"",\n                "Email":""\n            }\n    ~~~\n\n3.  Submit your search\n\nA complete list of JSON request properties follows.\n\n+ <code>FirstName</code>= null (optional, string) ... First name.\n\n+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.\n\n+ <code>LastName</code> = null (optional, string) ... Last name.\n\n+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).\n\n+ <code>Age</code> = null (optional, int) ... Age.\n\n+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.\n    + <code>Members</code>\n        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).\n        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).\n\n+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).\n\n+ <code>Email</code> = null (optional, string) ... E-mail address.',
  operationId: 'Search',
  request: {
    headers: z.object({
      'galaxy-ap-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Key',
            example: 'Key',
            in: 'header',
            name: 'galaxy-ap-name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-ap-password': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Secret',
            example: 'Secret',
            in: 'header',
            name: 'galaxy-ap-password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-search-type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. DevAPIIDVerification',
            example: 'DevAPIIDVerification',
            in: 'header',
            name: 'galaxy-search-type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: SearchBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPhoneEnrichRoute = createRoute({
  method: 'post',
  path: '/phone/enrich',
  tags: [],
  summary: 'Search',
  description:
    '###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*\n\nPerform a search:\n\n1. Add your key and key secret to the request headers.\n    + galaxy-ap-name: [Key]\n    + galaxy-ap-password: [Secret]\n    + galaxy-search-type: DevAPICallerID\n\n2.  Add search criteria to your request.\n    ~~~html\n            {\n                "Phone":"(123) 456-7890"\n            }\n    ~~~\n\n3.  Submit your search\n\nThe JSON request should have a phone number.\n\n+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).',
  request: {
    headers: z.object({
      'galaxy-ap-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Key',
            example: 'Key',
            in: 'header',
            name: 'galaxy-ap-name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-ap-password': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. Secret',
            example: 'Secret',
            in: 'header',
            name: 'galaxy-ap-password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'galaxy-search-type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. DevAPICallerID',
            example: 'DevAPICallerID',
            in: 'header',
            name: 'galaxy-search-type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ Phone: z.string().exactOptional() })
            .openapi({ example: { Phone: '' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})
