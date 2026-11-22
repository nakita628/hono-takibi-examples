import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImageRecipesRoute } from '../routes'

const app = new OpenAPIHono()

export const ListImageRecipesHandler = app.openapi(postListImageRecipesRoute, (c) => {
  throw new Error('Not implemented')
})
