import { OpenAPIHono } from '@hono/zod-openapi'
import { postAddLFTagsToResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const AddLFTagsToResourceHandler = app.openapi(postAddLFTagsToResourceRoute, (c) => {
  throw new Error('Not implemented')
})
