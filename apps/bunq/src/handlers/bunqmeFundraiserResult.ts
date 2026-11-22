import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bunqmeFundraiserResultHandler = app.openapi(
  getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultItemIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
