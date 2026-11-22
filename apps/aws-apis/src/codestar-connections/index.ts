import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceHandler,
  XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route(
    '/',
    XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionHandler,
  )
  .route('/', XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostHandler)
  .route(
    '/',
    XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionHandler,
  )
  .route('/', XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostHandler)
  .route(
    '/',
    XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionHandler,
  )
  .route('/', XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostHandler)
  .route(
    '/',
    XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsHandler,
  )
  .route('/', XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsHandler)
  .route(
    '/',
    XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceHandler,
  )
  .route(
    '/',
    XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceHandler,
  )
  .route(
    '/',
    XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceHandler,
  )
  .route('/', XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostHandler)

export default app
