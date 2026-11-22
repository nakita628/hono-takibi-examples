import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3MovieIdFolderRoute } from '../routes'

const app = new OpenAPIHono()

export const movieFolderHandler = app.openapi(getApiV3MovieIdFolderRoute, (c) => {
  throw new Error('Not implemented')
})
