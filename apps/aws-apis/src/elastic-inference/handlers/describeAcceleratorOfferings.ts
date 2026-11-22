import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeAcceleratorOfferingsRoute } from '../routes'

const app = new OpenAPIHono()

export const describeAcceleratorOfferingsHandler = app.openapi(
  postDescribeAcceleratorOfferingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
