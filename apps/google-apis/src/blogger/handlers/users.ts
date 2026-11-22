import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3UsersUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(getV3UsersUserIdRoute, (c) => {
  throw new Error('Not implemented')
})
