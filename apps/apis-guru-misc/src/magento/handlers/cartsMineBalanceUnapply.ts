import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineBalanceUnapplyRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineBalanceUnapplyHandler = app.openapi(
  postV1CartsMineBalanceUnapplyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
