import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202StartStreamEncryptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202StartStreamEncryptionHandler = app.openapi(
  postXAmzTargetKinesis20131202StartStreamEncryptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
