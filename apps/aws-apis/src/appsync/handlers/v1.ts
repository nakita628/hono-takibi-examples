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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1DomainnamesDomainNameApiassociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainnamesDomainNameApiassociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainnamesDomainNameApiassociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceApisSourceApiIdentifierMergedApiAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MergedApisMergedApiIdentifierSourceApiAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdApiCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApisApiIdApiCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdApiCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdTypesTypeNameResolversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdTypesTypeNameResolversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApisApiIdApikeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdApikeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApisApiIdDatasourcesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdDatasourcesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdDatasourcesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainnamesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainnamesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainnamesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApisApiIdFunctionsFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdFunctionsFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdFunctionsFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApisApiIdTypesTypeNameResolversFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdTypesTypeNameResolversFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdTypesTypeNameResolversFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApisApiIdTypesTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdTypesTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplaneEvaluatecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplaneEvaluatetemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApisApiIdFlushCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdSchemaFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdSchemacreationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdSchemacreationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdTypesTypeNameFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdFunctionsFunctionIdResolversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdSourceApiAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApisApiIdTypesFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatRoute,
    (c) => {},
  )
  .openapi(
    postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeRoute,
    (c) => {},
  )
  .openapi(deleteV1TagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApisApiIdApiCachesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
