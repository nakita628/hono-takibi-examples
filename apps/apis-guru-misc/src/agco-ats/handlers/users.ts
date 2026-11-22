import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UsersIdRoute,
  getApiV2UsersCurrentRoute,
  getApiV2UsersIdRoute,
  getApiV2UsersRoute,
  postApiV2UsersRoute,
  putApiV2UsersCurrentRoute,
  putApiV2UsersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
