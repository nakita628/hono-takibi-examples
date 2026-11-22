import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PutApprovalResultRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709PutApprovalResultHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PutApprovalResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
