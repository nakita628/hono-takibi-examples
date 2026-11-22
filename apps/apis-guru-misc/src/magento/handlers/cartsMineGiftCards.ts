import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineGiftCardsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineGiftCardsHandler = app.openapi(postV1CartsMineGiftCardsRoute, (c) => {
  throw new Error('Not implemented')
})
