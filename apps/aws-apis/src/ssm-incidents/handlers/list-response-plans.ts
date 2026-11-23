import { OpenAPIHono } from '@hono/zod-openapi'
import { postListResponsePlansRoute } from '../routes'

const app = new OpenAPIHono()

export const listResponsePlansHandler = app.openapi(postListResponsePlansRoute, (c) => {
  throw new Error('Not implemented')
})
