import { createRoute, z } from '@hono/zod-openapi'

const AdvSecurityTokenSecurityScheme = {
  description:
    'The Adv-Security-Token header parameter is generated via the Dashboard on advicement.io website.',
  in: 'header',
  name: 'ADVICEment API Key',
  type: 'apiKey',
}

const XRapidAPIKeySecurityScheme = {
  description:
    'The X-RapidAPI-Key header parameter can be found in the security section of your account on rapidapi.com',
  in: 'header',
  name: 'RapidAPI.com API Key',
  type: 'apiKey',
}

export const postTemplatesTemplateTokenCompileRoute = createRoute({
  method: 'post',
  path: '/templates/{template-token}/compile',
  tags: ['PDF Generation'],
  summary: 'Compile New Document PDF',
  description: 'Compile a PDF document from a specific template',
  operationId: 'compile',
  request: {
    params: z.object({
      'template-token': z
        .string()
        .openapi({
          param: {
            description:
              'The template-token is available in your template settings after publishing your template.',
            in: 'path',
            name: 'template-token',
            required: true,
            schema: { example: '7a582350acb835ed', type: 'string' },
          },
          example: '7a582350acb835ed',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Should be set to "application/json"',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', example: 'application/json', type: 'string' },
          },
          example: 'application/json',
        }),
    }),
    query: z.object({
      'doc-url-expires-in': z
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
              'The doc-url-expires-in is a numerical parameter which takes integers and describes after how many seconds the provided URL is available to download the document.',
            in: 'query',
            name: 'doc-url-expires-in',
            schema: { example: 3600, type: 'integer' },
            required: false,
          },
          example: 3600,
        }),
      'latex-compiler': z
        .enum(['pdflatex', 'lualatex'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The latex-compiler parameter can take the following values:  pdflatex lualatex',
            in: 'query',
            name: 'latex-compiler',
            schema: { enum: ['pdflatex', 'lualatex'], type: 'string' },
            required: false,
          },
        }),
      'latex-runs ': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(3),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The latex-runs is a numerical parameter and can take values of 1, 2 and 3. ',
            in: 'query',
            name: 'latex-runs ',
            schema: { maximum: 3, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      'main-file-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The main-file-name is a string parameter which identifies the main file to compile.',
            in: 'query',
            name: 'main-file-name',
            schema: { example: 'inputFile.tex', type: 'string' },
            required: false,
          },
          example: 'inputFile.tex',
        }),
      'doc-file-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The doc-file-name is a string parameter which determines the name of the file. Note that the extension of the file is not required.',
            in: 'query',
            name: 'doc-file-name',
            schema: { example: 'brilliantDocument', type: 'string' },
            required: false,
          },
          example: 'brilliantDocument',
        }),
    }),
    body: {
      description: 'Post the dynamic data for the template to compile the document PDF.',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            'Example of dynamic data for the simple report template': {
              value: {
                amount: 'ZAR 100 000',
                client: {
                  address: 'xx Long Street',
                  company: 'ABC Company Pty Ltd',
                  firstName: 'John',
                  lastName: 'Smith',
                  location: 'Cape Town, South Africa',
                },
                consultant: {
                  address: 'xx Rivonia Road',
                  company: 'XYZ Company Pty Ltd',
                  firstName: 'Kobus',
                  lastName: 'van der Merwe',
                  location: 'Sandton, South Africa',
                },
                effectiveDate: '1 February 2021',
                servicesDescription:
                  "perform analysis on the company's clients and identify existing market segments",
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Document Status URL Created',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            'Document Status URL': {
              value: {
                documentStatusUrl:
                  'https://advicement-prod-api-calls.s3.eu-west-1.amazonaws.com/testRapid/rapid-simple-contract/cf7cb57b-62ac-499e-afa5-2a2a4abba593/output/progress.json?AWSAccessKeyId=ASIA2LMZZZXSNUODI76L&Expires=1626094954&Signature=cTUlDBYPqJr5iiRjlBpVp%2FzIvtc%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIQCZNyie%2B%2BOFdkfZELMvUgYaDi74N0AqRGcY7y30s7p80AIgFFa2obOH74FGOChjM9%2FT7Ggj4P2eGmJ1Ju0yz%2F0fSrgqmQII1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw3MTE2NzY1MTM3NjQiDHuCNCrlHUNf2eeGtirtAb%2FPdNk%2Ba42RNnmmN8spasfJ9JeaSZ13fmtSYPqBTVJ00Nj0LzBON3IbFfq12zdnEooNk1ovxMH4CDYZq%2B20MwoxN4IhqPGpIbTqqp8zeDck5YqmvotQs%2F7NpwJ3xphfbcCZgjwzdi2ZskYC5k42SFg64skQd66UyQuP8yQr0RGw4JHTYFWkkDvjWyBUiaJHQWGrrbtnjuTnmAwqMx86ltCasdjVC25DXdLR3WSxwhV%2BFlxC%2FXViLBiv%2FbH57zU85ZkEMDwUuVct5mJ8guQrXzmaOu%2F14VMufNHpNwjB8JWi2O6jc1UTDZ3rCHBjqaAbphG9YZfZZKljRDrJIedpodFkIMa25rVmXz4vPrUMH9nkpIq%2BwR9o3z9gVZx4MkPWQul9sOhcktmx%2FLywTqlDWw7F4GHfXw4nIe4B%2BdIjlvCqpR%2BRnTfQlTofenqoRvtbLoMnl4xwKZkeQHrvjGp8eRlasdSOsCJpjUi5LNOcs59qFoiXo51IC%2Fhx%2B7QmDBCIJ3gpnZxkACw%3D',
              },
            },
          },
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})
