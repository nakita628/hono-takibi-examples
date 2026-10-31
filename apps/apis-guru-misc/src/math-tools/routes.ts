import { createRoute, z } from '@hono/zod-openapi'

const XMathtoolsApiSecretSecurityScheme = {
  in: 'header',
  name: 'X-Mathtools-Api-Secret',
  type: 'apiKey',
}

export const getNumbersBaseRoute = createRoute({
  method: 'get',
  path: '/numbers/base',
  tags: ['Base Conversion'],
  description: 'Convert a given number from one base to another base',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'Number to convert to the target base',
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      from: z
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
            description: 'Base of the supplied number (Optional base 10 assumed by default)',
            in: 'query',
            name: 'from',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Target base to convert to',
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersBaseBinaryRoute = createRoute({
  method: 'get',
  path: '/numbers/base/binary',
  tags: ['Base Conversion'],
  description: 'Convert a given number to binary',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'Number to convert to binary',
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      from: z
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
            description: 'Base of the supplied number (Optional base 10 assumed by default)',
            in: 'query',
            name: 'from',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersBaseHexRoute = createRoute({
  method: 'get',
  path: '/numbers/base/hex',
  tags: ['Base Conversion'],
  description: 'Convert a given number to hexadecimal',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'Number to convert to hex',
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      from: z
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
            description: 'Base of the supplied number (Optional base 10 assumed by default)',
            in: 'query',
            name: 'from',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersBaseOctalRoute = createRoute({
  method: 'get',
  path: '/numbers/base/octal',
  tags: ['Base Conversion'],
  description: 'Convert a given number to octal',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'Number to convert to octal',
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      from: z
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
            description: 'Base of the supplied number (Optional base 10 assumed by default)',
            in: 'query',
            name: 'from',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersCardinalRoute = createRoute({
  method: 'get',
  path: '/numbers/cardinal',
  tags: ['Spell'],
  description: 'Get the cardinal of the given number',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number value',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language to use',
            in: 'query',
            name: 'language',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersCurrencyRoute = createRoute({
  method: 'get',
  path: '/numbers/currency',
  tags: ['Spell'],
  description: 'Spells out the number as a currency',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to spell',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language to use',
            in: 'query',
            name: 'language',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersFactRoute = createRoute({
  method: 'get',
  path: '/numbers/fact',
  tags: ['Number Facts'],
  description: 'Get a random fact about a number',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'Number value',
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersIsCubeRoute = createRoute({
  method: 'get',
  path: '/numbers/is-cube',
  tags: ['Number Checks'],
  description: 'Checks whether a given number is a cube number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersIsPalindromeRoute = createRoute({
  method: 'get',
  path: '/numbers/is-palindrome',
  tags: ['Number Checks'],
  description: 'Checks whether a given number is a palindrome number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersIsSquareRoute = createRoute({
  method: 'get',
  path: '/numbers/is-square',
  tags: ['Number Checks'],
  description: 'Checks whether a given number is a square number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersIsTriangleRoute = createRoute({
  method: 'get',
  path: '/numbers/is-triangle',
  tags: ['Number Checks'],
  description: 'Checks whether a given number is a triangle number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersNodRoute = createRoute({
  method: 'get',
  path: '/numbers/nod',
  tags: ['Number of the day'],
  description: 'Get the number of the day for current day',
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersNumeralChineseRoute = createRoute({
  method: 'get',
  path: '/numbers/numeral/chinese',
  tags: ['Number Systems Conversion'],
  description: 'Convert base 10 representation of a given number to chinese numeral.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to convert',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersNumeralEgyptianRoute = createRoute({
  method: 'get',
  path: '/numbers/numeral/egyptian',
  tags: ['Number Systems Conversion'],
  description: 'Convert base 10 representation of a given number to egyptian numeral.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to convert',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersNumeralRomanRoute = createRoute({
  method: 'get',
  path: '/numbers/numeral/roman',
  tags: ['Number Systems Conversion'],
  description: 'Convert base 10 representation of a given number to roman numeral.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to convert',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersOrdinalRoute = createRoute({
  method: 'get',
  path: '/numbers/ordinal',
  tags: ['Spell'],
  description: 'Get the ordinal of the given number',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number value',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersPiRoute = createRoute({
  method: 'get',
  path: '/numbers/pi',
  tags: ['PI'],
  description: 'Get digits of pi (Ï€)',
  request: {
    query: z.object({
      from: z
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
            description: 'Optional start position',
            in: 'query',
            name: 'from',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      to: z
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
            description: 'Optional start position',
            in: 'query',
            name: 'to',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersPrimeFactorsRoute = createRoute({
  method: 'get',
  path: '/numbers/prime/factors',
  tags: ['Prime'],
  description: 'Get the prime factors of a given number.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to get the factors',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersPrimeIsFermatPrimeRoute = createRoute({
  method: 'get',
  path: '/numbers/prime/is-fermat-prime',
  tags: ['Prime', 'Number Checks'],
  description: 'Checks whether a given number is a known fermat prime number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersPrimeIsFibonacciPrimeRoute = createRoute({
  method: 'get',
  path: '/numbers/prime/is-fibonacci-prime',
  tags: ['Prime', 'Number Checks'],
  description: 'Checks whether a given number is a known fibonacci prime number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersPrimeIsMersennePrimeRoute = createRoute({
  method: 'get',
  path: '/numbers/prime/is-mersenne-prime',
  tags: ['Prime', 'Number Checks'],
  description: 'Checks whether a given number is a known mersenne prime number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersPrimeIsPartitionPrimeRoute = createRoute({
  method: 'get',
  path: '/numbers/prime/is-partition-prime',
  tags: ['Prime', 'Number Checks'],
  description: 'Checks whether a given number is a known partition prime number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersPrimeIsPellPrimeRoute = createRoute({
  method: 'get',
  path: '/numbers/prime/is-pell-prime',
  tags: ['Prime', 'Number Checks'],
  description: 'Checks whether a given number is a known pell prime number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersPrimeIsPerfectRoute = createRoute({
  method: 'get',
  path: '/numbers/prime/is-perfect',
  tags: ['Prime', 'Number Checks'],
  description: 'Checks whether a given number is a perfect number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersPrimeIsPrimeRoute = createRoute({
  method: 'get',
  path: '/numbers/prime/is-prime',
  tags: ['Prime', 'Number Checks'],
  description: 'Checks whether a given number is a known prime number or not.',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number to check',
            in: 'query',
            name: 'number',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})

export const getNumbersRandomRoute = createRoute({
  method: 'get',
  path: '/numbers/random',
  tags: ['Number Generation'],
  description: 'Generate random number(s)',
  request: {
    query: z.object({
      min: z
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
            description: 'Minimum Number value in the range',
            in: 'query',
            name: 'min',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      max: z
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
            description: 'Maximum Number value',
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      total: z
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
            description: 'Total number of random numbers to generate. Defaults to 1',
            in: 'query',
            name: 'total',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Mathtools-Api-Secret': [] }],
})
