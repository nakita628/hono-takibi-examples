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
} from './routes'
import {
  getMapVersionNumberCopyrightsCaptionFormatRouteHandler,
  getMapVersionNumberCopyrightsFormatRouteHandler,
  getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRouteHandler,
  getMapVersionNumberCopyrightsZoomXYFormatRouteHandler,
  getMapVersionNumberStaticimageRouteHandler,
  getMapVersionNumberTileLayerStyleZoomXYFormatRouteHandler,
  getMapVersionNumberTileLayerStyleZoomXYPbfRouteHandler,
  getMapVersionNumberWmsIndex2RouteHandler,
  getMapVersionNumberWmsIndexRouteHandler,
  getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getMapVersionNumberCopyrightsFormatRoute,
    getMapVersionNumberCopyrightsFormatRouteHandler,
  )
  .openapi(
    getMapVersionNumberCopyrightsCaptionFormatRoute,
    getMapVersionNumberCopyrightsCaptionFormatRouteHandler,
  )
  .openapi(
    getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRoute,
    getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRouteHandler,
  )
  .openapi(
    getMapVersionNumberCopyrightsZoomXYFormatRoute,
    getMapVersionNumberCopyrightsZoomXYFormatRouteHandler,
  )
  .openapi(getMapVersionNumberStaticimageRoute, getMapVersionNumberStaticimageRouteHandler)
  .openapi(
    getMapVersionNumberTileLayerStyleZoomXYPbfRoute,
    getMapVersionNumberTileLayerStyleZoomXYPbfRouteHandler,
  )
  .openapi(
    getMapVersionNumberTileLayerStyleZoomXYFormatRoute,
    getMapVersionNumberTileLayerStyleZoomXYFormatRouteHandler,
  )
  .openapi(getMapVersionNumberWmsIndexRoute, getMapVersionNumberWmsIndexRouteHandler)
  .openapi(getMapVersionNumberWmsIndex2Route, getMapVersionNumberWmsIndex2RouteHandler)
  .openapi(
    getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlRoute,
    getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlRouteHandler,
  )

export default app
