import { OpenAPIHono } from '@hono/zod-openapi'
import { postReplacepermissionassociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const replacepermissionassociationsHandler = app.openapi(
  postReplacepermissionassociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
