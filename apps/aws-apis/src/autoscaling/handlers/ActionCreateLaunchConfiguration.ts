import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateLaunchConfigurationRoute,
  postActionCreateLaunchConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateLaunchConfigurationHandler = app
  .openapi(getActionCreateLaunchConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLaunchConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
