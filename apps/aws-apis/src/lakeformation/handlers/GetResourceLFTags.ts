import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetResourceLFTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const GetResourceLFTagsHandler = app.openapi(postGetResourceLFTagsRoute, (c) => {
  throw new Error('Not implemented')
})
