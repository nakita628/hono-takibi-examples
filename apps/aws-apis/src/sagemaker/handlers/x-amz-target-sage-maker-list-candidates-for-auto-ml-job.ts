import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListCandidatesForAutoMLJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListCandidatesForAutoMlJobHandler = app.openapi(
  postXAmzTargetSageMakerListCandidatesForAutoMLJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
