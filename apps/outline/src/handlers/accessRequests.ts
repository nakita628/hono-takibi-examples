import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccessRequestsApproveRoute,
  postAccessRequestsCreateRoute,
  postAccessRequestsDismissRoute,
  postAccessRequestsInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessRequestsHandler = app
  .openapi(postAccessRequestsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessRequestsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessRequestsApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessRequestsDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
