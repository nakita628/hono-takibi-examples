import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineShippingInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineShippingInformationHandler = app.openapi(
  postV1CartsMineShippingInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
