import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGetParametersForImportRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceGetParametersForImportHandler = app.openapi(
  postXAmzTargetTrentServiceGetParametersForImportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
