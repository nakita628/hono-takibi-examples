import { createRoute, z } from '@hono/zod-openapi'

export const postConvertRoute = createRoute({
  method: 'post',
  path: '/convert',
  description:
    'Convert the number into its Arabic text representation\nحول العدد إلى ما يقابله كتابة',
  externalDocs: { description: '', url: '' },
  operationId: 'convert',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              hundreds_form: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Some use مائة others use مئة , both works in Arabic. If left empty the default is مائة ',
                  example: 'مائة',
                }),
              the_number: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Put the number here. Decimal is supported by most units.',
                  example: '2519.50',
                }),
              unit: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The counted subject, be it a currency like درهم إماراتي  or a size unit like متر مربع\nIf the unit does not appear in the text result, it may not be supported. Please contact us to add it.',
                  example: ' ريال سعودي',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'number converted to text successfully, تمت عملية التفقيط بنجاح' },
  },
})
