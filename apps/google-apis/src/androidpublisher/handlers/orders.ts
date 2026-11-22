import { OpenAPIHono } from '@hono/zod-openapi'
import { postAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app.openapi(
  postAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
