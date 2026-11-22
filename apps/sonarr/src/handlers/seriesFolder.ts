import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3SeriesIdFolderRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesFolderHandler = app.openapi(getApiV3SeriesIdFolderRoute, (c) => {
  throw new Error('Not implemented')
})
