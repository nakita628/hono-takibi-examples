import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersIdRoute,
  deleteApiV1UsersUserDetachFromCompanyRoute,
  getApiV1UsersCreateRoute,
  getApiV1UsersIdEditRoute,
  getApiV1UsersIdRoute,
  getApiV1UsersRoute,
  postApiV1UsersBulkRoute,
  postApiV1UsersRoute,
  postApiV1UsersUserInviteRoute,
  postApiV1UsersUserReconfirmRoute,
  putApiV1UsersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserDetachFromCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserReconfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
