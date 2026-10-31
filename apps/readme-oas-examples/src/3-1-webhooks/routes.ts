import { createRoute, z } from '@hono/zod-openapi'

const PetSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string(),
    tag: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('Pet')

export const newPetPostWebhook = {
  method: 'post',
  path: '/newPet',
  tags: ['Webhooks'],
  request: {
    body: {
      description: 'Information about a new pet in the system',
      content: { 'application/json': { schema: PetSchema } },
    },
  },
  responses: {
    200: { description: 'Return a 200 status to indicate that the data was received successfully' },
  },
}
