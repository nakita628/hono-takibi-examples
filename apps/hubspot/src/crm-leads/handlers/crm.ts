import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609LeadsLeadsIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeRoute,
  getCrmObjects202609LeadsLeadsIdRoute,
  getCrmObjects202609LeadsRoute,
  patchCrmObjects202609LeadsLeadsIdRoute,
  postCrmObjects202609LeadsBatchArchiveRoute,
  postCrmObjects202609LeadsBatchCreateRoute,
  postCrmObjects202609LeadsBatchReadRoute,
  postCrmObjects202609LeadsBatchUpdateRoute,
  postCrmObjects202609LeadsBatchUpsertRoute,
  postCrmObjects202609LeadsGdprDeleteRoute,
  postCrmObjects202609LeadsMergeRoute,
  postCrmObjects202609LeadsRoute,
  postCrmObjects202609LeadsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609LeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609LeadsLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609LeadsLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609LeadsLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeRoute, (c) => {
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
