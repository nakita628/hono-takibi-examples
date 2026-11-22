import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabResultResponseItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bunqmeTabResultResponseHandler = app.openapi(
  getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabResultResponseItemIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
