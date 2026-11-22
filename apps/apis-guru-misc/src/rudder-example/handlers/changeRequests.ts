import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChangeRequestsChangeRequestIdRoute,
  deleteValidatedUsersUsernameRoute,
  getApiChangeRequestsRoute,
  getChangeRequestsChangeRequestIdRoute,
  getUsersRoute,
  postChangeRequestsChangeRequestIdAcceptRoute,
  postChangeRequestsChangeRequestIdRoute,
  postValidatedUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const changeRequestsHandler = app
  .openapi(getApiChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postValidatedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteValidatedUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
