import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpsIdRoute,
  getIpsIdAvailableRoute,
  getIpsIdCustomdataRoute,
  getIpsIdRoute,
  patchIpsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipsHandler = app
  .openapi(deleteIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsIdAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
