import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
