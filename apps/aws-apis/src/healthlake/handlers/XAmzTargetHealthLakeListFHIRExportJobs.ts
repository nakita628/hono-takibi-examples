import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeListFHIRExportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeListFHIRExportJobsHandler = app.openapi(
  postXAmzTargetHealthLakeListFHIRExportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
