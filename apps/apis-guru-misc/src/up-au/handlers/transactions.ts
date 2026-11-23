import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransactionsTransactionIdRelationshipsTagsRoute,
  getTransactionsIdRoute,
  getTransactionsRoute,
  patchTransactionsTransactionIdRelationshipsCategoryRoute,
  postTransactionsTransactionIdRelationshipsTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTransactionsTransactionIdRelationshipsCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransactionsTransactionIdRelationshipsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsTransactionIdRelationshipsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
