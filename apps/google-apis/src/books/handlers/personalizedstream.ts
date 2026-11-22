import { OpenAPIHono } from '@hono/zod-openapi'
import { getBooksV1PersonalizedstreamGetRoute } from '../routes'

const app = new OpenAPIHono()

export const personalizedstreamHandler = app.openapi(getBooksV1PersonalizedstreamGetRoute, (c) => {
  throw new Error('Not implemented')
})
