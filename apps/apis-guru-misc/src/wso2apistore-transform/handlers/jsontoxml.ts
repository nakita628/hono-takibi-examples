import { OpenAPIHono } from '@hono/zod-openapi'
import { postJsontoxmlRoute } from '../routes'

const app = new OpenAPIHono()

export const jsontoxmlHandler = app.openapi(postJsontoxmlRoute, (c) => {
  throw new Error('Not implemented')
})
