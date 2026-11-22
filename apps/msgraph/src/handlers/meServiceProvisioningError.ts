import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeServiceProvisioningErrorsCountRoute,
  getMeServiceProvisioningErrorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meServiceProvisioningErrorHandler = app
  .openapi(getMeServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
