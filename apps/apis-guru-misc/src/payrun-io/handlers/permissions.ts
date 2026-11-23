import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPermissionsRoute,
  getPermissionsTagsRoute,
  getPermissionsTagTagIdRoute,
  postPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
