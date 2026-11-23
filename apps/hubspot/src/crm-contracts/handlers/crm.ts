import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ContractsContractIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609ContractsContractIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ContractsContractIdRoute,
  getCrmObjects202609ContractsRoute,
  patchCrmObjects202609ContractsContractIdRoute,
  postCrmObjects202609ContractsBatchArchiveRoute,
  postCrmObjects202609ContractsBatchCreateRoute,
  postCrmObjects202609ContractsBatchReadRoute,
  postCrmObjects202609ContractsBatchUpdateRoute,
  postCrmObjects202609ContractsBatchUpsertRoute,
  postCrmObjects202609ContractsGdprDeleteRoute,
  postCrmObjects202609ContractsMergeRoute,
  postCrmObjects202609ContractsRoute,
  postCrmObjects202609ContractsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609ContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ContractsContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ContractsContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ContractsContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ContractsContractIdAssociationsToObjectTypeRoute, (c) => {
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
