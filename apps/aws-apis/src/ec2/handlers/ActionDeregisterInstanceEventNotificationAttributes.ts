import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeregisterInstanceEventNotificationAttributesRoute,
  postActionDeregisterInstanceEventNotificationAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeregisterInstanceEventNotificationAttributesHandler = app
  .openapi(getActionDeregisterInstanceEventNotificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeregisterInstanceEventNotificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
