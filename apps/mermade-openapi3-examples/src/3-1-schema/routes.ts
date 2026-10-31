import { z } from '@hono/zod-openapi'

const ModelSchema = z
  .object({
    one: z.union([z.int(), z.string()]).exactOptional().openapi({ description: 'type array' }),
    two: z.null().nullable().exactOptional().openapi({ description: "type 'null'" }),
    three: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "type array including 'null'" }),
    four: z.array(z.any()).exactOptional().openapi({ description: 'array with no items' }),
    five: z
      .string()
      .exactOptional()
      .openapi({ description: 'singular example', examples: ['exampleValue'] }),
    six: z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'number') {
          if (val <= 10) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .exactOptional()
      .openapi({ description: 'exclusiveMinimum true' }),
    seven: z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'number') {
          if (val < 10) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .exactOptional()
      .openapi({ description: 'exclusiveMinimum false' }),
    eight: z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'number') {
          if (val >= 20) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .exactOptional()
      .openapi({ description: 'exclusiveMaximum true' }),
    nine: z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'number') {
          if (val > 20) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .exactOptional()
      .openapi({ description: 'exclusiveMaximum false' }),
    ten: z.string().nullable().exactOptional().openapi({ description: 'nullable string' }),
    eleven: z.string().nullable().exactOptional().openapi({ description: 'x-nullable string' }),
    twelve: z.any().exactOptional().openapi({ description: 'file/binary' }),
  })
  .openapi({ required: [] })
  .openapi('Model')
