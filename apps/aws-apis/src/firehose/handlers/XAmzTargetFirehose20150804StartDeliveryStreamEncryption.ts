import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804StartDeliveryStreamEncryptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804StartDeliveryStreamEncryptionHandler = app.openapi(
  postXAmzTargetFirehose20150804StartDeliveryStreamEncryptionRoute,
  (c) => {},
)
