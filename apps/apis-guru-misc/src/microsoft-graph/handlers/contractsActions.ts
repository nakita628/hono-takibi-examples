import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postContractsContractIdMicrosoftGraphCheckMemberGroupsRoute,
  postContractsContractIdMicrosoftGraphCheckMemberObjectsRoute,
  postContractsContractIdMicrosoftGraphGetMemberGroupsRoute,
  postContractsContractIdMicrosoftGraphGetMemberObjectsRoute,
  postContractsContractIdMicrosoftGraphRestoreRoute,
  postContractsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postContractsMicrosoftGraphGetByIdsRoute,
  postContractsMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contractsActionsHandler = app
  .openapi(postContractsMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsContractIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsContractIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsContractIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsContractIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractsContractIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
