import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBankTransferBalanceGetRoute,
  postBankTransferCancelRoute,
  postBankTransferCreateRoute,
  postBankTransferEventListRoute,
  postBankTransferEventSyncRoute,
  postBankTransferGetRoute,
  postBankTransferListRoute,
  postBankTransferMigrateAccountRoute,
  postBankTransferSweepGetRoute,
  postBankTransferSweepListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankTransferHandler = app
  .openapi(postBankTransferBalanceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferEventListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferEventSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferMigrateAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferSweepGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferSweepListRoute, (c) => {
    throw new Error('Not implemented')
  })
