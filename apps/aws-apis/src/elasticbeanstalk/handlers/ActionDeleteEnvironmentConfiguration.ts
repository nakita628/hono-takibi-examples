import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteEnvironmentConfigurationRoute,
  postActionDeleteEnvironmentConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteEnvironmentConfigurationHandler = app
  .openapi(getActionDeleteEnvironmentConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteEnvironmentConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
