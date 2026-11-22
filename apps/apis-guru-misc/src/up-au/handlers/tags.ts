import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransactionsTransactionIdRelationshipsTagsRoute,
  getTagsRoute,
  postTransactionsTransactionIdRelationshipsTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransactionsTransactionIdRelationshipsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsTransactionIdRelationshipsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
