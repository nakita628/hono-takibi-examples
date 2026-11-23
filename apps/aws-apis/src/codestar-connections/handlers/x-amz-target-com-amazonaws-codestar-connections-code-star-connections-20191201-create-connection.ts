import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
