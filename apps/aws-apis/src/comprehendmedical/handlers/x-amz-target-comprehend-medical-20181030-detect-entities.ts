import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030DetectEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030DetectEntitiesHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030DetectEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
