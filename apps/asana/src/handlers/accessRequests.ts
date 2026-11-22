import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccessRequestsRoute,
  postAccessRequestsAccessRequestGidApproveRoute,
  postAccessRequestsAccessRequestGidRejectRoute,
  postAccessRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessRequestsHandler = app
  .openapi(getAccessRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessRequestsAccessRequestGidApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessRequestsAccessRequestGidRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
