import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdateAssociationHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
