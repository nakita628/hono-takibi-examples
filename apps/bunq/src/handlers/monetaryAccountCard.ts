import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountCardItemIdRoute,
  getUserUserIDMonetaryAccountCardRoute,
  putUserUserIDMonetaryAccountCardItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetaryAccountCardHandler = app
  .openapi(getUserUserIDMonetaryAccountCardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountCardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountCardRoute, (c) => {
    throw new Error('Not implemented')
  })
