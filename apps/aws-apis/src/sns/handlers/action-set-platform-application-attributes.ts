import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetPlatformApplicationAttributesRoute,
  postActionSetPlatformApplicationAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetPlatformApplicationAttributesHandler = app
  .openapi(getActionSetPlatformApplicationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetPlatformApplicationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
