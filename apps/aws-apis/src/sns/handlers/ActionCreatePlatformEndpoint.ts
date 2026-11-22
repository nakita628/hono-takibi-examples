import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreatePlatformEndpointRoute,
  postActionCreatePlatformEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreatePlatformEndpointHandler = app
  .openapi(getActionCreatePlatformEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreatePlatformEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
