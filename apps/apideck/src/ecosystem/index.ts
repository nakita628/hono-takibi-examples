import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEcosystemsEcosystemIdCategoriesIdListingsRoute,
  getEcosystemsEcosystemIdCategoriesIdRoute,
  getEcosystemsEcosystemIdCategoriesRoute,
  getEcosystemsEcosystemIdCollectionsIdListingsRoute,
  getEcosystemsEcosystemIdCollectionsIdRoute,
  getEcosystemsEcosystemIdCollectionsRoute,
  getEcosystemsEcosystemIdListingsIdRoute,
  getEcosystemsEcosystemIdListingsRoute,
  getEcosystemsEcosystemIdProductsIdListingsRoute,
  getEcosystemsEcosystemIdProductsIdRoute,
  getEcosystemsEcosystemIdProductsRoute,
  getEcosystemsEcosystemIdRoute,
} from './routes'
import {
  getEcosystemsEcosystemIdCategoriesIdListingsRouteHandler,
  getEcosystemsEcosystemIdCategoriesIdRouteHandler,
  getEcosystemsEcosystemIdCategoriesRouteHandler,
  getEcosystemsEcosystemIdCollectionsIdListingsRouteHandler,
  getEcosystemsEcosystemIdCollectionsIdRouteHandler,
  getEcosystemsEcosystemIdCollectionsRouteHandler,
  getEcosystemsEcosystemIdListingsIdRouteHandler,
  getEcosystemsEcosystemIdListingsRouteHandler,
  getEcosystemsEcosystemIdProductsIdListingsRouteHandler,
  getEcosystemsEcosystemIdProductsIdRouteHandler,
  getEcosystemsEcosystemIdProductsRouteHandler,
  getEcosystemsEcosystemIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEcosystemsEcosystemIdRoute, getEcosystemsEcosystemIdRouteHandler)
  .openapi(getEcosystemsEcosystemIdCategoriesRoute, getEcosystemsEcosystemIdCategoriesRouteHandler)
  .openapi(
    getEcosystemsEcosystemIdCategoriesIdRoute,
    getEcosystemsEcosystemIdCategoriesIdRouteHandler,
  )
  .openapi(
    getEcosystemsEcosystemIdCategoriesIdListingsRoute,
    getEcosystemsEcosystemIdCategoriesIdListingsRouteHandler,
  )
  .openapi(
    getEcosystemsEcosystemIdCollectionsRoute,
    getEcosystemsEcosystemIdCollectionsRouteHandler,
  )
  .openapi(
    getEcosystemsEcosystemIdCollectionsIdRoute,
    getEcosystemsEcosystemIdCollectionsIdRouteHandler,
  )
  .openapi(
    getEcosystemsEcosystemIdCollectionsIdListingsRoute,
    getEcosystemsEcosystemIdCollectionsIdListingsRouteHandler,
  )
  .openapi(getEcosystemsEcosystemIdListingsRoute, getEcosystemsEcosystemIdListingsRouteHandler)
  .openapi(getEcosystemsEcosystemIdListingsIdRoute, getEcosystemsEcosystemIdListingsIdRouteHandler)
  .openapi(getEcosystemsEcosystemIdProductsRoute, getEcosystemsEcosystemIdProductsRouteHandler)
  .openapi(getEcosystemsEcosystemIdProductsIdRoute, getEcosystemsEcosystemIdProductsIdRouteHandler)
  .openapi(
    getEcosystemsEcosystemIdProductsIdListingsRoute,
    getEcosystemsEcosystemIdProductsIdListingsRouteHandler,
  )

export default app
