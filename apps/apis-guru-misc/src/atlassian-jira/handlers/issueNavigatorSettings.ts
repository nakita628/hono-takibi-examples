import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3SettingsColumnsRoute, putRestApi3SettingsColumnsRoute } from '../routes'

const app = new OpenAPIHono()

export const issueNavigatorSettingsHandler = app
  .openapi(getRestApi3SettingsColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3SettingsColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
