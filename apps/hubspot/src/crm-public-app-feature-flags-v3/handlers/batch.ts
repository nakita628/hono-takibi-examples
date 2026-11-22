import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteRoute,
  postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
