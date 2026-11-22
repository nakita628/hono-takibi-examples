import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteConfigurationSetTrackingOptionsRoute,
  postActionDeleteConfigurationSetTrackingOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteConfigurationSetTrackingOptionsHandler = app
  .openapi(getActionDeleteConfigurationSetTrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteConfigurationSetTrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
