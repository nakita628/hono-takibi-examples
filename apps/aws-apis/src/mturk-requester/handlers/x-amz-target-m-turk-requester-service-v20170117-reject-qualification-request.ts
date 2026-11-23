import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestHandler =
  app.openapi(postXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
