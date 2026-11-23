import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1JobsVoiceTranslateJobIdRoute,
  getV1QualityEvaluationsJobIdRoute,
  postV1JobsVoiceTranslateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1JobsVoiceTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JobsVoiceTranslateJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QualityEvaluationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
