import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountExternalSavingsItemIdRoute,
  getUserUserIDMonetaryAccountExternalSavingsRoute,
  postUserUserIDMonetaryAccountExternalSavingsRoute,
  putUserUserIDMonetaryAccountExternalSavingsItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetaryAccountExternalSavingsHandler = app
  .openapi(postUserUserIDMonetaryAccountExternalSavingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountExternalSavingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountExternalSavingsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountExternalSavingsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
