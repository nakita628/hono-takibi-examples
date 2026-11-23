import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConnectorApisIdResourcesResourceIdCoverageRoute,
  getConnectorApisIdResourcesResourceIdRoute,
  getConnectorApisIdRoute,
  getConnectorApisRoute,
  getConnectorConnectorsIdDocsDocIdRoute,
  getConnectorConnectorsIdResourcesResourceIdRoute,
  getConnectorConnectorsIdRoute,
  getConnectorConnectorsRoute,
} from './routes'
import {
  getConnectorApisIdResourcesResourceIdCoverageRouteHandler,
  getConnectorApisIdResourcesResourceIdRouteHandler,
  getConnectorApisIdRouteHandler,
  getConnectorApisRouteHandler,
  getConnectorConnectorsIdDocsDocIdRouteHandler,
  getConnectorConnectorsIdResourcesResourceIdRouteHandler,
  getConnectorConnectorsIdRouteHandler,
  getConnectorConnectorsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConnectorApisRoute, getConnectorApisRouteHandler)
  .openapi(getConnectorApisIdRoute, getConnectorApisIdRouteHandler)
  .openapi(
    getConnectorApisIdResourcesResourceIdRoute,
    getConnectorApisIdResourcesResourceIdRouteHandler,
  )
  .openapi(
    getConnectorApisIdResourcesResourceIdCoverageRoute,
    getConnectorApisIdResourcesResourceIdCoverageRouteHandler,
  )
  .openapi(getConnectorConnectorsRoute, getConnectorConnectorsRouteHandler)
  .openapi(getConnectorConnectorsIdRoute, getConnectorConnectorsIdRouteHandler)
  .openapi(getConnectorConnectorsIdDocsDocIdRoute, getConnectorConnectorsIdDocsDocIdRouteHandler)
  .openapi(
    getConnectorConnectorsIdResourcesResourceIdRoute,
    getConnectorConnectorsIdResourcesResourceIdRouteHandler,
  )

export default app
