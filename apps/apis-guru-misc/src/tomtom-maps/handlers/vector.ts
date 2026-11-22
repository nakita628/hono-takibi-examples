import { OpenAPIHono } from '@hono/zod-openapi'
import { getMapVersionNumberTileLayerStyleZoomXYPbfRoute } from '../routes'

const app = new OpenAPIHono()

export const vectorHandler = app.openapi(getMapVersionNumberTileLayerStyleZoomXYPbfRoute, (c) => {
  throw new Error('Not implemented')
})
