import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdRoute,
  getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute,
  postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute,
  putApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentReleasesBetaHandler = app
  .openapi(getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStopRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
