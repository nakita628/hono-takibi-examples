import { z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({ files: z.object({ comments: z.boolean() }).openapi({ required: ['comments'] }) })
  .openapi({ required: ['files'] })
  .openapi('Capabilities')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }
