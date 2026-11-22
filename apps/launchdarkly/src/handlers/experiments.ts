import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute,
  getApiV2ProjectsProjectKeyExperimentationSettingsRoute,
  getApiV2ProjectsProjectKeyExperimentsRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterationsRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute,
  putApiV2ProjectsProjectKeyExperimentationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentsHandler = app
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2ProjectsProjectKeyExperimentationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyExperimentationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
