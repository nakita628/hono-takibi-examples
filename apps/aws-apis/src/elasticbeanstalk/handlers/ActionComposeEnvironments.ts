import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionComposeEnvironmentsRoute, postActionComposeEnvironmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionComposeEnvironmentsHandler = app
  .openapi(getActionComposeEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionComposeEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
