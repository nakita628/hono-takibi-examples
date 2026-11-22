import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrimaryIpsIdRoute,
  getPrimaryIpsIdRoute,
  getPrimaryIpsRoute,
  postPrimaryIpsRoute,
  putPrimaryIpsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const primaryIPsHandler = app
  .openapi(getPrimaryIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrimaryIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrimaryIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrimaryIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrimaryIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
