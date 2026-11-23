import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthcheckRoute } from '../routes'

const app = new OpenAPIHono()

export const healthcheckHandler = app.openapi(getHealthcheckRoute, (c) => {
  throw new Error('Not implemented')
})
