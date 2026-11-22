import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountItemIdRoute,
  getUserUserIDMonetaryAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetaryAccountHandler = app
  .openapi(getUserUserIDMonetaryAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
