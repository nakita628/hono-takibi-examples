import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutIdRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const holdoutsHandler = app
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
