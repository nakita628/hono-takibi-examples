import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBlocksEpochEpochNumberSlotSlotNumberRoute,
  getBlocksHashOrNumberAddressesRoute,
  getBlocksHashOrNumberNextRoute,
  getBlocksHashOrNumberPreviousRoute,
  getBlocksHashOrNumberRoute,
  getBlocksHashOrNumberTxsCborRoute,
  getBlocksHashOrNumberTxsRoute,
  getBlocksLatestRoute,
  getBlocksLatestTxsCborRoute,
  getBlocksLatestTxsRoute,
  getBlocksSlotSlotNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blocksHandler = app
  .openapi(getBlocksLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksLatestTxsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksLatestTxsCborRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksHashOrNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksHashOrNumberNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksHashOrNumberPreviousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksSlotSlotNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksEpochEpochNumberSlotSlotNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksHashOrNumberTxsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksHashOrNumberTxsCborRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocksHashOrNumberAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
