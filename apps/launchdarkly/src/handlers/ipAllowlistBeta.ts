import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AccountIpAllowlistIdRoute,
  getApiV2AccountIpAllowlistRoute,
  patchApiV2AccountIpAllowlistIdRoute,
  patchApiV2AccountIpAllowlistRoute,
  postApiV2AccountIpAllowlistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAllowlistBetaHandler = app
  .openapi(getApiV2AccountIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AccountIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AccountIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AccountIpAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AccountIpAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
