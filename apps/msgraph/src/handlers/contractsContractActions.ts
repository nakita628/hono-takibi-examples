import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postContractsContractIdCheckMemberGroupsRoute,
  postContractsContractIdCheckMemberObjectsRoute,
  postContractsContractIdGetMemberGroupsRoute,
  postContractsContractIdGetMemberObjectsRoute,
  postContractsContractIdRestoreRoute,
  postContractsGetAvailableExtensionPropertiesRoute,
  postContractsGetByIdsRoute,
  postContractsValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contractsContractActionsHandler = app
  .openapi(postContractsContractIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsContractIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsContractIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsContractIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsContractIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
