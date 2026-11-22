import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountExternalItemIdRoute,
  getUserUserIDMonetaryAccountExternalRoute,
  postUserUserIDMonetaryAccountExternalRoute,
  putUserUserIDMonetaryAccountExternalItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetaryAccountExternalHandler = app
  .openapi(postUserUserIDMonetaryAccountExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
