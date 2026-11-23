import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMacieServiceAssociateS3ResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMacieServiceAssociateS3ResourcesHandler = app.openapi(
  postXAmzTargetMacieServiceAssociateS3ResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
