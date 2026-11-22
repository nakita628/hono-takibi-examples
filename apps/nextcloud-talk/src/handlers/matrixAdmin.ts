import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute,
  putOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matrixAdminHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
