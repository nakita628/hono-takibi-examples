import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagRoute, postTagRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const tagHandler = app
  .openapi(getTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
