import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteConfigurationSetEventDestinationRoute,
  postActionDeleteConfigurationSetEventDestinationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteConfigurationSetEventDestinationHandler = app
  .openapi(getActionDeleteConfigurationSetEventDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteConfigurationSetEventDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
