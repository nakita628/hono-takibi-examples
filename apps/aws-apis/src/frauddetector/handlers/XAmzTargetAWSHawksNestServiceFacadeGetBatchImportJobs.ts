import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
