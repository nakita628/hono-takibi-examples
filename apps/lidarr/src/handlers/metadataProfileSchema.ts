import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MetadataprofileSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataProfileSchemaHandler = app.openapi(
  getApiV1MetadataprofileSchemaRoute,
  (c) => {},
)
