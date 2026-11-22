import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetGroupConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const getGroupConfigurationHandler = app.openapi(postGetGroupConfigurationRoute, (c) => {
  throw new Error('Not implemented')
})
