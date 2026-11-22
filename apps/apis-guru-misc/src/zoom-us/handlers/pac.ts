import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUserIdPacRoute } from '../routes'

const app = new OpenAPIHono()

export const pacHandler = app.openapi(getUsersUserIdPacRoute, (c) => {
  throw new Error('Not implemented')
})
