import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionOrganizationActivityListHtmlRoute,
  getActionOrganizationActivityListRoute,
  getActionOrganizationAutocompleteRoute,
  getActionOrganizationFollowerCountRoute,
  getActionOrganizationFollowerListRoute,
  getActionOrganizationListForUserRoute,
  getActionOrganizationListRoute,
  getActionOrganizationRevisionListRoute,
  getActionOrganizationShowRoute,
  getActionPackageActivityListHtmlRoute,
  getActionPackageActivityListRoute,
  getActionPackageAutocompleteRoute,
  getActionPackageListRoute,
  getActionPackageRelationshipsListRoute,
  getActionPackageRevisionListRoute,
  getActionPackageSearchRoute,
  getActionPackageShowRoute,
  getActionRelatedListRoute,
  getActionResourceSearchRoute,
  getActionResourceShowRoute,
  getActionStatusShowRoute,
  getActionTagListRoute,
} from './routes'
import {
  getActionOrganizationActivityListHtmlRouteHandler,
  getActionOrganizationActivityListRouteHandler,
  getActionOrganizationAutocompleteRouteHandler,
  getActionOrganizationFollowerCountRouteHandler,
  getActionOrganizationFollowerListRouteHandler,
  getActionOrganizationListForUserRouteHandler,
  getActionOrganizationListRouteHandler,
  getActionOrganizationRevisionListRouteHandler,
  getActionOrganizationShowRouteHandler,
  getActionPackageActivityListHtmlRouteHandler,
  getActionPackageActivityListRouteHandler,
  getActionPackageAutocompleteRouteHandler,
  getActionPackageListRouteHandler,
  getActionPackageRelationshipsListRouteHandler,
  getActionPackageRevisionListRouteHandler,
  getActionPackageSearchRouteHandler,
  getActionPackageShowRouteHandler,
  getActionRelatedListRouteHandler,
  getActionResourceSearchRouteHandler,
  getActionResourceShowRouteHandler,
  getActionStatusShowRouteHandler,
  getActionTagListRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionOrganizationActivityListRoute, getActionOrganizationActivityListRouteHandler)
  .openapi(
    getActionOrganizationActivityListHtmlRoute,
    getActionOrganizationActivityListHtmlRouteHandler,
  )
  .openapi(getActionOrganizationAutocompleteRoute, getActionOrganizationAutocompleteRouteHandler)
  .openapi(getActionOrganizationFollowerCountRoute, getActionOrganizationFollowerCountRouteHandler)
  .openapi(getActionOrganizationFollowerListRoute, getActionOrganizationFollowerListRouteHandler)
  .openapi(getActionOrganizationListRoute, getActionOrganizationListRouteHandler)
  .openapi(getActionOrganizationListForUserRoute, getActionOrganizationListForUserRouteHandler)
  .openapi(getActionOrganizationRevisionListRoute, getActionOrganizationRevisionListRouteHandler)
  .openapi(getActionOrganizationShowRoute, getActionOrganizationShowRouteHandler)
  .openapi(getActionPackageActivityListRoute, getActionPackageActivityListRouteHandler)
  .openapi(getActionPackageActivityListHtmlRoute, getActionPackageActivityListHtmlRouteHandler)
  .openapi(getActionPackageAutocompleteRoute, getActionPackageAutocompleteRouteHandler)
  .openapi(getActionPackageListRoute, getActionPackageListRouteHandler)
  .openapi(getActionPackageRelationshipsListRoute, getActionPackageRelationshipsListRouteHandler)
  .openapi(getActionPackageRevisionListRoute, getActionPackageRevisionListRouteHandler)
  .openapi(getActionPackageSearchRoute, getActionPackageSearchRouteHandler)
  .openapi(getActionPackageShowRoute, getActionPackageShowRouteHandler)
  .openapi(getActionRelatedListRoute, getActionRelatedListRouteHandler)
  .openapi(getActionResourceSearchRoute, getActionResourceSearchRouteHandler)
  .openapi(getActionResourceShowRoute, getActionResourceShowRouteHandler)
  .openapi(getActionStatusShowRoute, getActionStatusShowRouteHandler)
  .openapi(getActionTagListRoute, getActionTagListRouteHandler)

export default app
