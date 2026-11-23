import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117GetFileUploadUrlHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
