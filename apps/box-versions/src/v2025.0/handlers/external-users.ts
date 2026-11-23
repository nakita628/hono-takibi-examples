import { OpenAPIHono } from '@hono/zod-openapi'
import { postExternalUsersSubmitDeleteJobRoute } from '../routes'

const app = new OpenAPIHono()

export const externalUsersHandler = app.openapi(postExternalUsersSubmitDeleteJobRoute, (c) => {
  throw new Error('Not implemented')
})
