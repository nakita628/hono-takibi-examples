import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateAssociationStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdateAssociationStatusHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateAssociationStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
