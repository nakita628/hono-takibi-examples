import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetPlatformApplicationAttributesRoute,
  postActionGetPlatformApplicationAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetPlatformApplicationAttributesHandler = app
  .openapi(getActionGetPlatformApplicationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetPlatformApplicationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
