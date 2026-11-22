import { OpenAPIHono } from '@hono/zod-openapi'
import { postRecipientsSharesInvitesShareIdRoute } from '../routes'

const app = new OpenAPIHono()

export const recipientsHandler = app.openapi(postRecipientsSharesInvitesShareIdRoute, (c) => {
  throw new Error('Not implemented')
})
