import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
