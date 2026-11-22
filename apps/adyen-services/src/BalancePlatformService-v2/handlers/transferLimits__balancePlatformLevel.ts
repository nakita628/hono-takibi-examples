import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBalancePlatformsIdTransferLimitsTransferLimitIdRoute,
  getBalancePlatformsIdTransferLimitsRoute,
  getBalancePlatformsIdTransferLimitsTransferLimitIdRoute,
  postBalancePlatformsIdTransferLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferLimits__balancePlatformLevelHandler = app
  .openapi(getBalancePlatformsIdTransferLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBalancePlatformsIdTransferLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsIdTransferLimitsTransferLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBalancePlatformsIdTransferLimitsTransferLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
