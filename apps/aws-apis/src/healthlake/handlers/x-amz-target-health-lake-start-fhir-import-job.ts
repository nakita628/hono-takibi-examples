import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeStartFHIRImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetHealthLakeStartFhirImportJobHandler = app.openapi(
  postXAmzTargetHealthLakeStartFHIRImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
