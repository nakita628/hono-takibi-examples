import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117ListHiTsForQualificationTypeHandler =
  app.openapi(
    postXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
