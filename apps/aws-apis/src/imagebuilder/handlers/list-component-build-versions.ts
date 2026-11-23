import { OpenAPIHono } from '@hono/zod-openapi'
import { postListComponentBuildVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listComponentBuildVersionsHandler = app.openapi(
  postListComponentBuildVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
