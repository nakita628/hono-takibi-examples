import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserCipherUsesRoute } from '../routes'

const app = new OpenAPIHono()

export const userCipherUsesHandler = app.openapi(getUserCipherUsesRoute, (c) => {
  throw new Error('Not implemented')
})
