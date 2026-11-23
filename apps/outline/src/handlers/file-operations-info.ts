import { OpenAPIHono } from '@hono/zod-openapi'
import { postFileOperationsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const fileOperationsInfoHandler = app.openapi(postFileOperationsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
