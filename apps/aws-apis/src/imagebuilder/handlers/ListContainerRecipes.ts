import { OpenAPIHono } from '@hono/zod-openapi'
import { postListContainerRecipesRoute } from '../routes'

const app = new OpenAPIHono()

export const ListContainerRecipesHandler = app.openapi(postListContainerRecipesRoute, (c) => {
  throw new Error('Not implemented')
})
