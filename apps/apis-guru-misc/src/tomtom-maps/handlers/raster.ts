import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMapVersionNumberStaticimageRoute,
  getMapVersionNumberTileLayerStyleZoomXYFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rasterHandler = app
  .openapi(getMapVersionNumberStaticimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberTileLayerStyleZoomXYFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
