import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2DefaultGroupLimitsLimitNameRoute,
  getApiAtlasV2DefaultGroupLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const limitDescriptionHandler = app
  .openapi(getApiAtlasV2DefaultGroupLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2DefaultGroupLimitsLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
