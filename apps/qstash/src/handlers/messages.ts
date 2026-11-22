import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2MessagesMessageIdRoute,
  deleteV2MessagesRoute,
  getV2MessagesMessageIdRoute,
  postV2BatchRoute,
  postV2EnqueueQueueNameDestinationRoute,
  postV2MessagesMessageIdRetryRoute,
  postV2PublishDestinationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(postV2PublishDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EnqueueQueueNameDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MessagesMessageIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
