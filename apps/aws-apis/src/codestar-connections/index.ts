import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceHandler,
  xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route(
    '/',
    xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionHandler,
  )
  .route('/', xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostHandler)
  .route(
    '/',
    xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionHandler,
  )
  .route('/', xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostHandler)
  .route(
    '/',
    xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionHandler,
  )
  .route('/', xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostHandler)
  .route(
    '/',
    xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsHandler,
  )
  .route('/', xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsHandler)
  .route(
    '/',
    xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceHandler,
  )
  .route(
    '/',
    xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceHandler,
  )
  .route(
    '/',
    xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceHandler,
  )
  .route('/', xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostHandler)

export default app
