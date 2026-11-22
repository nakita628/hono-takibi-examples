import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCloudsRoute,
  getProjectProjectCloudsRoute,
  getTenantsTenantPrivatelinkAvailabilityRoute,
  getTenantsTenantStaticIpAvailabilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudPlatformsHandler = app
  .openapi(getCloudsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectCloudsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantsTenantPrivatelinkAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantsTenantStaticIpAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
