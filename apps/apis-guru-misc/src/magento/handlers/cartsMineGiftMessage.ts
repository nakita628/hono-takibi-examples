import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsMineGiftMessageRoute, postV1CartsMineGiftMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineGiftMessageHandler = app
  .openapi(getV1CartsMineGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
