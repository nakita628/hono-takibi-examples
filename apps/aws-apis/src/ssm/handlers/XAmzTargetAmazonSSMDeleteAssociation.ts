import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeleteAssociationHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
