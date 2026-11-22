import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUsersIdRoute,
  getApiUsersIdRoute,
  getApiUsersRoute,
  getApiUsersSelfRoute,
  patchApiUsersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
