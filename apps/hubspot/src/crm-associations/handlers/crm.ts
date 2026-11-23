import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmAssociations202609DefinitionsConfigurationsAllRoute,
  getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeRoute,
  getCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  patchCrmObjects202609ObjectTypeObjectIdRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchArchiveRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefaultRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchCreateRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchiveRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchReadRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  postCrmAssociations202609UsageHighUsageReportUserIdRoute,
  postCrmObjects202609ObjectTypeBatchArchiveRoute,
  postCrmObjects202609ObjectTypeBatchCreateRoute,
  postCrmObjects202609ObjectTypeBatchReadRoute,
  postCrmObjects202609ObjectTypeBatchUpdateRoute,
  postCrmObjects202609ObjectTypeBatchUpsertRoute,
  postCrmObjects202609ObjectTypeGdprDeleteRoute,
  postCrmObjects202609ObjectTypeMergeRoute,
  postCrmObjects202609ObjectTypeRoute,
  postCrmObjects202609ObjectTypeSearchRoute,
  putCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmAssociations202609DefinitionsConfigurationsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCrmAssociations202609UsageHighUsageReportUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmAssociations202609FromObjectTypeToObjectTypeBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmAssociations202609FromObjectTypeToObjectTypeBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmAssociations202609FromObjectTypeToObjectTypeBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCrmObjects202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
