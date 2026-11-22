import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowersRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersRoute,
  putApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const followFlagsHandler = app
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
