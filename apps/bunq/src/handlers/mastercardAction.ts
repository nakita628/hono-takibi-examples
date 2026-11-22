import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mastercardActionHandler = app
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionRoute, (c) => {
    throw new Error('Not implemented')
  })
