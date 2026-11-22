import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV3SeriesEditorRoute, putApiV3SeriesEditorRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesEditorHandler = app
  .openapi(putApiV3SeriesEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3SeriesEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
