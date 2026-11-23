import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeCreateBatchImportJobHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
