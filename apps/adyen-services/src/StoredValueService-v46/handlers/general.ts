import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postChangeStatusRoute,
  postCheckBalanceRoute,
  postIssueRoute,
  postLoadRoute,
  postMergeBalanceRoute,
  postVoidTransactionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(postChangeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMergeBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoidTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
