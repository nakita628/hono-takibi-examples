import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListHumanTaskUisRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListHumanTaskUisHandler = app.openapi(
  postXAmzTargetSageMakerListHumanTaskUisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
