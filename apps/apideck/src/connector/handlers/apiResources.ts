import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConnectorApisIdResourcesResourceIdCoverageRoute,
  getConnectorApisIdResourcesResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiResourcesHandler = app
  .openapi(getConnectorApisIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorApisIdResourcesResourceIdCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
