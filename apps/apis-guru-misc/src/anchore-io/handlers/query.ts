import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQueryImagesByPackageRoute,
  getQueryImagesByVulnerabilityRoute,
  getQueryVulnerabilitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
  .openapi(getQueryImagesByPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryImagesByVulnerabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryVulnerabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
