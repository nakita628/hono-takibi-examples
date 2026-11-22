import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3FilterIdPermissionPermissionIdRoute,
  getRestApi3FilterDefaultShareScopeRoute,
  getRestApi3FilterIdPermissionPermissionIdRoute,
  getRestApi3FilterIdPermissionRoute,
  postRestApi3FilterIdPermissionRoute,
  putRestApi3FilterDefaultShareScopeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filterSharingHandler = app
  .openapi(getRestApi3FilterDefaultShareScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterDefaultShareScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FilterIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FilterIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
