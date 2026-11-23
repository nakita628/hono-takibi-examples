import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListPlatformApplicationsRoute,
  postActionListPlatformApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListPlatformApplicationsHandler = app
  .openapi(getActionListPlatformApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListPlatformApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
