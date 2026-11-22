import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3ApplicationPropertiesAdvancedSettingsRoute,
  getRestApi3ApplicationPropertiesRoute,
  getRestApi3ConfigurationRoute,
  putRestApi3ApplicationPropertiesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jiraSettingsHandler = app
  .openapi(getRestApi3ApplicationPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ApplicationPropertiesAdvancedSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ApplicationPropertiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
