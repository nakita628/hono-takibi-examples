import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceListUsersHandler = app.openapi(
  postXAmzTargetRekognitionServiceListUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
