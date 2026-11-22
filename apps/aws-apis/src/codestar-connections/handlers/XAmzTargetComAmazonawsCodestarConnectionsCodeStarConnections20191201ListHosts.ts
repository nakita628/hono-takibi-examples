import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
