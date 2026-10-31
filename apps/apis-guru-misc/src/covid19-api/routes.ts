import { createRoute, z } from '@hono/zod-openapi'

const CountryReadSchema = z
  .object({
    confirmed: z.int().exactOptional(),
    critical: z.int().exactOptional(),
    deaths: z.int().exactOptional(),
    lastChange: z.iso.datetime({ offset: true }).exactOptional(),
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    latitude: z.number().exactOptional(),
    longitude: z.number().exactOptional(),
    name: z.string().exactOptional(),
    recovered: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('CountryRead')

const DailyReportReadSchema = z.object({}).openapi({ description: '' }).openapi('DailyReportRead')

export const getCountryRoute = createRoute({
  method: 'get',
  path: '/country',
  tags: ['Country'],
  summary: 'getLatestCountryDataByName',
  description: 'Get latest data for specific country. Country name and format are in parametars.',
  operationId: 'getLatestCountryDataByName',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the country',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'query',
            name: 'format',
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Latest data about COVID-19 for selected country',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                confirmed: z.int().exactOptional(),
                country: z.string().exactOptional(),
                critical: z.int().exactOptional(),
                deaths: z.int().exactOptional(),
                lastChange: z.iso.datetime({ offset: true }).exactOptional(),
                lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: z.array(
            z
              .object({
                confirmed: z.int().exactOptional(),
                country: z.string().exactOptional(),
                critical: z.int().exactOptional(),
                deaths: z.int().exactOptional(),
                lastChange: z.iso.datetime({ offset: true }).exactOptional(),
                lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getCountryAllRoute = createRoute({
  method: 'get',
  path: '/country/all',
  tags: ['Country'],
  summary: 'getLatestAllCountries',
  description: 'Get latest data from all countries.',
  operationId: 'getLatestAllCountries',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'query',
            name: 'format',
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns all countries with latest data about COVID-19',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                confirmed: z.int().exactOptional(),
                country: z.string().exactOptional(),
                critical: z.int().exactOptional(),
                deaths: z.int().exactOptional(),
                lastChange: z.iso.datetime({ offset: true }).exactOptional(),
                lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: z.array(
            z
              .object({
                confirmed: z.int().exactOptional(),
                country: z.string().exactOptional(),
                critical: z.int().exactOptional(),
                deaths: z.int().exactOptional(),
                lastChange: z.iso.datetime({ offset: true }).exactOptional(),
                lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getCountryCodeRoute = createRoute({
  method: 'get',
  path: '/country/code',
  tags: ['Country'],
  summary: 'getLatestCountryDataByCode',
  description:
    'Get latest data for specific country. Country code and format are in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.',
  operationId: 'getLatestCountryDataByCode',
  request: {
    query: z.object({
      code: z
        .string()
        .openapi({
          param: {
            description: 'Country code',
            in: 'query',
            name: 'code',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Latest data about COVID-19 for selected country',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                confirmed: z.int().exactOptional(),
                country: z.string().exactOptional(),
                critical: z.int().exactOptional(),
                deaths: z.int().exactOptional(),
                lastChange: z.iso.datetime({ offset: true }).exactOptional(),
                lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: z.array(
            z
              .object({
                confirmed: z.int().exactOptional(),
                country: z.string().exactOptional(),
                critical: z.int().exactOptional(),
                deaths: z.int().exactOptional(),
                lastChange: z.iso.datetime({ offset: true }).exactOptional(),
                lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getHelpCountriesRoute = createRoute({
  method: 'get',
  path: '/help/countries',
  tags: ['Help'],
  summary: 'getListOfCountries',
  description: 'Get name name, alpha-2, alpha-3 code, latitude and longitude for every country.',
  operationId: 'getListOfCountries',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'query',
            name: 'format',
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get name name, alpha-2, alpha-3 code, latitude and longitude for every country',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                'alpha-2-code': z.string().exactOptional(),
                'alpha-3-code': z.string().exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                name: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: z.array(
            z
              .object({
                'alpha-2-code': z.string().exactOptional(),
                'alpha-3-code': z.string().exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                name: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getReportCountryAllRoute = createRoute({
  method: 'get',
  path: '/report/country/all',
  tags: ['Country'],
  summary: 'getDailyReportAllCountries',
  description:
    'Get daily report for all countries. Date is mandatory parametar. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter.',
  operationId: 'getDailyReportAllCountries',
  request: {
    query: z.object({
      date: z
        .string()
        .openapi({
          param: {
            description: 'Date of the report.',
            in: 'query',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'date-format': z
        .enum(['YYYY-MM-DD', 'YYYY-DD-MM', 'DD-MM-YYYY', 'MM-DD-YYYY'])
        .default('YYYY-MM-DD')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.',
            in: 'query',
            name: 'date-format',
            required: false,
            schema: {
              default: 'YYYY-MM-DD',
              enum: ['YYYY-MM-DD', 'YYYY-DD-MM', 'DD-MM-YYYY', 'MM-DD-YYYY'],
              type: 'string',
            },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Daily report for COVID-19 for selected country.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                country: z.string().exactOptional(),
                date: z.string().exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                province: z
                  .array(
                    z
                      .object({
                        active: z.int().exactOptional(),
                        confirmed: z.int().exactOptional(),
                        deaths: z.int().exactOptional(),
                        recovered: z.int().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: z.array(
            z
              .object({
                country: z.string().exactOptional(),
                date: z.string().exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                province: z
                  .array(
                    z
                      .object({
                        active: z.int().exactOptional(),
                        confirmed: z.int().exactOptional(),
                        deaths: z.int().exactOptional(),
                        recovered: z.int().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getReportCountryCodeRoute = createRoute({
  method: 'get',
  path: '/report/country/code',
  tags: ['Country'],
  summary: 'getDailyReportByCountryCode',
  description:
    'Get daily report for specific country. Country code and date are mandatory in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter',
  operationId: 'getDailyReportByCountryCode',
  request: {
    query: z.object({
      code: z
        .string()
        .openapi({
          param: {
            description:
              'Country code. Country code is by ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.',
            in: 'query',
            name: 'code',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description: 'Date of the report.',
            in: 'query',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'date-format': z
        .enum(['YYYY-MM-DD', 'YYYY-DD-MM', 'DD-MM-YYYY', 'MM-DD-YYYY'])
        .default('YYYY-MM-DD')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.',
            in: 'query',
            name: 'date-format',
            required: false,
            schema: {
              default: 'YYYY-MM-DD',
              enum: ['YYYY-MM-DD', 'YYYY-DD-MM', 'DD-MM-YYYY', 'MM-DD-YYYY'],
              type: 'string',
            },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Daily report for COVID-19 for selected country.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                country: z.string().exactOptional(),
                date: z.string().exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                province: z
                  .array(
                    z
                      .object({
                        active: z.int().exactOptional(),
                        confirmed: z.int().exactOptional(),
                        deaths: z.int().exactOptional(),
                        recovered: z.int().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: z.array(
            z
              .object({
                country: z.string().exactOptional(),
                date: z.string().exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                province: z
                  .array(
                    z
                      .object({
                        active: z.int().exactOptional(),
                        confirmed: z.int().exactOptional(),
                        deaths: z.int().exactOptional(),
                        recovered: z.int().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getReportCountryNameRoute = createRoute({
  method: 'get',
  path: '/report/country/name',
  tags: ['Country'],
  summary: 'getDailyReportByCountryName',
  description:
    'Get daily report for specific country. Country name and date are mandatory in parametars. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter',
  operationId: 'getDailyReportByCountryName',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Country name.',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description: 'Date of the report.',
            in: 'query',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'date-format': z
        .enum(['YYYY-MM-DD', 'YYYY-DD-MM', 'DD-MM-YYYY', 'MM-DD-YYYY'])
        .default('YYYY-MM-DD')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.',
            in: 'query',
            name: 'date-format',
            required: false,
            schema: {
              default: 'YYYY-MM-DD',
              enum: ['YYYY-MM-DD', 'YYYY-DD-MM', 'DD-MM-YYYY', 'MM-DD-YYYY'],
              type: 'string',
            },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Daily report for COVID-19 for selected country.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                country: z.string().exactOptional(),
                date: z.string().exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                province: z
                  .array(
                    z
                      .object({
                        active: z.int().exactOptional(),
                        confirmed: z.int().exactOptional(),
                        deaths: z.int().exactOptional(),
                        recovered: z.int().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: z.array(
            z
              .object({
                country: z.string().exactOptional(),
                date: z.string().exactOptional(),
                latitude: z.float32().exactOptional(),
                longitude: z.float32().exactOptional(),
                province: z
                  .array(
                    z
                      .object({
                        active: z.int().exactOptional(),
                        confirmed: z.int().exactOptional(),
                        deaths: z.int().exactOptional(),
                        recovered: z.int().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getReportTotalsRoute = createRoute({
  method: 'get',
  path: '/report/totals',
  tags: ['Totals'],
  summary: 'getDailyReportTotals',
  description: 'Get daily report data for whole world.',
  operationId: 'getDailyReportTotals',
  request: {
    query: z.object({
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Date of the report. If you don't put this field all dates will be returned.",
            in: 'query',
            name: 'date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'date-format': z
        .enum(['YYYY-MM-DD', 'YYYY-DD-MM', 'DD-MM-YYYY', 'MM-DD-YYYY'])
        .default('YYYY-MM-DD')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.',
            in: 'query',
            name: 'date-format',
            required: false,
            schema: {
              default: 'YYYY-MM-DD',
              enum: ['YYYY-MM-DD', 'YYYY-DD-MM', 'DD-MM-YYYY', 'MM-DD-YYYY'],
              type: 'string',
            },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Format of the response. If you don't put this field JSON will be response format.",
            in: 'query',
            name: 'format',
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Data about COVID-19 for whole world',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                active: z.int().exactOptional(),
                confirmed: z.int().exactOptional(),
                critical: z.int().exactOptional(),
                date: z.string().exactOptional(),
                deaths: z.int().exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: z.array(
            z
              .object({
                active: z.int().exactOptional(),
                confirmed: z.int().exactOptional(),
                critical: z.int().exactOptional(),
                date: z.string().exactOptional(),
                deaths: z.int().exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getTotalsRoute = createRoute({
  method: 'get',
  path: '/totals',
  tags: ['Totals'],
  summary: 'getLatestTotals',
  description: 'Get latest data for whole world.',
  operationId: 'getLatestTotals',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the response',
            in: 'query',
            name: 'format',
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Latest data about COVID-19 for whole world',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                confirmed: z.int().exactOptional(),
                critical: z.int().exactOptional(),
                deaths: z.int().exactOptional(),
                lastChange: z.iso.datetime({ offset: true }).exactOptional(),
                lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: z.array(
            z
              .object({
                confirmed: z.int().exactOptional(),
                critical: z.int().exactOptional(),
                deaths: z.int().exactOptional(),
                lastChange: z.iso.datetime({ offset: true }).exactOptional(),
                lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
                recovered: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})
