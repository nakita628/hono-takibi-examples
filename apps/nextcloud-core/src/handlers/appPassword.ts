import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpCoreApppasswordRoute,
  getOcsV2PhpCoreGetapppasswordOnetimeRoute,
  getOcsV2PhpCoreGetapppasswordRoute,
  postOcsV2PhpCoreApppasswordRotateRoute,
  putOcsV2PhpCoreApppasswordConfirmRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appPasswordHandler = app
  .openapi(getOcsV2PhpCoreGetapppasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCoreApppasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCoreApppasswordRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCoreApppasswordConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCoreGetapppasswordOnetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
