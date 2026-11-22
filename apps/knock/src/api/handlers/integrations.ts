import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1IntegrationsCensusCustomDestinationRoute,
  postV1IntegrationsHightouchEmbeddedDestinationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(postV1IntegrationsCensusCustomDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsHightouchEmbeddedDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
