import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerHandler =
  app.openapi(
    postXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
