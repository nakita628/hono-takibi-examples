import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebtokenNameRoute } from '../routes'

const app = new OpenAPIHono()

export const webtokenHandler = app.openapi(postWebtokenNameRoute, (c) => {
  throw new Error('Not implemented')
})
