import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChangeRequestsChangeRequestIdRoute,
  getChangeRequestsChangeRequestIdRoute,
  postChangeRequestsChangeRequestIdAcceptRoute,
  postChangeRequestsChangeRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const changeRequestsHandler = app
  .openapi(deleteChangeRequestsChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChangeRequestsChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChangeRequestsChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChangeRequestsChangeRequestIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
