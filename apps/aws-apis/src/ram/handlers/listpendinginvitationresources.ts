import { OpenAPIHono } from '@hono/zod-openapi'
import { postListpendinginvitationresourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const listpendinginvitationresourcesHandler = app.openapi(
  postListpendinginvitationresourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
