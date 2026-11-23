import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetChatAdministratorCustomTitleRoute } from '../routes'

const app = new OpenAPIHono()

export const setChatAdministratorCustomTitleHandler = app.openapi(
  postSetChatAdministratorCustomTitleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
