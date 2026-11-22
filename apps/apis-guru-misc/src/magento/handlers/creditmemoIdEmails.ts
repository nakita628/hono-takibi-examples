import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CreditmemoIdEmailsRoute } from '../routes'

const app = new OpenAPIHono()

export const creditmemoIdEmailsHandler = app.openapi(postV1CreditmemoIdEmailsRoute, (c) => {
  throw new Error('Not implemented')
})
