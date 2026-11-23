import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreatePlatformApplicationRoute,
  postActionCreatePlatformApplicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreatePlatformApplicationHandler = app
  .openapi(getActionCreatePlatformApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreatePlatformApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
