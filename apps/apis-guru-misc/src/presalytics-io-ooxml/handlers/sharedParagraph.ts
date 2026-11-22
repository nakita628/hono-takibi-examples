import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedParagraphIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedParagraphHandler = app.openapi(getSharedParagraphIdRoute, (c) => {
  throw new Error('Not implemented')
})
