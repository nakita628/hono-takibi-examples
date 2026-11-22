import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3LanguageprofileSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const languageProfileSchemaHandler = app.openapi(
  getApiV3LanguageprofileSchemaRoute,
  (c) => {},
)
