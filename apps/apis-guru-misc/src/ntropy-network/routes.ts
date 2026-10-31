import { createRoute, z } from '@hono/zod-openapi'

export const getClassifierBusinessBatchIdRoute = createRoute({
  method: 'get',
  path: '/classifier/business/batch/{id}',
  tags: ['classifier', 'business', 'batch1'],
  summary: 'Get a batch of business transaction classification results.',
  description: 'Get a batch of business transaction classification results.',
  operationId: 'getABatchOfBusinessTransactionClassificationResults',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: '(Required) Batch id.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '247ee045-3d04-4b3c-872b-a9160b810f33', type: 'string' },
          },
          example: '247ee045-3d04-4b3c-872b-a9160b810f33',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned a batch of business transaction classification results.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ example: 'urn:uuid:d4b197a2-f2cf-8302-0ef8-566' }),
              progress: z.number().exactOptional().openapi({ example: 68497089 }),
              results: z
                .array(
                  z
                    .object({
                      labels: z
                        .array(z.string().openapi({ example: 'Cloud computing' }))
                        .exactOptional()
                        .openapi({ example: ['Cloud computing', 'Infrastructure'] }),
                      logo: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'https://logo.clearbit.com/aws.amazon.com' }),
                      merchant: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Amazon Web Services' }),
                      transaction_id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'xbx8YP14g565Xketw3tFmn4yp49x3tbj9mD8DB4fM8DDY6x' }),
                      website: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'https://aws.amazon.com/' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      labels: ['Cloud computing', 'Infrastructure'],
                      logo: 'https://logo.clearbit.com/aws.amazon.com',
                      merchant: 'Amazon Web Services',
                      transaction_id: 'xbx8YP14g565Xketw3tFmn4yp49x3tbj9mD8DB4fM8DDY6x',
                      website: 'https://aws.amazon.com/',
                    },
                    {
                      labels: ['Cloud computing', 'Infrastructure'],
                      logo: 'https://logo.clearbit.com/aws.amazon.com',
                      merchant: 'Amazon Web Services',
                      transaction_id: 'xbx8YP14g565Xketw3tFmn4yp49x3tbj9mD8DB4fM8DDY6x',
                      website: 'https://aws.amazon.com/',
                    },
                  ],
                }),
              status: z.string().exactOptional().openapi({ example: 'finished' }),
              updated_at: z
                .string()
                .exactOptional()
                .openapi({ example: '1949-08-24T23:09:35.824Z' }),
            })
            .openapi({ required: [] }),
          examples: {
            'Returned a batch of business transaction classification results.': {
              value: {
                id: 'urn:uuid:d4b197a2-f2cf-8302-0ef8-566',
                progress: 68497089,
                results: [
                  {
                    labels: ['Cloud computing', 'Infrastructure'],
                    logo: 'https://logo.clearbit.com/aws.amazon.com',
                    merchant: 'Amazon Web Services',
                    transaction_id: 'xbx8YP14g565Xketw3tFmn4yp49x3tbj9mD8DB4fM8DDY6x',
                    website: 'https://aws.amazon.com/',
                  },
                  {
                    labels: ['Cloud computing', 'Infrastructure'],
                    logo: 'https://logo.clearbit.com/aws.amazon.com',
                    merchant: 'Amazon Web Services',
                    transaction_id: 'xbx8YP14g565Xketw3tFmn4yp49x3tbj9mD8DB4fM8DDY6x',
                    website: 'https://aws.amazon.com/',
                  },
                ],
                status: 'finished',
                updated_at: '1949-08-24T23:09:35.824Z',
              },
            },
          },
        },
      },
    },
    404: { description: 'Not found.', content: {} },
    500: { description: 'Internal server error.', content: {} },
  },
})

export const getClassifierConsumerBatchIdRoute = createRoute({
  method: 'get',
  path: '/classifier/consumer/batch/{id}',
  tags: ['classifier', 'consumer', 'batch'],
  summary: 'Get a batch of consumer transaction classification results.',
  description: 'Get a batch of consumer transaction classification results.',
  operationId: 'getABatchOfConsumerTransactionClassificationResults',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: '(Required) Batch id.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '247ee045-3d04-4b3c-872b-a9160b810f33', type: 'string' },
          },
          example: '247ee045-3d04-4b3c-872b-a9160b810f33',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned a batch of consumer transaction classification results.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ example: '5d13df6c-6a20-59b6-9259-fb4f0ad90411' }),
              progress: z.number().exactOptional().openapi({ example: -62518197 }),
              results: z
                .array(
                  z
                    .object({
                      contact: z
                        .object({
                          email: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'hUkvsYKUamGpI@rWdfbzlEMyCxWD.ep' }),
                          phone: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'exercitation esse sed nisi' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      labels: z
                        .array(z.string().openapi({ example: 'eu quis pr' }))
                        .exactOptional()
                        .openapi({ example: ['eu quis pr', 'eu'] }),
                      location: z
                        .object({
                          address: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'pariatur esse officia cupidatat' }),
                          city: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'fugiat tempor reprehenderit' }),
                          country: z.string().exactOptional().openapi({ example: 'ad ea ut id' }),
                          lat: z.number().exactOptional().openapi({ example: -68164400.35857312 }),
                          lon: z.number().exactOptional().openapi({ example: 85118979.13578662 }),
                          postal_code: z.string().exactOptional().openapi({ example: 'minim est' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      logo: z.string().exactOptional().openapi({ example: 'laborum fugiat' }),
                      merchant: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'do enim ullamco irure' }),
                      person: z.string().exactOptional().openapi({ example: 'non' }),
                      rating: z
                        .object({
                          reviews: z.number().exactOptional().openapi({ example: 49181631 }),
                          value: z
                            .number()
                            .exactOptional()
                            .openapi({ example: -18636660.679956168 }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      transaction_id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'proident occaecat' }),
                      website: z.string().exactOptional().openapi({ example: '' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      contact: {
                        email: 'hUkvsYKUamGpI@rWdfbzlEMyCxWD.ep',
                        phone: 'exercitation esse sed nisi',
                      },
                      labels: ['eu quis pr', 'eu'],
                      location: {
                        address: 'pariatur esse officia cupidatat',
                        city: 'fugiat tempor reprehenderit',
                        country: 'ad ea ut id',
                        lat: -68164400.35857312,
                        lon: 85118979.13578662,
                        postal_code: 'minim est',
                      },
                      logo: 'laborum fugiat',
                      merchant: 'do enim ullamco irure',
                      person: 'non',
                      rating: { reviews: 49181631, value: -18636660.679956168 },
                      transaction_id: 'proident occaecat',
                      website: '',
                    },
                    {
                      contact: {
                        email: 'B2b9F6BqZI@dnlLjJGCVnHqEgVFyDwSWrcCVtCuR.wsx',
                        phone: 'incididunt reprehenderit do cupidatat',
                      },
                      labels: ['non cupidatat et esse', 'nisi reprehenderit est conse'],
                      location: {
                        address: 'irure magna',
                        city: 'deserunt ut in',
                        country: 'dolore Excepteur aliqua do',
                        lat: -53232704.415080525,
                        lon: 24234387.569050018,
                        postal_code: 'officia dolore dolor',
                      },
                      logo: 'est',
                      merchant: 'laboris culpa Excepteur consequat consectetur',
                      person: 'fugiat',
                      rating: { reviews: 97241118, value: -51476788.074969985 },
                      transaction_id: 'labore Ut',
                      website: 'cillum laborum c',
                    },
                  ],
                }),
              status: z.string().exactOptional().openapi({ example: 'error' }),
              updated_at: z
                .string()
                .exactOptional()
                .openapi({ example: '2014-05-05T08:09:39.758Z' }),
            })
            .openapi({ required: [] }),
          examples: {
            'Returned a batch of consumer transaction classification results.': {
              value: {
                id: '5d13df6c-6a20-59b6-9259-fb4f0ad90411',
                progress: -62518197,
                results: [
                  {
                    contact: {
                      email: 'hUkvsYKUamGpI@rWdfbzlEMyCxWD.ep',
                      phone: 'exercitation esse sed nisi',
                    },
                    labels: ['eu quis pr', 'eu'],
                    location: {
                      address: 'pariatur esse officia cupidatat',
                      city: 'fugiat tempor reprehenderit',
                      country: 'ad ea ut id',
                      lat: -68164400.35857312,
                      lon: 85118979.13578662,
                      postal_code: 'minim est',
                    },
                    logo: 'laborum fugiat',
                    merchant: 'do enim ullamco irure',
                    person: 'non',
                    rating: { reviews: 49181631, value: -18636660.679956168 },
                    transaction_id: 'proident occaecat',
                    website: '',
                  },
                  {
                    contact: {
                      email: 'B2b9F6BqZI@dnlLjJGCVnHqEgVFyDwSWrcCVtCuR.wsx',
                      phone: 'incididunt reprehenderit do cupidatat',
                    },
                    labels: ['non cupidatat et esse', 'nisi reprehenderit est conse'],
                    location: {
                      address: 'irure magna',
                      city: 'deserunt ut in',
                      country: 'dolore Excepteur aliqua do',
                      lat: -53232704.415080525,
                      lon: 24234387.569050018,
                      postal_code: 'officia dolore dolor',
                    },
                    logo: 'est',
                    merchant: 'laboris culpa Excepteur consequat consectetur',
                    person: 'fugiat',
                    rating: { reviews: 97241118, value: -51476788.074969985 },
                    transaction_id: 'labore Ut',
                    website: 'cillum laborum c',
                  },
                ],
                status: 'error',
                updated_at: '2014-05-05T08:09:39.758Z',
              },
            },
          },
        },
      },
    },
    404: { description: 'Not found', content: {} },
    500: { description: 'Internal server error', content: {} },
  },
})
