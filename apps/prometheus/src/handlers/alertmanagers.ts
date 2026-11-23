import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlertmanagersRoute } from '../routes'

const app = new OpenAPIHono()

export const alertmanagersHandler = app.openapi(getAlertmanagersRoute, (c) => {
  throw new Error('Not implemented')
})
