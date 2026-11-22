import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreatePlatformVersionRoute,
  postActionCreatePlatformVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreatePlatformVersionHandler = app
  .openapi(getActionCreatePlatformVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreatePlatformVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
