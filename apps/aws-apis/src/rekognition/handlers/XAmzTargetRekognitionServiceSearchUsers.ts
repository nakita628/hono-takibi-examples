import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceSearchUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceSearchUsersHandler = app.openapi(
  postXAmzTargetRekognitionServiceSearchUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
