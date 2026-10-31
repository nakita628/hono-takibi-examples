import { z } from '@hono/zod-openapi'

const TagSchema = z
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tag')

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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().openapi({ example: 'doggie' }),
    photoUrls: z.array(z.string()),
    tags: z.array(TagSchema).exactOptional(),
    status: z
      .enum(['available', 'pending', 'sold'])
      .exactOptional()
      .openapi({ description: 'pet status in the store' }),
  })
  .openapi({ required: ['name', 'photoUrls'] })
  .openapi('Pet')

const PetstoreAuthSecurityScheme = {
  type: 'oauth2',
  flows: {
    implicit: {
      authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
      scopes: { 'write:pets': 'modify pets in your account', 'read:pets': 'read your pets' },
    },
  },
}
