import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3RenameRoute } from '../routes'

const app = new OpenAPIHono()

export const renameMovieHandler = app.openapi(getApiV3RenameRoute, (c) => {
  throw new Error('Not implemented')
})
