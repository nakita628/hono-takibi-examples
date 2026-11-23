import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAutomatedDiscoveryConfigurationRoute,
  putAutomatedDiscoveryConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automatedDiscoveryHandler = app
  .openapi(getAutomatedDiscoveryConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomatedDiscoveryConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
