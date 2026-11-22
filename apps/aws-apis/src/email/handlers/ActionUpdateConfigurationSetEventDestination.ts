import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateConfigurationSetEventDestinationRoute,
  postActionUpdateConfigurationSetEventDestinationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateConfigurationSetEventDestinationHandler = app
  .openapi(getActionUpdateConfigurationSetEventDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateConfigurationSetEventDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
