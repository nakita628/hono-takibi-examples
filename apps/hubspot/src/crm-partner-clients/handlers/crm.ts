import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609PartnerClientsPartnerClientIdRoute,
  getCrmObjects202609PartnerClientsPartnerClientIdAssociationsToObjectTypeRoute,
  getCrmObjects202609PartnerClientsPartnerClientIdRoute,
  getCrmObjects202609PartnerClientsRoute,
  patchCrmObjects202609PartnerClientsPartnerClientIdRoute,
  postCrmObjects202609PartnerClientsBatchArchiveRoute,
  postCrmObjects202609PartnerClientsBatchCreateRoute,
  postCrmObjects202609PartnerClientsBatchReadRoute,
  postCrmObjects202609PartnerClientsBatchUpdateRoute,
  postCrmObjects202609PartnerClientsBatchUpsertRoute,
  postCrmObjects202609PartnerClientsGdprDeleteRoute,
  postCrmObjects202609PartnerClientsMergeRoute,
  postCrmObjects202609PartnerClientsRoute,
  postCrmObjects202609PartnerClientsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609PartnerClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PartnerClientsPartnerClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609PartnerClientsPartnerClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609PartnerClientsPartnerClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PartnerClientsPartnerClientIdAssociationsToObjectTypeRoute, (c) => {
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
