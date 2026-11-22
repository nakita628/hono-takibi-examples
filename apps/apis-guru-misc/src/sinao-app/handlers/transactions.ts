import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdTransactionsIdAttachRoute,
  deleteAppsAppIdTransactionsIdRoute,
  getAppsAppIdTransactionsIdRoute,
  getAppsAppIdTransactionsIndexRoute,
  postAppsAppIdTransactionsBatchRoute,
  postAppsAppIdTransactionsIdAttachRoute,
  postAppsAppIdTransactionsIdRoute,
  postAppsAppIdTransactionsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getAppsAppIdTransactionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTransactionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTransactionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdTransactionsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTransactionsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
