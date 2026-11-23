import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpsIdRoute,
  getIpsIdRoute,
  getIpsRoute,
  patchIpsIdRoute,
  postIpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipsHandler = app
  .openapi(getIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
