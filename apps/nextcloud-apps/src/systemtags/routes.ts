import { z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({ systemtags: z.object({ enabled: z.literal(true) }).openapi({ required: ['enabled'] }) })
  .openapi({ required: ['systemtags'] })
  .openapi('Capabilities')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }
