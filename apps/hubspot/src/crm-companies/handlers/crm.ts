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
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CompaniesCompanyIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
