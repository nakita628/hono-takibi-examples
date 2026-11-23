import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetLaunchConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const getLaunchConfigurationHandler = app.openapi(postGetLaunchConfigurationRoute, (c) => {
  throw new Error('Not implemented')
})
