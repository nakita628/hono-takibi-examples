import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateConfigurationSetEventDestinationRoute,
  postActionCreateConfigurationSetEventDestinationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateConfigurationSetEventDestinationHandler = app
  .openapi(getActionCreateConfigurationSetEventDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateConfigurationSetEventDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
