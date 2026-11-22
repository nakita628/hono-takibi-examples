import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineSetPaymentInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineSetPaymentInformationHandler = app.openapi(
  postV1CartsMineSetPaymentInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
