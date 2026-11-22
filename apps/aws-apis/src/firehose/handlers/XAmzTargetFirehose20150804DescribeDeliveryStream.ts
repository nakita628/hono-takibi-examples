import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804DescribeDeliveryStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804DescribeDeliveryStreamHandler = app.openapi(
  postXAmzTargetFirehose20150804DescribeDeliveryStreamRoute,
  (c) => {},
)
