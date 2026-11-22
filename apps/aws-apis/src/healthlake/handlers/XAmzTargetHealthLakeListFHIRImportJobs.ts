import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeListFHIRImportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeListFHIRImportJobsHandler = app.openapi(
  postXAmzTargetHealthLakeListFHIRImportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
