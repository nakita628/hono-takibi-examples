import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDBunqmeFundraiserProfileItemIdRoute,
  getUserUserIDBunqmeFundraiserProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bunqmeFundraiserProfileHandler = app
  .openapi(getUserUserIDBunqmeFundraiserProfileItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDBunqmeFundraiserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
