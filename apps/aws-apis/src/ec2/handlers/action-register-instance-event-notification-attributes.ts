import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRegisterInstanceEventNotificationAttributesRoute,
  postActionRegisterInstanceEventNotificationAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRegisterInstanceEventNotificationAttributesHandler = app
  .openapi(getActionRegisterInstanceEventNotificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRegisterInstanceEventNotificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
