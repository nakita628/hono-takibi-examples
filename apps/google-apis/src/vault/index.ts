import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1MattersMatterIdExportsExportIdRoute,
  deleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdRoute,
  deleteV1MattersMatterIdHoldsHoldIdRoute,
  deleteV1MattersMatterIdRoute,
  deleteV1MattersMatterIdSavedQueriesSavedQueryIdRoute,
  deleteV1NameRoute,
  getV1MattersMatterIdExportsExportIdRoute,
  getV1MattersMatterIdExportsRoute,
  getV1MattersMatterIdHoldsHoldIdAccountsRoute,
  getV1MattersMatterIdHoldsHoldIdRoute,
  getV1MattersMatterIdHoldsRoute,
  getV1MattersMatterIdRoute,
  getV1MattersMatterIdSavedQueriesRoute,
  getV1MattersMatterIdSavedQueriesSavedQueryIdRoute,
  getV1MattersRoute,
  getV1NameRoute,
  postV1MattersMatterIdAddPermissionsRoute,
  postV1MattersMatterIdCloseRoute,
  postV1MattersMatterIdCountRoute,
  postV1MattersMatterIdExportsRoute,
  postV1MattersMatterIdHoldsHoldIdAccountsRoute,
  postV1MattersMatterIdHoldsHoldIdAddHeldAccountsRoute,
  postV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsRoute,
  postV1MattersMatterIdHoldsRoute,
  postV1MattersMatterIdRemovePermissionsRoute,
  postV1MattersMatterIdReopenRoute,
  postV1MattersMatterIdSavedQueriesRoute,
  postV1MattersMatterIdUndeleteRoute,
  postV1MattersRoute,
  postV1NameCancelRoute,
  putV1MattersMatterIdHoldsHoldIdRoute,
  putV1MattersMatterIdRoute,
} from './routes'
import {
  deleteV1MattersMatterIdExportsExportIdRouteHandler,
  deleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdRouteHandler,
  deleteV1MattersMatterIdHoldsHoldIdRouteHandler,
  deleteV1MattersMatterIdRouteHandler,
  deleteV1MattersMatterIdSavedQueriesSavedQueryIdRouteHandler,
  deleteV1NameRouteHandler,
  getV1MattersMatterIdExportsExportIdRouteHandler,
  getV1MattersMatterIdExportsRouteHandler,
  getV1MattersMatterIdHoldsHoldIdAccountsRouteHandler,
  getV1MattersMatterIdHoldsHoldIdRouteHandler,
  getV1MattersMatterIdHoldsRouteHandler,
  getV1MattersMatterIdRouteHandler,
  getV1MattersMatterIdSavedQueriesRouteHandler,
  getV1MattersMatterIdSavedQueriesSavedQueryIdRouteHandler,
  getV1MattersRouteHandler,
  getV1NameRouteHandler,
  postV1MattersMatterIdAddPermissionsRouteHandler,
  postV1MattersMatterIdCloseRouteHandler,
  postV1MattersMatterIdCountRouteHandler,
  postV1MattersMatterIdExportsRouteHandler,
  postV1MattersMatterIdHoldsHoldIdAccountsRouteHandler,
  postV1MattersMatterIdHoldsHoldIdAddHeldAccountsRouteHandler,
  postV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsRouteHandler,
  postV1MattersMatterIdHoldsRouteHandler,
  postV1MattersMatterIdRemovePermissionsRouteHandler,
  postV1MattersMatterIdReopenRouteHandler,
  postV1MattersMatterIdSavedQueriesRouteHandler,
  postV1MattersMatterIdUndeleteRouteHandler,
  postV1MattersRouteHandler,
  postV1NameCancelRouteHandler,
  putV1MattersMatterIdHoldsHoldIdRouteHandler,
  putV1MattersMatterIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1MattersRoute, getV1MattersRouteHandler)
  .openapi(postV1MattersRoute, postV1MattersRouteHandler)
  .openapi(deleteV1MattersMatterIdRoute, deleteV1MattersMatterIdRouteHandler)
  .openapi(getV1MattersMatterIdRoute, getV1MattersMatterIdRouteHandler)
  .openapi(putV1MattersMatterIdRoute, putV1MattersMatterIdRouteHandler)
  .openapi(getV1MattersMatterIdExportsRoute, getV1MattersMatterIdExportsRouteHandler)
  .openapi(postV1MattersMatterIdExportsRoute, postV1MattersMatterIdExportsRouteHandler)
  .openapi(
    deleteV1MattersMatterIdExportsExportIdRoute,
    deleteV1MattersMatterIdExportsExportIdRouteHandler,
  )
  .openapi(
    getV1MattersMatterIdExportsExportIdRoute,
    getV1MattersMatterIdExportsExportIdRouteHandler,
  )
  .openapi(getV1MattersMatterIdHoldsRoute, getV1MattersMatterIdHoldsRouteHandler)
  .openapi(postV1MattersMatterIdHoldsRoute, postV1MattersMatterIdHoldsRouteHandler)
  .openapi(deleteV1MattersMatterIdHoldsHoldIdRoute, deleteV1MattersMatterIdHoldsHoldIdRouteHandler)
  .openapi(getV1MattersMatterIdHoldsHoldIdRoute, getV1MattersMatterIdHoldsHoldIdRouteHandler)
  .openapi(putV1MattersMatterIdHoldsHoldIdRoute, putV1MattersMatterIdHoldsHoldIdRouteHandler)
  .openapi(
    getV1MattersMatterIdHoldsHoldIdAccountsRoute,
    getV1MattersMatterIdHoldsHoldIdAccountsRouteHandler,
  )
  .openapi(
    postV1MattersMatterIdHoldsHoldIdAccountsRoute,
    postV1MattersMatterIdHoldsHoldIdAccountsRouteHandler,
  )
  .openapi(
    deleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdRoute,
    deleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdRouteHandler,
  )
  .openapi(
    postV1MattersMatterIdHoldsHoldIdAddHeldAccountsRoute,
    postV1MattersMatterIdHoldsHoldIdAddHeldAccountsRouteHandler,
  )
  .openapi(
    postV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsRoute,
    postV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsRouteHandler,
  )
  .openapi(getV1MattersMatterIdSavedQueriesRoute, getV1MattersMatterIdSavedQueriesRouteHandler)
  .openapi(postV1MattersMatterIdSavedQueriesRoute, postV1MattersMatterIdSavedQueriesRouteHandler)
  .openapi(
    deleteV1MattersMatterIdSavedQueriesSavedQueryIdRoute,
    deleteV1MattersMatterIdSavedQueriesSavedQueryIdRouteHandler,
  )
  .openapi(
    getV1MattersMatterIdSavedQueriesSavedQueryIdRoute,
    getV1MattersMatterIdSavedQueriesSavedQueryIdRouteHandler,
  )
  .openapi(
    postV1MattersMatterIdAddPermissionsRoute,
    postV1MattersMatterIdAddPermissionsRouteHandler,
  )
  .openapi(postV1MattersMatterIdCloseRoute, postV1MattersMatterIdCloseRouteHandler)
  .openapi(postV1MattersMatterIdCountRoute, postV1MattersMatterIdCountRouteHandler)
  .openapi(
    postV1MattersMatterIdRemovePermissionsRoute,
    postV1MattersMatterIdRemovePermissionsRouteHandler,
  )
  .openapi(postV1MattersMatterIdReopenRoute, postV1MattersMatterIdReopenRouteHandler)
  .openapi(postV1MattersMatterIdUndeleteRoute, postV1MattersMatterIdUndeleteRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)

export default app
