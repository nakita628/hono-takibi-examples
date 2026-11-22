import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTxsHashCborRoute,
  getTxsHashDelegationsRoute,
  getTxsHashMetadataCborRoute,
  getTxsHashMetadataRoute,
  getTxsHashMirsRoute,
  getTxsHashPoolRetiresRoute,
  getTxsHashPoolUpdatesRoute,
  getTxsHashRedeemersRoute,
  getTxsHashRequiredSignersRoute,
  getTxsHashRoute,
  getTxsHashStakesRoute,
  getTxsHashUtxosRoute,
  getTxsHashWithdrawalsRoute,
  postTxSubmitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardanoTransactionsHandler = app
  .openapi(getTxsHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashUtxosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashStakesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashDelegationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashWithdrawalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashMirsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashPoolUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashPoolRetiresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashMetadataCborRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashRedeemersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashRequiredSignersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTxsHashCborRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTxSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
