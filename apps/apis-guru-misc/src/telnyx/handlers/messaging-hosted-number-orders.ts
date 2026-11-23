import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMessagingHostedNumberOrdersIdRoute,
  getMessagingHostedNumberOrdersRoute,
  postMessagingHostedNumberOrdersIdActionsFileUploadRoute,
  postMessagingHostedNumberOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagingHostedNumberOrdersHandler = app
  .openapi(getMessagingHostedNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingHostedNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingHostedNumberOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingHostedNumberOrdersIdActionsFileUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
