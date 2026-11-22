import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisableRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adaptiveTriggersHandler = app
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
