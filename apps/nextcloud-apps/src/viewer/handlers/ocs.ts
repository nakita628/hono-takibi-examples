import { OpenAPIHono } from '@hono/zod-openapi'
import { putOcsV2PhpAppsViewerApiV1ConfigKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app.openapi(putOcsV2PhpAppsViewerApiV1ConfigKeyRoute, (c) => {
  throw new Error('Not implemented')
})
