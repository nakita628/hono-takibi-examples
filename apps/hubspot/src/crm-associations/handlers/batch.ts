import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchArchiveRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefaultRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchCreateRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchiveRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeBatchReadRoute,
  postCrmObjects202609ObjectTypeBatchArchiveRoute,
  postCrmObjects202609ObjectTypeBatchCreateRoute,
  postCrmObjects202609ObjectTypeBatchReadRoute,
  postCrmObjects202609ObjectTypeBatchUpdateRoute,
  postCrmObjects202609ObjectTypeBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
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
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
