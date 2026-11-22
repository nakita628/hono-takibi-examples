import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeedConnectionsIdRoute,
  getFeedConnectionsRoute,
  getStatementsRoute,
  getStatementsStatementIdRoute,
  postFeedConnectionsDeleteRequestsRoute,
  postFeedConnectionsRoute,
  postStatementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankFeedsHandler = app
  .openapi(getFeedConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedConnectionsDeleteRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatementsStatementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
