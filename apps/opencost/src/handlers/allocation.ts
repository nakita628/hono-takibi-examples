import { OpenAPIHono } from '@hono/zod-openapi'
import { getAllocationRoute } from '../routes'

const app = new OpenAPIHono()

export const allocationHandler = app.openapi(getAllocationRoute, (c) => {
  throw new Error('Not implemented')
})
