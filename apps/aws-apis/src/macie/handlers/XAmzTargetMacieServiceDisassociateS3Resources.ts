import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMacieServiceDisassociateS3ResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMacieServiceDisassociateS3ResourcesHandler = app.openapi(
  postXAmzTargetMacieServiceDisassociateS3ResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
