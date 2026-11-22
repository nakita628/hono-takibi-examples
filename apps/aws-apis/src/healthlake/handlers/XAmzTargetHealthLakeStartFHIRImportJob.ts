import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeStartFHIRImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeStartFHIRImportJobHandler = app.openapi(
  postXAmzTargetHealthLakeStartFHIRImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
