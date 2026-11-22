import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1UsersUsernameAccessibleEntitiesRoute,
  putV1UsersUsernameAcceptAccessRoute,
  putV1UsersUsernameDenyAccessRoute,
  putV1UsersUsernameRequestAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(putV1UsersUsernameAcceptAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUsernameAccessibleEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUsernameDenyAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUsernameRequestAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
