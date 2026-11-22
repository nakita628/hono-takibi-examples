import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CartsCartIdGiftCardsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdGiftCardsHandler = app.openapi(putV1CartsCartIdGiftCardsRoute, (c) => {
  throw new Error('Not implemented')
})
