import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeHandler =
  app.openapi(
    postXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
