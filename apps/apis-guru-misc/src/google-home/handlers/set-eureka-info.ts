import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetEurekaInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const setEurekaInfoHandler = app.openapi(postSetEurekaInfoRoute, (c) => {
  throw new Error('Not implemented')
})
