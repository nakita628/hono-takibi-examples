import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
