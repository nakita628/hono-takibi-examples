import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImageBuildVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListImageBuildVersionsHandler = app.openapi(postListImageBuildVersionsRoute, (c) => {
  throw new Error('Not implemented')
})
