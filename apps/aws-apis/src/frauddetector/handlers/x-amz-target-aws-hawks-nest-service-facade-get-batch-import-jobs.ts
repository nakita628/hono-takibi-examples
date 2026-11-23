import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetBatchImportJobsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
