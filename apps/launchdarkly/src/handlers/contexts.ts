import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ProjectsProjectKeyContextKindsRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeNameRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearchRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluateRoute,
  putApiV2ProjectsProjectKeyContextKindsKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contextsHandler = app
  .openapi(getApiV2ProjectsProjectKeyContextKindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyContextKindsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
