import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PutJobFailureResultRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709PutJobFailureResultHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PutJobFailureResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
