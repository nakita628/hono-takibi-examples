import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2FlagsProjectKeyFlagKeyReleaseRoute,
  deleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute,
  getApiV2FlagsProjectKeyFlagKeyReleaseRoute,
  getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleasesRoute,
  getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute,
  getApiV2ProjectsProjectKeyReleasePipelinesRoute,
  patchApiV2FlagsProjectKeyFlagKeyReleaseRoute,
  postApiV2ProjectsProjectKeyReleasePipelinesRoute,
  putApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseIdRoute,
  putApiV2ProjectsProjectKeyFlagsFlagKeyReleaseRoute,
  putApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const releasePipelinesDeprecatedHandler = app
  .openapi(getApiV2FlagsProjectKeyFlagKeyReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFlagKeyReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FlagsProjectKeyFlagKeyReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyFlagsFlagKeyReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyReleasePipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyReleasePipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
