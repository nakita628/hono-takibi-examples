import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
