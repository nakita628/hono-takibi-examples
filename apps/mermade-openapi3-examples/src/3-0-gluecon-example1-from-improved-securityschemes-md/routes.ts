import { z } from '@hono/zod-openapi'

const BasicSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

const Oauth1SecurityScheme = { type: 'http', scheme: 'oauth' }

const DigestSecurityScheme = { type: 'http', scheme: 'digest' }
