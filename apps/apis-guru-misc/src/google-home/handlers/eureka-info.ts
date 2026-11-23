import { OpenAPIHono } from '@hono/zod-openapi'
import { getEurekaInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const eurekaInfoHandler = app.openapi(getEurekaInfoRoute, (c) => {
  throw new Error('Not implemented')
})
