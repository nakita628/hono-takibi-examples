import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateConfigurationSetTrackingOptionsRoute,
  postActionUpdateConfigurationSetTrackingOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateConfigurationSetTrackingOptionsHandler = app
  .openapi(getActionUpdateConfigurationSetTrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateConfigurationSetTrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
