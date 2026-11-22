import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute,
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute,
  putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute,
  putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentReleasePlansBetaHandler = app
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
