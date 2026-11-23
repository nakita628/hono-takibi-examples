import { OpenAPIHono } from '@hono/zod-openapi'
import { postMakeProofreaderRoute } from '../routes'

const app = new OpenAPIHono()

export const makeProofreaderHandler = app.openapi(postMakeProofreaderRoute, (c) => {
  throw new Error('Not implemented')
})
