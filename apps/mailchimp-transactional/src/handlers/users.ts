import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsersInfoRoute,
  postUsersPing2Route,
  postUsersPingRoute,
  postUsersSendersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersPing2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
