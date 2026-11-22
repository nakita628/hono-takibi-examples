import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserFederateInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(getUserFederateInstanceIdRoute, (c) => {
  throw new Error('Not implemented')
})
