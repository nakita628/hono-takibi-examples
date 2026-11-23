import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeletePlatformVersionRoute,
  postActionDeletePlatformVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeletePlatformVersionHandler = app
  .openapi(getActionDeletePlatformVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeletePlatformVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
