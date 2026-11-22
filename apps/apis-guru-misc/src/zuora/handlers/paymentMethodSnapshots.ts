import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectPaymentMethodSnapshotIdRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentMethodSnapshotsHandler = app.openapi(
  getV1ObjectPaymentMethodSnapshotIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
