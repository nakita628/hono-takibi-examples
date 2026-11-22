import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ConnectorBuilderAssistProcessRoute,
  postV1ConnectorBuilderAssistWarmRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectorBuilderAssistHandler = app
  .openapi(postV1ConnectorBuilderAssistProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderAssistWarmRoute, (c) => {
    throw new Error('Not implemented')
  })
