import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpCoreReferencesPreviewReferenceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceHandler = app.openapi(
  getIndexPhpCoreReferencesPreviewReferenceIdRoute,
  (c) => {},
)
