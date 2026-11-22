import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteApplicationRoute, postActionDeleteApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteApplicationHandler = app
  .openapi(getActionDeleteApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
