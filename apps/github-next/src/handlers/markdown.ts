import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarkdownRawRoute, postMarkdownRoute } from '../routes'

const app = new OpenAPIHono()

export const markdownHandler = app
  .openapi(postMarkdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarkdownRawRoute, (c) => {
    throw new Error('Not implemented')
  })
