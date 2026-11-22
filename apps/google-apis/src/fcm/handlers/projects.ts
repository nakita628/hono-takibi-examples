import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ParentMessagesSendRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app.openapi(postV1ParentMessagesSendRoute, (c) => {
  throw new Error('Not implemented')
})
