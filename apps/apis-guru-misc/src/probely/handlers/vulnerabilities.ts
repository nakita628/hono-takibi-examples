import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVulnerabilityDefinitionsIdIndexRoute,
  getVulnerabilityDefinitionsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vulnerabilitiesHandler = app
  .openapi(getVulnerabilityDefinitionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVulnerabilityDefinitionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
