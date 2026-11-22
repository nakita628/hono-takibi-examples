import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmAssociations202609DefinitionsConfigurationsAllRoute,
  getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeRoute,
  postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const limitsHandler = app
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
