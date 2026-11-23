import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteAssociationHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
