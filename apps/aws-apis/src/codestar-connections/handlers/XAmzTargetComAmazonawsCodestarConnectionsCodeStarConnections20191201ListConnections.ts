import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
