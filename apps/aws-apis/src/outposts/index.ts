import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOutpostsOutpostIdRoute,
  deleteSitesSiteIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getCatalogItemCatalogItemIdRoute,
  getCatalogItemsRoute,
  getConnectionsConnectionIdRoute,
  getListOrdersRoute,
  getOrdersOrderIdRoute,
  getOutpostsOutpostIdAssetsRoute,
  getOutpostsOutpostIdInstanceTypesRoute,
  getOutpostsOutpostIdRoute,
  getOutpostsRoute,
  getSitesRoute,
  getSitesSiteIdAddressAddressTypeRoute,
  getSitesSiteIdRoute,
  getTagsResourceArnRoute,
  patchOutpostsOutpostIdRoute,
  patchSitesSiteIdRackPhysicalPropertiesRoute,
  patchSitesSiteIdRoute,
  postConnectionsRoute,
  postOrdersOrderIdCancelRoute,
  postOrdersRoute,
  postOutpostsRoute,
  postSitesRoute,
  postTagsResourceArnRoute,
  putSitesSiteIdAddressRoute,
} from './routes'
import {
  deleteOutpostsOutpostIdRouteHandler,
  deleteSitesSiteIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getCatalogItemCatalogItemIdRouteHandler,
  getCatalogItemsRouteHandler,
  getConnectionsConnectionIdRouteHandler,
  getListOrdersRouteHandler,
  getOrdersOrderIdRouteHandler,
  getOutpostsOutpostIdAssetsRouteHandler,
  getOutpostsOutpostIdInstanceTypesRouteHandler,
  getOutpostsOutpostIdRouteHandler,
  getOutpostsRouteHandler,
  getSitesRouteHandler,
  getSitesSiteIdAddressAddressTypeRouteHandler,
  getSitesSiteIdRouteHandler,
  getTagsResourceArnRouteHandler,
  patchOutpostsOutpostIdRouteHandler,
  patchSitesSiteIdRackPhysicalPropertiesRouteHandler,
  patchSitesSiteIdRouteHandler,
  postConnectionsRouteHandler,
  postOrdersOrderIdCancelRouteHandler,
  postOrdersRouteHandler,
  postOutpostsRouteHandler,
  postSitesRouteHandler,
  postTagsResourceArnRouteHandler,
  putSitesSiteIdAddressRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postOrdersOrderIdCancelRoute, postOrdersOrderIdCancelRouteHandler)
  .openapi(postOrdersRoute, postOrdersRouteHandler)
  .openapi(postOutpostsRoute, postOutpostsRouteHandler)
  .openapi(getOutpostsRoute, getOutpostsRouteHandler)
  .openapi(postSitesRoute, postSitesRouteHandler)
  .openapi(getSitesRoute, getSitesRouteHandler)
  .openapi(deleteOutpostsOutpostIdRoute, deleteOutpostsOutpostIdRouteHandler)
  .openapi(getOutpostsOutpostIdRoute, getOutpostsOutpostIdRouteHandler)
  .openapi(patchOutpostsOutpostIdRoute, patchOutpostsOutpostIdRouteHandler)
  .openapi(deleteSitesSiteIdRoute, deleteSitesSiteIdRouteHandler)
  .openapi(getSitesSiteIdRoute, getSitesSiteIdRouteHandler)
  .openapi(patchSitesSiteIdRoute, patchSitesSiteIdRouteHandler)
  .openapi(getCatalogItemCatalogItemIdRoute, getCatalogItemCatalogItemIdRouteHandler)
  .openapi(getConnectionsConnectionIdRoute, getConnectionsConnectionIdRouteHandler)
  .openapi(getOrdersOrderIdRoute, getOrdersOrderIdRouteHandler)
  .openapi(getOutpostsOutpostIdInstanceTypesRoute, getOutpostsOutpostIdInstanceTypesRouteHandler)
  .openapi(getSitesSiteIdAddressAddressTypeRoute, getSitesSiteIdAddressAddressTypeRouteHandler)
  .openapi(getOutpostsOutpostIdAssetsRoute, getOutpostsOutpostIdAssetsRouteHandler)
  .openapi(getCatalogItemsRoute, getCatalogItemsRouteHandler)
  .openapi(getListOrdersRoute, getListOrdersRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postConnectionsRoute, postConnectionsRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(putSitesSiteIdAddressRoute, putSitesSiteIdAddressRouteHandler)
  .openapi(
    patchSitesSiteIdRackPhysicalPropertiesRoute,
    patchSitesSiteIdRackPhysicalPropertiesRouteHandler,
  )

export default app
