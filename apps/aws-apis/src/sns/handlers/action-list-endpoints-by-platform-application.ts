import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListEndpointsByPlatformApplicationRoute,
  postActionListEndpointsByPlatformApplicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListEndpointsByPlatformApplicationHandler = app
  .openapi(getActionListEndpointsByPlatformApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListEndpointsByPlatformApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
