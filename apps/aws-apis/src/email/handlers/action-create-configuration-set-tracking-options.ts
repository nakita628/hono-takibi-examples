import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateConfigurationSetTrackingOptionsRoute,
  postActionCreateConfigurationSetTrackingOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateConfigurationSetTrackingOptionsHandler = app
  .openapi(getActionCreateConfigurationSetTrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateConfigurationSetTrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
