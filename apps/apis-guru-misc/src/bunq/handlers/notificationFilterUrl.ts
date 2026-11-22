import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDNotificationFilterUrlRoute,
  getUserUserIDNotificationFilterUrlRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDNotificationFilterUrlRoute,
  postUserUserIDNotificationFilterUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationFilterUrlHandler = app
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDNotificationFilterUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDNotificationFilterUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDNotificationFilterUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDNotificationFilterUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
