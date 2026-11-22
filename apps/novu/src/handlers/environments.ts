import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EnvironmentsEnvironmentIdRoute,
  getV1EnvironmentsRoute,
  getV2EnvironmentsEnvironmentIdTagsRoute,
  postV1EnvironmentsRoute,
  postV2EnvironmentsTargetEnvironmentIdDiffRoute,
  postV2EnvironmentsTargetEnvironmentIdPublishRoute,
  putV1EnvironmentsEnvironmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(postV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EnvironmentsEnvironmentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EnvironmentsTargetEnvironmentIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EnvironmentsTargetEnvironmentIdDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
