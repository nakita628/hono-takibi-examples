import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailIpPoolsIdIpsIpIdRoute,
  deleteEmailIpPoolsIdRoute,
  getEmailIpPoolsIdRoute,
  getEmailIpPoolsRoute,
  patchEmailIpPoolsIdRoute,
  postEmailIpPoolsIdIpsRoute,
  postEmailIpPoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipPoolsHandler = app
  .openapi(getEmailIpPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailIpPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailIpPoolsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailIpPoolsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailIpPoolsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailIpPoolsIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailIpPoolsIdIpsIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
