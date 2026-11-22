import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmLists202609SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmLists202609SearchRoute, (c) => {
  throw new Error('Not implemented')
})
