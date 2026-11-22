import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1YodleeRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const yodleeHandler = app.openapi(postApiV1YodleeRefreshRoute, (c) => {
  throw new Error('Not implemented')
})
