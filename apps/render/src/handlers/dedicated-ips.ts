import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDedicatedIpsDedicatedIpIdRoute,
  getDedicatedIpsDedicatedIpIdRoute,
  getDedicatedIpsRoute,
  patchDedicatedIpsDedicatedIpIdRoute,
  postDedicatedIpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dedicatedIpsHandler = app
  .openapi(getDedicatedIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDedicatedIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDedicatedIpsDedicatedIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDedicatedIpsDedicatedIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDedicatedIpsDedicatedIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
