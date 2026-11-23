import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CommunicationsCommunicationIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CommunicationsCommunicationIdRoute,
  getCrmObjects202609CommunicationsRoute,
  patchCrmObjects202609CommunicationsCommunicationIdRoute,
  postCrmObjects202609CommunicationsBatchArchiveRoute,
  postCrmObjects202609CommunicationsBatchCreateRoute,
  postCrmObjects202609CommunicationsBatchReadRoute,
  postCrmObjects202609CommunicationsBatchUpdateRoute,
  postCrmObjects202609CommunicationsBatchUpsertRoute,
  postCrmObjects202609CommunicationsGdprDeleteRoute,
  postCrmObjects202609CommunicationsMergeRoute,
  postCrmObjects202609CommunicationsRoute,
  postCrmObjects202609CommunicationsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609CommunicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CommunicationsCommunicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CommunicationsCommunicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CommunicationsCommunicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeRoute, (c) => {
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
