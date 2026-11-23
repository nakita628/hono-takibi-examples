import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
