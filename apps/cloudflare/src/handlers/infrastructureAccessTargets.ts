import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdInfrastructureTargetsBatchRoute,
  deleteAccountsAccountIdInfrastructureTargetsTargetIdRoute,
  getAccountsAccountIdInfrastructureTargetsRoute,
  getAccountsAccountIdInfrastructureTargetsTargetIdRoute,
  postAccountsAccountIdInfrastructureTargetsBatchDeleteRoute,
  postAccountsAccountIdInfrastructureTargetsBatchTagsRoute,
  postAccountsAccountIdInfrastructureTargetsRoute,
  putAccountsAccountIdInfrastructureTargetsBatchRoute,
  putAccountsAccountIdInfrastructureTargetsTargetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const infrastructureAccessTargetsHandler = app
  .openapi(getAccountsAccountIdInfrastructureTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdInfrastructureTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdInfrastructureTargetsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdInfrastructureTargetsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdInfrastructureTargetsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdInfrastructureTargetsBatchTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdInfrastructureTargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdInfrastructureTargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdInfrastructureTargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
