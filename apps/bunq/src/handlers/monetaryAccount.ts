import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountItemIdRoute,
  getUserUserIDMonetaryAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetaryAccountHandler = app
  .openapi(getUserUserIDMonetaryAccountItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
