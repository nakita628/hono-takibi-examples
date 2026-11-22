import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2StepsRoute,
  getApiV2StepsStepIDRoute,
  postApiV2StepsRoute,
  putApiV2StepsStepIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stepsHandler = app
  .openapi(getApiV2StepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StepsStepIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StepsStepIDRoute, (c) => {
    throw new Error('Not implemented')
  })
