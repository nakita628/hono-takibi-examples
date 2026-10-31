import { createRoute, z } from '@hono/zod-openapi'

const AboutSchema = z
  .object({
    apiReleaseDateIso8601: z
      .string()
      .exactOptional()
      .openapi({ description: '**The release date of this API, ISO 8601 format.**\n' }),
    apiVersion: z
      .object({
        majorNumber: z
          .int()
          .exactOptional()
          .openapi({ description: 'This API version major number.', xml: { attribute: true } }),
        minorNumber: z
          .int()
          .exactOptional()
          .openapi({ description: 'This API version minor number.', xml: { attribute: true } }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    availableLanguagesIso639_1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**The list of available languages.**\n\nEach language is identified by its ISO 639-1, two-letter code.\n\nThe list elements are comma-separated and sorted in ascending order.\n',
      }),
  })
  .openapi({ description: '**This API version number**.\n', required: [] })
  .openapi('About')

const EcSchema = z
  .object({
    alphabetSequence: z
      .array(
        z
          .object({
            char: z
              .string()
              .exactOptional()
              .openapi({ description: 'The n-th character.', xml: { attribute: true } }),
            l33tchar: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The n-th character after the l33t transformation.',
                xml: { attribute: true },
              }),
            penalty: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The penalty applied to this character if it is part of an alphabet sequence.\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
                xml: { attribute: true },
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          '**The penalty applied to each character that has been found to be part of an alphabet sequence.**\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
      }),
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: '**This API version number.**\n' }),
    detectedKeyboard: z
      .string()
      .exactOptional()
      .openapi({ description: '**The detected keyboard, QWERTY or Dvorak.**\n' }),
    efficiency: z
      .number()
      .exactOptional()
      .openapi({
        description:
          '**The ratio entropy / idealEntropy.**\n\nIt is a float number in the range [0, 1].\n',
      }),
    entropy: z
      .number()
      .exactOptional()
      .openapi({
        description:
          '**The entropy calculated for the input password.**\n\nIt is measured in bits.\n',
      }),
    entropyDistribution: z
      .array(
        z
          .object({
            char: z
              .string()
              .exactOptional()
              .openapi({ description: 'The n-th character.', xml: { attribute: true } }),
            l33tchar: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The n-th character after the l33t transformation.',
                xml: { attribute: true },
              }),
            percentage: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The amount of entropy contributed by this character, expressed as percentage of the total.',
                xml: { attribute: true },
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          '**The distribution of the calculated entropy among the password characters.**\n',
      }),
    idealEntropy: z
      .number()
      .exactOptional()
      .openapi({
        description:
          '**The Shannon entropy.**\n\nThe Shannon entropy is the entropy calculated if no penalizations - words, number sequence, alphabet sequence, etc - were found in the password.\n\nIt is measured in bits.\n',
      }),
    keyboardSequence: z
      .array(
        z
          .object({
            char: z
              .string()
              .exactOptional()
              .openapi({ description: 'The n-th character.', xml: { attribute: true } }),
            l33tchar: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The n-th character after the l33t transformation.',
                xml: { attribute: true },
              }),
            penalty: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The penalty applied to this character if it is part of a keyboard sequence.\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
                xml: { attribute: true },
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          '**The penalty applied to each character that has been found to be part of a keyboard sequence.**\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
      }),
    l33tPassword: z
      .string()
      .exactOptional()
      .openapi({ description: 'The analyzed password after the l33t substitution.' }),
    nonUniformEntropyDistributionPenalty: z
      .number()
      .exactOptional()
      .openapi({
        description:
          '**The penalty applied to the whole password because of irregular entropy distribution.**\n\nThis penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
      }),
    numberSequence: z
      .array(
        z
          .object({
            char: z
              .string()
              .exactOptional()
              .openapi({ description: 'The n-th character.', xml: { attribute: true } }),
            l33tchar: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The n-th character after the l33t transformation.',
                xml: { attribute: true },
              }),
            penalty: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The penalty applied to this character if it is part of a number sequence.\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
                xml: { attribute: true },
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          '**The penalty applied to each character that has been found to be part of a number sequence.**\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
      }),
    password: z.string().exactOptional().openapi({ description: 'The analyzed password.' }),
    passwordLength: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of characters the password has.' }),
    penalty: z
      .number()
      .exactOptional()
      .openapi({
        description:
          '**The penalty applied to each character that has been found to be part of a word, number sequence, alphabet sequence, etc.**\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n\nIts value is equal to the value of the input parameter *penalty*.\n',
      }),
    repeatedChars: z
      .array(
        z
          .object({
            char: z
              .string()
              .exactOptional()
              .openapi({ description: 'The n-th character.', xml: { attribute: true } }),
            l33tchar: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The n-th character after the l33t transformation.',
                xml: { attribute: true },
              }),
            penalty: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The penalty applied to this character if it is repeated.\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
                xml: { attribute: true },
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          '**The penalty applied to each character that are repeated**\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.          \n',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description: '**The identifier of the request that corresponds to this response.**\n',
      }),
    requestTimestamp: z
      .number()
      .exactOptional()
      .openapi({
        description:
          '**The timestamp for this response.**\n\nMilliseconds from the epoch of 1970-01-01T00:00:00Z.\n',
      }),
    summary: z
      .array(
        z
          .string()
          .openapi({
            description:
              '**A human-readable summary of the password analysis.**\n\nThis human readable summary is not intended to be parsed.\n',
          }),
      )
      .exactOptional(),
    total: z
      .array(
        z
          .object({
            char: z
              .string()
              .exactOptional()
              .openapi({ description: 'The n-th character.', xml: { attribute: true } }),
            l33tchar: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The n-th character after the l33t transformation.',
                xml: { attribute: true },
              }),
            penalty: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The total penalty applied to each character.\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.                \n',
                xml: { attribute: true },
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          '**The total penalty applied to each character.**\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
      }),
    words: z
      .array(
        z
          .object({
            char: z
              .string()
              .exactOptional()
              .openapi({ description: 'The n-th character.', xml: { attribute: true } }),
            l33tchar: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The n-th character after the l33t transformation.',
                xml: { attribute: true },
              }),
            penalty: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The penalty applied to this character if it is part of a word.\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.                \n',
                xml: { attribute: true },
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          '**The penalty applied to each character that has been found to be part of a word.**\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('Ec')

export const getAboutRoute = createRoute({
  method: 'get',
  path: '/about',
  summary:
    'Metadata about this API&#58; version number, release date and available languages.\n\nMetadata requests are NOT billed.\n',
  request: {
    query: z.object({
      outputFormat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**The format of the returned metadata.**\n\nAllowed values are *json*, *xml* and *yaml*.\n\nThe default value is *xml*.\n',
            in: 'query',
            name: 'outputFormat',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        '**The metadata about this API&#58; version number, release date and available languages.**\n',
      content: {
        'application/json': { schema: AboutSchema },
        'application/x-yaml': { schema: AboutSchema },
        'application/xml': { schema: AboutSchema },
      },
    },
    400: { description: '**At least one error was found in the request parameters.**\n' },
    405: { description: '**HTTP method POST is not allowed.**\n' },
    500: { description: '**Unexpected server error.**                \n' },
  },
})

export const getEcRoute = createRoute({
  method: 'get',
  path: '/ec',
  summary:
    'The entropy calculator - alias ec -, analyzes a password and calculates its entropy.\n\nEntropy calculator requests are billed.\n',
  request: {
    query: z.object({
      password: z
        .string()
        .openapi({
          param: {
            description:
              "**The password to be analyzed.**\n\nMinimum length is 4 characters; maximum length is 128 characters.\n\nBeware that certain characters like '&#35;', '&#61;' or '&#63;' must be properly encoded.\n\nFor more information about this issue, please refer to RFC 3986 (\"*Uniform Resource Identifier (URI): Generic Syntax*\"), sections 2.1, 2.2 and 2.4.\n",
            in: 'query',
            name: 'password',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputFormat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**The format of the returned analysis.**\n\nAllowed values are *json*, *xml* and *yaml*.\n\nThe default value is *xml*.\n',
            in: 'query',
            name: 'outputFormat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      penalty: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "**The penalty applied to each character that is part of a word, number sequence, alphabet sequence, etc.**\n\nThe penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.\n\nThe character used as decimal separator is always '&#46;'. Hence, a parameter value like *0,33* would be illegal.\n\nThe default value is *0.25*.\n",
            in: 'query',
            name: 'penalty',
            required: false,
            schema: { type: 'number' },
          },
        }),
      reqId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**An identifier for this request.**\n\nThe request identifier is a string that must match the regular expression */(?i)^[a-z0-9]{8,16}$/*.\n\nThis identifier is echoed in the returned response. Its value has no effect on the password analysis.\n\nIf this parameter is unset, a randomly generated identifier will be automatically assigned to this request.\n',
            in: 'query',
            name: 'reqId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The password analysis, including the calculated entropy.',
      content: {
        'application/json': { schema: EcSchema },
        'application/x-yaml': { schema: EcSchema },
        'application/xml': { schema: EcSchema },
      },
    },
    400: { description: '**At least one error was found in the request parameters.**\n' },
    405: { description: '**HTTP method POST is not allowed.**\n' },
    500: { description: '**Unexpected server error.**\n' },
  },
})
