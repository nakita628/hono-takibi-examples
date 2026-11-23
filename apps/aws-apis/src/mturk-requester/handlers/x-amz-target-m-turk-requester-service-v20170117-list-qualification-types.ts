import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
