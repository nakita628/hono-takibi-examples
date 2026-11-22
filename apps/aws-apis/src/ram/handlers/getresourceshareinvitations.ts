import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetresourceshareinvitationsRoute } from '../routes'

const app = new OpenAPIHono()

export const getresourceshareinvitationsHandler = app.openapi(
  postGetresourceshareinvitationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
