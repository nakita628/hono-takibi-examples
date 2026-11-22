import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202StartStreamEncryptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202StartStreamEncryptionHandler = app.openapi(
  postXAmzTargetKinesis20131202StartStreamEncryptionRoute,
  (c) => {},
)
