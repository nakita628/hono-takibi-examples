import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeliveryIssuesRoute, postDeliveryIssuesRoute } from '../routes'

const app = new OpenAPIHono()

export const deliveryIssuesHandler = app
  .openapi(getDeliveryIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeliveryIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
