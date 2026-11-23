import { OpenAPIHono } from '@hono/zod-openapi'
import { postAddLFTagsToResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const addLfTagsToResourceHandler = app.openapi(postAddLFTagsToResourceRoute, (c) => {
  throw new Error('Not implemented')
})
