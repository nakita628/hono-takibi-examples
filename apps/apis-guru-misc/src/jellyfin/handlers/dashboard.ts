import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebConfigurationPageRoute, getWebConfigurationPagesRoute } from '../routes'

const app = new OpenAPIHono()

export const dashboardHandler = app
  .openapi(getWebConfigurationPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebConfigurationPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
