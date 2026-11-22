import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessIpRangesAccessIpRangeIdRoute,
  getAccessIpRangesRoute,
  postAccessIpRangesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipRangesHandler = app
  .openapi(getAccessIpRangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessIpRangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessIpRangesAccessIpRangeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
