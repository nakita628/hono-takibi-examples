import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030DetectPHIRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030DetectPHIHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030DetectPHIRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
