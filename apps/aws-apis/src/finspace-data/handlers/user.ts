import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIdPermissionGroupsMaxResultsRoute,
  getUserUserIdRoute,
  postUserRoute,
  postUserUserIdDisableRoute,
  postUserUserIdEnableRoute,
  postUserUserIdPasswordRoute,
  putUserUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(postUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdPermissionGroupsMaxResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
