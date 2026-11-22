import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrderReadyForPreparationAsyncRoute,
  postOrderReadyForPreparationSyncRoute,
  postSendToPosFailedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderWebhooksHandler = app
  .openapi(postOrderReadyForPreparationAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderReadyForPreparationSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendToPosFailedRoute, (c) => {
    throw new Error('Not implemented')
  })
