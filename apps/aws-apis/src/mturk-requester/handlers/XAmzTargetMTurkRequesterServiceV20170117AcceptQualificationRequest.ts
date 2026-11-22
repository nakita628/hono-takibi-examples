import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestHandler =
  app.openapi(postXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
