import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogoRoute } from '../routes'

const app = new OpenAPIHono()

export const logoHandler = app.openapi(getLogoRoute, (c) => {
  throw new Error('Not implemented')
})
