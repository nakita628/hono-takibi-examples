import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiUsersIdRoute,
  getApiUsersMeRoute,
  postApiAdminUsersRoute,
  putApiUsersIdSuspendRoute,
  putApiUsersIdUnpublishRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postApiAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
