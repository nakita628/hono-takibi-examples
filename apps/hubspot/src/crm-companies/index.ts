import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CompaniesCompanyIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CompaniesCompanyIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CompaniesCompanyIdRoute,
  getCrmObjects202609CompaniesRoute,
  patchCrmObjects202609CompaniesCompanyIdRoute,
  postCrmObjects202609CompaniesBatchArchiveRoute,
  postCrmObjects202609CompaniesBatchCreateRoute,
  postCrmObjects202609CompaniesBatchReadRoute,
  postCrmObjects202609CompaniesBatchUpdateRoute,
  postCrmObjects202609CompaniesBatchUpsertRoute,
  postCrmObjects202609CompaniesGdprDeleteRoute,
  postCrmObjects202609CompaniesMergeRoute,
  postCrmObjects202609CompaniesRoute,
  postCrmObjects202609CompaniesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609CompaniesCompanyIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609CompaniesCompanyIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609CompaniesCompanyIdRouteHandler,
  getCrmObjects202609CompaniesRouteHandler,
  patchCrmObjects202609CompaniesCompanyIdRouteHandler,
  postCrmObjects202609CompaniesBatchArchiveRouteHandler,
  postCrmObjects202609CompaniesBatchCreateRouteHandler,
  postCrmObjects202609CompaniesBatchReadRouteHandler,
  postCrmObjects202609CompaniesBatchUpdateRouteHandler,
  postCrmObjects202609CompaniesBatchUpsertRouteHandler,
  postCrmObjects202609CompaniesGdprDeleteRouteHandler,
  postCrmObjects202609CompaniesMergeRouteHandler,
  postCrmObjects202609CompaniesRouteHandler,
  postCrmObjects202609CompaniesSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609CompaniesRoute, getCrmObjects202609CompaniesRouteHandler)
  .openapi(postCrmObjects202609CompaniesRoute, postCrmObjects202609CompaniesRouteHandler)
  .openapi(
    postCrmObjects202609CompaniesBatchArchiveRoute,
    postCrmObjects202609CompaniesBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609CompaniesBatchCreateRoute,
    postCrmObjects202609CompaniesBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609CompaniesBatchReadRoute,
    postCrmObjects202609CompaniesBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609CompaniesBatchUpdateRoute,
    postCrmObjects202609CompaniesBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609CompaniesBatchUpsertRoute,
    postCrmObjects202609CompaniesBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609CompaniesGdprDeleteRoute,
    postCrmObjects202609CompaniesGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609CompaniesMergeRoute, postCrmObjects202609CompaniesMergeRouteHandler)
  .openapi(
    postCrmObjects202609CompaniesSearchRoute,
    postCrmObjects202609CompaniesSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609CompaniesCompanyIdRoute,
    getCrmObjects202609CompaniesCompanyIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609CompaniesCompanyIdRoute,
    deleteCrmObjects202609CompaniesCompanyIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609CompaniesCompanyIdRoute,
    patchCrmObjects202609CompaniesCompanyIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609CompaniesCompanyIdAssociationsToObjectTypeRoute,
    getCrmObjects202609CompaniesCompanyIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
