import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListHumanTaskUisRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListHumanTaskUisHandler = app.openapi(
  postXAmzTargetSageMakerListHumanTaskUisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
