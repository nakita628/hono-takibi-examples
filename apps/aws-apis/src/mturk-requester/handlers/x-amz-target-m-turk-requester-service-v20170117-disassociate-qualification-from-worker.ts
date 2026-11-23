import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerHandler =
  app.openapi(
    postXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
