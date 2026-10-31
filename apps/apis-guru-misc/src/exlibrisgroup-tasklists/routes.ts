import { createRoute, z } from '@hono/zod-openapi'

const RemainingHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description:
      'The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)',
    param: { required: false },
  })

const ApiKeyAuthSecurityScheme = {
  description:
    'API key used to authorize requests. Learn about how to create API keys at [Alma REST APIs](https://developers.exlibrisgroup.com/alma/apis/#defining)',
  in: 'query',
  name: 'apikey',
  type: 'apiKey',
}

export const getAlmawsV1TaskListsPrintoutsRoute = createRoute({
  method: 'get',
  path: '/almaws/v1/task-lists/printouts',
  tags: ['Printouts'],
  summary: 'Retrieve Printouts',
  description: 'This API returns a list of Printouts.',
  operationId: 'get/almaws/v1/task-lists/printouts',
  request: {
    query: z.object({
      letter: z
        .string()
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description: 'Printout Name. Optional. ',
            in: 'query',
            name: 'letter',
            required: false,
            schema: { default: 'ALL', type: 'string' },
          },
        }),
      status: z
        .string()
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description: 'Printout status. Optional. Valid values are: Printed, Pending, Canceled.',
            in: 'query',
            name: 'status',
            required: false,
            schema: { default: 'ALL', type: 'string' },
          },
        }),
      printer_id: z
        .string()
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description: 'Printout Printer',
            in: 'query',
            name: 'printer_id',
            required: false,
            schema: { default: 'ALL', type: 'string' },
          },
        }),
      printout_id: z
        .string()
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of Printout IDs (for example: 123,456,778) from 1 to the limit of 100 Optional. Use of this option overrides all of the filtering parameters',
            in: 'query',
            name: 'printout_id',
            required: false,
            schema: { default: 'ALL', type: 'string' },
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
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the number of results. Optional. Valid values are 0-100. Default value: 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '10', type: 'integer' },
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
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Offset of the results returned. Optional. Default value: 0, which means that the first results will be returned.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: '0', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK - This method returns an object based on rest_printouts.xsd. See [here](/alma/apis/docs/xsd/rest_printouts.xsd)',
      content: {
        'application/json': {
          schema: z
            .object({
              printout: z
                .array(
                  z
                    .object({
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The time that the letter has been send to the Printout Queue.',
                          example: '2019-11-07T08:08:38.614Z',
                        }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The printout id.', example: '129313760000121' }),
                      letter: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Letter Html body.',
                          example: '<div> Welcome to...</div>',
                        }),
                      link: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '', xml: { attribute: true } }),
                      printer: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'printer name', xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Printout Queue.', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The printer.', required: [] }),
                      printout: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The printout name.', example: 'Testing' }),
                      size: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The size of the letter.', example: '3.6kb' }),
                      source: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The user who printed the letter.',
                          example: 'Implementor, Ex Libris',
                        }),
                      status: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Pending', xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Pending', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Status of the printout (Pending/Printed/Canceled).',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Printout Object.',
                      xml: { name: 'printout' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'printout object.' }),
              total_record_count: z
                .int32()
                .exactOptional()
                .openapi({
                  description: 'The total number of printouts.',
                  example: '',
                  xml: { attribute: true },
                }),
            })
            .openapi({
              description: 'A list of printouts.',
              xml: { name: 'printouts' },
              required: [],
            }),
        },
        'application/xml': {
          schema: z
            .object({
              printout: z
                .array(
                  z
                    .object({
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The time that the letter has been send to the Printout Queue.',
                          example: '2019-11-07T08:08:38.614Z',
                        }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The printout id.', example: '129313760000121' }),
                      letter: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Letter Html body.',
                          example: '<div> Welcome to...</div>',
                        }),
                      link: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '', xml: { attribute: true } }),
                      printer: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'printer name', xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Printout Queue.', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The printer.', required: [] }),
                      printout: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The printout name.', example: 'Testing' }),
                      size: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The size of the letter.', example: '3.6kb' }),
                      source: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The user who printed the letter.',
                          example: 'Implementor, Ex Libris',
                        }),
                      status: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Pending', xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Pending', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Status of the printout (Pending/Printed/Canceled).',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Printout Object.',
                      xml: { name: 'printout' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'printout object.' }),
              total_record_count: z
                .int32()
                .exactOptional()
                .openapi({
                  description: 'The total number of printouts.',
                  example: '',
                  xml: { attribute: true },
                }),
            })
            .openapi({
              description: 'A list of printouts.',
              xml: { name: 'printouts' },
              required: [],
            }),
        },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: { description: "Bad Request\n\n401666|40166410 - 'Invalid parameter.'" },
    500: { description: 'Internal Server Error' },
  },
})

export const postAlmawsV1TaskListsPrintoutsRoute = createRoute({
  method: 'post',
  path: '/almaws/v1/task-lists/printouts',
  tags: ['Printouts'],
  summary: 'Act on Printouts',
  description:
    'This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.',
  operationId: 'post/almaws/v1/task-lists/printouts',
  request: {
    query: z.object({
      letter: z
        .string()
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description: 'Printout Name. Optional. ',
            in: 'query',
            name: 'letter',
            required: false,
            schema: { default: 'ALL', type: 'string' },
          },
        }),
      status: z
        .string()
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description: 'Printout status. Optional. Valid values are: Printed, Pending, Canceled.',
            in: 'query',
            name: 'status',
            required: false,
            schema: { default: 'ALL', type: 'string' },
          },
        }),
      printer_id: z
        .string()
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description: 'Printout Printer',
            in: 'query',
            name: 'printer_id',
            required: false,
            schema: { default: 'ALL', type: 'string' },
          },
        }),
      printout_id: z
        .string()
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of Printout IDs (for example: 123,456,778) from 1 to the limit of 100 Optional. Use of this option overrides all of the filtering parameters',
            in: 'query',
            name: 'printout_id',
            required: false,
            schema: { default: 'ALL', type: 'string' },
          },
        }),
      op: z
        .string()
        .openapi({
          param: {
            description:
              "The operation to perform on the printout. Currently, the options are: 'mark_as_printed','mark_as_canceled'",
            in: 'query',
            name: 'op',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK - This method returns an object based on rest_printouts.xsd. See [here](/alma/apis/docs/xsd/rest_printouts.xsd)',
      content: {
        'application/json': {
          schema: z
            .object({
              printout: z
                .array(
                  z
                    .object({
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The time that the letter has been send to the Printout Queue.',
                          example: '2019-11-07T08:08:38.614Z',
                        }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The printout id.', example: '129313760000121' }),
                      letter: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Letter Html body.',
                          example: '<div> Welcome to...</div>',
                        }),
                      link: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '', xml: { attribute: true } }),
                      printer: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'printer name', xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Printout Queue.', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The printer.', required: [] }),
                      printout: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The printout name.', example: 'Testing' }),
                      size: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The size of the letter.', example: '3.6kb' }),
                      source: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The user who printed the letter.',
                          example: 'Implementor, Ex Libris',
                        }),
                      status: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Pending', xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Pending', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Status of the printout (Pending/Printed/Canceled).',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Printout Object.',
                      xml: { name: 'printout' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'printout object.' }),
              total_record_count: z
                .int32()
                .exactOptional()
                .openapi({
                  description: 'The total number of printouts.',
                  example: '',
                  xml: { attribute: true },
                }),
            })
            .openapi({
              description: 'A list of printouts.',
              xml: { name: 'printouts' },
              required: [],
            }),
        },
        'application/xml': {
          schema: z
            .object({
              printout: z
                .array(
                  z
                    .object({
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The time that the letter has been send to the Printout Queue.',
                          example: '2019-11-07T08:08:38.614Z',
                        }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The printout id.', example: '129313760000121' }),
                      letter: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Letter Html body.',
                          example: '<div> Welcome to...</div>',
                        }),
                      link: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '', xml: { attribute: true } }),
                      printer: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'printer name', xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Printout Queue.', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The printer.', required: [] }),
                      printout: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The printout name.', example: 'Testing' }),
                      size: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The size of the letter.', example: '3.6kb' }),
                      source: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The user who printed the letter.',
                          example: 'Implementor, Ex Libris',
                        }),
                      status: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Pending', xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Pending', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Status of the printout (Pending/Printed/Canceled).',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Printout Object.',
                      xml: { name: 'printout' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'printout object.' }),
              total_record_count: z
                .int32()
                .exactOptional()
                .openapi({
                  description: 'The total number of printouts.',
                  example: '',
                  xml: { attribute: true },
                }),
            })
            .openapi({
              description: 'A list of printouts.',
              xml: { name: 'printouts' },
              required: [],
            }),
        },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: { description: "Bad Request\n\n401666|40166410 - 'Invalid parameter.'" },
    500: { description: 'Internal Server Error' },
  },
})

export const getAlmawsV1TaskListsPrintoutsPrintoutIdRoute = createRoute({
  method: 'get',
  path: '/almaws/v1/task-lists/printouts/{printout_id}',
  tags: ['Printouts'],
  summary: 'Retrieve a Printout',
  description: 'This Web service returns a Printout given a Printout ID.',
  operationId: 'get/almaws/v1/task-lists/printouts/{printout_id}',
  request: {
    params: z.object({
      printout_id: z
        .string()
        .openapi({
          param: {
            description: 'The Printout ID',
            in: 'path',
            name: 'printout_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK - This method returns an object based on rest_printout.xsd. See [here](/alma/apis/docs/xsd/rest_printout.xsd)',
      content: {
        'application/json': {
          schema: z
            .object({
              date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The time that the letter has been send to the Printout Queue.',
                  example: '2019-11-07T08:08:38.614Z',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The printout id.', example: '129313760000121' }),
              letter: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Letter Html body.',
                  example: '<div> Welcome to...</div>',
                }),
              link: z
                .string()
                .exactOptional()
                .openapi({ example: '', xml: { attribute: true } }),
              printer: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'printer name', xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Printout Queue.', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({ description: 'The printer.', required: [] }),
              printout: z
                .string()
                .exactOptional()
                .openapi({ description: 'The printout name.', example: 'Testing' }),
              size: z
                .string()
                .exactOptional()
                .openapi({ description: 'The size of the letter.', example: '3.6kb' }),
              source: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The user who printed the letter.',
                  example: 'Implementor, Ex Libris',
                }),
              status: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Pending', xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Pending', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description: 'Status of the printout (Pending/Printed/Canceled).',
                  required: [],
                }),
            })
            .openapi({ description: 'Printout Object.', xml: { name: 'printout' }, required: [] }),
        },
        'application/xml': {
          schema: z
            .object({
              date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The time that the letter has been send to the Printout Queue.',
                  example: '2019-11-07T08:08:38.614Z',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The printout id.', example: '129313760000121' }),
              letter: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Letter Html body.',
                  example: '<div> Welcome to...</div>',
                }),
              link: z
                .string()
                .exactOptional()
                .openapi({ example: '', xml: { attribute: true } }),
              printer: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'printer name', xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Printout Queue.', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({ description: 'The printer.', required: [] }),
              printout: z
                .string()
                .exactOptional()
                .openapi({ description: 'The printout name.', example: 'Testing' }),
              size: z
                .string()
                .exactOptional()
                .openapi({ description: 'The size of the letter.', example: '3.6kb' }),
              source: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The user who printed the letter.',
                  example: 'Implementor, Ex Libris',
                }),
              status: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Pending', xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Pending', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description: 'Status of the printout (Pending/Printed/Canceled).',
                  required: [],
                }),
            })
            .openapi({ description: 'Printout Object.', xml: { name: 'printout' }, required: [] }),
        },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: { description: "Bad Request\n\n402896 - 'Invalid printout ID.'" },
    500: { description: 'Internal Server Error' },
  },
})

export const postAlmawsV1TaskListsPrintoutsPrintoutIdRoute = createRoute({
  method: 'post',
  path: '/almaws/v1/task-lists/printouts/{printout_id}',
  tags: ['Printouts'],
  summary: 'Printout Service',
  description: 'This API operates on an printout. given a Printout ID.',
  operationId: 'post/almaws/v1/task-lists/printouts/{printout_id}',
  request: {
    params: z.object({
      printout_id: z
        .string()
        .openapi({
          param: {
            description: 'The Printout ID',
            in: 'path',
            name: 'printout_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      op: z
        .string()
        .openapi({
          param: {
            description:
              "The operation to perform on the printout. Currently, the options are 'mark_as_printed','mark_as_canceled'",
            in: 'query',
            name: 'op',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK - This method returns an object based on rest_printout.xsd. See [here](/alma/apis/docs/xsd/rest_printout.xsd)',
      content: {
        'application/json': {
          schema: z
            .object({
              date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The time that the letter has been send to the Printout Queue.',
                  example: '2019-11-07T08:08:38.614Z',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The printout id.', example: '129313760000121' }),
              letter: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Letter Html body.',
                  example: '<div> Welcome to...</div>',
                }),
              link: z
                .string()
                .exactOptional()
                .openapi({ example: '', xml: { attribute: true } }),
              printer: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'printer name', xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Printout Queue.', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({ description: 'The printer.', required: [] }),
              printout: z
                .string()
                .exactOptional()
                .openapi({ description: 'The printout name.', example: 'Testing' }),
              size: z
                .string()
                .exactOptional()
                .openapi({ description: 'The size of the letter.', example: '3.6kb' }),
              source: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The user who printed the letter.',
                  example: 'Implementor, Ex Libris',
                }),
              status: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Pending', xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Pending', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description: 'Status of the printout (Pending/Printed/Canceled).',
                  required: [],
                }),
            })
            .openapi({ description: 'Printout Object.', xml: { name: 'printout' }, required: [] }),
        },
        'application/xml': {
          schema: z
            .object({
              date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The time that the letter has been send to the Printout Queue.',
                  example: '2019-11-07T08:08:38.614Z',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The printout id.', example: '129313760000121' }),
              letter: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Letter Html body.',
                  example: '<div> Welcome to...</div>',
                }),
              link: z
                .string()
                .exactOptional()
                .openapi({ example: '', xml: { attribute: true } }),
              printer: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'printer name', xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Printout Queue.', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({ description: 'The printer.', required: [] }),
              printout: z
                .string()
                .exactOptional()
                .openapi({ description: 'The printout name.', example: 'Testing' }),
              size: z
                .string()
                .exactOptional()
                .openapi({ description: 'The size of the letter.', example: '3.6kb' }),
              source: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The user who printed the letter.',
                  example: 'Implementor, Ex Libris',
                }),
              status: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Pending', xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Pending', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description: 'Status of the printout (Pending/Printed/Canceled).',
                  required: [],
                }),
            })
            .openapi({ description: 'Printout Object.', xml: { name: 'printout' }, required: [] }),
        },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: {
      description:
        "Bad Request\n\n402896 - 'Invalid printout ID.'\n\n40166410 - 'Invalid parameter.'\n\n40166412 - 'Failed to perform action.'",
    },
    500: { description: 'Internal Server Error' },
  },
})

export const getAlmawsV1TaskListsRequestedResourcesRoute = createRoute({
  method: 'get',
  path: '/almaws/v1/task-lists/requested-resources',
  tags: ['Requested Resources'],
  summary: 'Get Requested Resources',
  description: 'This API returns a list of requested resources to be picked from the shelf in Alma',
  operationId: 'get/almaws/v1/task-lists/requested-resources',
  request: {
    query: z.object({
      library: z
        .string()
        .openapi({
          param: {
            description:
              'The library of the given circulation desk or department where the resources are located. Mandatory.',
            in: 'query',
            name: 'library',
            required: true,
            schema: { type: 'string' },
          },
        }),
      circ_desk: z
        .string()
        .openapi({
          param: {
            description: 'The circulation desk where the action is being performed. Mandatory.',
            in: 'query',
            name: 'circ_desk',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'The location code. Optional.',
            in: 'query',
            name: 'location',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      order_by: z
        .string()
        .default('call_number')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The order in which to retrieve the results: location/call_number (default).',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: { default: 'call_number', type: 'string' },
          },
        }),
      direction: z
        .string()
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The order direction in which to retrieve the results. Optional.',
            in: 'query',
            name: 'direction',
            required: false,
            schema: { default: 'asc', type: 'string' },
          },
        }),
      pickup_inst: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'The pickup institution. Optional.',
            in: 'query',
            name: 'pickup_inst',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      reported: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Show reported results: Y/N. Optional.',
            in: 'query',
            name: 'reported',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      printed: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Show printed results: Y/N. Optional.',
            in: 'query',
            name: 'printed',
            required: false,
            schema: { default: '', type: 'string' },
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
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the number of results. Optional. Valid values are 0-100. Default value: 10.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '10', type: 'integer' },
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
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Offset of the results returned. Optional. Default value: 0, which means that the first results will be returned.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: '0', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK - This method returns an object based on rest_requested_resources.xsd. See [here](/alma/apis/docs/xsd/rest_requested_resources.xsd)',
      content: {
        'application/json': {
          schema: z
            .object({
              requested_resource: z
                .array(
                  z
                    .object({
                      location: z
                        .object({
                          call_number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Call number of the item.',
                              example: 'BD450 .T266 1989',
                            }),
                          copy: z
                            .array(
                              z
                                .object({
                                  alternative_call_number: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Alternative call number.',
                                      example: '',
                                    }),
                                  barcode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The item's barcode.",
                                      example: '38751000062809',
                                    }),
                                  base_status: z
                                    .object({
                                      desc: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ xml: { attribute: true } }),
                                      value: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: '0', xml: { name: 'xml_value' } }),
                                    })
                                    .exactOptional()
                                    .openapi({ description: '', required: [] }),
                                  link: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { attribute: true } }),
                                  pid: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The resource's pid.",
                                      example: '23321797470001021',
                                    }),
                                  storage_location_id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The item's storage location id.",
                                      example: '159111000',
                                    }),
                                })
                                .openapi({
                                  description: 'Specific copy of resource in a specific location.',
                                  xml: { name: 'copy' },
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'Copies of resource in a specific location.',
                              xml: { name: 'copies', wrapped: true },
                            }),
                          holding_id: z
                            .object({
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: '22321797490001021',
                                  xml: { name: 'xml_value' },
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Holding pid, a unique holding id that the resource is associated with.',
                              required: [],
                            }),
                          library: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'TML', xml: { name: 'xml_value' } }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
                              required: [],
                            }),
                          shelving_location: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The location.', example: 'STACK' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Location of the requested resource.',
                          xml: { name: 'location' },
                          required: [],
                        }),
                      request: z
                        .array(
                          z
                            .object({
                              comment: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The related note of the request.',
                                  example: 'your request is important to us',
                                }),
                              destination: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department',
                                  required: [],
                                }),
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The identifier of the request in Alma.',
                                  example: '1117421001021',
                                }),
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ example: '', xml: { attribute: true } }),
                              printed: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description: 'Indication whether the request is printed.',
                                  example: 'true',
                                }),
                              reported: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description: 'Indication whether the request is reported.',
                                  example: 'true',
                                }),
                              request_date: z.iso
                                .date()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Deprecated - use request_time instead. The request date.',
                                  example: '2015-05-05Z',
                                }),
                              request_sub_type: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description: 'The sub type of the request.',
                                  required: [],
                                }),
                              request_time: z.iso
                                .datetime({ offset: true })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The creation date and exact time of the request. Output parameter.',
                                  example: '2013-11-12T14:59:59.000Z',
                                }),
                              request_type: z
                                .enum(['BOOKING', 'DIGITIZATION', 'HOLD', 'MOVE', 'WORK_ORDER'])
                                .openapi({ description: '' }),
                              requester: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'John Smith', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description: 'A description of the requester.',
                                  required: [],
                                }),
                            })
                            .openapi({
                              description: 'Request object.',
                              required: ['request_type'],
                              xml: { name: 'request' },
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Requests for resource.',
                          xml: { name: 'requests', wrapped: true },
                        }),
                      resource_metadata: z
                        .object({
                          author: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'An entity primarily responsible for making the resource.',
                              example: 'Taylor, Charles, 1931-',
                            }),
                          isbn: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ISBN', example: '0674824253 (alk. paper)' }),
                          issn: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ISSN', example: '' }),
                          mms_id: z
                            .object({
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: '99102122810001021',
                                  xml: { name: 'xml_value' },
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).',
                              required: [],
                            }),
                          publication_place: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Place of publication.',
                              example: 'Cambridge, Mass. :',
                            }),
                          publication_year: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The year associated with the publication of the resource.',
                              example: '1989',
                            }),
                          publisher: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'An entity responsible for making the resource available.',
                              example: 'Harvard University',
                            }),
                          title: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The resource title.',
                              example:
                                'Sources of the self : the making of the modern identity / Charles Taylor.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Metadata about the requested resource.',
                          xml: { name: 'resource_metadata' },
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Requested resource to be picked from the shelf.',
                      xml: { name: 'requested_resource' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Requested resource object.' }),
              total_record_count: z
                .int32()
                .exactOptional()
                .openapi({
                  description: 'The total number of requested resources.',
                  example: '',
                  xml: { attribute: true },
                }),
            })
            .openapi({
              description: 'A list of requested resources.',
              xml: { name: 'requested_resources' },
              required: [],
            }),
        },
        'application/xml': {
          schema: z
            .object({
              requested_resource: z
                .array(
                  z
                    .object({
                      location: z
                        .object({
                          call_number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Call number of the item.',
                              example: 'BD450 .T266 1989',
                            }),
                          copy: z
                            .array(
                              z
                                .object({
                                  alternative_call_number: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Alternative call number.',
                                      example: '',
                                    }),
                                  barcode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The item's barcode.",
                                      example: '38751000062809',
                                    }),
                                  base_status: z
                                    .object({
                                      desc: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ xml: { attribute: true } }),
                                      value: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: '0', xml: { name: 'xml_value' } }),
                                    })
                                    .exactOptional()
                                    .openapi({ description: '', required: [] }),
                                  link: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { attribute: true } }),
                                  pid: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The resource's pid.",
                                      example: '23321797470001021',
                                    }),
                                  storage_location_id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The item's storage location id.",
                                      example: '159111000',
                                    }),
                                })
                                .openapi({
                                  description: 'Specific copy of resource in a specific location.',
                                  xml: { name: 'copy' },
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'Copies of resource in a specific location.',
                              xml: { name: 'copies', wrapped: true },
                            }),
                          holding_id: z
                            .object({
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: '22321797490001021',
                                  xml: { name: 'xml_value' },
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Holding pid, a unique holding id that the resource is associated with.',
                              required: [],
                            }),
                          library: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'TML', xml: { name: 'xml_value' } }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
                              required: [],
                            }),
                          shelving_location: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The location.', example: 'STACK' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Location of the requested resource.',
                          xml: { name: 'location' },
                          required: [],
                        }),
                      request: z
                        .array(
                          z
                            .object({
                              comment: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The related note of the request.',
                                  example: 'your request is important to us',
                                }),
                              destination: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department',
                                  required: [],
                                }),
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The identifier of the request in Alma.',
                                  example: '1117421001021',
                                }),
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ example: '', xml: { attribute: true } }),
                              printed: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description: 'Indication whether the request is printed.',
                                  example: 'true',
                                }),
                              reported: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description: 'Indication whether the request is reported.',
                                  example: 'true',
                                }),
                              request_date: z.iso
                                .date()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Deprecated - use request_time instead. The request date.',
                                  example: '2015-05-05Z',
                                }),
                              request_sub_type: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description: 'The sub type of the request.',
                                  required: [],
                                }),
                              request_time: z.iso
                                .datetime({ offset: true })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The creation date and exact time of the request. Output parameter.',
                                  example: '2013-11-12T14:59:59.000Z',
                                }),
                              request_type: z
                                .enum(['BOOKING', 'DIGITIZATION', 'HOLD', 'MOVE', 'WORK_ORDER'])
                                .openapi({ description: '' }),
                              requester: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'John Smith', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description: 'A description of the requester.',
                                  required: [],
                                }),
                            })
                            .openapi({
                              description: 'Request object.',
                              required: ['request_type'],
                              xml: { name: 'request' },
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Requests for resource.',
                          xml: { name: 'requests', wrapped: true },
                        }),
                      resource_metadata: z
                        .object({
                          author: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'An entity primarily responsible for making the resource.',
                              example: 'Taylor, Charles, 1931-',
                            }),
                          isbn: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ISBN', example: '0674824253 (alk. paper)' }),
                          issn: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ISSN', example: '' }),
                          mms_id: z
                            .object({
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: '99102122810001021',
                                  xml: { name: 'xml_value' },
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).',
                              required: [],
                            }),
                          publication_place: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Place of publication.',
                              example: 'Cambridge, Mass. :',
                            }),
                          publication_year: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The year associated with the publication of the resource.',
                              example: '1989',
                            }),
                          publisher: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'An entity responsible for making the resource available.',
                              example: 'Harvard University',
                            }),
                          title: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The resource title.',
                              example:
                                'Sources of the self : the making of the modern identity / Charles Taylor.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Metadata about the requested resource.',
                          xml: { name: 'resource_metadata' },
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Requested resource to be picked from the shelf.',
                      xml: { name: 'requested_resource' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Requested resource object.' }),
              total_record_count: z
                .int32()
                .exactOptional()
                .openapi({
                  description: 'The total number of requested resources.',
                  example: '',
                  xml: { attribute: true },
                }),
            })
            .openapi({
              description: 'A list of requested resources.',
              xml: { name: 'requested_resources' },
              required: [],
            }),
        },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: {
      description:
        "Bad Request\n\n402119 - 'General error.'\n\n401664 - 'Mandatory field is missing: X.'\n\n40166414 - 'The parameter 'X' is mandatory. Valid options are: Y.'",
    },
    500: { description: 'Internal Server Error' },
  },
})

export const postAlmawsV1TaskListsRequestedResourcesRoute = createRoute({
  method: 'post',
  path: '/almaws/v1/task-lists/requested-resources',
  tags: ['Requested Resources'],
  summary: 'Act on Requested Resources',
  description: 'This API performs an action on requested resources that are on the shelf in Alma',
  operationId: 'post/almaws/v1/task-lists/requested-resources',
  request: {
    query: z.object({
      library: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The library of the given circulation desk or department where the resources are located. Mandatory.',
            in: 'query',
            name: 'library',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      circ_desk: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'The circulation desk where the action is being performed. Mandatory.',
            in: 'query',
            name: 'circ_desk',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      op: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Operation to be preformed on the list of given requests. Currently the only supported action is 'mark_reported'. Mandatory.",
            in: 'query',
            name: 'op',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      location: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'The location code. Optional.',
            in: 'query',
            name: 'location',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      pickup_inst: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'The pickup institution. Optional.',
            in: 'query',
            name: 'pickup_inst',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      reported: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Show reported results: Y/N. Optional.',
            in: 'query',
            name: 'reported',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      printed: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Show printed results: Y/N. Optional.',
            in: 'query',
            name: 'printed',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK - This method returns an object based on rest_requested_resources.xsd. See [here](/alma/apis/docs/xsd/rest_requested_resources.xsd)',
      content: {
        'application/json': {
          schema: z
            .object({
              requested_resource: z
                .array(
                  z
                    .object({
                      location: z
                        .object({
                          call_number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Call number of the item.',
                              example: 'BD450 .T266 1989',
                            }),
                          copy: z
                            .array(
                              z
                                .object({
                                  alternative_call_number: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Alternative call number.',
                                      example: '',
                                    }),
                                  barcode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The item's barcode.",
                                      example: '38751000062809',
                                    }),
                                  base_status: z
                                    .object({
                                      desc: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ xml: { attribute: true } }),
                                      value: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: '0', xml: { name: 'xml_value' } }),
                                    })
                                    .exactOptional()
                                    .openapi({ description: '', required: [] }),
                                  link: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { attribute: true } }),
                                  pid: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The resource's pid.",
                                      example: '23321797470001021',
                                    }),
                                  storage_location_id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The item's storage location id.",
                                      example: '159111000',
                                    }),
                                })
                                .openapi({
                                  description: 'Specific copy of resource in a specific location.',
                                  xml: { name: 'copy' },
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'Copies of resource in a specific location.',
                              xml: { name: 'copies', wrapped: true },
                            }),
                          holding_id: z
                            .object({
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: '22321797490001021',
                                  xml: { name: 'xml_value' },
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Holding pid, a unique holding id that the resource is associated with.',
                              required: [],
                            }),
                          library: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'TML', xml: { name: 'xml_value' } }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
                              required: [],
                            }),
                          shelving_location: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The location.', example: 'STACK' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Location of the requested resource.',
                          xml: { name: 'location' },
                          required: [],
                        }),
                      request: z
                        .array(
                          z
                            .object({
                              comment: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The related note of the request.',
                                  example: 'your request is important to us',
                                }),
                              destination: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department',
                                  required: [],
                                }),
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The identifier of the request in Alma.',
                                  example: '1117421001021',
                                }),
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ example: '', xml: { attribute: true } }),
                              printed: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description: 'Indication whether the request is printed.',
                                  example: 'true',
                                }),
                              reported: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description: 'Indication whether the request is reported.',
                                  example: 'true',
                                }),
                              request_date: z.iso
                                .date()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Deprecated - use request_time instead. The request date.',
                                  example: '2015-05-05Z',
                                }),
                              request_sub_type: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description: 'The sub type of the request.',
                                  required: [],
                                }),
                              request_time: z.iso
                                .datetime({ offset: true })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The creation date and exact time of the request. Output parameter.',
                                  example: '2013-11-12T14:59:59.000Z',
                                }),
                              request_type: z
                                .enum(['BOOKING', 'DIGITIZATION', 'HOLD', 'MOVE', 'WORK_ORDER'])
                                .openapi({ description: '' }),
                              requester: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'John Smith', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description: 'A description of the requester.',
                                  required: [],
                                }),
                            })
                            .openapi({
                              description: 'Request object.',
                              required: ['request_type'],
                              xml: { name: 'request' },
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Requests for resource.',
                          xml: { name: 'requests', wrapped: true },
                        }),
                      resource_metadata: z
                        .object({
                          author: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'An entity primarily responsible for making the resource.',
                              example: 'Taylor, Charles, 1931-',
                            }),
                          isbn: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ISBN', example: '0674824253 (alk. paper)' }),
                          issn: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ISSN', example: '' }),
                          mms_id: z
                            .object({
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: '99102122810001021',
                                  xml: { name: 'xml_value' },
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).',
                              required: [],
                            }),
                          publication_place: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Place of publication.',
                              example: 'Cambridge, Mass. :',
                            }),
                          publication_year: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The year associated with the publication of the resource.',
                              example: '1989',
                            }),
                          publisher: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'An entity responsible for making the resource available.',
                              example: 'Harvard University',
                            }),
                          title: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The resource title.',
                              example:
                                'Sources of the self : the making of the modern identity / Charles Taylor.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Metadata about the requested resource.',
                          xml: { name: 'resource_metadata' },
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Requested resource to be picked from the shelf.',
                      xml: { name: 'requested_resource' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Requested resource object.' }),
              total_record_count: z
                .int32()
                .exactOptional()
                .openapi({
                  description: 'The total number of requested resources.',
                  example: '',
                  xml: { attribute: true },
                }),
            })
            .openapi({
              description: 'A list of requested resources.',
              xml: { name: 'requested_resources' },
              required: [],
            }),
        },
        'application/xml': {
          schema: z
            .object({
              requested_resource: z
                .array(
                  z
                    .object({
                      location: z
                        .object({
                          call_number: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Call number of the item.',
                              example: 'BD450 .T266 1989',
                            }),
                          copy: z
                            .array(
                              z
                                .object({
                                  alternative_call_number: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'Alternative call number.',
                                      example: '',
                                    }),
                                  barcode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The item's barcode.",
                                      example: '38751000062809',
                                    }),
                                  base_status: z
                                    .object({
                                      desc: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ xml: { attribute: true } }),
                                      value: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: '0', xml: { name: 'xml_value' } }),
                                    })
                                    .exactOptional()
                                    .openapi({ description: '', required: [] }),
                                  link: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { attribute: true } }),
                                  pid: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The resource's pid.",
                                      example: '23321797470001021',
                                    }),
                                  storage_location_id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: "The item's storage location id.",
                                      example: '159111000',
                                    }),
                                })
                                .openapi({
                                  description: 'Specific copy of resource in a specific location.',
                                  xml: { name: 'copy' },
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'Copies of resource in a specific location.',
                              xml: { name: 'copies', wrapped: true },
                            }),
                          holding_id: z
                            .object({
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: '22321797490001021',
                                  xml: { name: 'xml_value' },
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Holding pid, a unique holding id that the resource is associated with.',
                              required: [],
                            }),
                          library: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'TML', xml: { name: 'xml_value' } }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
                              required: [],
                            }),
                          shelving_location: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The location.', example: 'STACK' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Location of the requested resource.',
                          xml: { name: 'location' },
                          required: [],
                        }),
                      request: z
                        .array(
                          z
                            .object({
                              comment: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The related note of the request.',
                                  example: 'your request is important to us',
                                }),
                              destination: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department',
                                  required: [],
                                }),
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The identifier of the request in Alma.',
                                  example: '1117421001021',
                                }),
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ example: '', xml: { attribute: true } }),
                              printed: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description: 'Indication whether the request is printed.',
                                  example: 'true',
                                }),
                              reported: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description: 'Indication whether the request is reported.',
                                  example: 'true',
                                }),
                              request_date: z.iso
                                .date()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Deprecated - use request_time instead. The request date.',
                                  example: '2015-05-05Z',
                                }),
                              request_sub_type: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description: 'The sub type of the request.',
                                  required: [],
                                }),
                              request_time: z.iso
                                .datetime({ offset: true })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The creation date and exact time of the request. Output parameter.',
                                  example: '2013-11-12T14:59:59.000Z',
                                }),
                              request_type: z
                                .enum(['BOOKING', 'DIGITIZATION', 'HOLD', 'MOVE', 'WORK_ORDER'])
                                .openapi({ description: '' }),
                              requester: z
                                .object({
                                  desc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ xml: { attribute: true } }),
                                  value: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'John Smith', xml: { name: 'xml_value' } }),
                                })
                                .exactOptional()
                                .openapi({
                                  description: 'A description of the requester.',
                                  required: [],
                                }),
                            })
                            .openapi({
                              description: 'Request object.',
                              required: ['request_type'],
                              xml: { name: 'request' },
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Requests for resource.',
                          xml: { name: 'requests', wrapped: true },
                        }),
                      resource_metadata: z
                        .object({
                          author: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'An entity primarily responsible for making the resource.',
                              example: 'Taylor, Charles, 1931-',
                            }),
                          isbn: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ISBN', example: '0674824253 (alk. paper)' }),
                          issn: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'ISSN', example: '' }),
                          mms_id: z
                            .object({
                              link: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: '99102122810001021',
                                  xml: { name: 'xml_value' },
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).',
                              required: [],
                            }),
                          publication_place: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Place of publication.',
                              example: 'Cambridge, Mass. :',
                            }),
                          publication_year: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The year associated with the publication of the resource.',
                              example: '1989',
                            }),
                          publisher: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'An entity responsible for making the resource available.',
                              example: 'Harvard University',
                            }),
                          title: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The resource title.',
                              example:
                                'Sources of the self : the making of the modern identity / Charles Taylor.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Metadata about the requested resource.',
                          xml: { name: 'resource_metadata' },
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Requested resource to be picked from the shelf.',
                      xml: { name: 'requested_resource' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Requested resource object.' }),
              total_record_count: z
                .int32()
                .exactOptional()
                .openapi({
                  description: 'The total number of requested resources.',
                  example: '',
                  xml: { attribute: true },
                }),
            })
            .openapi({
              description: 'A list of requested resources.',
              xml: { name: 'requested_resources' },
              required: [],
            }),
        },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: {
      description:
        "Bad Request\n\n402119 - 'General error.'\n\n401664 - 'Mandatory field is missing: X.'\n\n40166414 - 'The parameter 'X' is mandatory. Valid options are: Y.'",
    },
    500: { description: 'Internal Server Error' },
  },
})

export const getAlmawsV1TaskListsRsLendingRequestsRoute = createRoute({
  method: 'get',
  path: '/almaws/v1/task-lists/rs/lending-requests',
  tags: ['Lending Requests'],
  summary: 'Get Lending Requests',
  description: 'This API returns a list of lending requests in Alma',
  operationId: 'get/almaws/v1/task-lists/rs/lending-requests',
  request: {
    query: z.object({
      library: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The resource sharing library for which lending requests should be retrieved. Mandatory. List of possible libraries can be retrieved using the [GET /almaws/v1/conf/libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
            in: 'query',
            name: 'library',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      status: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The status of lending requests to retrieve. Optional. List of possible statuses can be retrieved using the [GET almaws/v1/conf/code-tables/MandatoryLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed) and the  [GET almaws/v1/conf/code-tables/OptionalLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
            in: 'query',
            name: 'status',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      printed: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The 'printed' value of lending requests to retrieve. Optional. Possible values: Y, N.",
            in: 'query',
            name: 'printed',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      reported: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The 'reported' value of lending requests to retrieve. Optional. Possible values: Y, N.",
            in: 'query',
            name: 'reported',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      partner: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The partner value. Only lending requests from this partner should be retrieved. Optional. List of possible partners can be retrieved using the [GET almaws/v1/partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07).',
            in: 'query',
            name: 'partner',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      requested_format: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Requested format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
            in: 'query',
            name: 'requested_format',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      supplied_format: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Supplied Format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
            in: 'query',
            name: 'supplied_format',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK - This method returns an object based on rest_user_resource_sharing_requests.xsd. See [here](/alma/apis/docs/xsd/rest_user_resource_sharing_requests.xsd)',
      content: {
        'application/json': {
          schema: z
            .object({
              total_record_count: z
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
                  description: 'The total number of resource sharing requests in the given list.',
                  example: '',
                  xml: { attribute: true },
                }),
              user_resource_sharing_request: z
                .array(
                  z
                    .object({
                      additional_barcode: z
                        .array(
                          z
                            .string()
                            .openapi({
                              example: '00023705571000021',
                              xml: { name: 'additional_barcode' },
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'List of additional barcodes. Note that the first one appears in the main barcode field.',
                          xml: { name: 'additional_barcodes', wrapped: true },
                        }),
                      additional_person_name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name of an additional contact.',
                          example: 'John Smith',
                        }),
                      agree_to_copyright_terms: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether the requester has agreed to the copyright terms. Mandatory for borrowing requests. Currently not relevant for lending requests.',
                          example: 'true',
                        }),
                      allow_other_formats: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether other formats besides the value in format field are acceptable. Default is false.',
                          example: 'true',
                        }),
                      author: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Author of the requested resource.',
                          example: 'John Smith',
                        }),
                      author_initials: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Author initials of the requested resource.',
                          example: 'J.S',
                        }),
                      barcode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Barcode of the requested resource.',
                          example: '00023705571000021',
                        }),
                      bib_note: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The note of the bibliographic record.',
                          example: '',
                        }),
                      call_number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The call number of the book. Indicates the library shelf on which the books are located.',
                          example: '1',
                        }),
                      chapter: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The chapter number in the journal that contains the article.',
                          example: '4',
                        }),
                      chapter_author: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'For a book chapter, the author of this chapter.',
                          example: 'John Smith',
                        }),
                      chapter_title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'For a book chapter, the title of this chapter.',
                          example: 'Chapter title',
                        }),
                      citation_type: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'BK', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.",
                          required: [],
                        }),
                      copyright_status: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'APPROVED', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.",
                          required: [],
                        }),
                      created_date: z.iso
                        .date()
                        .exactOptional()
                        .openapi({
                          description: 'The request creation date.',
                          example: '2013-11-12Z',
                        }),
                      created_time: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'The request creation time.',
                          example: '2019-12-18T14:36:48.659Z',
                        }),
                      doi: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The doi of the requested resource.',
                          example: '',
                        }),
                      edition: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The edition of the requested resource.',
                          example: '1',
                        }),
                      editor: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The editor of the book (typically used for books where chapters have different authors).',
                          example: 'John Smith',
                        }),
                      end_page: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The end page of the requested resource.',
                          example: '49',
                        }),
                      external_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'External identifier of the resource sharing request. Mandatory when creating a lending request.',
                          example: '12013330000874120',
                        }),
                      format: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'PHYSICAL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).',
                          required: [],
                        }),
                      fund: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'The code of the fund. Not relevant for lending requests.',
                          required: [],
                        }),
                      has_active_notes: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether the request has active notes. Output parameter.',
                          example: 'false',
                        }),
                      isbn: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'ISBN of the requested resource.',
                          example: '0674824253 (alk. paper)',
                        }),
                      issn: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'ISSN of the requested resource.', example: '' }),
                      issue: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The issue of the requested resource.',
                          example: '',
                        }),
                      journal_title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The title of the journal. Relevant when an article is requested.',
                          example: 'Journal title',
                        }),
                      last_interest_date: z.iso
                        .date()
                        .exactOptional()
                        .openapi({
                          description: 'Last date the request is needed. Optional.',
                          example: '2013-12-13Z',
                        }),
                      last_modified_date: z.iso
                        .date()
                        .exactOptional()
                        .openapi({
                          description: 'Date by which the last change to the request was made.',
                          example: '2015-10-11Z',
                        }),
                      last_modified_time: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'Time by which the last change to the request was made.',
                          example: '2019-12-18T14:36:48.659Z',
                        }),
                      lcc_number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The library of congress number of the book.',
                          example: '102188800001',
                        }),
                      level_of_service: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'NORMAL_LOCAL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.",
                          required: [],
                        }),
                      lost_damaged_fee: z
                        .object({
                          currency: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                            })
                            .openapi({
                              description:
                                "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                              required: [],
                            }),
                          sum: z
                            .float64()
                            .openapi({ description: 'The total sum.', example: '0.00' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '',
                          required: ['sum', 'currency'],
                          xml: { name: 'amount' },
                        }),
                      maximum_fee: z
                        .float32()
                        .exactOptional()
                        .openapi({
                          description:
                            'Maximum fee the user is willing to pay for the request. Currently not relevant for lending requests.',
                          example: '2000.0',
                        }),
                      mms_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'MMS ID of the requested resource. Borrowing request: this is relevant after physical material has arrived. Lending request: if supplied when creating a request, the request will be attached to this bib record. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).',
                          example: '9933745180101020',
                        }),
                      need_patron_info: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether patron information is needed. Not relevant for lending requests.',
                          example: 'true',
                        }),
                      note: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'General note.', example: '' }),
                      oclc_number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The oclc number of the book.',
                          example: '100100100',
                        }),
                      other_standard_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The other standard id of the requested resource.',
                          example: '100100100',
                        }),
                      owner: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The resource sharing library code. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed). Borrowing request: Optional. Used only when there are more than one resource sharing library defined for the user. Lending request: Mandatory.',
                          example: 'John Smith',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The relevant pages of the requested resource.',
                          example: '',
                        }),
                      part: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The part of the requested resource.',
                          example: '',
                        }),
                      partner: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '10218885421021', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.',
                          required: [],
                        }),
                      pickup_location: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ONL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.',
                          required: [],
                        }),
                      pickup_location_type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The pickup location type. The pickup location type. Possible values are: LIBRARY, CIRCULATION_DESK.',
                          example: 'LIBRARY',
                        }),
                      place_of_publication: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The publication place of the requested resource.',
                          example: 'Cambridge, Mass. :',
                        }),
                      pmid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The pmid of the requested resource.',
                          example: '1284442031021',
                        }),
                      preferred_send_method: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ARIEL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.",
                          required: [],
                        }),
                      printed: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether the request is printed. Output parameter. Relevant for lending requests.',
                          example: 'true',
                        }),
                      publisher: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Publisher of the requested resource.',
                          example: 'John Smith',
                        }),
                      reading_room: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.',
                          required: [],
                        }),
                      receive_cost: z
                        .object({
                          currency: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                            })
                            .openapi({
                              description:
                                "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                              required: [],
                            }),
                          sum: z
                            .float64()
                            .openapi({ description: 'The total sum.', example: '0.00' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '',
                          required: ['sum', 'currency'],
                          xml: { name: 'amount' },
                        }),
                      remote_record_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The remote record id of the requested resource.',
                          example: '100100100',
                        }),
                      reported: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether the request is reported. Output parameter. Relevant for lending requests.',
                          example: 'false',
                        }),
                      request_cost: z
                        .object({
                          currency: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                            })
                            .openapi({
                              description:
                                "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                              required: [],
                            }),
                          sum: z
                            .float64()
                            .openapi({ description: 'The total sum.', example: '0.00' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '',
                          required: ['sum', 'currency'],
                          xml: { name: 'amount' },
                        }),
                      request_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Internal identifier of the resource sharing request in Alma, generated by Alma. Should be used in subsequent queries regarding the request.',
                          example: '1001966830001021',
                        }),
                      requested_language: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ml', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.',
                          required: [],
                        }),
                      requested_media: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "A description of the requested media. possible values are 1-7 (codes from request media code table), and the codes from 'AdditionalRequestedMedia' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). The valid values are according to the Requested media definition mapping table.",
                          example: '1',
                        }),
                      requester: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Jane doe', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.',
                          required: [],
                        }),
                      rs_note: z
                        .array(
                          z
                            .object({
                              content: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: "The note's text. Mandatory.",
                                  example: '',
                                }),
                              created_by: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'The creator of the note.', example: '' }),
                              created_date: z.iso
                                .date()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The creation date of the note. Default is the current date.',
                                  example: '2024-05-30Z',
                                }),
                            })
                            .openapi({
                              description: 'Specific related note.',
                              xml: { name: 'rs_note' },
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'List of related notes that appear in the Notes tab in the UI..',
                          xml: { name: 'rs_notes', wrapped: true },
                        }),
                      series_title_number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The series title number of the requested resource.',
                          example: '100',
                        }),
                      shipping_cost: z
                        .object({
                          currency: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                            })
                            .openapi({
                              description:
                                "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                              required: [],
                            }),
                          sum: z
                            .float64()
                            .openapi({ description: 'The total sum.', example: '0.00' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '',
                          required: ['sum', 'currency'],
                          xml: { name: 'amount' },
                        }),
                      source: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The source of the requested resource.',
                          example: '',
                        }),
                      specific_edition: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether edition is used in ISO Protocol and in Locate process. Default is true. Relevant when a book is requested.',
                          example: 'true',
                        }),
                      start_page: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The relevant start page of the requested resource.',
                          example: '2',
                        }),
                      status: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ACTIVE', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).',
                          required: [],
                        }),
                      supplied_format: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'DIGITAL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.',
                          required: [],
                        }),
                      text_email: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Borrowing request: In use with alternative_address only. In use when sending in digital format. Lending request: Requester's Email.",
                          example: '',
                        }),
                      text_postal_1: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'In use with alternative_address only. Not relevant for lending requests.',
                          example: '',
                        }),
                      text_postal_2: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'In use with alternative_address only. Not relevant for lending requests.',
                          example: '',
                        }),
                      text_postal_3: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'In use with alternative_address only. Not relevant for lending requests.',
                          example: '',
                        }),
                      text_postal_4: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'In use with alternative_address only. Not relevant for lending requests.',
                          example: '',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Title of the requested resource. Mandatory unless mms_id is supplied.',
                          example: 'Harry Potter',
                        }),
                      use_alternative_address: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'An indication of whether the delivery should be to an alternative address. Default is false. Not relevant for lending requests.',
                          example: 'false',
                        }),
                      user_request: z
                        .object({
                          link: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).",
                          required: [],
                        }),
                      volume: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The volume number of the journal that contains the article.',
                          example: '10',
                        }),
                      willing_to_pay: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether patron is willing to pay. Currently not relevant for lending requests.',
                          example: 'false',
                        }),
                      year: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Publication date of the requested resource.',
                          example: '2010',
                        }),
                    })
                    .openapi({
                      description: 'Resource sharing request Object.',
                      xml: { name: 'user_resource_sharing_request' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'UserResourceSharingRequest object.' }),
            })
            .openapi({
              description: 'A list of resource sharing requests.',
              xml: { name: 'user_resource_sharing_requests' },
              required: [],
            }),
        },
        'application/xml': {
          schema: z
            .object({
              total_record_count: z
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
                  description: 'The total number of resource sharing requests in the given list.',
                  example: '',
                  xml: { attribute: true },
                }),
              user_resource_sharing_request: z
                .array(
                  z
                    .object({
                      additional_barcode: z
                        .array(
                          z
                            .string()
                            .openapi({
                              example: '00023705571000021',
                              xml: { name: 'additional_barcode' },
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'List of additional barcodes. Note that the first one appears in the main barcode field.',
                          xml: { name: 'additional_barcodes', wrapped: true },
                        }),
                      additional_person_name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name of an additional contact.',
                          example: 'John Smith',
                        }),
                      agree_to_copyright_terms: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether the requester has agreed to the copyright terms. Mandatory for borrowing requests. Currently not relevant for lending requests.',
                          example: 'true',
                        }),
                      allow_other_formats: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether other formats besides the value in format field are acceptable. Default is false.',
                          example: 'true',
                        }),
                      author: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Author of the requested resource.',
                          example: 'John Smith',
                        }),
                      author_initials: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Author initials of the requested resource.',
                          example: 'J.S',
                        }),
                      barcode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Barcode of the requested resource.',
                          example: '00023705571000021',
                        }),
                      bib_note: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The note of the bibliographic record.',
                          example: '',
                        }),
                      call_number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The call number of the book. Indicates the library shelf on which the books are located.',
                          example: '1',
                        }),
                      chapter: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The chapter number in the journal that contains the article.',
                          example: '4',
                        }),
                      chapter_author: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'For a book chapter, the author of this chapter.',
                          example: 'John Smith',
                        }),
                      chapter_title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'For a book chapter, the title of this chapter.',
                          example: 'Chapter title',
                        }),
                      citation_type: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'BK', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.",
                          required: [],
                        }),
                      copyright_status: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'APPROVED', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.",
                          required: [],
                        }),
                      created_date: z.iso
                        .date()
                        .exactOptional()
                        .openapi({
                          description: 'The request creation date.',
                          example: '2013-11-12Z',
                        }),
                      created_time: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'The request creation time.',
                          example: '2019-12-18T14:36:48.659Z',
                        }),
                      doi: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The doi of the requested resource.',
                          example: '',
                        }),
                      edition: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The edition of the requested resource.',
                          example: '1',
                        }),
                      editor: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The editor of the book (typically used for books where chapters have different authors).',
                          example: 'John Smith',
                        }),
                      end_page: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The end page of the requested resource.',
                          example: '49',
                        }),
                      external_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'External identifier of the resource sharing request. Mandatory when creating a lending request.',
                          example: '12013330000874120',
                        }),
                      format: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'PHYSICAL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).',
                          required: [],
                        }),
                      fund: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'The code of the fund. Not relevant for lending requests.',
                          required: [],
                        }),
                      has_active_notes: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether the request has active notes. Output parameter.',
                          example: 'false',
                        }),
                      isbn: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'ISBN of the requested resource.',
                          example: '0674824253 (alk. paper)',
                        }),
                      issn: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'ISSN of the requested resource.', example: '' }),
                      issue: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The issue of the requested resource.',
                          example: '',
                        }),
                      journal_title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The title of the journal. Relevant when an article is requested.',
                          example: 'Journal title',
                        }),
                      last_interest_date: z.iso
                        .date()
                        .exactOptional()
                        .openapi({
                          description: 'Last date the request is needed. Optional.',
                          example: '2013-12-13Z',
                        }),
                      last_modified_date: z.iso
                        .date()
                        .exactOptional()
                        .openapi({
                          description: 'Date by which the last change to the request was made.',
                          example: '2015-10-11Z',
                        }),
                      last_modified_time: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'Time by which the last change to the request was made.',
                          example: '2019-12-18T14:36:48.659Z',
                        }),
                      lcc_number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The library of congress number of the book.',
                          example: '102188800001',
                        }),
                      level_of_service: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'NORMAL_LOCAL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.",
                          required: [],
                        }),
                      lost_damaged_fee: z
                        .object({
                          currency: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                            })
                            .openapi({
                              description:
                                "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                              required: [],
                            }),
                          sum: z
                            .float64()
                            .openapi({ description: 'The total sum.', example: '0.00' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '',
                          required: ['sum', 'currency'],
                          xml: { name: 'amount' },
                        }),
                      maximum_fee: z
                        .float32()
                        .exactOptional()
                        .openapi({
                          description:
                            'Maximum fee the user is willing to pay for the request. Currently not relevant for lending requests.',
                          example: '2000.0',
                        }),
                      mms_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'MMS ID of the requested resource. Borrowing request: this is relevant after physical material has arrived. Lending request: if supplied when creating a request, the request will be attached to this bib record. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).',
                          example: '9933745180101020',
                        }),
                      need_patron_info: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether patron information is needed. Not relevant for lending requests.',
                          example: 'true',
                        }),
                      note: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'General note.', example: '' }),
                      oclc_number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The oclc number of the book.',
                          example: '100100100',
                        }),
                      other_standard_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The other standard id of the requested resource.',
                          example: '100100100',
                        }),
                      owner: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The resource sharing library code. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed). Borrowing request: Optional. Used only when there are more than one resource sharing library defined for the user. Lending request: Mandatory.',
                          example: 'John Smith',
                        }),
                      pages: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The relevant pages of the requested resource.',
                          example: '',
                        }),
                      part: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The part of the requested resource.',
                          example: '',
                        }),
                      partner: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '10218885421021', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.',
                          required: [],
                        }),
                      pickup_location: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ONL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.',
                          required: [],
                        }),
                      pickup_location_type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The pickup location type. The pickup location type. Possible values are: LIBRARY, CIRCULATION_DESK.',
                          example: 'LIBRARY',
                        }),
                      place_of_publication: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The publication place of the requested resource.',
                          example: 'Cambridge, Mass. :',
                        }),
                      pmid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The pmid of the requested resource.',
                          example: '1284442031021',
                        }),
                      preferred_send_method: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ARIEL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.",
                          required: [],
                        }),
                      printed: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether the request is printed. Output parameter. Relevant for lending requests.',
                          example: 'true',
                        }),
                      publisher: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Publisher of the requested resource.',
                          example: 'John Smith',
                        }),
                      reading_room: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.',
                          required: [],
                        }),
                      receive_cost: z
                        .object({
                          currency: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                            })
                            .openapi({
                              description:
                                "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                              required: [],
                            }),
                          sum: z
                            .float64()
                            .openapi({ description: 'The total sum.', example: '0.00' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '',
                          required: ['sum', 'currency'],
                          xml: { name: 'amount' },
                        }),
                      remote_record_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The remote record id of the requested resource.',
                          example: '100100100',
                        }),
                      reported: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether the request is reported. Output parameter. Relevant for lending requests.',
                          example: 'false',
                        }),
                      request_cost: z
                        .object({
                          currency: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                            })
                            .openapi({
                              description:
                                "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                              required: [],
                            }),
                          sum: z
                            .float64()
                            .openapi({ description: 'The total sum.', example: '0.00' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '',
                          required: ['sum', 'currency'],
                          xml: { name: 'amount' },
                        }),
                      request_id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Internal identifier of the resource sharing request in Alma, generated by Alma. Should be used in subsequent queries regarding the request.',
                          example: '1001966830001021',
                        }),
                      requested_language: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ml', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.',
                          required: [],
                        }),
                      requested_media: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "A description of the requested media. possible values are 1-7 (codes from request media code table), and the codes from 'AdditionalRequestedMedia' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). The valid values are according to the Requested media definition mapping table.",
                          example: '1',
                        }),
                      requester: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Jane doe', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.',
                          required: [],
                        }),
                      rs_note: z
                        .array(
                          z
                            .object({
                              content: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: "The note's text. Mandatory.",
                                  example: '',
                                }),
                              created_by: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'The creator of the note.', example: '' }),
                              created_date: z.iso
                                .date()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The creation date of the note. Default is the current date.',
                                  example: '2024-05-30Z',
                                }),
                            })
                            .openapi({
                              description: 'Specific related note.',
                              xml: { name: 'rs_note' },
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'List of related notes that appear in the Notes tab in the UI..',
                          xml: { name: 'rs_notes', wrapped: true },
                        }),
                      series_title_number: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The series title number of the requested resource.',
                          example: '100',
                        }),
                      shipping_cost: z
                        .object({
                          currency: z
                            .object({
                              desc: z
                                .string()
                                .exactOptional()
                                .openapi({ xml: { attribute: true } }),
                              value: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                            })
                            .openapi({
                              description:
                                "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                              required: [],
                            }),
                          sum: z
                            .float64()
                            .openapi({ description: 'The total sum.', example: '0.00' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '',
                          required: ['sum', 'currency'],
                          xml: { name: 'amount' },
                        }),
                      source: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The source of the requested resource.',
                          example: '',
                        }),
                      specific_edition: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether edition is used in ISO Protocol and in Locate process. Default is true. Relevant when a book is requested.',
                          example: 'true',
                        }),
                      start_page: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The relevant start page of the requested resource.',
                          example: '2',
                        }),
                      status: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'ACTIVE', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).',
                          required: [],
                        }),
                      supplied_format: z
                        .object({
                          desc: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'DIGITAL', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.',
                          required: [],
                        }),
                      text_email: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Borrowing request: In use with alternative_address only. In use when sending in digital format. Lending request: Requester's Email.",
                          example: '',
                        }),
                      text_postal_1: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'In use with alternative_address only. Not relevant for lending requests.',
                          example: '',
                        }),
                      text_postal_2: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'In use with alternative_address only. Not relevant for lending requests.',
                          example: '',
                        }),
                      text_postal_3: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'In use with alternative_address only. Not relevant for lending requests.',
                          example: '',
                        }),
                      text_postal_4: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'In use with alternative_address only. Not relevant for lending requests.',
                          example: '',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Title of the requested resource. Mandatory unless mms_id is supplied.',
                          example: 'Harry Potter',
                        }),
                      use_alternative_address: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'An indication of whether the delivery should be to an alternative address. Default is false. Not relevant for lending requests.',
                          example: 'false',
                        }),
                      user_request: z
                        .object({
                          link: z
                            .string()
                            .exactOptional()
                            .openapi({ xml: { attribute: true } }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '', xml: { name: 'xml_value' } }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).",
                          required: [],
                        }),
                      volume: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The volume number of the journal that contains the article.',
                          example: '10',
                        }),
                      willing_to_pay: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indication whether patron is willing to pay. Currently not relevant for lending requests.',
                          example: 'false',
                        }),
                      year: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Publication date of the requested resource.',
                          example: '2010',
                        }),
                    })
                    .openapi({
                      description: 'Resource sharing request Object.',
                      xml: { name: 'user_resource_sharing_request' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'UserResourceSharingRequest object.' }),
            })
            .openapi({
              description: 'A list of resource sharing requests.',
              xml: { name: 'user_resource_sharing_requests' },
              required: [],
            }),
        },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: {
      description:
        "Bad Request\n\n402119 - 'General error.'\n\n401664 - 'Mandatory field is missing: X.'\n\n40166414 - 'The parameter 'X' is mandatory. Valid options are: Y.'",
    },
    500: { description: 'Internal Server Error' },
  },
})

export const postAlmawsV1TaskListsRsLendingRequestsRoute = createRoute({
  method: 'post',
  path: '/almaws/v1/task-lists/rs/lending-requests',
  tags: ['Lending Requests'],
  summary: 'Act on Lending Requests',
  description:
    'This API preforms the requested action on a list (specified by given filters) of lending requests in Alma',
  operationId: 'post/almaws/v1/task-lists/rs/lending-requests',
  request: {
    query: z.object({
      library: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The resource sharing library from which lending requests should be retrieved. Mandatory. List of possible libraries can be retrieved using the [GET /almaws/v1/conf/libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
            in: 'query',
            name: 'library',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      op: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Operation to be preformed on the list of given requests. Currently the only supported action is 'mark_reported'. Mandatory.",
            in: 'query',
            name: 'op',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      status: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The status of lending requests to retrieve. Optional. List of possible statuses can be retrieved using the [GET almaws/v1/conf/code-tables/MandatoryLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).and the  [GET almaws/v1/conf/code-tables/OptionalLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
            in: 'query',
            name: 'status',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      printed: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The 'printed' value of lending requests to retrieve. Optional. Possible values: Y, N.",
            in: 'query',
            name: 'printed',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      reported: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The 'reported' value of lending requests to retrieve. Optional. Possible values: Y, N.",
            in: 'query',
            name: 'reported',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      partner: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The partner value. Only lending requests from this partner should be. Optional. List of possible partners can be retrieved using the [GET almaws/v1/partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07).',
            in: 'query',
            name: 'partner',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      requested_format: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Requested format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
            in: 'query',
            name: 'requested_format',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      supplied_format: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Supplied Format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).',
            in: 'query',
            name: 'supplied_format',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK - This method returns an object based on rest_user_resource_sharing_request.xsd. See [here](/alma/apis/docs/xsd/rest_user_resource_sharing_request.xsd)',
      content: {
        'application/json': {
          schema: z
            .object({
              additional_barcode: z
                .array(
                  z
                    .string()
                    .openapi({ example: '00023705571000021', xml: { name: 'additional_barcode' } }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'List of additional barcodes. Note that the first one appears in the main barcode field.',
                  xml: { name: 'additional_barcodes', wrapped: true },
                }),
              additional_person_name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of an additional contact.',
                  example: 'John Smith',
                }),
              agree_to_copyright_terms: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether the requester has agreed to the copyright terms. Mandatory for borrowing requests. Currently not relevant for lending requests.',
                  example: 'true',
                }),
              allow_other_formats: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether other formats besides the value in format field are acceptable. Default is false.',
                  example: 'true',
                }),
              author: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Author of the requested resource.',
                  example: 'John Smith',
                }),
              author_initials: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Author initials of the requested resource.',
                  example: 'J.S',
                }),
              barcode: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Barcode of the requested resource.',
                  example: '00023705571000021',
                }),
              bib_note: z
                .string()
                .exactOptional()
                .openapi({ description: 'The note of the bibliographic record.', example: '' }),
              call_number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The call number of the book. Indicates the library shelf on which the books are located.',
                  example: '1',
                }),
              chapter: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The chapter number in the journal that contains the article.',
                  example: '4',
                }),
              chapter_author: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'For a book chapter, the author of this chapter.',
                  example: 'John Smith',
                }),
              chapter_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'For a book chapter, the title of this chapter.',
                  example: 'Chapter title',
                }),
              citation_type: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'BK', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.",
                  required: [],
                }),
              copyright_status: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'APPROVED', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.",
                  required: [],
                }),
              created_date: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'The request creation date.', example: '2013-11-12Z' }),
              created_time: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The request creation time.',
                  example: '2019-12-18T14:36:48.659Z',
                }),
              doi: z
                .string()
                .exactOptional()
                .openapi({ description: 'The doi of the requested resource.', example: '' }),
              edition: z
                .string()
                .exactOptional()
                .openapi({ description: 'The edition of the requested resource.', example: '1' }),
              editor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The editor of the book (typically used for books where chapters have different authors).',
                  example: 'John Smith',
                }),
              end_page: z
                .string()
                .exactOptional()
                .openapi({ description: 'The end page of the requested resource.', example: '49' }),
              external_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'External identifier of the resource sharing request. Mandatory when creating a lending request.',
                  example: '12013330000874120',
                }),
              format: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'PHYSICAL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).',
                  required: [],
                }),
              fund: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description: 'The code of the fund. Not relevant for lending requests.',
                  required: [],
                }),
              has_active_notes: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Indication whether the request has active notes. Output parameter.',
                  example: 'false',
                }),
              isbn: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ISBN of the requested resource.',
                  example: '0674824253 (alk. paper)',
                }),
              issn: z
                .string()
                .exactOptional()
                .openapi({ description: 'ISSN of the requested resource.', example: '' }),
              issue: z
                .string()
                .exactOptional()
                .openapi({ description: 'The issue of the requested resource.', example: '' }),
              journal_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The title of the journal. Relevant when an article is requested.',
                  example: 'Journal title',
                }),
              last_interest_date: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'Last date the request is needed. Optional.',
                  example: '2013-12-13Z',
                }),
              last_modified_date: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'Date by which the last change to the request was made.',
                  example: '2015-10-11Z',
                }),
              last_modified_time: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Time by which the last change to the request was made.',
                  example: '2019-12-18T14:36:48.659Z',
                }),
              lcc_number: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The library of congress number of the book.',
                  example: '102188800001',
                }),
              level_of_service: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'NORMAL_LOCAL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.",
                  required: [],
                }),
              lost_damaged_fee: z
                .object({
                  currency: z
                    .object({
                      desc: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                    })
                    .openapi({
                      description:
                        "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                      required: [],
                    }),
                  sum: z.float64().openapi({ description: 'The total sum.', example: '0.00' }),
                })
                .exactOptional()
                .openapi({
                  description: '',
                  required: ['sum', 'currency'],
                  xml: { name: 'amount' },
                }),
              maximum_fee: z
                .float32()
                .exactOptional()
                .openapi({
                  description:
                    'Maximum fee the user is willing to pay for the request. Currently not relevant for lending requests.',
                  example: '2000.0',
                }),
              mms_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'MMS ID of the requested resource. Borrowing request: this is relevant after physical material has arrived. Lending request: if supplied when creating a request, the request will be attached to this bib record. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).',
                  example: '9933745180101020',
                }),
              need_patron_info: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether patron information is needed. Not relevant for lending requests.',
                  example: 'true',
                }),
              note: z
                .string()
                .exactOptional()
                .openapi({ description: 'General note.', example: '' }),
              oclc_number: z
                .string()
                .exactOptional()
                .openapi({ description: 'The oclc number of the book.', example: '100100100' }),
              other_standard_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The other standard id of the requested resource.',
                  example: '100100100',
                }),
              owner: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The resource sharing library code. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed). Borrowing request: Optional. Used only when there are more than one resource sharing library defined for the user. Lending request: Mandatory.',
                  example: 'John Smith',
                }),
              pages: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The relevant pages of the requested resource.',
                  example: '',
                }),
              part: z
                .string()
                .exactOptional()
                .openapi({ description: 'The part of the requested resource.', example: '' }),
              partner: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '10218885421021', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.',
                  required: [],
                }),
              pickup_location: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ONL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.',
                  required: [],
                }),
              pickup_location_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The pickup location type. The pickup location type. Possible values are: LIBRARY, CIRCULATION_DESK.',
                  example: 'LIBRARY',
                }),
              place_of_publication: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The publication place of the requested resource.',
                  example: 'Cambridge, Mass. :',
                }),
              pmid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The pmid of the requested resource.',
                  example: '1284442031021',
                }),
              preferred_send_method: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ARIEL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.",
                  required: [],
                }),
              printed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether the request is printed. Output parameter. Relevant for lending requests.',
                  example: 'true',
                }),
              publisher: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Publisher of the requested resource.',
                  example: 'John Smith',
                }),
              reading_room: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.',
                  required: [],
                }),
              receive_cost: z
                .object({
                  currency: z
                    .object({
                      desc: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                    })
                    .openapi({
                      description:
                        "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                      required: [],
                    }),
                  sum: z.float64().openapi({ description: 'The total sum.', example: '0.00' }),
                })
                .exactOptional()
                .openapi({
                  description: '',
                  required: ['sum', 'currency'],
                  xml: { name: 'amount' },
                }),
              remote_record_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The remote record id of the requested resource.',
                  example: '100100100',
                }),
              reported: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether the request is reported. Output parameter. Relevant for lending requests.',
                  example: 'false',
                }),
              request_cost: z
                .object({
                  currency: z
                    .object({
                      desc: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                    })
                    .openapi({
                      description:
                        "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                      required: [],
                    }),
                  sum: z.float64().openapi({ description: 'The total sum.', example: '0.00' }),
                })
                .exactOptional()
                .openapi({
                  description: '',
                  required: ['sum', 'currency'],
                  xml: { name: 'amount' },
                }),
              request_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Internal identifier of the resource sharing request in Alma, generated by Alma. Should be used in subsequent queries regarding the request.',
                  example: '1001966830001021',
                }),
              requested_language: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ml', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.',
                  required: [],
                }),
              requested_media: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A description of the requested media. possible values are 1-7 (codes from request media code table), and the codes from 'AdditionalRequestedMedia' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). The valid values are according to the Requested media definition mapping table.",
                  example: '1',
                }),
              requester: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Jane doe', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.',
                  required: [],
                }),
              rs_note: z
                .array(
                  z
                    .object({
                      content: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "The note's text. Mandatory.", example: '' }),
                      created_by: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The creator of the note.', example: '' }),
                      created_date: z.iso
                        .date()
                        .exactOptional()
                        .openapi({
                          description:
                            'The creation date of the note. Default is the current date.',
                          example: '2024-05-30Z',
                        }),
                    })
                    .openapi({
                      description: 'Specific related note.',
                      xml: { name: 'rs_note' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'List of related notes that appear in the Notes tab in the UI..',
                  xml: { name: 'rs_notes', wrapped: true },
                }),
              series_title_number: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The series title number of the requested resource.',
                  example: '100',
                }),
              shipping_cost: z
                .object({
                  currency: z
                    .object({
                      desc: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                    })
                    .openapi({
                      description:
                        "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                      required: [],
                    }),
                  sum: z.float64().openapi({ description: 'The total sum.', example: '0.00' }),
                })
                .exactOptional()
                .openapi({
                  description: '',
                  required: ['sum', 'currency'],
                  xml: { name: 'amount' },
                }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: 'The source of the requested resource.', example: '' }),
              specific_edition: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether edition is used in ISO Protocol and in Locate process. Default is true. Relevant when a book is requested.',
                  example: 'true',
                }),
              start_page: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The relevant start page of the requested resource.',
                  example: '2',
                }),
              status: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ACTIVE', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).',
                  required: [],
                }),
              supplied_format: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'DIGITAL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.',
                  required: [],
                }),
              text_email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Borrowing request: In use with alternative_address only. In use when sending in digital format. Lending request: Requester's Email.",
                  example: '',
                }),
              text_postal_1: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In use with alternative_address only. Not relevant for lending requests.',
                  example: '',
                }),
              text_postal_2: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In use with alternative_address only. Not relevant for lending requests.',
                  example: '',
                }),
              text_postal_3: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In use with alternative_address only. Not relevant for lending requests.',
                  example: '',
                }),
              text_postal_4: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In use with alternative_address only. Not relevant for lending requests.',
                  example: '',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Title of the requested resource. Mandatory unless mms_id is supplied.',
                  example: 'Harry Potter',
                }),
              use_alternative_address: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'An indication of whether the delivery should be to an alternative address. Default is false. Not relevant for lending requests.',
                  example: 'false',
                }),
              user_request: z
                .object({
                  link: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).",
                  required: [],
                }),
              volume: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The volume number of the journal that contains the article.',
                  example: '10',
                }),
              willing_to_pay: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether patron is willing to pay. Currently not relevant for lending requests.',
                  example: 'false',
                }),
              year: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Publication date of the requested resource.',
                  example: '2010',
                }),
            })
            .openapi({
              description: 'Resource sharing request Object.',
              xml: { name: 'user_resource_sharing_request' },
              required: [],
            }),
        },
        'application/xml': {
          schema: z
            .object({
              additional_barcode: z
                .array(
                  z
                    .string()
                    .openapi({ example: '00023705571000021', xml: { name: 'additional_barcode' } }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'List of additional barcodes. Note that the first one appears in the main barcode field.',
                  xml: { name: 'additional_barcodes', wrapped: true },
                }),
              additional_person_name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of an additional contact.',
                  example: 'John Smith',
                }),
              agree_to_copyright_terms: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether the requester has agreed to the copyright terms. Mandatory for borrowing requests. Currently not relevant for lending requests.',
                  example: 'true',
                }),
              allow_other_formats: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether other formats besides the value in format field are acceptable. Default is false.',
                  example: 'true',
                }),
              author: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Author of the requested resource.',
                  example: 'John Smith',
                }),
              author_initials: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Author initials of the requested resource.',
                  example: 'J.S',
                }),
              barcode: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Barcode of the requested resource.',
                  example: '00023705571000021',
                }),
              bib_note: z
                .string()
                .exactOptional()
                .openapi({ description: 'The note of the bibliographic record.', example: '' }),
              call_number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The call number of the book. Indicates the library shelf on which the books are located.',
                  example: '1',
                }),
              chapter: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The chapter number in the journal that contains the article.',
                  example: '4',
                }),
              chapter_author: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'For a book chapter, the author of this chapter.',
                  example: 'John Smith',
                }),
              chapter_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'For a book chapter, the title of this chapter.',
                  example: 'Chapter title',
                }),
              citation_type: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'BK', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.",
                  required: [],
                }),
              copyright_status: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'APPROVED', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.",
                  required: [],
                }),
              created_date: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'The request creation date.', example: '2013-11-12Z' }),
              created_time: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The request creation time.',
                  example: '2019-12-18T14:36:48.659Z',
                }),
              doi: z
                .string()
                .exactOptional()
                .openapi({ description: 'The doi of the requested resource.', example: '' }),
              edition: z
                .string()
                .exactOptional()
                .openapi({ description: 'The edition of the requested resource.', example: '1' }),
              editor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The editor of the book (typically used for books where chapters have different authors).',
                  example: 'John Smith',
                }),
              end_page: z
                .string()
                .exactOptional()
                .openapi({ description: 'The end page of the requested resource.', example: '49' }),
              external_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'External identifier of the resource sharing request. Mandatory when creating a lending request.',
                  example: '12013330000874120',
                }),
              format: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'PHYSICAL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).',
                  required: [],
                }),
              fund: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description: 'The code of the fund. Not relevant for lending requests.',
                  required: [],
                }),
              has_active_notes: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Indication whether the request has active notes. Output parameter.',
                  example: 'false',
                }),
              isbn: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ISBN of the requested resource.',
                  example: '0674824253 (alk. paper)',
                }),
              issn: z
                .string()
                .exactOptional()
                .openapi({ description: 'ISSN of the requested resource.', example: '' }),
              issue: z
                .string()
                .exactOptional()
                .openapi({ description: 'The issue of the requested resource.', example: '' }),
              journal_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The title of the journal. Relevant when an article is requested.',
                  example: 'Journal title',
                }),
              last_interest_date: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'Last date the request is needed. Optional.',
                  example: '2013-12-13Z',
                }),
              last_modified_date: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'Date by which the last change to the request was made.',
                  example: '2015-10-11Z',
                }),
              last_modified_time: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Time by which the last change to the request was made.',
                  example: '2019-12-18T14:36:48.659Z',
                }),
              lcc_number: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The library of congress number of the book.',
                  example: '102188800001',
                }),
              level_of_service: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'NORMAL_LOCAL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.",
                  required: [],
                }),
              lost_damaged_fee: z
                .object({
                  currency: z
                    .object({
                      desc: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                    })
                    .openapi({
                      description:
                        "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                      required: [],
                    }),
                  sum: z.float64().openapi({ description: 'The total sum.', example: '0.00' }),
                })
                .exactOptional()
                .openapi({
                  description: '',
                  required: ['sum', 'currency'],
                  xml: { name: 'amount' },
                }),
              maximum_fee: z
                .float32()
                .exactOptional()
                .openapi({
                  description:
                    'Maximum fee the user is willing to pay for the request. Currently not relevant for lending requests.',
                  example: '2000.0',
                }),
              mms_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'MMS ID of the requested resource. Borrowing request: this is relevant after physical material has arrived. Lending request: if supplied when creating a request, the request will be attached to this bib record. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).',
                  example: '9933745180101020',
                }),
              need_patron_info: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether patron information is needed. Not relevant for lending requests.',
                  example: 'true',
                }),
              note: z
                .string()
                .exactOptional()
                .openapi({ description: 'General note.', example: '' }),
              oclc_number: z
                .string()
                .exactOptional()
                .openapi({ description: 'The oclc number of the book.', example: '100100100' }),
              other_standard_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The other standard id of the requested resource.',
                  example: '100100100',
                }),
              owner: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The resource sharing library code. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed). Borrowing request: Optional. Used only when there are more than one resource sharing library defined for the user. Lending request: Mandatory.',
                  example: 'John Smith',
                }),
              pages: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The relevant pages of the requested resource.',
                  example: '',
                }),
              part: z
                .string()
                .exactOptional()
                .openapi({ description: 'The part of the requested resource.', example: '' }),
              partner: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '10218885421021', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.',
                  required: [],
                }),
              pickup_location: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ONL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.',
                  required: [],
                }),
              pickup_location_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The pickup location type. The pickup location type. Possible values are: LIBRARY, CIRCULATION_DESK.',
                  example: 'LIBRARY',
                }),
              place_of_publication: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The publication place of the requested resource.',
                  example: 'Cambridge, Mass. :',
                }),
              pmid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The pmid of the requested resource.',
                  example: '1284442031021',
                }),
              preferred_send_method: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ARIEL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.",
                  required: [],
                }),
              printed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether the request is printed. Output parameter. Relevant for lending requests.',
                  example: 'true',
                }),
              publisher: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Publisher of the requested resource.',
                  example: 'John Smith',
                }),
              reading_room: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.',
                  required: [],
                }),
              receive_cost: z
                .object({
                  currency: z
                    .object({
                      desc: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                    })
                    .openapi({
                      description:
                        "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                      required: [],
                    }),
                  sum: z.float64().openapi({ description: 'The total sum.', example: '0.00' }),
                })
                .exactOptional()
                .openapi({
                  description: '',
                  required: ['sum', 'currency'],
                  xml: { name: 'amount' },
                }),
              remote_record_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The remote record id of the requested resource.',
                  example: '100100100',
                }),
              reported: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether the request is reported. Output parameter. Relevant for lending requests.',
                  example: 'false',
                }),
              request_cost: z
                .object({
                  currency: z
                    .object({
                      desc: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                    })
                    .openapi({
                      description:
                        "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                      required: [],
                    }),
                  sum: z.float64().openapi({ description: 'The total sum.', example: '0.00' }),
                })
                .exactOptional()
                .openapi({
                  description: '',
                  required: ['sum', 'currency'],
                  xml: { name: 'amount' },
                }),
              request_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Internal identifier of the resource sharing request in Alma, generated by Alma. Should be used in subsequent queries regarding the request.',
                  example: '1001966830001021',
                }),
              requested_language: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ml', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.',
                  required: [],
                }),
              requested_media: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A description of the requested media. possible values are 1-7 (codes from request media code table), and the codes from 'AdditionalRequestedMedia' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). The valid values are according to the Requested media definition mapping table.",
                  example: '1',
                }),
              requester: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Jane doe', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.',
                  required: [],
                }),
              rs_note: z
                .array(
                  z
                    .object({
                      content: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "The note's text. Mandatory.", example: '' }),
                      created_by: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The creator of the note.', example: '' }),
                      created_date: z.iso
                        .date()
                        .exactOptional()
                        .openapi({
                          description:
                            'The creation date of the note. Default is the current date.',
                          example: '2024-05-30Z',
                        }),
                    })
                    .openapi({
                      description: 'Specific related note.',
                      xml: { name: 'rs_note' },
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'List of related notes that appear in the Notes tab in the UI..',
                  xml: { name: 'rs_notes', wrapped: true },
                }),
              series_title_number: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The series title number of the requested resource.',
                  example: '100',
                }),
              shipping_cost: z
                .object({
                  currency: z
                    .object({
                      desc: z
                        .string()
                        .exactOptional()
                        .openapi({ xml: { attribute: true } }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'USD', xml: { name: 'xml_value' } }),
                    })
                    .openapi({
                      description:
                        "The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).",
                      required: [],
                    }),
                  sum: z.float64().openapi({ description: 'The total sum.', example: '0.00' }),
                })
                .exactOptional()
                .openapi({
                  description: '',
                  required: ['sum', 'currency'],
                  xml: { name: 'amount' },
                }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: 'The source of the requested resource.', example: '' }),
              specific_edition: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether edition is used in ISO Protocol and in Locate process. Default is true. Relevant when a book is requested.',
                  example: 'true',
                }),
              start_page: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The relevant start page of the requested resource.',
                  example: '2',
                }),
              status: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ACTIVE', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).',
                  required: [],
                }),
              supplied_format: z
                .object({
                  desc: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'DIGITAL', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.',
                  required: [],
                }),
              text_email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Borrowing request: In use with alternative_address only. In use when sending in digital format. Lending request: Requester's Email.",
                  example: '',
                }),
              text_postal_1: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In use with alternative_address only. Not relevant for lending requests.',
                  example: '',
                }),
              text_postal_2: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In use with alternative_address only. Not relevant for lending requests.',
                  example: '',
                }),
              text_postal_3: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In use with alternative_address only. Not relevant for lending requests.',
                  example: '',
                }),
              text_postal_4: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In use with alternative_address only. Not relevant for lending requests.',
                  example: '',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Title of the requested resource. Mandatory unless mms_id is supplied.',
                  example: 'Harry Potter',
                }),
              use_alternative_address: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'An indication of whether the delivery should be to an alternative address. Default is false. Not relevant for lending requests.',
                  example: 'false',
                }),
              user_request: z
                .object({
                  link: z
                    .string()
                    .exactOptional()
                    .openapi({ xml: { attribute: true } }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '', xml: { name: 'xml_value' } }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).",
                  required: [],
                }),
              volume: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The volume number of the journal that contains the article.',
                  example: '10',
                }),
              willing_to_pay: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indication whether patron is willing to pay. Currently not relevant for lending requests.',
                  example: 'false',
                }),
              year: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Publication date of the requested resource.',
                  example: '2010',
                }),
            })
            .openapi({
              description: 'Resource sharing request Object.',
              xml: { name: 'user_resource_sharing_request' },
              required: [],
            }),
        },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: {
      description:
        "Bad Request\n\n402119 - 'General error.'\n\n401666 - 'X parameter is not valid.'\n\n401664 - 'Mandatory field is missing: X.'\n\n40166414 - 'The parameter 'X' is mandatory. Valid options are: Y.'",
    },
    500: { description: 'Internal Server Error' },
  },
})

export const getAlmawsV1TaskListsTestRoute = createRoute({
  method: 'get',
  path: '/almaws/v1/task-lists/test',
  tags: ['Test'],
  summary: 'GET Task-lists Test API',
  description:
    'This API is used to test if the API key was configured correctly.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>GET - OK - institutionCode: 01ABC_INST</test>',
  operationId: 'get/almaws/v1/task-lists/test',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.object({}) },
        'application/xml': { schema: z.object({}) },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: { description: 'Bad Request\n\n' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAlmawsV1TaskListsTestRoute = createRoute({
  method: 'post',
  path: '/almaws/v1/task-lists/test',
  tags: ['Test'],
  summary: 'POST Task-lists Test API',
  description:
    'This API is used to test if the API key was configured correctly, including read/write permissions.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>POST - OK</test>',
  operationId: 'post/almaws/v1/task-lists/test',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.object({}) },
        'application/xml': { schema: z.object({}) },
      },
      headers: z.object({ 'X-Exl-Api-Remaining': RemainingHeaderSchema }),
    },
    400: { description: 'Bad Request\n\n' },
    500: { description: 'Internal Server Error' },
  },
})
