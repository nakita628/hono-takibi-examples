import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeConfigurationSettingsRoute,
  postActionDescribeConfigurationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeConfigurationSettingsHandler = app
  .openapi(getActionDescribeConfigurationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeConfigurationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
