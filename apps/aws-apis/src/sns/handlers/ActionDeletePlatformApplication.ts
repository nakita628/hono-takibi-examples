import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeletePlatformApplicationRoute,
  postActionDeletePlatformApplicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeletePlatformApplicationHandler = app
  .openapi(getActionDeletePlatformApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeletePlatformApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
