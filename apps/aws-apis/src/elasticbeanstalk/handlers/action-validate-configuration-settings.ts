import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionValidateConfigurationSettingsRoute,
  postActionValidateConfigurationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionValidateConfigurationSettingsHandler = app
  .openapi(getActionValidateConfigurationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionValidateConfigurationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
