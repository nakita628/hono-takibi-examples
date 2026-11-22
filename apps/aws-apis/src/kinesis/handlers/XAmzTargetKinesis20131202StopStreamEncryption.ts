import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202StopStreamEncryptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202StopStreamEncryptionHandler = app.openapi(
  postXAmzTargetKinesis20131202StopStreamEncryptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
