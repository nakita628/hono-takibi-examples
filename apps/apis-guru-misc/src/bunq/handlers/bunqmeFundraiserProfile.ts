import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDBunqmeFundraiserProfileItemIdRoute,
  getUserUserIDBunqmeFundraiserProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bunqmeFundraiserProfileHandler = app
  .openapi(getUserUserIDBunqmeFundraiserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDBunqmeFundraiserProfileItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
