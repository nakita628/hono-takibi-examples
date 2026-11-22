import { OpenAPIHono } from '@hono/zod-openapi'
import { postItemDraftIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const itemDraftHandler = app.openapi(postItemDraftIndexRoute, (c) => {
  throw new Error('Not implemented')
})
