import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    countryCode: z.string().exactOptional(),
    geonameID: z.int32().exactOptional(),
    ipaddress: z.string().exactOptional(),
    nationality: z.string().exactOptional(),
    phoneNumber: z.string().exactOptional(),
    state: z.string().exactOptional(),
    streetAddress: z.string().exactOptional(),
    zipCode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Address')

const PersonSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    age: z.int32().exactOptional(),
    bloodType: z.string().exactOptional(),
    creditCardNumber: z.string().exactOptional(),
    creditScore: z.int32().exactOptional(),
    dateOfBirth: z.string().exactOptional(),
    email: z.string().exactOptional(),
    eyeColor: z.string().exactOptional(),
    gender: z.string().exactOptional(),
    gpa: z.float64().exactOptional(),
    hasChildren: z.boolean().exactOptional(),
    hasDegree: z.boolean().exactOptional(),
    height: z.float64().exactOptional(),
    incomeInUSD: z.int32().exactOptional(),
    job: z.string().exactOptional(),
    married: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    politicalLeaning: z.float64().exactOptional(),
    religion: z.string().exactOptional(),
    username: z.string().exactOptional(),
    weight: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Person')

const LifestorySchema = z
  .object({ lifestory: z.string().exactOptional(), person: PersonSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Lifestory')

export const getApiAddressRoute = createRoute({
  method: 'get',
  path: '/api/address',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'generateAddress',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: AddressSchema } } } },
})

export const getApiAddressIndexRoute = createRoute({
  method: 'get',
  path: '/api/address/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'generateAddress_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: AddressSchema } } } },
})

export const getApiLifestoryRoute = createRoute({
  method: 'get',
  path: '/api/lifestory',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'generateLifeStory_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: LifestorySchema } } } },
})

export const getApiLifestoryIndexRoute = createRoute({
  method: 'get',
  path: '/api/lifestory/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'generateLifeStory',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: LifestorySchema } } } },
})

export const getApiPersonRoute = createRoute({
  method: 'get',
  path: '/api/person',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'getPerson_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: PersonSchema } } } },
})

export const getApiPersonIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'getPerson',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: PersonSchema } } } },
})

export const getApiPersonAgeRoute = createRoute({
  method: 'get',
  path: '/api/person/age',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'age_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.int32() } } } },
})

export const getApiPersonAgeIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/age/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'age',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.int32() } } } },
})

export const getApiPersonBloodtypeRoute = createRoute({
  method: 'get',
  path: '/api/person/bloodtype',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'bloodtype_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonBloodtypeIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/bloodtype/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'bloodtype',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonCreditcardnumberRoute = createRoute({
  method: 'get',
  path: '/api/person/creditcardnumber',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'creditcardnumber',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonCreditcardnumberIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/creditcardnumber/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'creditcardnumber_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonCreditscoreRoute = createRoute({
  method: 'get',
  path: '/api/person/creditscore',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'creditscore_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.int32() } } } },
})

export const getApiPersonCreditscoreIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/creditscore/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'creditscore',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.int32() } } } },
})

export const getApiPersonEmailRoute = createRoute({
  method: 'get',
  path: '/api/person/email',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'email',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonEmailIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/email/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'email_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonEyecolorRoute = createRoute({
  method: 'get',
  path: '/api/person/eyecolor',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'eyecolor_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonEyecolorIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/eyecolor/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'eyecolor',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonGenderRoute = createRoute({
  method: 'get',
  path: '/api/person/gender',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'gender',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonGenderIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/gender/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'gender_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonGpaRoute = createRoute({
  method: 'get',
  path: '/api/person/gpa',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'gpa',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.float64() } } } },
})

export const getApiPersonGpaIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/gpa/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'gpa_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.float64() } } } },
})

export const getApiPersonHaschildrenRoute = createRoute({
  method: 'get',
  path: '/api/person/haschildren',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'haschildren_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } } },
})

export const getApiPersonHaschildrenIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/haschildren/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'haschildren',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } } },
})

export const getApiPersonHasdegreeRoute = createRoute({
  method: 'get',
  path: '/api/person/hasdegree',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'hasdegree',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } } },
})

export const getApiPersonHasdegreeIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/hasdegree/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'hasdegree_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } } },
})

export const getApiPersonHeightRoute = createRoute({
  method: 'get',
  path: '/api/person/height',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'height',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.float64() } } } },
})

export const getApiPersonHeightIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/height/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'height_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.float64() } } } },
})

export const getApiPersonIncomeRoute = createRoute({
  method: 'get',
  path: '/api/person/income',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'income',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.int32() } } } },
})

export const getApiPersonIncomeIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/income/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'income_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.int32() } } } },
})

export const getApiPersonJobRoute = createRoute({
  method: 'get',
  path: '/api/person/job',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'job',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonJobIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/job/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'job_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonMaritalstatusRoute = createRoute({
  method: 'get',
  path: '/api/person/maritalstatus',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'maritalstatus_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } } },
})

export const getApiPersonMaritalstatusIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/maritalstatus/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'maritalstatus',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } } },
})

export const getApiPersonNameRoute = createRoute({
  method: 'get',
  path: '/api/person/name',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'name_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonNameIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/name/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'name',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonPoliticalleaningRoute = createRoute({
  method: 'get',
  path: '/api/person/politicalleaning',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'politicalLeaning',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.float64() } } } },
})

export const getApiPersonPoliticalleaningIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/politicalleaning/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'politicalLeaning_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.float64() } } } },
})

export const getApiPersonReligionRoute = createRoute({
  method: 'get',
  path: '/api/person/religion',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'religion_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonReligionIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/religion/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'religion',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonUsernameRoute = createRoute({
  method: 'get',
  path: '/api/person/username',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'username_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonUsernameIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/username/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'username',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.string() } } } },
})

export const getApiPersonWeightRoute = createRoute({
  method: 'get',
  path: '/api/person/weight',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'weight',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.float64() } } } },
})

export const getApiPersonWeightIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/weight/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'weight_1',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.float64() } } } },
})

export const getApiPersonNumberRoute = createRoute({
  method: 'get',
  path: '/api/person/{number}',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'getCompressedPerson_1',
  request: {
    params: z.object({
      number: z
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
            name: 'number',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(z.string()) } } },
  },
})

export const getApiPersonNumberIndexRoute = createRoute({
  method: 'get',
  path: '/api/person/{number}/',
  tags: ['peoplegeneratorapi-application'],
  operationId: 'getCompressedPerson',
  request: {
    params: z.object({
      number: z
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
            name: 'number',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(z.string()) } } },
  },
})
