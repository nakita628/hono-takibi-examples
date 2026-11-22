import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetPlatformApplicationAttributesRoute,
  postActionSetPlatformApplicationAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSetPlatformApplicationAttributesHandler = app
  .openapi(getActionSetPlatformApplicationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetPlatformApplicationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
