import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2ActorsActorIdWebhooksRoute } from '../routes'

const app = new OpenAPIHono()

export const actorsWebhookCollectionHandler = app.openapi(getV2ActorsActorIdWebhooksRoute, (c) => {
  throw new Error('Not implemented')
})
