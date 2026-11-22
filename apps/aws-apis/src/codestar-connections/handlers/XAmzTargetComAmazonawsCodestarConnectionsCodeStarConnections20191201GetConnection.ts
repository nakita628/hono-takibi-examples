import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
