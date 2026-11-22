import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute,
  getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowRoute,
  getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute,
  postOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const outOfOfficeHandler = app
  .openapi(getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
