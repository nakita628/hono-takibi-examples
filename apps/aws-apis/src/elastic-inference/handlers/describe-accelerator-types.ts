import { OpenAPIHono } from '@hono/zod-openapi'
import { getDescribeAcceleratorTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const describeAcceleratorTypesHandler = app.openapi(
  getDescribeAcceleratorTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
