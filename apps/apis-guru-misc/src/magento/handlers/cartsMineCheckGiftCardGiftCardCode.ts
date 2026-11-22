import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsMineCheckGiftCardGiftCardCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineCheckGiftCardGiftCardCodeHandler = app.openapi(
  getV1CartsMineCheckGiftCardGiftCardCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
