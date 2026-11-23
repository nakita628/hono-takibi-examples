import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
