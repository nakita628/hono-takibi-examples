import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationsApplicationIdAuthorizationsRoute,
  getApplicationsApplicationIdLogoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(getApplicationsApplicationIdAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
