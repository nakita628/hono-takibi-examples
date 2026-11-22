import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPoolsExtendedRoute,
  getPoolsPoolIdBlocksRoute,
  getPoolsPoolIdDelegatorsRoute,
  getPoolsPoolIdHistoryRoute,
  getPoolsPoolIdMetadataRoute,
  getPoolsPoolIdRelaysRoute,
  getPoolsPoolIdRoute,
  getPoolsPoolIdUpdatesRoute,
  getPoolsPoolIdVotesRoute,
  getPoolsRetiredRoute,
  getPoolsRetiringRoute,
  getPoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardanoPoolsHandler = app
  .openapi(getPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsExtendedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsRetiredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsRetiringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsPoolIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsPoolIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsPoolIdRelaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsPoolIdDelegatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsPoolIdBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsPoolIdUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsPoolIdVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
