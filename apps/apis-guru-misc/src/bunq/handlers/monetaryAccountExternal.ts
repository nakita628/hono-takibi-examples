import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountExternalItemIdRoute,
  getUserUserIDMonetaryAccountExternalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetaryAccountExternalHandler = app
  .openapi(getUserUserIDMonetaryAccountExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
