import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrderReadyForPreparationAsyncRoute,
  postOrderReadyForPreparationSyncRoute,
  postSendToPosFailedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderWebhooksHandler = app
  .openapi(postOrderReadyForPreparationAsyncRoute, (c) => {})
  .openapi(postOrderReadyForPreparationSyncRoute, (c) => {})
  .openapi(postSendToPosFailedRoute, (c) => {})
