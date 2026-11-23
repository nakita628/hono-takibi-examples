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
} from './routes'
import {
  deleteCrmObjects202609ContractsContractIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609ContractsContractIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609ContractsContractIdRouteHandler,
  getCrmObjects202609ContractsRouteHandler,
  patchCrmObjects202609ContractsContractIdRouteHandler,
  postCrmObjects202609ContractsBatchArchiveRouteHandler,
  postCrmObjects202609ContractsBatchCreateRouteHandler,
  postCrmObjects202609ContractsBatchReadRouteHandler,
  postCrmObjects202609ContractsBatchUpdateRouteHandler,
  postCrmObjects202609ContractsBatchUpsertRouteHandler,
  postCrmObjects202609ContractsGdprDeleteRouteHandler,
  postCrmObjects202609ContractsMergeRouteHandler,
  postCrmObjects202609ContractsRouteHandler,
  postCrmObjects202609ContractsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609ContractsRoute, getCrmObjects202609ContractsRouteHandler)
  .openapi(postCrmObjects202609ContractsRoute, postCrmObjects202609ContractsRouteHandler)
  .openapi(
    postCrmObjects202609ContractsBatchArchiveRoute,
    postCrmObjects202609ContractsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContractsBatchCreateRoute,
    postCrmObjects202609ContractsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContractsBatchReadRoute,
    postCrmObjects202609ContractsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContractsBatchUpdateRoute,
    postCrmObjects202609ContractsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContractsBatchUpsertRoute,
    postCrmObjects202609ContractsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContractsGdprDeleteRoute,
    postCrmObjects202609ContractsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609ContractsMergeRoute, postCrmObjects202609ContractsMergeRouteHandler)
  .openapi(
    postCrmObjects202609ContractsSearchRoute,
    postCrmObjects202609ContractsSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609ContractsContractIdRoute,
    getCrmObjects202609ContractsContractIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ContractsContractIdRoute,
    deleteCrmObjects202609ContractsContractIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609ContractsContractIdRoute,
    patchCrmObjects202609ContractsContractIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609ContractsContractIdAssociationsToObjectTypeRoute,
    getCrmObjects202609ContractsContractIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
