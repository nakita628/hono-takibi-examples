import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ContractsContractIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609ContractsContractIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ContractsContractIdRoute,
  getCrmObjects202609ContractsRoute,
  patchCrmObjects202609ContractsContractIdRoute,
  postCrmObjects202609ContractsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609ContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsRoute, (c) => {
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
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
