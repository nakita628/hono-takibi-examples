import { OpenAPIHono } from '@hono/zod-openapi'
import { getMarkdownEmoticonsRoute, postMarkdownRoute } from '../routes'

const app = new OpenAPIHono()

export const markdownHandler = app
  .openapi(postMarkdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarkdownEmoticonsRoute, (c) => {
    throw new Error('Not implemented')
  })
