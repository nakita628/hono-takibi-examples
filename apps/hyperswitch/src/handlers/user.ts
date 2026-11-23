import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserCreatePlatformRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(postUserCreatePlatformRoute, (c) => {
  throw new Error('Not implemented')
})
