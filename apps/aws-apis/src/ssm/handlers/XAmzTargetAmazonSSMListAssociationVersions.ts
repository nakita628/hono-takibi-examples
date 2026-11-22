import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListAssociationVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMListAssociationVersionsHandler = app.openapi(
  postXAmzTargetAmazonSSMListAssociationVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
