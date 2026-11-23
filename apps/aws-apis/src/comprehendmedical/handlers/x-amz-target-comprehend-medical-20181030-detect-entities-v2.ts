import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030DetectEntitiesV2Route } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030DetectEntitiesV2Handler = app.openapi(
  postXAmzTargetComprehendMedical20181030DetectEntitiesV2Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
