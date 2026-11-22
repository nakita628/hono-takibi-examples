import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV3SeriesImportRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesImportHandler = app.openapi(postApiV3SeriesImportRoute, (c) => {
  throw new Error('Not implemented')
})
