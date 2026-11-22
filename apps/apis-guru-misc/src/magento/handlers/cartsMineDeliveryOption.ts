import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineDeliveryOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineDeliveryOptionHandler = app.openapi(
  postV1CartsMineDeliveryOptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
