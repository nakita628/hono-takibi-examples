import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLaunchConfigurationsRoute,
  postActionDescribeLaunchConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeLaunchConfigurationsHandler = app
  .openapi(getActionDescribeLaunchConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLaunchConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
