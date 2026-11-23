import { OpenAPIHono } from '@hono/zod-openapi'
import { getResponsivityRoute } from '../routes'

const app = new OpenAPIHono()

export const responsivityHandler = app.openapi(getResponsivityRoute, (c) => {
  throw new Error('Not implemented')
})
