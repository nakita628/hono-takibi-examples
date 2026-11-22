import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
