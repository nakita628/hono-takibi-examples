import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute,
  getApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute,
  patchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute,
  postApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flagLinksBetaHandler = app
  .openapi(getApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
