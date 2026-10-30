import { z } from '@hono/zod-openapi'

const ApiKeyAuthSecurityScheme = { type: 'apiKey', in: 'header', name: 'X-N8N-API-KEY' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

const CookieAuthSecurityScheme = { type: 'apiKey', in: 'cookie', name: 'n8n-auth' }
