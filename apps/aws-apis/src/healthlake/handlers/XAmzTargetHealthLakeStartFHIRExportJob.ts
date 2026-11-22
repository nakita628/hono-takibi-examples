import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeStartFHIRExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeStartFHIRExportJobHandler = app.openapi(
  postXAmzTargetHealthLakeStartFHIRExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
