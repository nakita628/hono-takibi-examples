import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdRoute,
  getCrmAssociations202609DefinitionsConfigurationsAllRoute,
  getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeRoute,
  getCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateRoute,
  postCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
  putCrmAssociations202609FromObjectTypeToObjectTypeLabelsRoute,
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
