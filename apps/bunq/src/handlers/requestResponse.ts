import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestResponseHandler = app
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRoute, (c) => {
    throw new Error('Not implemented')
  })
