import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PutJobFailureResultRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709PutJobFailureResultHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PutJobFailureResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
