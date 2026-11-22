import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804StopDeliveryStreamEncryptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804StopDeliveryStreamEncryptionHandler = app.openapi(
  postXAmzTargetFirehose20150804StopDeliveryStreamEncryptionRoute,
  (c) => {},
)
