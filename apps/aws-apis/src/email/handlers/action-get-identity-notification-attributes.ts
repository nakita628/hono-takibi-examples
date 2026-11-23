import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetIdentityNotificationAttributesRoute,
  postActionGetIdentityNotificationAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetIdentityNotificationAttributesHandler = app
  .openapi(getActionGetIdentityNotificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIdentityNotificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
