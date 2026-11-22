import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMCreateAssociationHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
