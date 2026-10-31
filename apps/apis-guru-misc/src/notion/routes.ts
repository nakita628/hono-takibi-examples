import { createRoute, z } from '@hono/zod-openapi'

export const getV1BlocksIdRoute = createRoute({
  method: 'get',
  path: '/v1/blocks/{id}',
  tags: ['Blocks'],
  summary: 'Retrieve a block',
  description: 'Retrieve a block',
  operationId: 'retrieveABlock',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '{{BLOCK_ID}}', type: 'string' },
          },
          example: '{{BLOCK_ID}}',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200 Success - Retrieve a block',
      content: {
        'application/json': {
          schema: z
            .object({
              created_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-08-06T17:46:00.000Z' }),
              has_children: z.boolean().exactOptional().openapi({ example: false }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: '4868767d-9029-4b9d-a41b-652ef4c9c7b9' }),
              last_edited_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-08-12T00:12:00.000Z' }),
              object: z.string().exactOptional().openapi({ example: 'block' }),
              paragraph: z
                .object({
                  text: z
                    .array(
                      z
                        .object({
                          annotations: z
                            .object({
                              bold: z.boolean().exactOptional().openapi({ example: false }),
                              code: z.boolean().exactOptional().openapi({ example: false }),
                              color: z.string().exactOptional().openapi({ example: 'default' }),
                              italic: z.boolean().exactOptional().openapi({ example: false }),
                              strikethrough: z
                                .boolean()
                                .exactOptional()
                                .openapi({ example: false }),
                              underline: z.boolean().exactOptional().openapi({ example: false }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          href: z.any().nullable().exactOptional().openapi({ example: null }),
                          plain_text: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'hello to you' }),
                          text: z
                            .object({
                              content: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'hello to you' }),
                              link: z.any().nullable().exactOptional().openapi({ example: null }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          type: z.string().exactOptional().openapi({ example: 'text' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: 'hello to you',
                          text: { content: 'hello to you', link: null },
                          type: 'text',
                        },
                      ],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              type: z.string().exactOptional().openapi({ example: 'paragraph' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Retrieve a block': {
              value: {
                created_time: '2021-08-06T17:46:00.000Z',
                has_children: false,
                id: '4868767d-9029-4b9d-a41b-652ef4c9c7b9',
                last_edited_time: '2021-08-12T00:12:00.000Z',
                object: 'block',
                paragraph: {
                  text: [
                    {
                      annotations: {
                        bold: false,
                        code: false,
                        color: 'default',
                        italic: false,
                        strikethrough: false,
                        underline: false,
                      },
                      href: null,
                      plain_text: 'hello to you',
                      text: { content: 'hello to you', link: null },
                      type: 'text',
                    },
                  ],
                },
                type: 'paragraph',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '67d58148ef562544-SJC' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com https://client-registry.mutinycdn.com https://client.mutinycdn.com/ https://user-data.mutinycdn.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io https://user-data.mutinycdn.com https://api-v2.mutinyhq.io https://api.statuspage.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Thu, 12 Aug 2021 00:14:42 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"1ae-RFHXdRIvpQZuh0kRKb9XuWbFwzo"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_browser_id=e557ec39-01fc-4a4e-84a1-0a6b1ab4a579; Domain=www.notion.so; Path=/; Expires=Sun, 20 Apr 2053 02:01:22 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com https://client-registry.mutinycdn.com https://client.mutinycdn.com/ https://user-data.mutinycdn.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io https://user-data.mutinycdn.com https://api-v2.mutinyhq.io https://api.statuspage.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com https://client-registry.mutinycdn.com https://client.mutinycdn.com/ https://user-data.mutinycdn.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io https://user-data.mutinycdn.com https://api-v2.mutinyhq.io https://api.statuspage.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})

export const deleteV1BlocksIdRoute = createRoute({
  method: 'delete',
  path: '/v1/blocks/{id}',
  tags: ['Blocks'],
  summary: 'Delete a block',
  description: 'Delete a block',
  operationId: 'deleteABlock',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '{{BLOCK_ID}}', type: 'string' },
          },
          example: '{{BLOCK_ID}}',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200 Success - Delete a block',
      content: {
        'application/json': {
          schema: z
            .object({
              archived: z.boolean().exactOptional().openapi({ example: true }),
              created_by: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '6794760a-1f15-45cd-9c65-0dfe42f5135a' }),
                  object: z.string().exactOptional().openapi({ example: 'user' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              created_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-08-06T17:46:00.000Z' }),
              has_children: z.boolean().exactOptional().openapi({ example: false }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: '4868767d-9029-4b9d-a41b-652ef4c9c7b9' }),
              last_edited_by: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '92a680bb-6970-4726-952b-4f4c03bff617' }),
                  object: z.string().exactOptional().openapi({ example: 'user' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              last_edited_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2022-02-24T22:26:00.000Z' }),
              object: z.string().exactOptional().openapi({ example: 'block' }),
              paragraph: z
                .object({
                  text: z
                    .array(
                      z
                        .object({
                          annotations: z
                            .object({
                              bold: z.boolean().exactOptional().openapi({ example: false }),
                              code: z.boolean().exactOptional().openapi({ example: false }),
                              color: z.string().exactOptional().openapi({ example: 'default' }),
                              italic: z.boolean().exactOptional().openapi({ example: false }),
                              strikethrough: z
                                .boolean()
                                .exactOptional()
                                .openapi({ example: false }),
                              underline: z.boolean().exactOptional().openapi({ example: false }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          href: z.any().nullable().exactOptional().openapi({ example: null }),
                          plain_text: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'hello to you' }),
                          text: z
                            .object({
                              content: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'hello to you' }),
                              link: z.any().nullable().exactOptional().openapi({ example: null }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          type: z.string().exactOptional().openapi({ example: 'text' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: 'hello to you',
                          text: { content: 'hello to you', link: null },
                          type: 'text',
                        },
                      ],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              type: z.string().exactOptional().openapi({ example: 'paragraph' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Delete a block': {
              value: {
                archived: true,
                created_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                created_time: '2021-08-06T17:46:00.000Z',
                has_children: false,
                id: '4868767d-9029-4b9d-a41b-652ef4c9c7b9',
                last_edited_by: { id: '92a680bb-6970-4726-952b-4f4c03bff617', object: 'user' },
                last_edited_time: '2022-02-24T22:26:00.000Z',
                object: 'block',
                paragraph: {
                  text: [
                    {
                      annotations: {
                        bold: false,
                        code: false,
                        color: 'default',
                        italic: false,
                        strikethrough: false,
                        underline: false,
                      },
                      href: null,
                      plain_text: 'hello to you',
                      text: { content: 'hello to you', link: null },
                      type: 'text',
                    },
                  ],
                },
                type: 'paragraph',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '6e2c1dcfdbf0255c-SJC' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Thu, 24 Feb 2022 22:26:40 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"258-nR8cSrr3A4mS1zWlKjaHASxX/tQ"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_check_cookie_consent=false; Domain=www.notion.so; Path=/; Expires=Fri, 25 Feb 2022 22:26:36 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})

export const patchV1BlocksIdRoute = createRoute({
  method: 'patch',
  path: '/v1/blocks/{id}',
  tags: ['Blocks'],
  summary: 'Update a block',
  description:
    'This endpoint allows you to update block content. [See Full Documentation](https://developers.notion.com/reference/update-a-block)',
  operationId: 'updateABlock',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '{{BLOCK_ID}}', type: 'string' },
          },
          example: '{{BLOCK_ID}}',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              paragraph: z
                .object({
                  rich_text: z
                    .array(
                      z
                        .object({
                          text: z
                            .object({
                              content: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'hello to you' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          type: z.string().exactOptional().openapi({ example: 'text' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ example: [{ text: { content: 'hello to you' }, type: 'text' }] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            paragraph: { rich_text: [{ text: { content: 'hello to you' }, type: 'text' }] },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '200 Success - Update a block',
      content: {
        'application/json': {
          schema: z
            .object({
              created_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-08-06T17:46:00.000Z' }),
              has_children: z.boolean().exactOptional().openapi({ example: false }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: '4868767d-9029-4b9d-a41b-652ef4c9c7b9' }),
              last_edited_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-08-12T00:12:00.000Z' }),
              object: z.string().exactOptional().openapi({ example: 'block' }),
              paragraph: z
                .object({
                  text: z
                    .array(
                      z
                        .object({
                          annotations: z
                            .object({
                              bold: z.boolean().exactOptional().openapi({ example: false }),
                              code: z.boolean().exactOptional().openapi({ example: false }),
                              color: z.string().exactOptional().openapi({ example: 'default' }),
                              italic: z.boolean().exactOptional().openapi({ example: false }),
                              strikethrough: z
                                .boolean()
                                .exactOptional()
                                .openapi({ example: false }),
                              underline: z.boolean().exactOptional().openapi({ example: false }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          href: z.any().nullable().exactOptional().openapi({ example: null }),
                          plain_text: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'hello to you' }),
                          text: z
                            .object({
                              content: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'hello to you' }),
                              link: z.any().nullable().exactOptional().openapi({ example: null }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          type: z.string().exactOptional().openapi({ example: 'text' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: 'hello to you',
                          text: { content: 'hello to you', link: null },
                          type: 'text',
                        },
                      ],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              type: z.string().exactOptional().openapi({ example: 'paragraph' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Update a block': {
              value: {
                created_time: '2021-08-06T17:46:00.000Z',
                has_children: false,
                id: '4868767d-9029-4b9d-a41b-652ef4c9c7b9',
                last_edited_time: '2021-08-12T00:12:00.000Z',
                object: 'block',
                paragraph: {
                  text: [
                    {
                      annotations: {
                        bold: false,
                        code: false,
                        color: 'default',
                        italic: false,
                        strikethrough: false,
                        underline: false,
                      },
                      href: null,
                      plain_text: 'hello to you',
                      text: { content: 'hello to you', link: null },
                      type: 'text',
                    },
                  ],
                },
                type: 'paragraph',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '67d57e86ea672544-SJC' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com https://client-registry.mutinycdn.com https://client.mutinycdn.com/ https://user-data.mutinycdn.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io https://user-data.mutinycdn.com https://api-v2.mutinyhq.io https://api.statuspage.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Thu, 12 Aug 2021 00:12:49 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"1ae-RFHXdRIvpQZuh0kRKb9XuWbFwzo"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_browser_id=72dd4057-624e-4aa3-80c6-ab911ed059b7; Domain=www.notion.so; Path=/; Expires=Sun, 20 Apr 2053 01:59:29 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com https://client-registry.mutinycdn.com https://client.mutinycdn.com/ https://user-data.mutinycdn.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io https://user-data.mutinycdn.com https://api-v2.mutinyhq.io https://api.statuspage.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com https://client-registry.mutinycdn.com https://client.mutinycdn.com/ https://user-data.mutinycdn.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io https://user-data.mutinycdn.com https://api-v2.mutinyhq.io https://api.statuspage.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})

export const getV1BlocksIdChildrenRoute = createRoute({
  method: 'get',
  path: '/v1/blocks/{id}/children',
  tags: ['Blocks'],
  summary: 'Retrieve block children',
  description: 'Retrieve block children',
  operationId: 'retrieveBlockChildren',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '{{PAGE_ID}}', type: 'string' },
          },
          example: '{{PAGE_ID}}',
        }),
    }),
    query: z.object({
      page_size: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page_size',
            schema: { example: '100', type: 'string' },
            required: false,
          },
          example: '100',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200 Success - Retrieve block children',
      content: {
        'application/json': {
          schema: z
            .object({
              has_more: z.boolean().exactOptional().openapi({ example: false }),
              next_cursor: z.any().nullable().exactOptional().openapi({ example: null }),
              object: z.string().exactOptional().openapi({ example: 'list' }),
              results: z
                .array(
                  z
                    .object({
                      created_time: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2021-04-27T20:38:19.437Z' }),
                      has_children: z.boolean().exactOptional().openapi({ example: false }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '48c1ffb5-2789-4025-937b-2c35eaaaab3f' }),
                      last_edited_time: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2021-04-27T20:38:19.437Z' }),
                      object: z.string().exactOptional().openapi({ example: 'block' }),
                      paragraph: z
                        .object({
                          text: z
                            .array(
                              z
                                .object({
                                  annotations: z
                                    .object({
                                      bold: z.boolean().exactOptional().openapi({ example: false }),
                                      code: z.boolean().exactOptional().openapi({ example: false }),
                                      color: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'default' }),
                                      italic: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({ example: false }),
                                      strikethrough: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({ example: false }),
                                      underline: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({ example: false }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  href: z
                                    .any()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ example: null }),
                                  plain_text: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      example:
                                        'I think we can all agree that Silicon Valley needs more adult supervision right about now.',
                                    }),
                                  text: z
                                    .object({
                                      content: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example:
                                            'I think we can all agree that Silicon Valley needs more adult supervision right about now.',
                                        }),
                                      link: z
                                        .any()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ example: null }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  type: z.string().exactOptional().openapi({ example: 'text' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  annotations: {
                                    bold: false,
                                    code: false,
                                    color: 'default',
                                    italic: false,
                                    strikethrough: false,
                                    underline: false,
                                  },
                                  href: null,
                                  plain_text:
                                    'I think we can all agree that Silicon Valley needs more adult supervision right about now.',
                                  text: {
                                    content:
                                      'I think we can all agree that Silicon Valley needs more adult supervision right about now.',
                                    link: null,
                                  },
                                  type: 'text',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'unsupported' }),
                      unsupported: z.object({}).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '48c1ffb5-2789-4025-937b-2c35eaaaab3f',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      type: 'unsupported',
                      unsupported: {},
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: 'e381a0a3-4efb-4ba9-aa93-45b70fa9ce7f',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'I think we can all agree that Silicon Valley needs more adult supervision right about now.',
                            text: {
                              content:
                                'I think we can all agree that Silicon Valley needs more adult supervision right about now.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: 'ce5f79ac-8145-44ab-be3b-8ad143d6f8a7',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'Is the solution for its companies to hire a chief ethics officer?',
                            text: {
                              content:
                                'Is the solution for its companies to hire a chief ethics officer?',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '0387b374-7847-4ddc-bc53-6b0813ce4ed4',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'While some tech companies like Google have top compliance officers and others turn to legal teams to police themselves, no big tech companies that I know of have yet taken this step. But a lot of them seem to be talking about it, and I’ve discussed the idea with several chief executives recently. Why? Because slowly, then all at once, it feels like too many digital leaders have lost their minds.',
                            text: {
                              content:
                                'While some tech companies like Google have top compliance officers and others turn to legal teams to police themselves, no big tech companies that I know of have yet taken this step. But a lot of them seem to be talking about it, and I’ve discussed the idea with several chief executives recently. Why? Because slowly, then all at once, it feels like too many digital leaders have lost their minds.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: 'da035311-5af3-48bc-8279-d28d9f4ef2e2',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'It’s probably no surprise, considering the complex problems the tech industry faces. As one ethical quandary after another has hit its profoundly ill-prepared executives, their once-pristine reputations have fallen like palm trees in a hurricane. These last two weeks alone show how tech is stumbling to react to big world issues armed with only bubble world skills:',
                            text: {
                              content:
                                'It’s probably no surprise, considering the complex problems the tech industry faces. As one ethical quandary after another has hit its profoundly ill-prepared executives, their once-pristine reputations have fallen like palm trees in a hurricane. These last two weeks alone show how tech is stumbling to react to big world issues armed with only bubble world skills:',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '63a60fca-4a11-43eb-8773-c5f0164a3117',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'As a journalist is beheaded and dismembered at the direction of Saudi Arabian leaders (allegedly, but the killers did bring a bone saw), Silicon Valley is swimming in oceans of money from the kingdom’s Public Investment Fund. Saudi funding includes hundreds of millions for Magic Leap, and huge investments in hot public companies like Tesla. Most significantly: Saudis have invested about $45 billion in SoftBank’s giant Vision Fund, which has in turn doused the tech landscape — $4.4 billion to WeWork, $250 million to Slack, and $300 million to the dog-walking app Wag. In total Uber has gotten almost $14 billion, either through direct investments from the Public Investment Fund or through the Saudis’ funding of the Vision Fund. A billion here, a billion there and it all adds up.',
                            text: {
                              content:
                                'As a journalist is beheaded and dismembered at the direction of Saudi Arabian leaders (allegedly, but the killers did bring a bone saw), Silicon Valley is swimming in oceans of money from the kingdom’s Public Investment Fund. Saudi funding includes hundreds of millions for Magic Leap, and huge investments in hot public companies like Tesla. Most significantly: Saudis have invested about $45 billion in SoftBank’s giant Vision Fund, which has in turn doused the tech landscape — $4.4 billion to WeWork, $250 million to Slack, and $300 million to the dog-walking app Wag. In total Uber has gotten almost $14 billion, either through direct investments from the Public Investment Fund or through the Saudis’ funding of the Vision Fund. A billion here, a billion there and it all adds up.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '8c58c8f1-86ae-4a14-b6b9-74f5fa579620',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: '[',
                            text: { content: '[', link: null },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: 'Kara Swisher answered your questions about her column ',
                            text: {
                              content: 'Kara Swisher answered your questions about her column ',
                              link: null,
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: 'https://twitter.com/karaswisher/status/1054842303922298880',
                            plain_text: 'on Twitter',
                            text: {
                              content: 'on Twitter',
                              link: {
                                url: 'https://twitter.com/karaswisher/status/1054842303922298880',
                              },
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: '.',
                            text: { content: '.', link: null },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: ']',
                            text: { content: ']', link: null },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '875d3aff-086b-45da-9ed1-bc3ddb185229',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'Facebook introduced a new home video device called Portal, and promised that what could be seen as a surveillance tool would not share data for the sake of ad targeting. Soon after, as ',
                            text: {
                              content:
                                'Facebook introduced a new home video device called Portal, and promised that what could be seen as a surveillance tool would not share data for the sake of ad targeting. Soon after, as ',
                              link: null,
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: 'https://www.recode.net/2018/10/16/17966102/facebook-portal-ad-targeting-data-collection',
                            plain_text: 'reported by Recode',
                            text: {
                              content: 'reported by Recode',
                              link: {
                                url: 'https://www.recode.net/2018/10/16/17966102/facebook-portal-ad-targeting-data-collection',
                              },
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              ', Facebook admitted that “data about who you call and data about which apps you use on Portal ',
                            text: {
                              content:
                                ', Facebook admitted that “data about who you call and data about which apps you use on Portal ',
                              link: null,
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: 'can',
                            text: { content: 'can', link: null },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              ' be used to target you with ads on other Facebook-owned properties.” Oh. Um. That’s awkward.',
                            text: {
                              content:
                                ' be used to target you with ads on other Facebook-owned properties.” Oh. Um. That’s awkward.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '306ab0fb-6daa-4c5b-b1f7-f51a5f92b6ff',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'After agreeing to pay $20 million to the Securities and Exchange Commission for an ill-advised tweet about possible funding (from the Saudis, by the way), the Tesla co-founder Elon Musk proceeded to troll the regulatory agency on, you got it, Twitter. And even though the ',
                            text: {
                              content:
                                'After agreeing to pay $20 million to the Securities and Exchange Commission for an ill-advised tweet about possible funding (from the Saudis, by the way), the Tesla co-founder Elon Musk proceeded to troll the regulatory agency on, you got it, Twitter. And even though the ',
                              link: null,
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: 'https://www.sec.gov/news/press-release/2018-226',
                            plain_text:
                              'settlement called for some kind of control of his communications',
                            text: {
                              content:
                                'settlement called for some kind of control of his communications',
                              link: { url: 'https://www.sec.gov/news/press-release/2018-226' },
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              ', it appears that Mr. Musk will continue tweeting until someone steals his phone.',
                            text: {
                              content:
                                ', it appears that Mr. Musk will continue tweeting until someone steals his phone.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '122b1457-4129-4513-abaa-7cce7d66e4a1',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'Finally, Google took six months to make public that user data on its social network, Google Plus, ',
                            text: {
                              content:
                                'Finally, Google took six months to make public that user data on its social network, Google Plus, ',
                              link: null,
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: 'https://www.nytimes.com/2018/10/08/technology/google-plus-security-disclosure.html?module=inline',
                            plain_text: 'had been exposed',
                            text: {
                              content: 'had been exposed',
                              link: {
                                url: 'https://www.nytimes.com/2018/10/08/technology/google-plus-security-disclosure.html?module=inline',
                              },
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              ' and that profiles of up to 500,000 users may have been compromised. While the service failed long ago, because it was pretty much designed by antisocial people, this lack of concern for privacy was profound.',
                            text: {
                              content:
                                ' and that profiles of up to 500,000 users may have been compromised. While the service failed long ago, because it was pretty much designed by antisocial people, this lack of concern for privacy was profound.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '4d4af599-556f-4d8b-af8e-4d01ebe2aa27',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'Grappling with what to say and do about the disasters they themselves create is only the beginning. Then there are the broader issues that the denizens of Silicon Valley expect their employers to have a stance on: immigration, income inequality, artificial intelligence, automation, transgender rights, climate change, privacy, data rights and whether tech companies should be helping the government do controversial things. It’s an ethical swamp out there.',
                            text: {
                              content:
                                'Grappling with what to say and do about the disasters they themselves create is only the beginning. Then there are the broader issues that the denizens of Silicon Valley expect their employers to have a stance on: immigration, income inequality, artificial intelligence, automation, transgender rights, climate change, privacy, data rights and whether tech companies should be helping the government do controversial things. It’s an ethical swamp out there.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: 'f5775df5-59eb-4533-a2cb-e150412ec4f6',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'That’s why, in a recent interview, Marc Benioff, the co-chief executive and a founder of Salesforce, told me he was in the process of hiring a chief ethical officer to help anticipate and address any thorny conundrums it might encounter as a business — like the decision it had to make a few months back about whether it should stop providing recruitment software for Customs and Border Protection because of the government’s policy of separating immigrant families at the border.',
                            text: {
                              content:
                                'That’s why, in a recent interview, Marc Benioff, the co-chief executive and a founder of Salesforce, told me he was in the process of hiring a chief ethical officer to help anticipate and address any thorny conundrums it might encounter as a business — like the decision it had to make a few months back about whether it should stop providing recruitment software for Customs and Border Protection because of the government’s policy of separating immigrant families at the border.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '31405c6e-7ece-4667-8c4d-36c9d79a0bfa',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'Amid much criticism, Mr. Benioff decided to keep the contract, but said he would focus more on social and political issues.',
                            text: {
                              content:
                                'Amid much criticism, Mr. Benioff decided to keep the contract, but said he would focus more on social and political issues.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: 'a2ab7e8a-d521-401d-89ae-9eb27efb9990',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'At a recent company event, he elaborated: “We can have a structured conversation not just with our own employees myopically, but by bringing in the key advisers, supporters and pundits and philosophers and everybody necessary to ask the question if what we are doing today is ethical and humane.”',
                            text: {
                              content:
                                'At a recent company event, he elaborated: “We can have a structured conversation not just with our own employees myopically, but by bringing in the key advisers, supporters and pundits and philosophers and everybody necessary to ask the question if what we are doing today is ethical and humane.”',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: 'a4498e1e-8b85-48d7-802a-db447ca7d1ac',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              '23andMe has also toyed with the idea of hiring a chief ethics officer. In an interview I did this week with its chief executive, Anne Wojcicki, she said the genetics company had even interviewed candidates, but that many of them wanted to remain in academia to be freer to ponder these issues. She acknowledged that the collection of DNA data is rife with ethical considerations, but said, “I think it has to be our management and leaders who have to add this to our skill set, rather than just hire one person to determine this.”',
                            text: {
                              content:
                                '23andMe has also toyed with the idea of hiring a chief ethics officer. In an interview I did this week with its chief executive, Anne Wojcicki, she said the genetics company had even interviewed candidates, but that many of them wanted to remain in academia to be freer to ponder these issues. She acknowledged that the collection of DNA data is rife with ethical considerations, but said, “I think it has to be our management and leaders who have to add this to our skill set, rather than just hire one person to determine this.”',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: 'cbf7e7e0-5552-4b3f-b09e-9dcca120931c',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'When asked about the idea of a single source of wisdom on ethics, some point out that legal or diversity/inclusion departments are designed for that purpose and that the ethics should really come from the top — the chief executive.',
                            text: {
                              content:
                                'When asked about the idea of a single source of wisdom on ethics, some point out that legal or diversity/inclusion departments are designed for that purpose and that the ethics should really come from the top — the chief executive.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: 'd24b2887-0f1f-4e91-99c1-c295bed8ad65',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'Also of concern is the possibility that a single person would not get listened to or, worse, get steamrollered. And, if the person was bad at the job, of course, it could drag the whole thing down.',
                            text: {
                              content:
                                'Also of concern is the possibility that a single person would not get listened to or, worse, get steamrollered. And, if the person was bad at the job, of course, it could drag the whole thing down.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '78c55f65-c8b8-4364-a369-c40699968e90',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'Others are more worried that the move would be nothing but window dressing. One consultant who focuses on ethics, but did not want to be named, told me: “We haven’t even defined ethics, so what even is ethical use, especially for Silicon Valley companies that are babies in this game?”',
                            text: {
                              content:
                                'Others are more worried that the move would be nothing but window dressing. One consultant who focuses on ethics, but did not want to be named, told me: “We haven’t even defined ethics, so what even is ethical use, especially for Silicon Valley companies that are babies in this game?”',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '0b492111-1586-4a73-8848-04f0c391aadc',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'How can an industry that, unlike other business sectors, persistently promotes itself as doing good, learn to do that in reality? Do you want to not do harm, or do you want to do good? These are two totally different things.',
                            text: {
                              content:
                                'How can an industry that, unlike other business sectors, persistently promotes itself as doing good, learn to do that in reality? Do you want to not do harm, or do you want to do good? These are two totally different things.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '302f8229-2404-460b-8c3c-e7058b4365e5',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'And how do you put an official ethical system in place without it seeming like you’re telling everyone how to behave? Who gets to decide those rules anyway, setting a moral path for the industry and — considering tech companies’ enormous power — the world.',
                            text: {
                              content:
                                'And how do you put an official ethical system in place without it seeming like you’re telling everyone how to behave? Who gets to decide those rules anyway, setting a moral path for the industry and — considering tech companies’ enormous power — the world.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '8f9bc91c-5662-4b3f-a110-809f46b79f49',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'Like I said, adult supervision. Or maybe, better still, Silicon Valley itself has to grow up.',
                            text: {
                              content:
                                'Like I said, adult supervision. Or maybe, better still, Silicon Valley itself has to grow up.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                    {
                      created_time: '2021-04-27T20:38:19.437Z',
                      has_children: false,
                      id: '7bea1831-a25c-4b3e-8c9b-b37de814f948',
                      last_edited_time: '2021-04-27T20:38:19.437Z',
                      object: 'block',
                      paragraph: {
                        text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: 'Follow The New York Times Opinion section on ',
                            text: {
                              content: 'Follow The New York Times Opinion section on ',
                              link: null,
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: 'https://www.facebook.com/nytopinion',
                            plain_text: 'Facebook',
                            text: {
                              content: 'Facebook',
                              link: { url: 'https://www.facebook.com/nytopinion' },
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: ', ',
                            text: { content: ', ', link: null },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: 'http://twitter.com/NYTOpinion',
                            plain_text: 'Twitter (@NYTopinion)',
                            text: {
                              content: 'Twitter (@NYTopinion)',
                              link: { url: 'http://twitter.com/NYTOpinion' },
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: ' and ',
                            text: { content: ' and ', link: null },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: 'https://www.instagram.com/nytopinion/',
                            plain_text: 'Instagram',
                            text: {
                              content: 'Instagram',
                              link: { url: 'https://www.instagram.com/nytopinion/' },
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: ', and sign up for the ',
                            text: { content: ', and sign up for the ', link: null },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: 'http://www.nytimes.com/newsletters/opiniontoday/',
                            plain_text: 'Opinion Today newsletter',
                            text: {
                              content: 'Opinion Today newsletter',
                              link: { url: 'http://www.nytimes.com/newsletters/opiniontoday/' },
                            },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: '.',
                            text: { content: '.', link: null },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Retrieve block children': {
              value: {
                has_more: false,
                next_cursor: null,
                object: 'list',
                results: [
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '48c1ffb5-2789-4025-937b-2c35eaaaab3f',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    type: 'unsupported',
                    unsupported: {},
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: 'e381a0a3-4efb-4ba9-aa93-45b70fa9ce7f',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'I think we can all agree that Silicon Valley needs more adult supervision right about now.',
                          text: {
                            content:
                              'I think we can all agree that Silicon Valley needs more adult supervision right about now.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: 'ce5f79ac-8145-44ab-be3b-8ad143d6f8a7',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'Is the solution for its companies to hire a chief ethics officer?',
                          text: {
                            content:
                              'Is the solution for its companies to hire a chief ethics officer?',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '0387b374-7847-4ddc-bc53-6b0813ce4ed4',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'While some tech companies like Google have top compliance officers and others turn to legal teams to police themselves, no big tech companies that I know of have yet taken this step. But a lot of them seem to be talking about it, and I’ve discussed the idea with several chief executives recently. Why? Because slowly, then all at once, it feels like too many digital leaders have lost their minds.',
                          text: {
                            content:
                              'While some tech companies like Google have top compliance officers and others turn to legal teams to police themselves, no big tech companies that I know of have yet taken this step. But a lot of them seem to be talking about it, and I’ve discussed the idea with several chief executives recently. Why? Because slowly, then all at once, it feels like too many digital leaders have lost their minds.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: 'da035311-5af3-48bc-8279-d28d9f4ef2e2',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'It’s probably no surprise, considering the complex problems the tech industry faces. As one ethical quandary after another has hit its profoundly ill-prepared executives, their once-pristine reputations have fallen like palm trees in a hurricane. These last two weeks alone show how tech is stumbling to react to big world issues armed with only bubble world skills:',
                          text: {
                            content:
                              'It’s probably no surprise, considering the complex problems the tech industry faces. As one ethical quandary after another has hit its profoundly ill-prepared executives, their once-pristine reputations have fallen like palm trees in a hurricane. These last two weeks alone show how tech is stumbling to react to big world issues armed with only bubble world skills:',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '63a60fca-4a11-43eb-8773-c5f0164a3117',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'As a journalist is beheaded and dismembered at the direction of Saudi Arabian leaders (allegedly, but the killers did bring a bone saw), Silicon Valley is swimming in oceans of money from the kingdom’s Public Investment Fund. Saudi funding includes hundreds of millions for Magic Leap, and huge investments in hot public companies like Tesla. Most significantly: Saudis have invested about $45 billion in SoftBank’s giant Vision Fund, which has in turn doused the tech landscape — $4.4 billion to WeWork, $250 million to Slack, and $300 million to the dog-walking app Wag. In total Uber has gotten almost $14 billion, either through direct investments from the Public Investment Fund or through the Saudis’ funding of the Vision Fund. A billion here, a billion there and it all adds up.',
                          text: {
                            content:
                              'As a journalist is beheaded and dismembered at the direction of Saudi Arabian leaders (allegedly, but the killers did bring a bone saw), Silicon Valley is swimming in oceans of money from the kingdom’s Public Investment Fund. Saudi funding includes hundreds of millions for Magic Leap, and huge investments in hot public companies like Tesla. Most significantly: Saudis have invested about $45 billion in SoftBank’s giant Vision Fund, which has in turn doused the tech landscape — $4.4 billion to WeWork, $250 million to Slack, and $300 million to the dog-walking app Wag. In total Uber has gotten almost $14 billion, either through direct investments from the Public Investment Fund or through the Saudis’ funding of the Vision Fund. A billion here, a billion there and it all adds up.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '8c58c8f1-86ae-4a14-b6b9-74f5fa579620',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: '[',
                          text: { content: '[', link: null },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: 'Kara Swisher answered your questions about her column ',
                          text: {
                            content: 'Kara Swisher answered your questions about her column ',
                            link: null,
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: 'https://twitter.com/karaswisher/status/1054842303922298880',
                          plain_text: 'on Twitter',
                          text: {
                            content: 'on Twitter',
                            link: {
                              url: 'https://twitter.com/karaswisher/status/1054842303922298880',
                            },
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: '.',
                          text: { content: '.', link: null },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: ']',
                          text: { content: ']', link: null },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '875d3aff-086b-45da-9ed1-bc3ddb185229',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'Facebook introduced a new home video device called Portal, and promised that what could be seen as a surveillance tool would not share data for the sake of ad targeting. Soon after, as ',
                          text: {
                            content:
                              'Facebook introduced a new home video device called Portal, and promised that what could be seen as a surveillance tool would not share data for the sake of ad targeting. Soon after, as ',
                            link: null,
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: 'https://www.recode.net/2018/10/16/17966102/facebook-portal-ad-targeting-data-collection',
                          plain_text: 'reported by Recode',
                          text: {
                            content: 'reported by Recode',
                            link: {
                              url: 'https://www.recode.net/2018/10/16/17966102/facebook-portal-ad-targeting-data-collection',
                            },
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            ', Facebook admitted that “data about who you call and data about which apps you use on Portal ',
                          text: {
                            content:
                              ', Facebook admitted that “data about who you call and data about which apps you use on Portal ',
                            link: null,
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: 'can',
                          text: { content: 'can', link: null },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            ' be used to target you with ads on other Facebook-owned properties.” Oh. Um. That’s awkward.',
                          text: {
                            content:
                              ' be used to target you with ads on other Facebook-owned properties.” Oh. Um. That’s awkward.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '306ab0fb-6daa-4c5b-b1f7-f51a5f92b6ff',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'After agreeing to pay $20 million to the Securities and Exchange Commission for an ill-advised tweet about possible funding (from the Saudis, by the way), the Tesla co-founder Elon Musk proceeded to troll the regulatory agency on, you got it, Twitter. And even though the ',
                          text: {
                            content:
                              'After agreeing to pay $20 million to the Securities and Exchange Commission for an ill-advised tweet about possible funding (from the Saudis, by the way), the Tesla co-founder Elon Musk proceeded to troll the regulatory agency on, you got it, Twitter. And even though the ',
                            link: null,
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: 'https://www.sec.gov/news/press-release/2018-226',
                          plain_text:
                            'settlement called for some kind of control of his communications',
                          text: {
                            content:
                              'settlement called for some kind of control of his communications',
                            link: { url: 'https://www.sec.gov/news/press-release/2018-226' },
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            ', it appears that Mr. Musk will continue tweeting until someone steals his phone.',
                          text: {
                            content:
                              ', it appears that Mr. Musk will continue tweeting until someone steals his phone.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '122b1457-4129-4513-abaa-7cce7d66e4a1',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'Finally, Google took six months to make public that user data on its social network, Google Plus, ',
                          text: {
                            content:
                              'Finally, Google took six months to make public that user data on its social network, Google Plus, ',
                            link: null,
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: 'https://www.nytimes.com/2018/10/08/technology/google-plus-security-disclosure.html?module=inline',
                          plain_text: 'had been exposed',
                          text: {
                            content: 'had been exposed',
                            link: {
                              url: 'https://www.nytimes.com/2018/10/08/technology/google-plus-security-disclosure.html?module=inline',
                            },
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            ' and that profiles of up to 500,000 users may have been compromised. While the service failed long ago, because it was pretty much designed by antisocial people, this lack of concern for privacy was profound.',
                          text: {
                            content:
                              ' and that profiles of up to 500,000 users may have been compromised. While the service failed long ago, because it was pretty much designed by antisocial people, this lack of concern for privacy was profound.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '4d4af599-556f-4d8b-af8e-4d01ebe2aa27',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'Grappling with what to say and do about the disasters they themselves create is only the beginning. Then there are the broader issues that the denizens of Silicon Valley expect their employers to have a stance on: immigration, income inequality, artificial intelligence, automation, transgender rights, climate change, privacy, data rights and whether tech companies should be helping the government do controversial things. It’s an ethical swamp out there.',
                          text: {
                            content:
                              'Grappling with what to say and do about the disasters they themselves create is only the beginning. Then there are the broader issues that the denizens of Silicon Valley expect their employers to have a stance on: immigration, income inequality, artificial intelligence, automation, transgender rights, climate change, privacy, data rights and whether tech companies should be helping the government do controversial things. It’s an ethical swamp out there.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: 'f5775df5-59eb-4533-a2cb-e150412ec4f6',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'That’s why, in a recent interview, Marc Benioff, the co-chief executive and a founder of Salesforce, told me he was in the process of hiring a chief ethical officer to help anticipate and address any thorny conundrums it might encounter as a business — like the decision it had to make a few months back about whether it should stop providing recruitment software for Customs and Border Protection because of the government’s policy of separating immigrant families at the border.',
                          text: {
                            content:
                              'That’s why, in a recent interview, Marc Benioff, the co-chief executive and a founder of Salesforce, told me he was in the process of hiring a chief ethical officer to help anticipate and address any thorny conundrums it might encounter as a business — like the decision it had to make a few months back about whether it should stop providing recruitment software for Customs and Border Protection because of the government’s policy of separating immigrant families at the border.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '31405c6e-7ece-4667-8c4d-36c9d79a0bfa',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'Amid much criticism, Mr. Benioff decided to keep the contract, but said he would focus more on social and political issues.',
                          text: {
                            content:
                              'Amid much criticism, Mr. Benioff decided to keep the contract, but said he would focus more on social and political issues.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: 'a2ab7e8a-d521-401d-89ae-9eb27efb9990',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'At a recent company event, he elaborated: “We can have a structured conversation not just with our own employees myopically, but by bringing in the key advisers, supporters and pundits and philosophers and everybody necessary to ask the question if what we are doing today is ethical and humane.”',
                          text: {
                            content:
                              'At a recent company event, he elaborated: “We can have a structured conversation not just with our own employees myopically, but by bringing in the key advisers, supporters and pundits and philosophers and everybody necessary to ask the question if what we are doing today is ethical and humane.”',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: 'a4498e1e-8b85-48d7-802a-db447ca7d1ac',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            '23andMe has also toyed with the idea of hiring a chief ethics officer. In an interview I did this week with its chief executive, Anne Wojcicki, she said the genetics company had even interviewed candidates, but that many of them wanted to remain in academia to be freer to ponder these issues. She acknowledged that the collection of DNA data is rife with ethical considerations, but said, “I think it has to be our management and leaders who have to add this to our skill set, rather than just hire one person to determine this.”',
                          text: {
                            content:
                              '23andMe has also toyed with the idea of hiring a chief ethics officer. In an interview I did this week with its chief executive, Anne Wojcicki, she said the genetics company had even interviewed candidates, but that many of them wanted to remain in academia to be freer to ponder these issues. She acknowledged that the collection of DNA data is rife with ethical considerations, but said, “I think it has to be our management and leaders who have to add this to our skill set, rather than just hire one person to determine this.”',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: 'cbf7e7e0-5552-4b3f-b09e-9dcca120931c',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'When asked about the idea of a single source of wisdom on ethics, some point out that legal or diversity/inclusion departments are designed for that purpose and that the ethics should really come from the top — the chief executive.',
                          text: {
                            content:
                              'When asked about the idea of a single source of wisdom on ethics, some point out that legal or diversity/inclusion departments are designed for that purpose and that the ethics should really come from the top — the chief executive.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: 'd24b2887-0f1f-4e91-99c1-c295bed8ad65',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'Also of concern is the possibility that a single person would not get listened to or, worse, get steamrollered. And, if the person was bad at the job, of course, it could drag the whole thing down.',
                          text: {
                            content:
                              'Also of concern is the possibility that a single person would not get listened to or, worse, get steamrollered. And, if the person was bad at the job, of course, it could drag the whole thing down.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '78c55f65-c8b8-4364-a369-c40699968e90',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'Others are more worried that the move would be nothing but window dressing. One consultant who focuses on ethics, but did not want to be named, told me: “We haven’t even defined ethics, so what even is ethical use, especially for Silicon Valley companies that are babies in this game?”',
                          text: {
                            content:
                              'Others are more worried that the move would be nothing but window dressing. One consultant who focuses on ethics, but did not want to be named, told me: “We haven’t even defined ethics, so what even is ethical use, especially for Silicon Valley companies that are babies in this game?”',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '0b492111-1586-4a73-8848-04f0c391aadc',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'How can an industry that, unlike other business sectors, persistently promotes itself as doing good, learn to do that in reality? Do you want to not do harm, or do you want to do good? These are two totally different things.',
                          text: {
                            content:
                              'How can an industry that, unlike other business sectors, persistently promotes itself as doing good, learn to do that in reality? Do you want to not do harm, or do you want to do good? These are two totally different things.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '302f8229-2404-460b-8c3c-e7058b4365e5',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'And how do you put an official ethical system in place without it seeming like you’re telling everyone how to behave? Who gets to decide those rules anyway, setting a moral path for the industry and — considering tech companies’ enormous power — the world.',
                          text: {
                            content:
                              'And how do you put an official ethical system in place without it seeming like you’re telling everyone how to behave? Who gets to decide those rules anyway, setting a moral path for the industry and — considering tech companies’ enormous power — the world.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '8f9bc91c-5662-4b3f-a110-809f46b79f49',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text:
                            'Like I said, adult supervision. Or maybe, better still, Silicon Valley itself has to grow up.',
                          text: {
                            content:
                              'Like I said, adult supervision. Or maybe, better still, Silicon Valley itself has to grow up.',
                            link: null,
                          },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                  {
                    created_time: '2021-04-27T20:38:19.437Z',
                    has_children: false,
                    id: '7bea1831-a25c-4b3e-8c9b-b37de814f948',
                    last_edited_time: '2021-04-27T20:38:19.437Z',
                    object: 'block',
                    paragraph: {
                      text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: 'Follow The New York Times Opinion section on ',
                          text: {
                            content: 'Follow The New York Times Opinion section on ',
                            link: null,
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: 'https://www.facebook.com/nytopinion',
                          plain_text: 'Facebook',
                          text: {
                            content: 'Facebook',
                            link: { url: 'https://www.facebook.com/nytopinion' },
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: ', ',
                          text: { content: ', ', link: null },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: 'http://twitter.com/NYTOpinion',
                          plain_text: 'Twitter (@NYTopinion)',
                          text: {
                            content: 'Twitter (@NYTopinion)',
                            link: { url: 'http://twitter.com/NYTOpinion' },
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: ' and ',
                          text: { content: ' and ', link: null },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: 'https://www.instagram.com/nytopinion/',
                          plain_text: 'Instagram',
                          text: {
                            content: 'Instagram',
                            link: { url: 'https://www.instagram.com/nytopinion/' },
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: ', and sign up for the ',
                          text: { content: ', and sign up for the ', link: null },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: 'http://www.nytimes.com/newsletters/opiniontoday/',
                          plain_text: 'Opinion Today newsletter',
                          text: {
                            content: 'Opinion Today newsletter',
                            link: { url: 'http://www.nytimes.com/newsletters/opiniontoday/' },
                          },
                          type: 'text',
                        },
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: true,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: '.',
                          text: { content: '.', link: null },
                          type: 'text',
                        },
                      ],
                    },
                    type: 'paragraph',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '647435237cce6dc4-SJC' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com/v3 https://embed.typeform.com https://admin.typeform.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://api.segment.io https://api.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com/v3 https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://api.unsplash.com https://boards-api.greenhouse.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Wed, 28 Apr 2021 23:53:00 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"65f3-d0AArGizyGsk597xfjWN7976xCc"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_browser_id=a1b1f1dd-7731-4a2b-b968-10b475e3b526; Domain=www.notion.so; Path=/; Expires=Sun, 05 Jan 2053 01:39:40 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com/v3 https://embed.typeform.com https://admin.typeform.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://api.segment.io https://api.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com/v3 https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://api.unsplash.com https://boards-api.greenhouse.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com/v3 https://embed.typeform.com https://admin.typeform.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://api.segment.io https://api.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com/v3 https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://api.unsplash.com https://boards-api.greenhouse.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
        'cf-request-id': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '09bc7f8a2a00006dc41a11e000000001' }),
        },
      }),
    },
  },
})

export const patchV1BlocksIdChildrenRoute = createRoute({
  method: 'patch',
  path: '/v1/blocks/{id}/children',
  tags: ['Blocks'],
  summary: 'Append block children',
  description: 'Append block children',
  operationId: 'appendBlockChildren',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '{{PAGE_ID}}', type: 'string' },
          },
          example: '{{PAGE_ID}}',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              children: z
                .array(
                  z
                    .object({
                      heading_2: z
                        .object({
                          text: z
                            .array(
                              z
                                .object({
                                  text: z
                                    .object({
                                      content: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'Lacinato kale' }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  type: z.string().exactOptional().openapi({ example: 'text' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [{ text: { content: 'Lacinato kale' }, type: 'text' }],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      object: z.string().exactOptional().openapi({ example: 'block' }),
                      paragraph: z
                        .object({
                          rich_text: z
                            .array(
                              z
                                .object({
                                  text: z
                                    .object({
                                      content: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example:
                                            'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
                                        }),
                                      link: z
                                        .object({
                                          url: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              example:
                                                'https://en.wikipedia.org/wiki/Lacinato_kale',
                                            }),
                                        })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  type: z.string().exactOptional().openapi({ example: 'text' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  text: {
                                    content:
                                      'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
                                    link: { url: 'https://en.wikipedia.org/wiki/Lacinato_kale' },
                                  },
                                  type: 'text',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'heading_2' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      heading_2: { text: [{ text: { content: 'Lacinato kale' }, type: 'text' }] },
                      object: 'block',
                      type: 'heading_2',
                    },
                    {
                      object: 'block',
                      paragraph: {
                        rich_text: [
                          {
                            text: {
                              content:
                                'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
                              link: { url: 'https://en.wikipedia.org/wiki/Lacinato_kale' },
                            },
                            type: 'text',
                          },
                        ],
                      },
                      type: 'paragraph',
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
          example: {
            children: [
              {
                heading_2: { text: [{ text: { content: 'Lacinato kale' }, type: 'text' }] },
                object: 'block',
                type: 'heading_2',
              },
              {
                object: 'block',
                paragraph: {
                  rich_text: [
                    {
                      text: {
                        content:
                          'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
                        link: { url: 'https://en.wikipedia.org/wiki/Lacinato_kale' },
                      },
                      type: 'text',
                    },
                  ],
                },
                type: 'paragraph',
              },
            ],
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '200 Success - Append block children',
      content: {
        'application/json': {
          schema: z
            .object({
              child_page: z
                .object({
                  title: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Who Will Teach Silicon Valley to Be Ethical? ' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              created_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-04-27T20:38:19.437Z' }),
              has_children: z.boolean().exactOptional().openapi({ example: true }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: 'a1712d54-53e4-4893-a69d-4d581cd2c845' }),
              last_edited_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-05-12T06:07:37.724Z' }),
              object: z.string().exactOptional().openapi({ example: 'block' }),
              type: z.string().exactOptional().openapi({ example: 'child_page' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Append block children': {
              value: {
                child_page: { title: 'Who Will Teach Silicon Valley to Be Ethical? ' },
                created_time: '2021-04-27T20:38:19.437Z',
                has_children: true,
                id: 'a1712d54-53e4-4893-a69d-4d581cd2c845',
                last_edited_time: '2021-05-12T06:07:37.724Z',
                object: 'block',
                type: 'child_page',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '64e177c41a820231-SJC' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://api.segment.io https://api.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Wed, 12 May 2021 06:07:37 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"105-p1Ka6kLp+wkCMX+oZhcjZAtwEtc"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_browser_id=0724819e-ad9a-4b7f-b50e-e5c75d6763dd; Domain=www.notion.so; Path=/; Expires=Sat, 18 Jan 2053 07:54:17 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://api.segment.io https://api.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://api.segment.io https://api.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
        'cf-request-id': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '0a00c92e8d00000231bf82c000000001' }),
        },
      }),
    },
  },
})

export const getV1CommentsRoute = createRoute({
  method: 'get',
  path: '/v1/comments',
  tags: ['Comments'],
  summary: 'Retrieve comments',
  description: 'Retrieve a user object using the ID specified in the request path.',
  operationId: 'retrieveComments',
  request: {
    query: z.object({
      block_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'block_id',
            schema: { example: '{{BLOCK_ID}}', type: 'string' },
            required: false,
          },
          example: '{{BLOCK_ID}}',
        }),
      page_size: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page_size',
            schema: { example: '100', type: 'string' },
            required: false,
          },
          example: '100',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: z.object({}), example: {} } },
    },
  },
  responses: {
    200: {
      description: '200 Success - Retrieve a comment',
      content: {
        'application/json': {
          schema: z
            .object({
              comment: z.object({}).exactOptional(),
              has_more: z.boolean().exactOptional().openapi({ example: false }),
              next_cursor: z.any().nullable().exactOptional().openapi({ example: null }),
              object: z.string().exactOptional().openapi({ example: 'list' }),
              results: z
                .array(
                  z
                    .object({
                      created_by: z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '952f41bb-da96-4d36-9c2e-74924eee8ef1' }),
                          object: z.string().exactOptional().openapi({ example: 'user' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      created_time: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2022-07-15T21:38:00.000Z' }),
                      discussion_id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'ce18f8c6-ef2a-427f-b416-43531fc7c117' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'ed4c62f2-c0ad-4081-b6b8-dad025637741' }),
                      last_edited_time: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2022-07-15T21:38:00.000Z' }),
                      object: z.string().exactOptional().openapi({ example: 'comment' }),
                      parent: z
                        .object({
                          block_id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '5d4ca33c-d6b7-4675-93d9-84b70af45d1c' }),
                          type: z.string().exactOptional().openapi({ example: 'block_id' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      rich_text: z
                        .array(
                          z
                            .object({
                              annotations: z
                                .object({
                                  bold: z.boolean().exactOptional().openapi({ example: false }),
                                  code: z.boolean().exactOptional().openapi({ example: false }),
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  italic: z.boolean().exactOptional().openapi({ example: false }),
                                  strikethrough: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({ example: false }),
                                  underline: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({ example: false }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              href: z.any().nullable().exactOptional().openapi({ example: null }),
                              plain_text: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'Please cite your source' }),
                              text: z
                                .object({
                                  content: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Please cite your source' }),
                                  link: z
                                    .any()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ example: null }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.string().exactOptional().openapi({ example: 'text' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          example: [
                            {
                              annotations: {
                                bold: false,
                                code: false,
                                color: 'default',
                                italic: false,
                                strikethrough: false,
                                underline: false,
                              },
                              href: null,
                              plain_text: 'Please cite your source',
                              text: { content: 'Please cite your source', link: null },
                              type: 'text',
                            },
                          ],
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      created_by: { id: '952f41bb-da96-4d36-9c2e-74924eee8ef1', object: 'user' },
                      created_time: '2022-07-15T21:38:00.000Z',
                      discussion_id: 'ce18f8c6-ef2a-427f-b416-43531fc7c117',
                      id: 'ed4c62f2-c0ad-4081-b6b8-dad025637741',
                      last_edited_time: '2022-07-15T21:38:00.000Z',
                      object: 'comment',
                      parent: {
                        block_id: '5d4ca33c-d6b7-4675-93d9-84b70af45d1c',
                        type: 'block_id',
                      },
                      rich_text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: 'Please cite your source',
                          text: { content: 'Please cite your source', link: null },
                          type: 'text',
                        },
                      ],
                    },
                    {
                      created_by: { id: '952f41bb-da96-4d36-9c2e-74924eee8ef1', object: 'user' },
                      created_time: '2022-07-15T21:38:00.000Z',
                      discussion_id: 'e63f446f-a84a-4cab-8f5a-b9e7779ecb67',
                      id: '8949cb38-aee6-4c62-ba96-6ef7df9b4cf2',
                      last_edited_time: '2022-07-15T21:38:00.000Z',
                      object: 'comment',
                      parent: {
                        block_id: '5d4ca33c-d6b7-4675-93d9-84b70af45d1c',
                        type: 'block_id',
                      },
                      rich_text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: null,
                          plain_text: 'What other nutrients does kale have?',
                          text: { content: 'What other nutrients does kale have?', link: null },
                          type: 'text',
                        },
                      ],
                    },
                    {
                      created_by: { id: 'e450a39e-9051-4d36-bc4e-8581611fc592', object: 'user' },
                      created_time: '2022-07-18T21:48:00.000Z',
                      discussion_id: 'ce18f8c6-ef2a-427f-b416-43531fc7c117',
                      id: '6cd52483-6d55-4f8a-a724-4adb1c17ed43',
                      last_edited_time: '2022-07-18T21:48:00.000Z',
                      object: 'comment',
                      parent: {
                        block_id: '5d4ca33c-d6b7-4675-93d9-84b70af45d1c',
                        type: 'block_id',
                      },
                      rich_text: [
                        {
                          annotations: {
                            bold: false,
                            code: false,
                            color: 'default',
                            italic: false,
                            strikethrough: false,
                            underline: false,
                          },
                          href: 'https://www.healthline.com/nutrition/10-proven-benefits-of-kale',
                          plain_text:
                            'https://www.healthline.com/nutrition/10-proven-benefits-of-kale',
                          text: {
                            content:
                              'https://www.healthline.com/nutrition/10-proven-benefits-of-kale',
                            link: {
                              url: 'https://www.healthline.com/nutrition/10-proven-benefits-of-kale',
                            },
                          },
                          type: 'text',
                        },
                      ],
                    },
                  ],
                }),
              type: z.string().exactOptional().openapi({ example: 'comment' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Retrieve a comment': {
              value: {
                comment: {},
                has_more: false,
                next_cursor: null,
                object: 'list',
                results: [
                  {
                    created_by: { id: '952f41bb-da96-4d36-9c2e-74924eee8ef1', object: 'user' },
                    created_time: '2022-07-15T21:38:00.000Z',
                    discussion_id: 'ce18f8c6-ef2a-427f-b416-43531fc7c117',
                    id: 'ed4c62f2-c0ad-4081-b6b8-dad025637741',
                    last_edited_time: '2022-07-15T21:38:00.000Z',
                    object: 'comment',
                    parent: { block_id: '5d4ca33c-d6b7-4675-93d9-84b70af45d1c', type: 'block_id' },
                    rich_text: [
                      {
                        annotations: {
                          bold: false,
                          code: false,
                          color: 'default',
                          italic: false,
                          strikethrough: false,
                          underline: false,
                        },
                        href: null,
                        plain_text: 'Please cite your source',
                        text: { content: 'Please cite your source', link: null },
                        type: 'text',
                      },
                    ],
                  },
                  {
                    created_by: { id: '952f41bb-da96-4d36-9c2e-74924eee8ef1', object: 'user' },
                    created_time: '2022-07-15T21:38:00.000Z',
                    discussion_id: 'e63f446f-a84a-4cab-8f5a-b9e7779ecb67',
                    id: '8949cb38-aee6-4c62-ba96-6ef7df9b4cf2',
                    last_edited_time: '2022-07-15T21:38:00.000Z',
                    object: 'comment',
                    parent: { block_id: '5d4ca33c-d6b7-4675-93d9-84b70af45d1c', type: 'block_id' },
                    rich_text: [
                      {
                        annotations: {
                          bold: false,
                          code: false,
                          color: 'default',
                          italic: false,
                          strikethrough: false,
                          underline: false,
                        },
                        href: null,
                        plain_text: 'What other nutrients does kale have?',
                        text: { content: 'What other nutrients does kale have?', link: null },
                        type: 'text',
                      },
                    ],
                  },
                  {
                    created_by: { id: 'e450a39e-9051-4d36-bc4e-8581611fc592', object: 'user' },
                    created_time: '2022-07-18T21:48:00.000Z',
                    discussion_id: 'ce18f8c6-ef2a-427f-b416-43531fc7c117',
                    id: '6cd52483-6d55-4f8a-a724-4adb1c17ed43',
                    last_edited_time: '2022-07-18T21:48:00.000Z',
                    object: 'comment',
                    parent: { block_id: '5d4ca33c-d6b7-4675-93d9-84b70af45d1c', type: 'block_id' },
                    rich_text: [
                      {
                        annotations: {
                          bold: false,
                          code: false,
                          color: 'default',
                          italic: false,
                          strikethrough: false,
                          underline: false,
                        },
                        href: 'https://www.healthline.com/nutrition/10-proven-benefits-of-kale',
                        plain_text:
                          'https://www.healthline.com/nutrition/10-proven-benefits-of-kale',
                        text: {
                          content:
                            'https://www.healthline.com/nutrition/10-proven-benefits-of-kale',
                          link: {
                            url: 'https://www.healthline.com/nutrition/10-proven-benefits-of-kale',
                          },
                        },
                        type: 'text',
                      },
                    ],
                  },
                ],
                type: 'comment',
              },
            },
          },
        },
      },
      headers: z.object({
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Length': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '704' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://www.google.com https://www.gstatic.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://static.zdassets.com https://api.smooch.io\t https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://api-v2.mutinyhq.io https://client-registry.mutinycdn.com https://client.mutinycdn.com https://user-data.mutinycdn.com http://localhost:3003 http://0.0.0.0:3003;connect-src 'self' http://localhost:3001 ws://localhost:3001 ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-local-snapshots-2.s3.us-west-2.amazonaws.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so http://localhost:3000 https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io https://uploads.intercomcdn.com wss://nexus-websocket-a.intercom.io https://ekr.zdassets.com https://ekr.zendesk.com\t https://makenotion.zendesk.com\t https://api.smooch.io\t wss://api.smooch.io\t https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://www.googleadservices.com https://googleads.g.doubleclick.net https://region1.google-analytics.com https://region1.analytics.google.com https://www.google-analytics.com https://api-v2.mutinyhq.io https://client-registry.mutinycdn.com https://client.mutinycdn.com https://user-data.mutinycdn.com https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com https://statsigapi.net http://localhost:3003 ws://localhost:3003 ws://*.pages.local.notion.co:3003 http://0.0.0.0:3003 ws://0.0.0.0:3003;font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com http://localhost:3003 http://0.0.0.0:3003;img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com https://region1.google-analytics.com https://region1.analytics.google.com http://localhost:3003 http://0.0.0.0:3003;style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com http://localhost:3003 http://0.0.0.0:3003;frame-src https: http:;media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Fri, 15 Jul 2022 16:58:23 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"2c0-mVXaT7TnMaE5ytatx672v7KLMB0"',
            }),
        },
        'Keep-Alive': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'timeout=5' }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-Permitted-Cross-Domain-Policies': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'none' }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '0' }),
        },
      }),
    },
  },
})

export const getV1DatabasesIdRoute = createRoute({
  method: 'get',
  path: '/v1/databases/{id}',
  tags: ['Databases'],
  summary: 'Retrieve a database',
  description: 'Retrieves a database object using the ID specified in the request path. ',
  operationId: 'retrieveADatabase',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200 Success - Retrieve a Database',
      content: {
        'application/json': {
          schema: z
            .object({
              archived: z.boolean().exactOptional().openapi({ example: false }),
              cover: z.any().nullable().exactOptional().openapi({ example: null }),
              created_by: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '6794760a-1f15-45cd-9c65-0dfe42f5135a' }),
                  object: z.string().exactOptional().openapi({ example: 'user' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              created_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-04-27T20:38:00.000Z' }),
              icon: z.any().nullable().exactOptional().openapi({ example: null }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae' }),
              last_edited_by: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '6794760a-1f15-45cd-9c65-0dfe42f5135a' }),
                  object: z.string().exactOptional().openapi({ example: 'user' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              last_edited_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2022-02-24T22:14:00.000Z' }),
              object: z.string().exactOptional().openapi({ example: 'database' }),
              parent: z
                .object({
                  page_id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'c4d39556-6364-46a1-8a61-ebbb668f7445' }),
                  type: z.string().exactOptional().openapi({ example: 'page_id' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              properties: z
                .object({
                  Author: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'qNw_' }),
                      multi_select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '15592971-7b30-43d5-9406-2eb69b13fcae' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Spencer Greenberg' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'default',
                                  id: '15592971-7b30-43d5-9406-2eb69b13fcae',
                                  name: 'Spencer Greenberg',
                                },
                                {
                                  color: 'default',
                                  id: 'b80a988e-dccf-4f74-b764-6ca0e49ed1b8',
                                  name: 'Seth Stephens-Davidowitz',
                                },
                                {
                                  color: 'default',
                                  id: '0e71ee06-199d-46a4-834c-01084c8f76cb',
                                  name: 'Andrew Russell',
                                },
                                {
                                  color: 'default',
                                  id: '5807ec38-4879-4455-9f30-5352e90e8b79',
                                  name: 'Lee Vinsel',
                                },
                                {
                                  color: 'default',
                                  id: '4cf10a64-f3da-449c-8e04-ce6e338bbdbd',
                                  name: 'Megan Greenwell',
                                },
                                {
                                  color: 'default',
                                  id: '833e2c78-35ed-4601-badc-50c323341d76',
                                  name: 'Kara Swisher',
                                },
                                {
                                  color: 'default',
                                  id: '82e594e2-b1c5-4271-ac19-1a723a94a533',
                                  name: 'Paul Romer',
                                },
                                {
                                  color: 'default',
                                  id: 'ae3a2cbe-1fc9-4376-be35-331628b34623',
                                  name: 'Karen Swallow Prior',
                                },
                                {
                                  color: 'default',
                                  id: 'da068e78-dfe2-4434-9fd7-b7450b3e5830',
                                  name: 'Judith Shulevitz',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      name: z.string().exactOptional().openapi({ example: 'Author' }),
                      type: z.string().exactOptional().openapi({ example: 'multi_select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Link: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'VVMi' }),
                      name: z.string().exactOptional().openapi({ example: 'Link' }),
                      type: z.string().exactOptional().openapi({ example: 'url' }),
                      url: z.object({}).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Name: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'title' }),
                      name: z.string().exactOptional().openapi({ example: 'Name' }),
                      title: z.object({}).exactOptional(),
                      type: z.string().exactOptional().openapi({ example: 'title' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Publisher: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '%3E%24Pb' }),
                      name: z.string().exactOptional().openapi({ example: 'Publisher' }),
                      select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'c5ee409a-f307-4176-99ee-6e424fa89afa' }),
                                  name: z.string().exactOptional().openapi({ example: 'NYT' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'default',
                                  id: 'c5ee409a-f307-4176-99ee-6e424fa89afa',
                                  name: 'NYT',
                                },
                                {
                                  color: 'blue',
                                  id: '1b9b0c0c-17b0-4292-ad12-1364a51849de',
                                  name: 'Netflix',
                                },
                                {
                                  color: 'brown',
                                  id: 'f3533637-278f-4501-b394-d9753bf3c101',
                                  name: 'Indie',
                                },
                                {
                                  color: 'yellow',
                                  id: 'e70d713c-4be4-4b40-a44d-fb413c8b9d7e',
                                  name: 'Bon Appetit',
                                },
                                {
                                  color: 'pink',
                                  id: '9c2bd667-0a10-4be4-a044-35a537a14ab9',
                                  name: 'Franklin Institute',
                                },
                                {
                                  color: 'orange',
                                  id: '6849b5f0-e641-4ec5-83cb-1ffe23011060',
                                  name: 'Springer',
                                },
                                {
                                  color: 'gray',
                                  id: '6a5bff63-a72d-4464-a5d0-1a601af2adf6',
                                  name: 'Emerald Group',
                                },
                                {
                                  color: 'red',
                                  id: '01f82d08-aa1f-4884-a4e0-3bc32f909ec4',
                                  name: 'The Atlantic',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  'Publishing/Release Date': z
                    .object({
                      date: z.object({}).exactOptional(),
                      id: z.string().exactOptional().openapi({ example: '%3Fex%2B' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Publishing/Release Date' }),
                      type: z.string().exactOptional().openapi({ example: 'date' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Read: z
                    .object({
                      checkbox: z.object({}).exactOptional(),
                      id: z.string().exactOptional().openapi({ example: '_MWJ' }),
                      name: z.string().exactOptional().openapi({ example: 'Read' }),
                      type: z.string().exactOptional().openapi({ example: 'checkbox' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  'Score /5': z
                    .object({
                      id: z.string().exactOptional().openapi({ example: ')Y7%22' }),
                      name: z.string().exactOptional().openapi({ example: 'Score /5' }),
                      select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '5c944de7-3f4b-4567-b3a1-fa2c71c540b6' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '⭐️⭐️⭐️⭐️⭐️' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'default',
                                  id: '5c944de7-3f4b-4567-b3a1-fa2c71c540b6',
                                  name: '⭐️⭐️⭐️⭐️⭐️',
                                },
                                {
                                  color: 'default',
                                  id: 'b7307e35-c80a-4cb5-bb6b-6054523b394a',
                                  name: '⭐️⭐️⭐️⭐️',
                                },
                                {
                                  color: 'default',
                                  id: '9b1e1349-8e24-40ba-bbca-84a61296bc81',
                                  name: '⭐️⭐️⭐️',
                                },
                                {
                                  color: 'default',
                                  id: '66d3d050-086c-4a91-8c56-d55dc67e7789',
                                  name: '⭐️⭐️',
                                },
                                {
                                  color: 'default',
                                  id: 'd3782c76-0396-467f-928e-46bf0c9d5fba',
                                  name: '⭐️',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Status: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '%60zz5' }),
                      name: z.string().exactOptional().openapi({ example: 'Status' }),
                      select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'yellow' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '8c4a056e-6709-4dd1-ba58-d34d9480855a' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Ready to Start' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'yellow',
                                  id: '8c4a056e-6709-4dd1-ba58-d34d9480855a',
                                  name: 'Ready to Start',
                                },
                                {
                                  color: 'red',
                                  id: '5925ba22-0126-4b58-90c7-b8bbb2c3c895',
                                  name: 'Reading',
                                },
                                {
                                  color: 'blue',
                                  id: '59aa9043-07b4-4bf4-8734-3164b13af44a',
                                  name: 'Finished',
                                },
                                {
                                  color: 'red',
                                  id: 'f961978d-02eb-4998-933a-33c2ec378564',
                                  name: 'Listening',
                                },
                                {
                                  color: 'red',
                                  id: '1d450853-b27a-45e2-979f-448aa1bd35de',
                                  name: 'Watching',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Summary: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '%3F%5C25' }),
                      name: z.string().exactOptional().openapi({ example: 'Summary' }),
                      rich_text: z.object({}).exactOptional(),
                      type: z.string().exactOptional().openapi({ example: 'rich_text' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Type: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '%2F7eo' }),
                      name: z.string().exactOptional().openapi({ example: 'Type' }),
                      select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'f96d0d0a-5564-4a20-ab15-5f040d49759e' }),
                                  name: z.string().exactOptional().openapi({ example: 'Article' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'default',
                                  id: 'f96d0d0a-5564-4a20-ab15-5f040d49759e',
                                  name: 'Article',
                                },
                                {
                                  color: 'default',
                                  id: '4ac85597-5db1-4e0a-9c02-445575c38f76',
                                  name: 'TV Series',
                                },
                                {
                                  color: 'default',
                                  id: '2991748a-5745-4c3b-9c9b-2d6846a6fa1f',
                                  name: 'Film',
                                },
                                {
                                  color: 'default',
                                  id: '82f3bace-be25-410d-87fe-561c9c22492f',
                                  name: 'Podcast',
                                },
                                {
                                  color: 'default',
                                  id: '861f1076-1cc4-429a-a781-54947d727a4a',
                                  name: 'Academic Journal',
                                },
                                {
                                  color: 'default',
                                  id: '9cc30548-59d6-4cd3-94bc-d234081525c4',
                                  name: 'Essay Resource',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              title: z
                .array(
                  z
                    .object({
                      annotations: z
                        .object({
                          bold: z.boolean().exactOptional().openapi({ example: false }),
                          code: z.boolean().exactOptional().openapi({ example: false }),
                          color: z.string().exactOptional().openapi({ example: 'default' }),
                          italic: z.boolean().exactOptional().openapi({ example: false }),
                          strikethrough: z.boolean().exactOptional().openapi({ example: false }),
                          underline: z.boolean().exactOptional().openapi({ example: false }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      href: z.any().nullable().exactOptional().openapi({ example: null }),
                      plain_text: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Ever Better Reading List Title' }),
                      text: z
                        .object({
                          content: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Ever Better Reading List Title' }),
                          link: z.any().nullable().exactOptional().openapi({ example: null }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'text' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      annotations: {
                        bold: false,
                        code: false,
                        color: 'default',
                        italic: false,
                        strikethrough: false,
                        underline: false,
                      },
                      href: null,
                      plain_text: 'Ever Better Reading List Title',
                      text: { content: 'Ever Better Reading List Title', link: null },
                      type: 'text',
                    },
                  ],
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://www.notion.so/8e2c2b769e1d47d287b9ed3035d607ae' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Retrieve a Database': {
              value: {
                archived: false,
                cover: null,
                created_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                created_time: '2021-04-27T20:38:00.000Z',
                icon: null,
                id: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae',
                last_edited_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                last_edited_time: '2022-02-24T22:14:00.000Z',
                object: 'database',
                parent: { page_id: 'c4d39556-6364-46a1-8a61-ebbb668f7445', type: 'page_id' },
                properties: {
                  Author: {
                    id: 'qNw_',
                    multi_select: {
                      options: [
                        {
                          color: 'default',
                          id: '15592971-7b30-43d5-9406-2eb69b13fcae',
                          name: 'Spencer Greenberg',
                        },
                        {
                          color: 'default',
                          id: 'b80a988e-dccf-4f74-b764-6ca0e49ed1b8',
                          name: 'Seth Stephens-Davidowitz',
                        },
                        {
                          color: 'default',
                          id: '0e71ee06-199d-46a4-834c-01084c8f76cb',
                          name: 'Andrew Russell',
                        },
                        {
                          color: 'default',
                          id: '5807ec38-4879-4455-9f30-5352e90e8b79',
                          name: 'Lee Vinsel',
                        },
                        {
                          color: 'default',
                          id: '4cf10a64-f3da-449c-8e04-ce6e338bbdbd',
                          name: 'Megan Greenwell',
                        },
                        {
                          color: 'default',
                          id: '833e2c78-35ed-4601-badc-50c323341d76',
                          name: 'Kara Swisher',
                        },
                        {
                          color: 'default',
                          id: '82e594e2-b1c5-4271-ac19-1a723a94a533',
                          name: 'Paul Romer',
                        },
                        {
                          color: 'default',
                          id: 'ae3a2cbe-1fc9-4376-be35-331628b34623',
                          name: 'Karen Swallow Prior',
                        },
                        {
                          color: 'default',
                          id: 'da068e78-dfe2-4434-9fd7-b7450b3e5830',
                          name: 'Judith Shulevitz',
                        },
                      ],
                    },
                    name: 'Author',
                    type: 'multi_select',
                  },
                  Link: { id: 'VVMi', name: 'Link', type: 'url', url: {} },
                  Name: { id: 'title', name: 'Name', title: {}, type: 'title' },
                  Publisher: {
                    id: '%3E%24Pb',
                    name: 'Publisher',
                    select: {
                      options: [
                        {
                          color: 'default',
                          id: 'c5ee409a-f307-4176-99ee-6e424fa89afa',
                          name: 'NYT',
                        },
                        {
                          color: 'blue',
                          id: '1b9b0c0c-17b0-4292-ad12-1364a51849de',
                          name: 'Netflix',
                        },
                        {
                          color: 'brown',
                          id: 'f3533637-278f-4501-b394-d9753bf3c101',
                          name: 'Indie',
                        },
                        {
                          color: 'yellow',
                          id: 'e70d713c-4be4-4b40-a44d-fb413c8b9d7e',
                          name: 'Bon Appetit',
                        },
                        {
                          color: 'pink',
                          id: '9c2bd667-0a10-4be4-a044-35a537a14ab9',
                          name: 'Franklin Institute',
                        },
                        {
                          color: 'orange',
                          id: '6849b5f0-e641-4ec5-83cb-1ffe23011060',
                          name: 'Springer',
                        },
                        {
                          color: 'gray',
                          id: '6a5bff63-a72d-4464-a5d0-1a601af2adf6',
                          name: 'Emerald Group',
                        },
                        {
                          color: 'red',
                          id: '01f82d08-aa1f-4884-a4e0-3bc32f909ec4',
                          name: 'The Atlantic',
                        },
                      ],
                    },
                    type: 'select',
                  },
                  'Publishing/Release Date': {
                    date: {},
                    id: '%3Fex%2B',
                    name: 'Publishing/Release Date',
                    type: 'date',
                  },
                  Read: { checkbox: {}, id: '_MWJ', name: 'Read', type: 'checkbox' },
                  'Score /5': {
                    id: ')Y7%22',
                    name: 'Score /5',
                    select: {
                      options: [
                        {
                          color: 'default',
                          id: '5c944de7-3f4b-4567-b3a1-fa2c71c540b6',
                          name: '⭐️⭐️⭐️⭐️⭐️',
                        },
                        {
                          color: 'default',
                          id: 'b7307e35-c80a-4cb5-bb6b-6054523b394a',
                          name: '⭐️⭐️⭐️⭐️',
                        },
                        {
                          color: 'default',
                          id: '9b1e1349-8e24-40ba-bbca-84a61296bc81',
                          name: '⭐️⭐️⭐️',
                        },
                        {
                          color: 'default',
                          id: '66d3d050-086c-4a91-8c56-d55dc67e7789',
                          name: '⭐️⭐️',
                        },
                        {
                          color: 'default',
                          id: 'd3782c76-0396-467f-928e-46bf0c9d5fba',
                          name: '⭐️',
                        },
                      ],
                    },
                    type: 'select',
                  },
                  Status: {
                    id: '%60zz5',
                    name: 'Status',
                    select: {
                      options: [
                        {
                          color: 'yellow',
                          id: '8c4a056e-6709-4dd1-ba58-d34d9480855a',
                          name: 'Ready to Start',
                        },
                        {
                          color: 'red',
                          id: '5925ba22-0126-4b58-90c7-b8bbb2c3c895',
                          name: 'Reading',
                        },
                        {
                          color: 'blue',
                          id: '59aa9043-07b4-4bf4-8734-3164b13af44a',
                          name: 'Finished',
                        },
                        {
                          color: 'red',
                          id: 'f961978d-02eb-4998-933a-33c2ec378564',
                          name: 'Listening',
                        },
                        {
                          color: 'red',
                          id: '1d450853-b27a-45e2-979f-448aa1bd35de',
                          name: 'Watching',
                        },
                      ],
                    },
                    type: 'select',
                  },
                  Summary: { id: '%3F%5C25', name: 'Summary', rich_text: {}, type: 'rich_text' },
                  Type: {
                    id: '%2F7eo',
                    name: 'Type',
                    select: {
                      options: [
                        {
                          color: 'default',
                          id: 'f96d0d0a-5564-4a20-ab15-5f040d49759e',
                          name: 'Article',
                        },
                        {
                          color: 'default',
                          id: '4ac85597-5db1-4e0a-9c02-445575c38f76',
                          name: 'TV Series',
                        },
                        {
                          color: 'default',
                          id: '2991748a-5745-4c3b-9c9b-2d6846a6fa1f',
                          name: 'Film',
                        },
                        {
                          color: 'default',
                          id: '82f3bace-be25-410d-87fe-561c9c22492f',
                          name: 'Podcast',
                        },
                        {
                          color: 'default',
                          id: '861f1076-1cc4-429a-a781-54947d727a4a',
                          name: 'Academic Journal',
                        },
                        {
                          color: 'default',
                          id: '9cc30548-59d6-4cd3-94bc-d234081525c4',
                          name: 'Essay Resource',
                        },
                      ],
                    },
                    type: 'select',
                  },
                },
                title: [
                  {
                    annotations: {
                      bold: false,
                      code: false,
                      color: 'default',
                      italic: false,
                      strikethrough: false,
                      underline: false,
                    },
                    href: null,
                    plain_text: 'Ever Better Reading List Title',
                    text: { content: 'Ever Better Reading List Title', link: null },
                    type: 'text',
                  },
                ],
                url: 'https://www.notion.so/8e2c2b769e1d47d287b9ed3035d607ae',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '6e57ad7a19c482ab-IAD' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Wed, 02 Mar 2022 05:19:28 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"110f-R5+JLAgaiYySC0RHfDR5I4HPYWU"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_check_cookie_consent=false; Domain=www.notion.so; Path=/; Expires=Thu, 03 Mar 2022 05:19:28 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})

export const patchV1DatabasesIdRoute = createRoute({
  method: 'patch',
  path: '/v1/databases/{id}',
  tags: ['Databases'],
  summary: 'Update a database',
  description: 'Update a database',
  operationId: 'updateADatabase',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              properties: z
                .object({
                  'Wine Pairing': z
                    .object({ rich_text: z.object({}).exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              title: z
                .array(
                  z
                    .object({
                      text: z
                        .object({
                          content: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Ever Better Reading List Title' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ example: [{ text: { content: 'Ever Better Reading List Title' } }] }),
            })
            .openapi({ required: [] }),
          example: {
            properties: { 'Wine Pairing': { rich_text: {} } },
            title: [{ text: { content: 'Ever Better Reading List Title' } }],
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '200 Success - Update a Database',
      content: {
        'application/json': {
          schema: z
            .object({
              archived: z.boolean().exactOptional().openapi({ example: false }),
              cover: z.any().nullable().exactOptional().openapi({ example: null }),
              created_by: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '6794760a-1f15-45cd-9c65-0dfe42f5135a' }),
                  object: z.string().exactOptional().openapi({ example: 'user' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              created_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-04-27T20:38:00.000Z' }),
              icon: z.any().nullable().exactOptional().openapi({ example: null }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae' }),
              last_edited_by: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '92a680bb-6970-4726-952b-4f4c03bff617' }),
                  object: z.string().exactOptional().openapi({ example: 'user' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              last_edited_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2022-02-24T22:08:00.000Z' }),
              object: z.string().exactOptional().openapi({ example: 'database' }),
              parent: z
                .object({
                  page_id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'c4d39556-6364-46a1-8a61-ebbb668f7445' }),
                  type: z.string().exactOptional().openapi({ example: 'page_id' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              properties: z
                .object({
                  Author: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'qNw_' }),
                      multi_select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '15592971-7b30-43d5-9406-2eb69b13fcae' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Spencer Greenberg' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'default',
                                  id: '15592971-7b30-43d5-9406-2eb69b13fcae',
                                  name: 'Spencer Greenberg',
                                },
                                {
                                  color: 'default',
                                  id: 'b80a988e-dccf-4f74-b764-6ca0e49ed1b8',
                                  name: 'Seth Stephens-Davidowitz',
                                },
                                {
                                  color: 'default',
                                  id: '0e71ee06-199d-46a4-834c-01084c8f76cb',
                                  name: 'Andrew Russell',
                                },
                                {
                                  color: 'default',
                                  id: '5807ec38-4879-4455-9f30-5352e90e8b79',
                                  name: 'Lee Vinsel',
                                },
                                {
                                  color: 'default',
                                  id: '4cf10a64-f3da-449c-8e04-ce6e338bbdbd',
                                  name: 'Megan Greenwell',
                                },
                                {
                                  color: 'default',
                                  id: '833e2c78-35ed-4601-badc-50c323341d76',
                                  name: 'Kara Swisher',
                                },
                                {
                                  color: 'default',
                                  id: '82e594e2-b1c5-4271-ac19-1a723a94a533',
                                  name: 'Paul Romer',
                                },
                                {
                                  color: 'default',
                                  id: 'ae3a2cbe-1fc9-4376-be35-331628b34623',
                                  name: 'Karen Swallow Prior',
                                },
                                {
                                  color: 'default',
                                  id: 'da068e78-dfe2-4434-9fd7-b7450b3e5830',
                                  name: 'Judith Shulevitz',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      name: z.string().exactOptional().openapi({ example: 'Author' }),
                      type: z.string().exactOptional().openapi({ example: 'multi_select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Link: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'VVMi' }),
                      name: z.string().exactOptional().openapi({ example: 'Link' }),
                      type: z.string().exactOptional().openapi({ example: 'url' }),
                      url: z.object({}).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Name: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'title' }),
                      name: z.string().exactOptional().openapi({ example: 'Name' }),
                      title: z.object({}).exactOptional(),
                      type: z.string().exactOptional().openapi({ example: 'title' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Publisher: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '>$Pb' }),
                      name: z.string().exactOptional().openapi({ example: 'Publisher' }),
                      select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'c5ee409a-f307-4176-99ee-6e424fa89afa' }),
                                  name: z.string().exactOptional().openapi({ example: 'NYT' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'default',
                                  id: 'c5ee409a-f307-4176-99ee-6e424fa89afa',
                                  name: 'NYT',
                                },
                                {
                                  color: 'blue',
                                  id: '1b9b0c0c-17b0-4292-ad12-1364a51849de',
                                  name: 'Netflix',
                                },
                                {
                                  color: 'brown',
                                  id: 'f3533637-278f-4501-b394-d9753bf3c101',
                                  name: 'Indie',
                                },
                                {
                                  color: 'yellow',
                                  id: 'e70d713c-4be4-4b40-a44d-fb413c8b9d7e',
                                  name: 'Bon Appetit',
                                },
                                {
                                  color: 'pink',
                                  id: '9c2bd667-0a10-4be4-a044-35a537a14ab9',
                                  name: 'Franklin Institute',
                                },
                                {
                                  color: 'orange',
                                  id: '6849b5f0-e641-4ec5-83cb-1ffe23011060',
                                  name: 'Springer',
                                },
                                {
                                  color: 'gray',
                                  id: '6a5bff63-a72d-4464-a5d0-1a601af2adf6',
                                  name: 'Emerald Group',
                                },
                                {
                                  color: 'red',
                                  id: '01f82d08-aa1f-4884-a4e0-3bc32f909ec4',
                                  name: 'The Atlantic',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  'Publishing/Release Date': z
                    .object({
                      date: z.object({}).exactOptional(),
                      id: z.string().exactOptional().openapi({ example: '?ex+' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Publishing/Release Date' }),
                      type: z.string().exactOptional().openapi({ example: 'date' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Read: z
                    .object({
                      checkbox: z.object({}).exactOptional(),
                      id: z.string().exactOptional().openapi({ example: '_MWJ' }),
                      name: z.string().exactOptional().openapi({ example: 'Read' }),
                      type: z.string().exactOptional().openapi({ example: 'checkbox' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  'Score /5': z
                    .object({
                      id: z.string().exactOptional().openapi({ example: ')Y7"' }),
                      name: z.string().exactOptional().openapi({ example: 'Score /5' }),
                      select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '5c944de7-3f4b-4567-b3a1-fa2c71c540b6' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '⭐️⭐️⭐️⭐️⭐️' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'default',
                                  id: '5c944de7-3f4b-4567-b3a1-fa2c71c540b6',
                                  name: '⭐️⭐️⭐️⭐️⭐️',
                                },
                                {
                                  color: 'default',
                                  id: 'b7307e35-c80a-4cb5-bb6b-6054523b394a',
                                  name: '⭐️⭐️⭐️⭐️',
                                },
                                {
                                  color: 'default',
                                  id: '9b1e1349-8e24-40ba-bbca-84a61296bc81',
                                  name: '⭐️⭐️⭐️',
                                },
                                {
                                  color: 'default',
                                  id: '66d3d050-086c-4a91-8c56-d55dc67e7789',
                                  name: '⭐️⭐️',
                                },
                                {
                                  color: 'default',
                                  id: 'd3782c76-0396-467f-928e-46bf0c9d5fba',
                                  name: '⭐️',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Status: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '`zz5' }),
                      name: z.string().exactOptional().openapi({ example: 'Status' }),
                      select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'yellow' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '8c4a056e-6709-4dd1-ba58-d34d9480855a' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Ready to Start' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'yellow',
                                  id: '8c4a056e-6709-4dd1-ba58-d34d9480855a',
                                  name: 'Ready to Start',
                                },
                                {
                                  color: 'red',
                                  id: '5925ba22-0126-4b58-90c7-b8bbb2c3c895',
                                  name: 'Reading',
                                },
                                {
                                  color: 'blue',
                                  id: '59aa9043-07b4-4bf4-8734-3164b13af44a',
                                  name: 'Finished',
                                },
                                {
                                  color: 'red',
                                  id: 'f961978d-02eb-4998-933a-33c2ec378564',
                                  name: 'Listening',
                                },
                                {
                                  color: 'red',
                                  id: '1d450853-b27a-45e2-979f-448aa1bd35de',
                                  name: 'Watching',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Summary: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '?\\25' }),
                      name: z.string().exactOptional().openapi({ example: 'Summary' }),
                      rich_text: z.object({}).exactOptional(),
                      type: z.string().exactOptional().openapi({ example: 'rich_text' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Type: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '/7eo' }),
                      name: z.string().exactOptional().openapi({ example: 'Type' }),
                      select: z
                        .object({
                          options: z
                            .array(
                              z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'f96d0d0a-5564-4a20-ab15-5f040d49759e' }),
                                  name: z.string().exactOptional().openapi({ example: 'Article' }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              example: [
                                {
                                  color: 'default',
                                  id: 'f96d0d0a-5564-4a20-ab15-5f040d49759e',
                                  name: 'Article',
                                },
                                {
                                  color: 'default',
                                  id: '4ac85597-5db1-4e0a-9c02-445575c38f76',
                                  name: 'TV Series',
                                },
                                {
                                  color: 'default',
                                  id: '2991748a-5745-4c3b-9c9b-2d6846a6fa1f',
                                  name: 'Film',
                                },
                                {
                                  color: 'default',
                                  id: '82f3bace-be25-410d-87fe-561c9c22492f',
                                  name: 'Podcast',
                                },
                                {
                                  color: 'default',
                                  id: '861f1076-1cc4-429a-a781-54947d727a4a',
                                  name: 'Academic Journal',
                                },
                                {
                                  color: 'default',
                                  id: '9cc30548-59d6-4cd3-94bc-d234081525c4',
                                  name: 'Essay Resource',
                                },
                              ],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  'Wine Pairing': z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'Y=H]' }),
                      name: z.string().exactOptional().openapi({ example: 'Wine Pairing' }),
                      rich_text: z.object({}).exactOptional(),
                      type: z.string().exactOptional().openapi({ example: 'rich_text' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              title: z
                .array(
                  z
                    .object({
                      annotations: z
                        .object({
                          bold: z.boolean().exactOptional().openapi({ example: false }),
                          code: z.boolean().exactOptional().openapi({ example: false }),
                          color: z.string().exactOptional().openapi({ example: 'default' }),
                          italic: z.boolean().exactOptional().openapi({ example: false }),
                          strikethrough: z.boolean().exactOptional().openapi({ example: false }),
                          underline: z.boolean().exactOptional().openapi({ example: false }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      href: z.any().nullable().exactOptional().openapi({ example: null }),
                      plain_text: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Ever Better Reading List Title' }),
                      text: z
                        .object({
                          content: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Ever Better Reading List Title' }),
                          link: z.any().nullable().exactOptional().openapi({ example: null }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'text' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      annotations: {
                        bold: false,
                        code: false,
                        color: 'default',
                        italic: false,
                        strikethrough: false,
                        underline: false,
                      },
                      href: null,
                      plain_text: 'Ever Better Reading List Title',
                      text: { content: 'Ever Better Reading List Title', link: null },
                      type: 'text',
                    },
                  ],
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://www.notion.so/8e2c2b769e1d47d287b9ed3035d607ae' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Update a Database': {
              value: {
                archived: false,
                cover: null,
                created_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                created_time: '2021-04-27T20:38:00.000Z',
                icon: null,
                id: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae',
                last_edited_by: { id: '92a680bb-6970-4726-952b-4f4c03bff617', object: 'user' },
                last_edited_time: '2022-02-24T22:08:00.000Z',
                object: 'database',
                parent: { page_id: 'c4d39556-6364-46a1-8a61-ebbb668f7445', type: 'page_id' },
                properties: {
                  Author: {
                    id: 'qNw_',
                    multi_select: {
                      options: [
                        {
                          color: 'default',
                          id: '15592971-7b30-43d5-9406-2eb69b13fcae',
                          name: 'Spencer Greenberg',
                        },
                        {
                          color: 'default',
                          id: 'b80a988e-dccf-4f74-b764-6ca0e49ed1b8',
                          name: 'Seth Stephens-Davidowitz',
                        },
                        {
                          color: 'default',
                          id: '0e71ee06-199d-46a4-834c-01084c8f76cb',
                          name: 'Andrew Russell',
                        },
                        {
                          color: 'default',
                          id: '5807ec38-4879-4455-9f30-5352e90e8b79',
                          name: 'Lee Vinsel',
                        },
                        {
                          color: 'default',
                          id: '4cf10a64-f3da-449c-8e04-ce6e338bbdbd',
                          name: 'Megan Greenwell',
                        },
                        {
                          color: 'default',
                          id: '833e2c78-35ed-4601-badc-50c323341d76',
                          name: 'Kara Swisher',
                        },
                        {
                          color: 'default',
                          id: '82e594e2-b1c5-4271-ac19-1a723a94a533',
                          name: 'Paul Romer',
                        },
                        {
                          color: 'default',
                          id: 'ae3a2cbe-1fc9-4376-be35-331628b34623',
                          name: 'Karen Swallow Prior',
                        },
                        {
                          color: 'default',
                          id: 'da068e78-dfe2-4434-9fd7-b7450b3e5830',
                          name: 'Judith Shulevitz',
                        },
                      ],
                    },
                    name: 'Author',
                    type: 'multi_select',
                  },
                  Link: { id: 'VVMi', name: 'Link', type: 'url', url: {} },
                  Name: { id: 'title', name: 'Name', title: {}, type: 'title' },
                  Publisher: {
                    id: '>$Pb',
                    name: 'Publisher',
                    select: {
                      options: [
                        {
                          color: 'default',
                          id: 'c5ee409a-f307-4176-99ee-6e424fa89afa',
                          name: 'NYT',
                        },
                        {
                          color: 'blue',
                          id: '1b9b0c0c-17b0-4292-ad12-1364a51849de',
                          name: 'Netflix',
                        },
                        {
                          color: 'brown',
                          id: 'f3533637-278f-4501-b394-d9753bf3c101',
                          name: 'Indie',
                        },
                        {
                          color: 'yellow',
                          id: 'e70d713c-4be4-4b40-a44d-fb413c8b9d7e',
                          name: 'Bon Appetit',
                        },
                        {
                          color: 'pink',
                          id: '9c2bd667-0a10-4be4-a044-35a537a14ab9',
                          name: 'Franklin Institute',
                        },
                        {
                          color: 'orange',
                          id: '6849b5f0-e641-4ec5-83cb-1ffe23011060',
                          name: 'Springer',
                        },
                        {
                          color: 'gray',
                          id: '6a5bff63-a72d-4464-a5d0-1a601af2adf6',
                          name: 'Emerald Group',
                        },
                        {
                          color: 'red',
                          id: '01f82d08-aa1f-4884-a4e0-3bc32f909ec4',
                          name: 'The Atlantic',
                        },
                      ],
                    },
                    type: 'select',
                  },
                  'Publishing/Release Date': {
                    date: {},
                    id: '?ex+',
                    name: 'Publishing/Release Date',
                    type: 'date',
                  },
                  Read: { checkbox: {}, id: '_MWJ', name: 'Read', type: 'checkbox' },
                  'Score /5': {
                    id: ')Y7"',
                    name: 'Score /5',
                    select: {
                      options: [
                        {
                          color: 'default',
                          id: '5c944de7-3f4b-4567-b3a1-fa2c71c540b6',
                          name: '⭐️⭐️⭐️⭐️⭐️',
                        },
                        {
                          color: 'default',
                          id: 'b7307e35-c80a-4cb5-bb6b-6054523b394a',
                          name: '⭐️⭐️⭐️⭐️',
                        },
                        {
                          color: 'default',
                          id: '9b1e1349-8e24-40ba-bbca-84a61296bc81',
                          name: '⭐️⭐️⭐️',
                        },
                        {
                          color: 'default',
                          id: '66d3d050-086c-4a91-8c56-d55dc67e7789',
                          name: '⭐️⭐️',
                        },
                        {
                          color: 'default',
                          id: 'd3782c76-0396-467f-928e-46bf0c9d5fba',
                          name: '⭐️',
                        },
                      ],
                    },
                    type: 'select',
                  },
                  Status: {
                    id: '`zz5',
                    name: 'Status',
                    select: {
                      options: [
                        {
                          color: 'yellow',
                          id: '8c4a056e-6709-4dd1-ba58-d34d9480855a',
                          name: 'Ready to Start',
                        },
                        {
                          color: 'red',
                          id: '5925ba22-0126-4b58-90c7-b8bbb2c3c895',
                          name: 'Reading',
                        },
                        {
                          color: 'blue',
                          id: '59aa9043-07b4-4bf4-8734-3164b13af44a',
                          name: 'Finished',
                        },
                        {
                          color: 'red',
                          id: 'f961978d-02eb-4998-933a-33c2ec378564',
                          name: 'Listening',
                        },
                        {
                          color: 'red',
                          id: '1d450853-b27a-45e2-979f-448aa1bd35de',
                          name: 'Watching',
                        },
                      ],
                    },
                    type: 'select',
                  },
                  Summary: { id: '?\\25', name: 'Summary', rich_text: {}, type: 'rich_text' },
                  Type: {
                    id: '/7eo',
                    name: 'Type',
                    select: {
                      options: [
                        {
                          color: 'default',
                          id: 'f96d0d0a-5564-4a20-ab15-5f040d49759e',
                          name: 'Article',
                        },
                        {
                          color: 'default',
                          id: '4ac85597-5db1-4e0a-9c02-445575c38f76',
                          name: 'TV Series',
                        },
                        {
                          color: 'default',
                          id: '2991748a-5745-4c3b-9c9b-2d6846a6fa1f',
                          name: 'Film',
                        },
                        {
                          color: 'default',
                          id: '82f3bace-be25-410d-87fe-561c9c22492f',
                          name: 'Podcast',
                        },
                        {
                          color: 'default',
                          id: '861f1076-1cc4-429a-a781-54947d727a4a',
                          name: 'Academic Journal',
                        },
                        {
                          color: 'default',
                          id: '9cc30548-59d6-4cd3-94bc-d234081525c4',
                          name: 'Essay Resource',
                        },
                      ],
                    },
                    type: 'select',
                  },
                  'Wine Pairing': {
                    id: 'Y=H]',
                    name: 'Wine Pairing',
                    rich_text: {},
                    type: 'rich_text',
                  },
                },
                title: [
                  {
                    annotations: {
                      bold: false,
                      code: false,
                      color: 'default',
                      italic: false,
                      strikethrough: false,
                      underline: false,
                    },
                    href: null,
                    plain_text: 'Ever Better Reading List Title',
                    text: { content: 'Ever Better Reading List Title', link: null },
                    type: 'text',
                  },
                ],
                url: 'https://www.notion.so/8e2c2b769e1d47d287b9ed3035d607ae',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '6e2c03133bd697c3-SJC' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Thu, 24 Feb 2022 22:08:21 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"1154-yKzD7frwaV985/9YIfi9OFRzhEo"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_check_cookie_consent=false; Domain=www.notion.so; Path=/; Expires=Fri, 25 Feb 2022 22:08:21 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})

export const postV1DatabasesIdQueryRoute = createRoute({
  method: 'post',
  path: '/v1/databases/{id}/query',
  tags: ['Databases'],
  summary: 'Query a database',
  description: 'Query a database',
  operationId: 'queryADatabase',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '{{DATABASE_ID}}', type: 'string' },
          },
          example: '{{DATABASE_ID}}',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filter: z
                .object({
                  property: z.string().exactOptional().openapi({ example: 'Status' }),
                  select: z
                    .object({ equals: z.string().exactOptional().openapi({ example: 'Reading' }) })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: { filter: { property: 'Status', select: { equals: 'Reading' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: '200 Success - Query a Database (Single Filter)',
      content: {
        'application/json': {
          schema: z
            .object({
              has_more: z.boolean().exactOptional().openapi({ example: false }),
              next_cursor: z.any().nullable().exactOptional().openapi({ example: null }),
              object: z.string().exactOptional().openapi({ example: 'list' }),
              results: z
                .array(
                  z
                    .object({
                      archived: z.boolean().exactOptional().openapi({ example: false }),
                      cover: z.any().nullable().exactOptional().openapi({ example: null }),
                      created_by: z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '6794760a-1f15-45cd-9c65-0dfe42f5135a' }),
                          object: z.string().exactOptional().openapi({ example: 'user' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      created_time: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2021-04-27T20:38:00.000Z' }),
                      icon: z.any().nullable().exactOptional().openapi({ example: null }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '557ef501-bfdb-4586-918e-4434f31bca8c' }),
                      last_edited_by: z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '6794760a-1f15-45cd-9c65-0dfe42f5135a' }),
                          object: z.string().exactOptional().openapi({ example: 'user' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      last_edited_time: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2021-04-27T20:38:00.000Z' }),
                      object: z.string().exactOptional().openapi({ example: 'page' }),
                      parent: z
                        .object({
                          database_id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae' }),
                          type: z.string().exactOptional().openapi({ example: 'database_id' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      properties: z
                        .object({
                          Author: z
                            .object({
                              id: z.string().exactOptional().openapi({ example: 'qNw_' }),
                              multi_select: z
                                .array(
                                  z
                                    .object({
                                      color: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'default' }),
                                      id: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example: 'ae3a2cbe-1fc9-4376-be35-331628b34623',
                                        }),
                                      name: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'Karen Swallow Prior' }),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional()
                                .openapi({
                                  example: [
                                    {
                                      color: 'default',
                                      id: 'ae3a2cbe-1fc9-4376-be35-331628b34623',
                                      name: 'Karen Swallow Prior',
                                    },
                                  ],
                                }),
                              type: z.string().exactOptional().openapi({ example: 'multi_select' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          Link: z
                            .object({
                              id: z.string().exactOptional().openapi({ example: 'VVMi' }),
                              type: z.string().exactOptional().openapi({ example: 'url' }),
                              url: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example:
                                    'https://www.theatlantic.com/entertainment/archive/2016/03/how-jane-eyre-created-the-modern-self/460461/',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          Name: z
                            .object({
                              id: z.string().exactOptional().openapi({ example: 'title' }),
                              title: z
                                .array(
                                  z
                                    .object({
                                      annotations: z
                                        .object({
                                          bold: z
                                            .boolean()
                                            .exactOptional()
                                            .openapi({ example: false }),
                                          code: z
                                            .boolean()
                                            .exactOptional()
                                            .openapi({ example: false }),
                                          color: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ example: 'default' }),
                                          italic: z
                                            .boolean()
                                            .exactOptional()
                                            .openapi({ example: true }),
                                          strikethrough: z
                                            .boolean()
                                            .exactOptional()
                                            .openapi({ example: false }),
                                          underline: z
                                            .boolean()
                                            .exactOptional()
                                            .openapi({ example: false }),
                                        })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      href: z
                                        .any()
                                        .nullable()
                                        .exactOptional()
                                        .openapi({ example: null }),
                                      plain_text: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'Jane Eyre' }),
                                      text: z
                                        .object({
                                          content: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ example: 'Jane Eyre' }),
                                          link: z
                                            .any()
                                            .nullable()
                                            .exactOptional()
                                            .openapi({ example: null }),
                                        })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      type: z.string().exactOptional().openapi({ example: 'text' }),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional()
                                .openapi({
                                  example: [
                                    {
                                      annotations: {
                                        bold: false,
                                        code: false,
                                        color: 'default',
                                        italic: true,
                                        strikethrough: false,
                                        underline: false,
                                      },
                                      href: null,
                                      plain_text: 'Jane Eyre',
                                      text: { content: 'Jane Eyre', link: null },
                                      type: 'text',
                                    },
                                    {
                                      annotations: {
                                        bold: false,
                                        code: false,
                                        color: 'default',
                                        italic: false,
                                        strikethrough: false,
                                        underline: false,
                                      },
                                      href: null,
                                      plain_text: ' and the Invention of Self',
                                      text: { content: ' and the Invention of Self', link: null },
                                      type: 'text',
                                    },
                                  ],
                                }),
                              type: z.string().exactOptional().openapi({ example: 'title' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          Publisher: z
                            .object({
                              id: z.string().exactOptional().openapi({ example: '%3E%24Pb' }),
                              select: z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'red' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '01f82d08-aa1f-4884-a4e0-3bc32f909ec4' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'The Atlantic' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.string().exactOptional().openapi({ example: 'select' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          'Publishing/Release Date': z
                            .object({
                              date: z
                                .object({
                                  end: z
                                    .any()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ example: null }),
                                  start: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '2016-10-03' }),
                                  time_zone: z
                                    .any()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ example: null }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              id: z.string().exactOptional().openapi({ example: '%3Fex%2B' }),
                              type: z.string().exactOptional().openapi({ example: 'date' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          Read: z
                            .object({
                              checkbox: z.boolean().exactOptional().openapi({ example: false }),
                              id: z.string().exactOptional().openapi({ example: '_MWJ' }),
                              type: z.string().exactOptional().openapi({ example: 'checkbox' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          'Score /5': z
                            .object({
                              id: z.string().exactOptional().openapi({ example: ')Y7%22' }),
                              select: z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '66d3d050-086c-4a91-8c56-d55dc67e7789' }),
                                  name: z.string().exactOptional().openapi({ example: '⭐️⭐️' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.string().exactOptional().openapi({ example: 'select' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          Status: z
                            .object({
                              id: z.string().exactOptional().openapi({ example: '%60zz5' }),
                              select: z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'red' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '5925ba22-0126-4b58-90c7-b8bbb2c3c895' }),
                                  name: z.string().exactOptional().openapi({ example: 'Reading' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.string().exactOptional().openapi({ example: 'select' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          Summary: z
                            .object({
                              id: z.string().exactOptional().openapi({ example: '%3F%5C25' }),
                              rich_text: z.array(z.any()).exactOptional().openapi({ example: [] }),
                              type: z.string().exactOptional().openapi({ example: 'rich_text' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          Type: z
                            .object({
                              id: z.string().exactOptional().openapi({ example: '%2F7eo' }),
                              select: z
                                .object({
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '9cc30548-59d6-4cd3-94bc-d234081525c4' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Essay Resource' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.string().exactOptional().openapi({ example: 'select' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://www.notion.so/Jane-Eyre-and-the-Invention-of-Self-557ef501bfdb4586918e4434f31bca8c',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      archived: false,
                      cover: null,
                      created_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                      created_time: '2021-04-27T20:38:00.000Z',
                      icon: null,
                      id: '557ef501-bfdb-4586-918e-4434f31bca8c',
                      last_edited_by: {
                        id: '6794760a-1f15-45cd-9c65-0dfe42f5135a',
                        object: 'user',
                      },
                      last_edited_time: '2021-04-27T20:38:00.000Z',
                      object: 'page',
                      parent: {
                        database_id: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae',
                        type: 'database_id',
                      },
                      properties: {
                        Author: {
                          id: 'qNw_',
                          multi_select: [
                            {
                              color: 'default',
                              id: 'ae3a2cbe-1fc9-4376-be35-331628b34623',
                              name: 'Karen Swallow Prior',
                            },
                          ],
                          type: 'multi_select',
                        },
                        Link: {
                          id: 'VVMi',
                          type: 'url',
                          url: 'https://www.theatlantic.com/entertainment/archive/2016/03/how-jane-eyre-created-the-modern-self/460461/',
                        },
                        Name: {
                          id: 'title',
                          title: [
                            {
                              annotations: {
                                bold: false,
                                code: false,
                                color: 'default',
                                italic: true,
                                strikethrough: false,
                                underline: false,
                              },
                              href: null,
                              plain_text: 'Jane Eyre',
                              text: { content: 'Jane Eyre', link: null },
                              type: 'text',
                            },
                            {
                              annotations: {
                                bold: false,
                                code: false,
                                color: 'default',
                                italic: false,
                                strikethrough: false,
                                underline: false,
                              },
                              href: null,
                              plain_text: ' and the Invention of Self',
                              text: { content: ' and the Invention of Self', link: null },
                              type: 'text',
                            },
                          ],
                          type: 'title',
                        },
                        Publisher: {
                          id: '%3E%24Pb',
                          select: {
                            color: 'red',
                            id: '01f82d08-aa1f-4884-a4e0-3bc32f909ec4',
                            name: 'The Atlantic',
                          },
                          type: 'select',
                        },
                        'Publishing/Release Date': {
                          date: { end: null, start: '2016-10-03', time_zone: null },
                          id: '%3Fex%2B',
                          type: 'date',
                        },
                        Read: { checkbox: false, id: '_MWJ', type: 'checkbox' },
                        'Score /5': {
                          id: ')Y7%22',
                          select: {
                            color: 'default',
                            id: '66d3d050-086c-4a91-8c56-d55dc67e7789',
                            name: '⭐️⭐️',
                          },
                          type: 'select',
                        },
                        Status: {
                          id: '%60zz5',
                          select: {
                            color: 'red',
                            id: '5925ba22-0126-4b58-90c7-b8bbb2c3c895',
                            name: 'Reading',
                          },
                          type: 'select',
                        },
                        Summary: { id: '%3F%5C25', rich_text: [], type: 'rich_text' },
                        Type: {
                          id: '%2F7eo',
                          select: {
                            color: 'default',
                            id: '9cc30548-59d6-4cd3-94bc-d234081525c4',
                            name: 'Essay Resource',
                          },
                          type: 'select',
                        },
                      },
                      url: 'https://www.notion.so/Jane-Eyre-and-the-Invention-of-Self-557ef501bfdb4586918e4434f31bca8c',
                    },
                    {
                      archived: false,
                      cover: null,
                      created_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                      created_time: '2021-04-27T20:38:00.000Z',
                      icon: null,
                      id: 'a1712d54-53e4-4893-a69d-4d581cd2c845',
                      last_edited_by: {
                        id: '92a680bb-6970-4726-952b-4f4c03bff617',
                        object: 'user',
                      },
                      last_edited_time: '2021-05-12T06:07:00.000Z',
                      object: 'page',
                      parent: {
                        database_id: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae',
                        type: 'database_id',
                      },
                      properties: {
                        Author: {
                          id: 'qNw_',
                          multi_select: [
                            {
                              color: 'default',
                              id: '833e2c78-35ed-4601-badc-50c323341d76',
                              name: 'Kara Swisher',
                            },
                          ],
                          type: 'multi_select',
                        },
                        Link: {
                          id: 'VVMi',
                          type: 'url',
                          url: 'https://www.nytimes.com/2018/10/21/opinion/who-will-teach-silicon-valley-to-be-ethical.html',
                        },
                        Name: {
                          id: 'title',
                          title: [
                            {
                              annotations: {
                                bold: false,
                                code: false,
                                color: 'default',
                                italic: false,
                                strikethrough: false,
                                underline: false,
                              },
                              href: null,
                              plain_text: 'Who Will Teach Silicon Valley to Be Ethical? ',
                              text: {
                                content: 'Who Will Teach Silicon Valley to Be Ethical? ',
                                link: null,
                              },
                              type: 'text',
                            },
                          ],
                          type: 'title',
                        },
                        Publisher: {
                          id: '%3E%24Pb',
                          select: {
                            color: 'default',
                            id: 'c5ee409a-f307-4176-99ee-6e424fa89afa',
                            name: 'NYT',
                          },
                          type: 'select',
                        },
                        'Publishing/Release Date': {
                          date: { end: null, start: '2018-10-21', time_zone: null },
                          id: '%3Fex%2B',
                          type: 'date',
                        },
                        Read: { checkbox: true, id: '_MWJ', type: 'checkbox' },
                        'Score /5': {
                          id: ')Y7%22',
                          select: {
                            color: 'default',
                            id: 'b7307e35-c80a-4cb5-bb6b-6054523b394a',
                            name: '⭐️⭐️⭐️⭐️',
                          },
                          type: 'select',
                        },
                        Status: {
                          id: '%60zz5',
                          select: {
                            color: 'red',
                            id: '5925ba22-0126-4b58-90c7-b8bbb2c3c895',
                            name: 'Reading',
                          },
                          type: 'select',
                        },
                        Summary: {
                          id: '%3F%5C25',
                          rich_text: [
                            {
                              annotations: {
                                bold: false,
                                code: false,
                                color: 'default',
                                italic: false,
                                strikethrough: false,
                                underline: false,
                              },
                              href: null,
                              plain_text:
                                'Some think chief ethics officers could help technology companies navigate political and social questions.',
                              text: {
                                content:
                                  'Some think chief ethics officers could help technology companies navigate political and social questions.',
                                link: null,
                              },
                              type: 'text',
                            },
                          ],
                          type: 'rich_text',
                        },
                        Type: {
                          id: '%2F7eo',
                          select: {
                            color: 'default',
                            id: 'f96d0d0a-5564-4a20-ab15-5f040d49759e',
                            name: 'Article',
                          },
                          type: 'select',
                        },
                      },
                      url: 'https://www.notion.so/Who-Will-Teach-Silicon-Valley-to-Be-Ethical-a1712d5453e44893a69d4d581cd2c845',
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Query a Database (Single Filter)': {
              value: {
                has_more: false,
                next_cursor: null,
                object: 'list',
                results: [
                  {
                    archived: false,
                    cover: null,
                    created_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                    created_time: '2021-04-27T20:38:00.000Z',
                    icon: null,
                    id: '557ef501-bfdb-4586-918e-4434f31bca8c',
                    last_edited_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                    last_edited_time: '2021-04-27T20:38:00.000Z',
                    object: 'page',
                    parent: {
                      database_id: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae',
                      type: 'database_id',
                    },
                    properties: {
                      Author: {
                        id: 'qNw_',
                        multi_select: [
                          {
                            color: 'default',
                            id: 'ae3a2cbe-1fc9-4376-be35-331628b34623',
                            name: 'Karen Swallow Prior',
                          },
                        ],
                        type: 'multi_select',
                      },
                      Link: {
                        id: 'VVMi',
                        type: 'url',
                        url: 'https://www.theatlantic.com/entertainment/archive/2016/03/how-jane-eyre-created-the-modern-self/460461/',
                      },
                      Name: {
                        id: 'title',
                        title: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: true,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: 'Jane Eyre',
                            text: { content: 'Jane Eyre', link: null },
                            type: 'text',
                          },
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: ' and the Invention of Self',
                            text: { content: ' and the Invention of Self', link: null },
                            type: 'text',
                          },
                        ],
                        type: 'title',
                      },
                      Publisher: {
                        id: '%3E%24Pb',
                        select: {
                          color: 'red',
                          id: '01f82d08-aa1f-4884-a4e0-3bc32f909ec4',
                          name: 'The Atlantic',
                        },
                        type: 'select',
                      },
                      'Publishing/Release Date': {
                        date: { end: null, start: '2016-10-03', time_zone: null },
                        id: '%3Fex%2B',
                        type: 'date',
                      },
                      Read: { checkbox: false, id: '_MWJ', type: 'checkbox' },
                      'Score /5': {
                        id: ')Y7%22',
                        select: {
                          color: 'default',
                          id: '66d3d050-086c-4a91-8c56-d55dc67e7789',
                          name: '⭐️⭐️',
                        },
                        type: 'select',
                      },
                      Status: {
                        id: '%60zz5',
                        select: {
                          color: 'red',
                          id: '5925ba22-0126-4b58-90c7-b8bbb2c3c895',
                          name: 'Reading',
                        },
                        type: 'select',
                      },
                      Summary: { id: '%3F%5C25', rich_text: [], type: 'rich_text' },
                      Type: {
                        id: '%2F7eo',
                        select: {
                          color: 'default',
                          id: '9cc30548-59d6-4cd3-94bc-d234081525c4',
                          name: 'Essay Resource',
                        },
                        type: 'select',
                      },
                    },
                    url: 'https://www.notion.so/Jane-Eyre-and-the-Invention-of-Self-557ef501bfdb4586918e4434f31bca8c',
                  },
                  {
                    archived: false,
                    cover: null,
                    created_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                    created_time: '2021-04-27T20:38:00.000Z',
                    icon: null,
                    id: 'a1712d54-53e4-4893-a69d-4d581cd2c845',
                    last_edited_by: { id: '92a680bb-6970-4726-952b-4f4c03bff617', object: 'user' },
                    last_edited_time: '2021-05-12T06:07:00.000Z',
                    object: 'page',
                    parent: {
                      database_id: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae',
                      type: 'database_id',
                    },
                    properties: {
                      Author: {
                        id: 'qNw_',
                        multi_select: [
                          {
                            color: 'default',
                            id: '833e2c78-35ed-4601-badc-50c323341d76',
                            name: 'Kara Swisher',
                          },
                        ],
                        type: 'multi_select',
                      },
                      Link: {
                        id: 'VVMi',
                        type: 'url',
                        url: 'https://www.nytimes.com/2018/10/21/opinion/who-will-teach-silicon-valley-to-be-ethical.html',
                      },
                      Name: {
                        id: 'title',
                        title: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text: 'Who Will Teach Silicon Valley to Be Ethical? ',
                            text: {
                              content: 'Who Will Teach Silicon Valley to Be Ethical? ',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                        type: 'title',
                      },
                      Publisher: {
                        id: '%3E%24Pb',
                        select: {
                          color: 'default',
                          id: 'c5ee409a-f307-4176-99ee-6e424fa89afa',
                          name: 'NYT',
                        },
                        type: 'select',
                      },
                      'Publishing/Release Date': {
                        date: { end: null, start: '2018-10-21', time_zone: null },
                        id: '%3Fex%2B',
                        type: 'date',
                      },
                      Read: { checkbox: true, id: '_MWJ', type: 'checkbox' },
                      'Score /5': {
                        id: ')Y7%22',
                        select: {
                          color: 'default',
                          id: 'b7307e35-c80a-4cb5-bb6b-6054523b394a',
                          name: '⭐️⭐️⭐️⭐️',
                        },
                        type: 'select',
                      },
                      Status: {
                        id: '%60zz5',
                        select: {
                          color: 'red',
                          id: '5925ba22-0126-4b58-90c7-b8bbb2c3c895',
                          name: 'Reading',
                        },
                        type: 'select',
                      },
                      Summary: {
                        id: '%3F%5C25',
                        rich_text: [
                          {
                            annotations: {
                              bold: false,
                              code: false,
                              color: 'default',
                              italic: false,
                              strikethrough: false,
                              underline: false,
                            },
                            href: null,
                            plain_text:
                              'Some think chief ethics officers could help technology companies navigate political and social questions.',
                            text: {
                              content:
                                'Some think chief ethics officers could help technology companies navigate political and social questions.',
                              link: null,
                            },
                            type: 'text',
                          },
                        ],
                        type: 'rich_text',
                      },
                      Type: {
                        id: '%2F7eo',
                        select: {
                          color: 'default',
                          id: 'f96d0d0a-5564-4a20-ab15-5f040d49759e',
                          name: 'Article',
                        },
                        type: 'select',
                      },
                    },
                    url: 'https://www.notion.so/Who-Will-Teach-Silicon-Valley-to-Be-Ethical-a1712d5453e44893a69d4d581cd2c845',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '6e2bf9a5cc0997c3-SJC' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Thu, 24 Feb 2022 22:01:55 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"11ab-v3g73NeM0tFp3bR3wDOJq0jJD9E"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_check_cookie_consent=false; Domain=www.notion.so; Path=/; Expires=Fri, 25 Feb 2022 22:01:54 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})

export const getV1PagesIdRoute = createRoute({
  method: 'get',
  path: '/v1/pages/{id}',
  tags: ['Pages'],
  summary: 'Retrieve a Page',
  description:
    'Retrieves a Page object using the ID in the request path. This endpoint exposes page properties, not page content. ',
  operationId: 'retrieveAPage',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '{{PAGE_ID}}', type: 'string' },
          },
          example: '{{PAGE_ID}}',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
  },
  responses: {
    200: {
      description: '200 Success - Retrieve a Page',
      content: {
        'application/json': {
          schema: z
            .object({
              archived: z.boolean().exactOptional().openapi({ example: false }),
              cover: z.any().nullable().exactOptional().openapi({ example: null }),
              created_by: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '6794760a-1f15-45cd-9c65-0dfe42f5135a' }),
                  object: z.string().exactOptional().openapi({ example: 'user' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              created_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-04-27T20:38:00.000Z' }),
              icon: z
                .object({
                  emoji: z.string().exactOptional().openapi({ example: '📕' }),
                  type: z.string().exactOptional().openapi({ example: 'emoji' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: 'c4d39556-6364-46a1-8a61-ebbb668f7445' }),
              last_edited_by: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '92a680bb-6970-4726-952b-4f4c03bff617' }),
                  object: z.string().exactOptional().openapi({ example: 'user' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              last_edited_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2022-03-02T05:22:00.000Z' }),
              object: z.string().exactOptional().openapi({ example: 'page' }),
              parent: z
                .object({
                  page_id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'c1218692-102d-4b47-ab38-c21900b3557b' }),
                  type: z.string().exactOptional().openapi({ example: 'page_id' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              properties: z
                .object({
                  title: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'title' }),
                      title: z
                        .array(
                          z
                            .object({
                              annotations: z
                                .object({
                                  bold: z.boolean().exactOptional().openapi({ example: false }),
                                  code: z.boolean().exactOptional().openapi({ example: false }),
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  italic: z.boolean().exactOptional().openapi({ example: false }),
                                  strikethrough: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({ example: false }),
                                  underline: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({ example: false }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              href: z.any().nullable().exactOptional().openapi({ example: null }),
                              plain_text: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'Reading List' }),
                              text: z
                                .object({
                                  content: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Reading List' }),
                                  link: z
                                    .any()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ example: null }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.string().exactOptional().openapi({ example: 'text' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          example: [
                            {
                              annotations: {
                                bold: false,
                                code: false,
                                color: 'default',
                                italic: false,
                                strikethrough: false,
                                underline: false,
                              },
                              href: null,
                              plain_text: 'Reading List',
                              text: { content: 'Reading List', link: null },
                              type: 'text',
                            },
                          ],
                        }),
                      type: z.string().exactOptional().openapi({ example: 'title' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'https://www.notion.so/Reading-List-c4d39556636446a18a61ebbb668f7445',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Retrieve a Page': {
              value: {
                archived: false,
                cover: null,
                created_by: { id: '6794760a-1f15-45cd-9c65-0dfe42f5135a', object: 'user' },
                created_time: '2021-04-27T20:38:00.000Z',
                icon: { emoji: '📕', type: 'emoji' },
                id: 'c4d39556-6364-46a1-8a61-ebbb668f7445',
                last_edited_by: { id: '92a680bb-6970-4726-952b-4f4c03bff617', object: 'user' },
                last_edited_time: '2022-03-02T05:22:00.000Z',
                object: 'page',
                parent: { page_id: 'c1218692-102d-4b47-ab38-c21900b3557b', type: 'page_id' },
                properties: {
                  title: {
                    id: 'title',
                    title: [
                      {
                        annotations: {
                          bold: false,
                          code: false,
                          color: 'default',
                          italic: false,
                          strikethrough: false,
                          underline: false,
                        },
                        href: null,
                        plain_text: 'Reading List',
                        text: { content: 'Reading List', link: null },
                        type: 'text',
                      },
                    ],
                    type: 'title',
                  },
                },
                url: 'https://www.notion.so/Reading-List-c4d39556636446a18a61ebbb668f7445',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '6e57b658a8f97fb2-IAD' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Wed, 02 Mar 2022 05:25:32 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"325-KCHYnqvQMvtdpRRceV9twM7idU8"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_check_cookie_consent=false; Domain=www.notion.so; Path=/; Expires=Thu, 03 Mar 2022 05:25:32 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})

export const patchV1PagesIdRoute = createRoute({
  method: 'patch',
  path: '/v1/pages/{id}',
  tags: ['Pages'],
  summary: 'Update Page properties ',
  description:
    'Updates a page by setting the values of any properties specified in the JSON body of the request. Properties not updated via parameters will remain unchanged. ',
  operationId: 'updatePageProperties',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '{{PAGE_ID}}', type: 'string' },
          },
          example: '{{PAGE_ID}}',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              properties: z
                .object({
                  Status: z
                    .object({
                      select: z
                        .object({
                          name: z.string().exactOptional().openapi({ example: 'Reading' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: { properties: { Status: { select: { name: 'Reading' } } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: '200 Success - Update Page properties',
      content: {
        'application/json': {
          schema: z
            .object({
              archived: z.boolean().exactOptional().openapi({ example: false }),
              created_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-04-27T20:38:19.437Z' }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: 'a1712d54-53e4-4893-a69d-4d581cd2c845' }),
              last_edited_time: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-04-28T23:12:53.160Z' }),
              object: z.string().exactOptional().openapi({ example: 'page' }),
              parent: z
                .object({
                  database_id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae' }),
                  type: z.string().exactOptional().openapi({ example: 'database_id' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              properties: z
                .object({
                  Author: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'qNw_' }),
                      multi_select: z
                        .array(
                          z
                            .object({
                              color: z.string().exactOptional().openapi({ example: 'default' }),
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ example: '833e2c78-35ed-4601-badc-50c323341d76' }),
                              name: z.string().exactOptional().openapi({ example: 'Kara Swisher' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          example: [
                            {
                              color: 'default',
                              id: '833e2c78-35ed-4601-badc-50c323341d76',
                              name: 'Kara Swisher',
                            },
                          ],
                        }),
                      type: z.string().exactOptional().openapi({ example: 'multi_select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Link: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'VVMi' }),
                      type: z.string().exactOptional().openapi({ example: 'url' }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://www.nytimes.com/2018/10/21/opinion/who-will-teach-silicon-valley-to-be-ethical.html',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Name: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'title' }),
                      title: z
                        .array(
                          z
                            .object({
                              annotations: z
                                .object({
                                  bold: z.boolean().exactOptional().openapi({ example: false }),
                                  code: z.boolean().exactOptional().openapi({ example: false }),
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  italic: z.boolean().exactOptional().openapi({ example: false }),
                                  strikethrough: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({ example: false }),
                                  underline: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({ example: false }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              href: z.any().nullable().exactOptional().openapi({ example: null }),
                              plain_text: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example: 'Who Will Teach Silicon Valley to Be Ethical? ',
                                }),
                              text: z
                                .object({
                                  content: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      example: 'Who Will Teach Silicon Valley to Be Ethical? ',
                                    }),
                                  link: z
                                    .any()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ example: null }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.string().exactOptional().openapi({ example: 'text' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          example: [
                            {
                              annotations: {
                                bold: false,
                                code: false,
                                color: 'default',
                                italic: false,
                                strikethrough: false,
                                underline: false,
                              },
                              href: null,
                              plain_text: 'Who Will Teach Silicon Valley to Be Ethical? ',
                              text: {
                                content: 'Who Will Teach Silicon Valley to Be Ethical? ',
                                link: null,
                              },
                              type: 'text',
                            },
                          ],
                        }),
                      type: z.string().exactOptional().openapi({ example: 'title' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Publisher: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '>$Pb' }),
                      select: z
                        .object({
                          color: z.string().exactOptional().openapi({ example: 'default' }),
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'c5ee409a-f307-4176-99ee-6e424fa89afa' }),
                          name: z.string().exactOptional().openapi({ example: 'NYT' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  'Publishing/Release Date': z
                    .object({
                      date: z
                        .object({
                          end: z.any().nullable().exactOptional().openapi({ example: null }),
                          start: z.string().exactOptional().openapi({ example: '2018-10-21' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      id: z.string().exactOptional().openapi({ example: '?ex+' }),
                      type: z.string().exactOptional().openapi({ example: 'date' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Read: z
                    .object({
                      checkbox: z.boolean().exactOptional().openapi({ example: true }),
                      id: z.string().exactOptional().openapi({ example: '_MWJ' }),
                      type: z.string().exactOptional().openapi({ example: 'checkbox' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  'Score /5': z
                    .object({
                      id: z.string().exactOptional().openapi({ example: ')Y7"' }),
                      select: z
                        .object({
                          color: z.string().exactOptional().openapi({ example: 'default' }),
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'b7307e35-c80a-4cb5-bb6b-6054523b394a' }),
                          name: z.string().exactOptional().openapi({ example: '⭐️⭐️⭐️⭐️' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Status: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '`zz5' }),
                      select: z
                        .object({
                          color: z.string().exactOptional().openapi({ example: 'red' }),
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '5925ba22-0126-4b58-90c7-b8bbb2c3c895' }),
                          name: z.string().exactOptional().openapi({ example: 'Reading' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Summary: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '?\\25' }),
                      rich_text: z
                        .array(
                          z
                            .object({
                              annotations: z
                                .object({
                                  bold: z.boolean().exactOptional().openapi({ example: false }),
                                  code: z.boolean().exactOptional().openapi({ example: false }),
                                  color: z.string().exactOptional().openapi({ example: 'default' }),
                                  italic: z.boolean().exactOptional().openapi({ example: false }),
                                  strikethrough: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({ example: false }),
                                  underline: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({ example: false }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              href: z.any().nullable().exactOptional().openapi({ example: null }),
                              plain_text: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  example:
                                    'Some think chief ethics officers could help technology companies navigate political and social questions.',
                                }),
                              text: z
                                .object({
                                  content: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      example:
                                        'Some think chief ethics officers could help technology companies navigate political and social questions.',
                                    }),
                                  link: z
                                    .any()
                                    .nullable()
                                    .exactOptional()
                                    .openapi({ example: null }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.string().exactOptional().openapi({ example: 'text' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          example: [
                            {
                              annotations: {
                                bold: false,
                                code: false,
                                color: 'default',
                                italic: false,
                                strikethrough: false,
                                underline: false,
                              },
                              href: null,
                              plain_text:
                                'Some think chief ethics officers could help technology companies navigate political and social questions.',
                              text: {
                                content:
                                  'Some think chief ethics officers could help technology companies navigate political and social questions.',
                                link: null,
                              },
                              type: 'text',
                            },
                          ],
                        }),
                      type: z.string().exactOptional().openapi({ example: 'rich_text' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  Type: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '/7eo' }),
                      select: z
                        .object({
                          color: z.string().exactOptional().openapi({ example: 'default' }),
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'f96d0d0a-5564-4a20-ab15-5f040d49759e' }),
                          name: z.string().exactOptional().openapi({ example: 'Article' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z.string().exactOptional().openapi({ example: 'select' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Update Page properties': {
              value: {
                archived: false,
                created_time: '2021-04-27T20:38:19.437Z',
                id: 'a1712d54-53e4-4893-a69d-4d581cd2c845',
                last_edited_time: '2021-04-28T23:12:53.160Z',
                object: 'page',
                parent: {
                  database_id: '8e2c2b76-9e1d-47d2-87b9-ed3035d607ae',
                  type: 'database_id',
                },
                properties: {
                  Author: {
                    id: 'qNw_',
                    multi_select: [
                      {
                        color: 'default',
                        id: '833e2c78-35ed-4601-badc-50c323341d76',
                        name: 'Kara Swisher',
                      },
                    ],
                    type: 'multi_select',
                  },
                  Link: {
                    id: 'VVMi',
                    type: 'url',
                    url: 'https://www.nytimes.com/2018/10/21/opinion/who-will-teach-silicon-valley-to-be-ethical.html',
                  },
                  Name: {
                    id: 'title',
                    title: [
                      {
                        annotations: {
                          bold: false,
                          code: false,
                          color: 'default',
                          italic: false,
                          strikethrough: false,
                          underline: false,
                        },
                        href: null,
                        plain_text: 'Who Will Teach Silicon Valley to Be Ethical? ',
                        text: {
                          content: 'Who Will Teach Silicon Valley to Be Ethical? ',
                          link: null,
                        },
                        type: 'text',
                      },
                    ],
                    type: 'title',
                  },
                  Publisher: {
                    id: '>$Pb',
                    select: {
                      color: 'default',
                      id: 'c5ee409a-f307-4176-99ee-6e424fa89afa',
                      name: 'NYT',
                    },
                    type: 'select',
                  },
                  'Publishing/Release Date': {
                    date: { end: null, start: '2018-10-21' },
                    id: '?ex+',
                    type: 'date',
                  },
                  Read: { checkbox: true, id: '_MWJ', type: 'checkbox' },
                  'Score /5': {
                    id: ')Y7"',
                    select: {
                      color: 'default',
                      id: 'b7307e35-c80a-4cb5-bb6b-6054523b394a',
                      name: '⭐️⭐️⭐️⭐️',
                    },
                    type: 'select',
                  },
                  Status: {
                    id: '`zz5',
                    select: {
                      color: 'red',
                      id: '5925ba22-0126-4b58-90c7-b8bbb2c3c895',
                      name: 'Reading',
                    },
                    type: 'select',
                  },
                  Summary: {
                    id: '?\\25',
                    rich_text: [
                      {
                        annotations: {
                          bold: false,
                          code: false,
                          color: 'default',
                          italic: false,
                          strikethrough: false,
                          underline: false,
                        },
                        href: null,
                        plain_text:
                          'Some think chief ethics officers could help technology companies navigate political and social questions.',
                        text: {
                          content:
                            'Some think chief ethics officers could help technology companies navigate political and social questions.',
                          link: null,
                        },
                        type: 'text',
                      },
                    ],
                    type: 'rich_text',
                  },
                  Type: {
                    id: '/7eo',
                    select: {
                      color: 'default',
                      id: 'f96d0d0a-5564-4a20-ab15-5f040d49759e',
                      name: 'Article',
                    },
                    type: 'select',
                  },
                },
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '64e173ce6ca20231-SJC' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://api.segment.io https://api.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Wed, 12 May 2021 06:04:55 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'W/"7d8-jG4gaWNQPTIf72vp10FvF9p/N3Q"',
            }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_browser_id=64874c87-50ce-4a41-af6f-3ecf1626325e; Domain=www.notion.so; Path=/; Expires=Sat, 18 Jan 2053 07:51:35 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://api.segment.io https://api.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://api.amplitude.com https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://platform.twitter.com https://cdn.syndication.twimg.com https://www.googletagmanager.com https://x.clearbitjs.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://api.amplitude.com https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://api.segment.io https://api.pgncs.notion.so https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://api.unsplash.com https://boards-api.greenhouse.io; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
        'cf-request-id': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '0a00c6b50400000231ecbbc000000001' }),
        },
      }),
    },
  },
})

export const getV1PagesPageIdPropertiesPropertyIdRoute = createRoute({
  method: 'get',
  path: '/v1/pages/{page_id}/properties/{property_id}',
  tags: ['Pages'],
  summary: 'Retrieve a Page Property Item',
  description: 'Retrieve a Page Property Item',
  operationId: 'retrieveAPagePropertyItem',
  request: {
    params: z.object({
      page_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'page_id',
            required: true,
            schema: { example: '{{PAGE_ID}}', type: 'string' },
          },
          example: '{{PAGE_ID}}',
        }),
      property_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'property_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 Success - Retrieve a Page Property Item',
      content: {
        'application/json': {
          schema: z
            .object({
              object: z.string().exactOptional().openapi({ example: 'property_item' }),
              select: z
                .object({
                  color: z.string().exactOptional().openapi({ example: 'default' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5c944de7-3f4b-4567-b3a1-fa2c71c540b6' }),
                  name: z.string().exactOptional().openapi({ example: '⭐️⭐️⭐️⭐️⭐️' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              type: z.string().exactOptional().openapi({ example: 'select' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Retrieve a Page Property Item': {
              value: {
                object: 'property_item',
                select: {
                  color: 'default',
                  id: '5c944de7-3f4b-4567-b3a1-fa2c71c540b6',
                  name: '⭐️⭐️⭐️⭐️⭐️',
                },
                type: 'select',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '6e57bef43f860627-IAD' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Wed, 02 Mar 2022 05:31:24 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'W/"9b-jhhW07EAsEXZSfnBY3CcGFH2Moo"' }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_check_cookie_consent=false; Domain=www.notion.so; Path=/; Expires=Thu, 03 Mar 2022 05:31:24 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})

export const getV1UsersIdRoute = createRoute({
  method: 'get',
  path: '/v1/users/{id}',
  tags: ['Users'],
  summary: 'Retrieve a user',
  description: 'Retrieve a user object using the ID specified in the request path.',
  operationId: 'retrieveAUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '{{USER_ID}}', type: 'string' },
          },
          example: '{{USER_ID}}',
        }),
    }),
    headers: z.object({
      'Notion-Version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Notion-Version',
            schema: { example: '{{NOTION_VERSION}}', type: 'string' },
            required: false,
          },
          example: '{{NOTION_VERSION}}',
        }),
    }),
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: z.object({}), example: {} } },
    },
  },
  responses: {
    200: {
      description: '200 Success - Retrieve a user',
      content: {
        'application/json': {
          schema: z
            .object({
              avatar_url: z.any().nullable().exactOptional().openapi({ example: null }),
              id: z
                .string()
                .exactOptional()
                .openapi({ example: '6794760a-1f15-45cd-9c65-0dfe42f5135a' }),
              name: z.string().exactOptional().openapi({ example: 'Aman Gupta' }),
              object: z.string().exactOptional().openapi({ example: 'user' }),
              person: z
                .object({ email: z.string().exactOptional().openapi({ example: 'XXXXXXXXXXX' }) })
                .exactOptional()
                .openapi({ required: [] }),
              type: z.string().exactOptional().openapi({ example: 'person' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200 Success - Retrieve a user': {
              value: {
                avatar_url: null,
                id: '6794760a-1f15-45cd-9c65-0dfe42f5135a',
                name: 'Aman Gupta',
                object: 'user',
                person: { email: 'XXXXXXXXXXX' },
                type: 'person',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '6e2be42d784c97c3-SJC' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'gzip' }),
        },
        'Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Thu, 24 Feb 2022 21:47:15 GMT' }),
        },
        ETag: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'W/"9b-qoibMBKquYk09T0oogqvLGu9qu4"' }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        'Referrer-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'same-origin' }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'notion_check_cookie_consent=false; Domain=www.notion.so; Path=/; Expires=Fri, 25 Feb 2022 21:47:15 GMT; Secure',
            }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=5184000; includeSubDomains' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Accept-Encoding' }),
        },
        'X-Content-Security-Policy': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-WebKit-CSP': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://gist.github.com https://apis.google.com https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://widget.intercom.io https://js.intercomcdn.com https://logs-01.loggly.com https://cdn.segment.com https://analytics.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://embed.typeform.com https://admin.typeform.com https://public.profitwell.com js.sentry-cdn.com https://js.chilipiper.com https://platform.twitter.com https://cdn.syndication.twimg.com; connect-src 'self' https://msgstore.www.notion.so wss://msgstore.www.notion.so ws://localhost:* ws://127.0.0.1:* https://notion-emojis.s3-us-west-2.amazonaws.com https://s3-us-west-2.amazonaws.com https://s3.us-west-2.amazonaws.com https://notion-production-snapshots-2.s3.us-west-2.amazonaws.com https: http: https://cdn.amplitude.com https://api.amplitude.com https://hkfxbbdzib.notion.so https://api.embed.ly https://js.intercomcdn.com https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io https://logs-01.loggly.com https://cdn.segment.com https://api.segment.io https://analytics.pgncs.notion.so https://api.pgncs.notion.so https://o324374.ingest.sentry.io https://checkout.stripe.com https://js.stripe.com https://cdn.contentful.com https://preview.contentful.com https://images.ctfassets.net https://www2.profitwell.com https://tracking.chilipiper.com https://api.chilipiper.com https://api.unsplash.com https://boards-api.greenhouse.io https://api.statuspage.io https://pgncd.notion.so https://api.statsig.com; font-src 'self' data: https://cdnjs.cloudflare.com https://js.intercomcdn.com; img-src 'self' data: blob: https: https://platform.twitter.com https://syndication.twitter.com https://pbs.twimg.com https://ton.twimg.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://github.githubassets.com https://js.chilipiper.com https://platform.twitter.com https://ton.twimg.com; frame-src https: http:; media-src https: http:",
            }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})
