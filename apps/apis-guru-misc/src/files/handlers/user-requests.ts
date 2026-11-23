import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserRequestsIdRoute,
  getUserRequestsIdRoute,
  getUserRequestsRoute,
  postUserRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userRequestsHandler = app
  .openapi(getUserRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
