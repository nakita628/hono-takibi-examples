import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketsIdRoute, getBucketsRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketsHandler = app
  .openapi(getBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
