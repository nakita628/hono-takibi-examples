import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAuthorizeEndpointAccessRoute,
  postActionAuthorizeEndpointAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAuthorizeEndpointAccessHandler = app
  .openapi(getActionAuthorizeEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
