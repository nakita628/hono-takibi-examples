import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppInstanceUsersAppInstanceUserArnRoute,
  getAppInstanceUsersAppInstanceUserArnRoute,
  postAppInstanceUsersRoute,
  putAppInstanceUsersAppInstanceUserArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appInstanceUsersHandler = app
  .openapi(postAppInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppInstanceUsersAppInstanceUserArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstanceUsersAppInstanceUserArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppInstanceUsersAppInstanceUserArnRoute, (c) => {
    throw new Error('Not implemented')
  })
