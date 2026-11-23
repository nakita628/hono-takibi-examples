import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRequestsIdRoute,
  getRequestsFoldersPathRoute,
  getRequestsRoute,
  postRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestsHandler = app
  .openapi(getRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsFoldersPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
