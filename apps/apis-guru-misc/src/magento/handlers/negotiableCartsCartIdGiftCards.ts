import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NegotiableCartsCartIdGiftCardsRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdGiftCardsHandler = app.openapi(
  postV1NegotiableCartsCartIdGiftCardsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
