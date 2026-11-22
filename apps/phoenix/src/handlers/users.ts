import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1UsersUserIdRoute,
  getV1UserRoute,
  getV1UsersRoute,
  postV1UsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
