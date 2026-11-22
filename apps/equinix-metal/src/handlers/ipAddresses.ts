import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpsIdRoute,
  getIpsIdAvailableRoute,
  getIpsIdCustomdataRoute,
  getIpsIdRoute,
  getProjectsIdIpsRoute,
  patchIpsIdRoute,
  postProjectsIdIpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressesHandler = app
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
  .openapi(getProjectsIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
