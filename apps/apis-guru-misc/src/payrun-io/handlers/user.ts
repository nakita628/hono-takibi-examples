import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIdRoute,
  deleteUserUserIdTagTagIdRoute,
  getUserUserIdPermissionsRoute,
  getUserUserIdRoute,
  getUserUserIdTagsRoute,
  getUserUserIdTagTagIdRoute,
  patchUserUserIdRoute,
  putUserUserIdRoute,
  putUserUserIdTagTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(deleteUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
