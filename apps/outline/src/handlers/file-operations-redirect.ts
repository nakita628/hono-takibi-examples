import { OpenAPIHono } from '@hono/zod-openapi'
import { postFileOperationsRedirectRoute } from '../routes'

const app = new OpenAPIHono()

export const fileOperationsRedirectHandler = app.openapi(postFileOperationsRedirectRoute, (c) => {
  throw new Error('Not implemented')
})
