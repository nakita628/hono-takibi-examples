import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetTypeConfigurationRoute, postActionSetTypeConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSetTypeConfigurationHandler = app
  .openapi(getActionSetTypeConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetTypeConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
