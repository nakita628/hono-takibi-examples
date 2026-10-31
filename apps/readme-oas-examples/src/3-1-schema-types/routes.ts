import { z } from '@hono/zod-openapi'

type CircularType = { string?: string; children?: CircularType[] }

const StringEnumSchema = z.enum(['available', 'pending', 'sold']).openapi('StringEnum')

const CircularSchema: z.ZodType<CircularType> = z
  .lazy(() =>
    z
      .object({
        string: z.string().exactOptional(),
        children: z.array(CircularSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Circular')
