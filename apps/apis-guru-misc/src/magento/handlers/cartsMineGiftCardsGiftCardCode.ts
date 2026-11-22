import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CartsMineGiftCardsGiftCardCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineGiftCardsGiftCardCodeHandler = app.openapi(
  deleteV1CartsMineGiftCardsGiftCardCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
