import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute,
  getApiV2ProjectsProjectKeySdkKeysRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute,
  putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sdkKeysBetaHandler = app
  .openapi(getApiV2ProjectsProjectKeySdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
