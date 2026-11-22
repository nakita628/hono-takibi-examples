import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
