import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609PartnerServicesPartnerServiceIdRoute,
  getCrmObjects202609PartnerServicesPartnerServiceIdAssociationsToObjectTypeRoute,
  getCrmObjects202609PartnerServicesPartnerServiceIdRoute,
  getCrmObjects202609PartnerServicesRoute,
  patchCrmObjects202609PartnerServicesPartnerServiceIdRoute,
  postCrmObjects202609PartnerServicesBatchArchiveRoute,
  postCrmObjects202609PartnerServicesBatchCreateRoute,
  postCrmObjects202609PartnerServicesBatchReadRoute,
  postCrmObjects202609PartnerServicesBatchUpdateRoute,
  postCrmObjects202609PartnerServicesBatchUpsertRoute,
  postCrmObjects202609PartnerServicesGdprDeleteRoute,
  postCrmObjects202609PartnerServicesMergeRoute,
  postCrmObjects202609PartnerServicesRoute,
  postCrmObjects202609PartnerServicesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609PartnerServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PartnerServicesPartnerServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609PartnerServicesPartnerServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609PartnerServicesPartnerServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PartnerServicesPartnerServiceIdAssociationsToObjectTypeRoute, (c) => {
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
