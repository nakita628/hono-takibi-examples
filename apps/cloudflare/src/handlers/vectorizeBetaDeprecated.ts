import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdVectorizeIndexesIndexNameRoute,
  getAccountsAccountIdVectorizeIndexesIndexNameRoute,
  getAccountsAccountIdVectorizeIndexesRoute,
  postAccountsAccountIdVectorizeIndexesIndexNameDeleteByIdsRoute,
  postAccountsAccountIdVectorizeIndexesIndexNameGetByIdsRoute,
  postAccountsAccountIdVectorizeIndexesIndexNameInsertRoute,
  postAccountsAccountIdVectorizeIndexesIndexNameQueryRoute,
  postAccountsAccountIdVectorizeIndexesIndexNameUpsertRoute,
  postAccountsAccountIdVectorizeIndexesRoute,
  putAccountsAccountIdVectorizeIndexesIndexNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vectorizeBetaDeprecatedHandler = app
  .openapi(getAccountsAccountIdVectorizeIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdVectorizeIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdVectorizeIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdVectorizeIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeIndexesIndexNameDeleteByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeIndexesIndexNameGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeIndexesIndexNameInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeIndexesIndexNameQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeIndexesIndexNameUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
