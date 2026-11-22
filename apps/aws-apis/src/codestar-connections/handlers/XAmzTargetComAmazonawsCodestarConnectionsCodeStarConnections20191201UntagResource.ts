import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
