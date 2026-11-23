import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeConfigurationSettingsRoute,
  postActionDescribeConfigurationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeConfigurationSettingsHandler = app
  .openapi(getActionDescribeConfigurationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeConfigurationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
