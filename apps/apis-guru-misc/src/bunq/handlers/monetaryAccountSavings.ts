import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountSavingsItemIdRoute,
  getUserUserIDMonetaryAccountSavingsRoute,
  postUserUserIDMonetaryAccountSavingsRoute,
  putUserUserIDMonetaryAccountSavingsItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetaryAccountSavingsHandler = app
  .openapi(getUserUserIDMonetaryAccountSavingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDMonetaryAccountSavingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountSavingsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountSavingsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
