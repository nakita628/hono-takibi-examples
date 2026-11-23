import { OpenAPIHono } from '@hono/zod-openapi'
import { getMembersRoute } from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app.openapi(getMembersRoute, (c) => {
  throw new Error('Not implemented')
})
