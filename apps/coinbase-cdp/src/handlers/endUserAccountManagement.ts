import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2EndUsersLookupRoute,
  getV2EndUsersRoute,
  getV2EndUsersUserIdRoute,
  postV2EndUsersAuthValidateTokenRoute,
  postV2EndUsersImportRoute,
  postV2EndUsersRoute,
  postV2EndUsersUserIdEvmRoute,
  postV2EndUsersUserIdEvmSmartAccountRoute,
  postV2EndUsersUserIdSolanaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endUserAccountManagementHandler = app
  .openapi(postV2EndUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EndUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersAuthValidateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EndUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EndUsersLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersUserIdEvmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersUserIdEvmSmartAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersUserIdSolanaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersImportRoute, (c) => {
    throw new Error('Not implemented')
  })
