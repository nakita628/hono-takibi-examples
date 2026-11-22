import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
