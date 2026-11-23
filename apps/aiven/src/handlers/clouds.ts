import { OpenAPIHono } from '@hono/zod-openapi'
import { getCloudsRoute } from '../routes'

const app = new OpenAPIHono()

export const cloudsHandler = app.openapi(getCloudsRoute, (c) => {
  throw new Error('Not implemented')
})
