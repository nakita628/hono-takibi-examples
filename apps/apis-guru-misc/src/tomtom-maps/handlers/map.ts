import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMapVersionNumberCopyrightsCaptionFormatRoute,
  getMapVersionNumberCopyrightsFormatRoute,
  getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRoute,
  getMapVersionNumberCopyrightsZoomXYFormatRoute,
  getMapVersionNumberStaticimageRoute,
  getMapVersionNumberTileLayerStyleZoomXYFormatRoute,
  getMapVersionNumberTileLayerStyleZoomXYPbfRoute,
  getMapVersionNumberWmsIndex2Route,
  getMapVersionNumberWmsIndexRoute,
  getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mapHandler = app
  .openapi(getMapVersionNumberCopyrightsFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberCopyrightsCaptionFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberCopyrightsZoomXYFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberStaticimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberTileLayerStyleZoomXYPbfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberTileLayerStyleZoomXYFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberWmsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberWmsIndex2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
