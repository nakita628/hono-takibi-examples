import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdVectorizeV2IndexesIndexNameRoute,
  getAccountsAccountIdVectorizeV2IndexesIndexNameInfoRoute,
  getAccountsAccountIdVectorizeV2IndexesIndexNameListRoute,
  getAccountsAccountIdVectorizeV2IndexesIndexNameMetadataIndexListRoute,
  getAccountsAccountIdVectorizeV2IndexesIndexNameRoute,
  getAccountsAccountIdVectorizeV2IndexesRoute,
  postAccountsAccountIdVectorizeV2IndexesIndexNameDeleteByIdsRoute,
  postAccountsAccountIdVectorizeV2IndexesIndexNameGetByIdsRoute,
  postAccountsAccountIdVectorizeV2IndexesIndexNameInsertRoute,
  postAccountsAccountIdVectorizeV2IndexesIndexNameMetadataIndexCreateRoute,
  postAccountsAccountIdVectorizeV2IndexesIndexNameMetadataIndexDeleteRoute,
  postAccountsAccountIdVectorizeV2IndexesIndexNameQueryRoute,
  postAccountsAccountIdVectorizeV2IndexesIndexNameUpsertRoute,
  postAccountsAccountIdVectorizeV2IndexesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vectorizeHandler = app
  .openapi(getAccountsAccountIdVectorizeV2IndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeV2IndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdVectorizeV2IndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdVectorizeV2IndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeV2IndexesIndexNameDeleteByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeV2IndexesIndexNameGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdVectorizeV2IndexesIndexNameInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeV2IndexesIndexNameInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdVectorizeV2IndexesIndexNameListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeV2IndexesIndexNameMetadataIndexCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeV2IndexesIndexNameMetadataIndexDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdVectorizeV2IndexesIndexNameMetadataIndexListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeV2IndexesIndexNameQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVectorizeV2IndexesIndexNameUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
