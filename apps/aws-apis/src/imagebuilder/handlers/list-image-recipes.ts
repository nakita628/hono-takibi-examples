import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImageRecipesRoute } from '../routes'

const app = new OpenAPIHono()

export const listImageRecipesHandler = app.openapi(postListImageRecipesRoute, (c) => {
  throw new Error('Not implemented')
})
