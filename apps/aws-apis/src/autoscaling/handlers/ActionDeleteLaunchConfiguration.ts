import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteLaunchConfigurationRoute,
  postActionDeleteLaunchConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteLaunchConfigurationHandler = app
  .openapi(getActionDeleteLaunchConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLaunchConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
