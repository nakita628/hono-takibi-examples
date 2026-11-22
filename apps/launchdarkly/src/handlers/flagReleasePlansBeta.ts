import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute,
  getApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute,
  getApiV2ProjectsProjectKeyFlagReleasePlansRoute,
  postApiV2ProjectsProjectKeyFlagReleasePlansRoute,
  putApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flagReleasePlansBetaHandler = app
  .openapi(getApiV2ProjectsProjectKeyFlagReleasePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyFlagReleasePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
