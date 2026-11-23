import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ApisApiIdApiCachesRoute,
  deleteV1ApisApiIdApikeysIdRoute,
  deleteV1ApisApiIdDatasourcesNameRoute,
  deleteV1ApisApiIdFlushCacheRoute,
  deleteV1ApisApiIdFunctionsFunctionIdRoute,
  deleteV1ApisApiIdRoute,
  deleteV1ApisApiIdTypesTypeNameResolversFieldNameRoute,
  deleteV1ApisApiIdTypesTypeNameRoute,
  deleteV1DomainnamesDomainNameApiassociationRoute,
  deleteV1DomainnamesDomainNameRoute,
  deleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRoute,
  deleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdRoute,
  deleteV1TagsResourceArnTagKeysRoute,
  getV1ApisApiIdApiCachesRoute,
  getV1ApisApiIdApikeysRoute,
  getV1ApisApiIdDatasourcesNameRoute,
  getV1ApisApiIdDatasourcesRoute,
  getV1ApisApiIdFunctionsFunctionIdResolversRoute,
  getV1ApisApiIdFunctionsFunctionIdRoute,
  getV1ApisApiIdFunctionsRoute,
  getV1ApisApiIdRoute,
  getV1ApisApiIdSchemacreationRoute,
  getV1ApisApiIdSchemaFormatRoute,
  getV1ApisApiIdSourceApiAssociationsRoute,
  getV1ApisApiIdTypesFormatRoute,
  getV1ApisApiIdTypesTypeNameFormatRoute,
  getV1ApisApiIdTypesTypeNameResolversFieldNameRoute,
  getV1ApisApiIdTypesTypeNameResolversRoute,
  getV1ApisRoute,
  getV1DomainnamesDomainNameApiassociationRoute,
  getV1DomainnamesDomainNameRoute,
  getV1DomainnamesRoute,
  getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRoute,
  getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatRoute,
  getV1TagsResourceArnRoute,
  postV1ApisApiIdApiCachesRoute,
  postV1ApisApiIdApiCachesUpdateRoute,
  postV1ApisApiIdApikeysIdRoute,
  postV1ApisApiIdApikeysRoute,
  postV1ApisApiIdDatasourcesNameRoute,
  postV1ApisApiIdDatasourcesRoute,
  postV1ApisApiIdFunctionsFunctionIdRoute,
  postV1ApisApiIdFunctionsRoute,
  postV1ApisApiIdRoute,
  postV1ApisApiIdSchemacreationRoute,
  postV1ApisApiIdTypesRoute,
  postV1ApisApiIdTypesTypeNameResolversFieldNameRoute,
  postV1ApisApiIdTypesTypeNameResolversRoute,
  postV1ApisApiIdTypesTypeNameRoute,
  postV1ApisRoute,
  postV1DataplaneEvaluatecodeRoute,
  postV1DataplaneEvaluatetemplateRoute,
  postV1DomainnamesDomainNameApiassociationRoute,
  postV1DomainnamesDomainNameRoute,
  postV1DomainnamesRoute,
  postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeRoute,
  postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRoute,
  postV1MergedApisMergedApiIdentifierSourceApiAssociationsRoute,
  postV1SourceApisSourceApiIdentifierMergedApiAssociationsRoute,
  postV1TagsResourceArnRoute,
} from './routes'
import {
  deleteV1ApisApiIdApiCachesRouteHandler,
  deleteV1ApisApiIdApikeysIdRouteHandler,
  deleteV1ApisApiIdDatasourcesNameRouteHandler,
  deleteV1ApisApiIdFlushCacheRouteHandler,
  deleteV1ApisApiIdFunctionsFunctionIdRouteHandler,
  deleteV1ApisApiIdRouteHandler,
  deleteV1ApisApiIdTypesTypeNameResolversFieldNameRouteHandler,
  deleteV1ApisApiIdTypesTypeNameRouteHandler,
  deleteV1DomainnamesDomainNameApiassociationRouteHandler,
  deleteV1DomainnamesDomainNameRouteHandler,
  deleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRouteHandler,
  deleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdRouteHandler,
  deleteV1TagsResourceArnTagKeysRouteHandler,
  getV1ApisApiIdApiCachesRouteHandler,
  getV1ApisApiIdApikeysRouteHandler,
  getV1ApisApiIdDatasourcesNameRouteHandler,
  getV1ApisApiIdDatasourcesRouteHandler,
  getV1ApisApiIdFunctionsFunctionIdResolversRouteHandler,
  getV1ApisApiIdFunctionsFunctionIdRouteHandler,
  getV1ApisApiIdFunctionsRouteHandler,
  getV1ApisApiIdRouteHandler,
  getV1ApisApiIdSchemacreationRouteHandler,
  getV1ApisApiIdSchemaFormatRouteHandler,
  getV1ApisApiIdSourceApiAssociationsRouteHandler,
  getV1ApisApiIdTypesFormatRouteHandler,
  getV1ApisApiIdTypesTypeNameFormatRouteHandler,
  getV1ApisApiIdTypesTypeNameResolversFieldNameRouteHandler,
  getV1ApisApiIdTypesTypeNameResolversRouteHandler,
  getV1ApisRouteHandler,
  getV1DomainnamesDomainNameApiassociationRouteHandler,
  getV1DomainnamesDomainNameRouteHandler,
  getV1DomainnamesRouteHandler,
  getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRouteHandler,
  getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatRouteHandler,
  getV1TagsResourceArnRouteHandler,
  postV1ApisApiIdApiCachesRouteHandler,
  postV1ApisApiIdApiCachesUpdateRouteHandler,
  postV1ApisApiIdApikeysIdRouteHandler,
  postV1ApisApiIdApikeysRouteHandler,
  postV1ApisApiIdDatasourcesNameRouteHandler,
  postV1ApisApiIdDatasourcesRouteHandler,
  postV1ApisApiIdFunctionsFunctionIdRouteHandler,
  postV1ApisApiIdFunctionsRouteHandler,
  postV1ApisApiIdRouteHandler,
  postV1ApisApiIdSchemacreationRouteHandler,
  postV1ApisApiIdTypesRouteHandler,
  postV1ApisApiIdTypesTypeNameResolversFieldNameRouteHandler,
  postV1ApisApiIdTypesTypeNameResolversRouteHandler,
  postV1ApisApiIdTypesTypeNameRouteHandler,
  postV1ApisRouteHandler,
  postV1DataplaneEvaluatecodeRouteHandler,
  postV1DataplaneEvaluatetemplateRouteHandler,
  postV1DomainnamesDomainNameApiassociationRouteHandler,
  postV1DomainnamesDomainNameRouteHandler,
  postV1DomainnamesRouteHandler,
  postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeRouteHandler,
  postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRouteHandler,
  postV1MergedApisMergedApiIdentifierSourceApiAssociationsRouteHandler,
  postV1SourceApisSourceApiIdentifierMergedApiAssociationsRouteHandler,
  postV1TagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1DomainnamesDomainNameApiassociationRoute,
    postV1DomainnamesDomainNameApiassociationRouteHandler,
  )
  .openapi(
    deleteV1DomainnamesDomainNameApiassociationRoute,
    deleteV1DomainnamesDomainNameApiassociationRouteHandler,
  )
  .openapi(
    getV1DomainnamesDomainNameApiassociationRoute,
    getV1DomainnamesDomainNameApiassociationRouteHandler,
  )
  .openapi(
    postV1SourceApisSourceApiIdentifierMergedApiAssociationsRoute,
    postV1SourceApisSourceApiIdentifierMergedApiAssociationsRouteHandler,
  )
  .openapi(
    postV1MergedApisMergedApiIdentifierSourceApiAssociationsRoute,
    postV1MergedApisMergedApiIdentifierSourceApiAssociationsRouteHandler,
  )
  .openapi(postV1ApisApiIdApiCachesRoute, postV1ApisApiIdApiCachesRouteHandler)
  .openapi(deleteV1ApisApiIdApiCachesRoute, deleteV1ApisApiIdApiCachesRouteHandler)
  .openapi(getV1ApisApiIdApiCachesRoute, getV1ApisApiIdApiCachesRouteHandler)
  .openapi(postV1ApisApiIdApikeysRoute, postV1ApisApiIdApikeysRouteHandler)
  .openapi(getV1ApisApiIdApikeysRoute, getV1ApisApiIdApikeysRouteHandler)
  .openapi(postV1ApisApiIdDatasourcesRoute, postV1ApisApiIdDatasourcesRouteHandler)
  .openapi(getV1ApisApiIdDatasourcesRoute, getV1ApisApiIdDatasourcesRouteHandler)
  .openapi(postV1DomainnamesRoute, postV1DomainnamesRouteHandler)
  .openapi(getV1DomainnamesRoute, getV1DomainnamesRouteHandler)
  .openapi(postV1ApisApiIdFunctionsRoute, postV1ApisApiIdFunctionsRouteHandler)
  .openapi(getV1ApisApiIdFunctionsRoute, getV1ApisApiIdFunctionsRouteHandler)
  .openapi(postV1ApisRoute, postV1ApisRouteHandler)
  .openapi(getV1ApisRoute, getV1ApisRouteHandler)
  .openapi(
    postV1ApisApiIdTypesTypeNameResolversRoute,
    postV1ApisApiIdTypesTypeNameResolversRouteHandler,
  )
  .openapi(
    getV1ApisApiIdTypesTypeNameResolversRoute,
    getV1ApisApiIdTypesTypeNameResolversRouteHandler,
  )
  .openapi(postV1ApisApiIdTypesRoute, postV1ApisApiIdTypesRouteHandler)
  .openapi(deleteV1ApisApiIdApikeysIdRoute, deleteV1ApisApiIdApikeysIdRouteHandler)
  .openapi(postV1ApisApiIdApikeysIdRoute, postV1ApisApiIdApikeysIdRouteHandler)
  .openapi(deleteV1ApisApiIdDatasourcesNameRoute, deleteV1ApisApiIdDatasourcesNameRouteHandler)
  .openapi(getV1ApisApiIdDatasourcesNameRoute, getV1ApisApiIdDatasourcesNameRouteHandler)
  .openapi(postV1ApisApiIdDatasourcesNameRoute, postV1ApisApiIdDatasourcesNameRouteHandler)
  .openapi(deleteV1DomainnamesDomainNameRoute, deleteV1DomainnamesDomainNameRouteHandler)
  .openapi(getV1DomainnamesDomainNameRoute, getV1DomainnamesDomainNameRouteHandler)
  .openapi(postV1DomainnamesDomainNameRoute, postV1DomainnamesDomainNameRouteHandler)
  .openapi(
    deleteV1ApisApiIdFunctionsFunctionIdRoute,
    deleteV1ApisApiIdFunctionsFunctionIdRouteHandler,
  )
  .openapi(getV1ApisApiIdFunctionsFunctionIdRoute, getV1ApisApiIdFunctionsFunctionIdRouteHandler)
  .openapi(postV1ApisApiIdFunctionsFunctionIdRoute, postV1ApisApiIdFunctionsFunctionIdRouteHandler)
  .openapi(deleteV1ApisApiIdRoute, deleteV1ApisApiIdRouteHandler)
  .openapi(getV1ApisApiIdRoute, getV1ApisApiIdRouteHandler)
  .openapi(postV1ApisApiIdRoute, postV1ApisApiIdRouteHandler)
  .openapi(
    deleteV1ApisApiIdTypesTypeNameResolversFieldNameRoute,
    deleteV1ApisApiIdTypesTypeNameResolversFieldNameRouteHandler,
  )
  .openapi(
    getV1ApisApiIdTypesTypeNameResolversFieldNameRoute,
    getV1ApisApiIdTypesTypeNameResolversFieldNameRouteHandler,
  )
  .openapi(
    postV1ApisApiIdTypesTypeNameResolversFieldNameRoute,
    postV1ApisApiIdTypesTypeNameResolversFieldNameRouteHandler,
  )
  .openapi(deleteV1ApisApiIdTypesTypeNameRoute, deleteV1ApisApiIdTypesTypeNameRouteHandler)
  .openapi(postV1ApisApiIdTypesTypeNameRoute, postV1ApisApiIdTypesTypeNameRouteHandler)
  .openapi(
    deleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdRoute,
    deleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdRouteHandler,
  )
  .openapi(
    deleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRoute,
    deleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRouteHandler,
  )
  .openapi(
    getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRoute,
    getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRouteHandler,
  )
  .openapi(
    postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRoute,
    postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRouteHandler,
  )
  .openapi(postV1DataplaneEvaluatecodeRoute, postV1DataplaneEvaluatecodeRouteHandler)
  .openapi(postV1DataplaneEvaluatetemplateRoute, postV1DataplaneEvaluatetemplateRouteHandler)
  .openapi(deleteV1ApisApiIdFlushCacheRoute, deleteV1ApisApiIdFlushCacheRouteHandler)
  .openapi(getV1ApisApiIdSchemaFormatRoute, getV1ApisApiIdSchemaFormatRouteHandler)
  .openapi(getV1ApisApiIdSchemacreationRoute, getV1ApisApiIdSchemacreationRouteHandler)
  .openapi(postV1ApisApiIdSchemacreationRoute, postV1ApisApiIdSchemacreationRouteHandler)
  .openapi(getV1ApisApiIdTypesTypeNameFormatRoute, getV1ApisApiIdTypesTypeNameFormatRouteHandler)
  .openapi(
    getV1ApisApiIdFunctionsFunctionIdResolversRoute,
    getV1ApisApiIdFunctionsFunctionIdResolversRouteHandler,
  )
  .openapi(
    getV1ApisApiIdSourceApiAssociationsRoute,
    getV1ApisApiIdSourceApiAssociationsRouteHandler,
  )
  .openapi(getV1TagsResourceArnRoute, getV1TagsResourceArnRouteHandler)
  .openapi(postV1TagsResourceArnRoute, postV1TagsResourceArnRouteHandler)
  .openapi(getV1ApisApiIdTypesFormatRoute, getV1ApisApiIdTypesFormatRouteHandler)
  .openapi(
    getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatRoute,
    getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatRouteHandler,
  )
  .openapi(
    postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeRoute,
    postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeRouteHandler,
  )
  .openapi(deleteV1TagsResourceArnTagKeysRoute, deleteV1TagsResourceArnTagKeysRouteHandler)
  .openapi(postV1ApisApiIdApiCachesUpdateRoute, postV1ApisApiIdApiCachesUpdateRouteHandler)

export default app
