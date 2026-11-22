import { OpenAPIHono } from '@hono/zod-openapi'
import { postMenuIngestionCompleteRoute, postOrderTimeUpdatedRoute } from '../routes'

const app = new OpenAPIHono()

export const restaurantWebhooksHandler = app
  .openapi(postMenuIngestionCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderTimeUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
