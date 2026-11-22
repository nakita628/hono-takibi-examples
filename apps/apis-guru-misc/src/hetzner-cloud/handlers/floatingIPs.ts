import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFloatingIpsIdRoute,
  getFloatingIpsIdRoute,
  getFloatingIpsRoute,
  postFloatingIpsRoute,
  putFloatingIpsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const floatingIPsHandler = app
  .openapi(getFloatingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFloatingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFloatingIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFloatingIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFloatingIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
