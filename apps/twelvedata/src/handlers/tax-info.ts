import { OpenAPIHono } from '@hono/zod-openapi'
import { getTaxInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const taxInfoHandler = app.openapi(getTaxInfoRoute, (c) => {
  throw new Error('Not implemented')
})
