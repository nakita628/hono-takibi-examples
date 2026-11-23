import { OpenAPIHono } from '@hono/zod-openapi'
import { postResponsesBetaTrueRoute } from '../routes'

const app = new OpenAPIHono()

export const responsesBetaTrueHandler = app.openapi(postResponsesBetaTrueRoute, (c) => {
  throw new Error('Not implemented')
})
