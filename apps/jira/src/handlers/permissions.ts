import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3MypermissionsRoute,
  getRestApi3PermissionsRoute,
  postRestApi3PermissionsCheckRoute,
  postRestApi3PermissionsProjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getRestApi3MypermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PermissionsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PermissionsProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
