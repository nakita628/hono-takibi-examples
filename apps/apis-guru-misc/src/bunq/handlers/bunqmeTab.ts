import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bunqmeTabHandler = app
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
