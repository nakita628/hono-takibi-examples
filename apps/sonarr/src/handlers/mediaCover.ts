import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3MediacoverSeriesIdFilenameRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaCoverHandler = app.openapi(getApiV3MediacoverSeriesIdFilenameRoute, (c) => {
  throw new Error('Not implemented')
})
