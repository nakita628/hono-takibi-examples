import { OpenAPIHono } from '@hono/zod-openapi'
import { postInteractionsInteractionIdInteractionTokenCallbackRoute } from '../routes'

const app = new OpenAPIHono()

export const interactionsHandler = app.openapi(
  postInteractionsInteractionIdInteractionTokenCallbackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
