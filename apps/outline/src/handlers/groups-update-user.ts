import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsUpdateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsUpdateUserHandler = app.openapi(postGroupsUpdateUserRoute, (c) => {
  throw new Error('Not implemented')
})
