import { OpenAPIHono } from '@hono/zod-openapi'
import { getInstanceTypeIdRoute, getInstanceTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const instanceTypeHandler = app
  .openapi(getInstanceTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstanceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
