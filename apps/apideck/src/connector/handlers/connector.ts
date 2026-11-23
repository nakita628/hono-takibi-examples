import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConnectorApisIdResourcesResourceIdCoverageRoute,
  getConnectorApisIdResourcesResourceIdRoute,
  getConnectorApisIdRoute,
  getConnectorApisRoute,
  getConnectorConnectorsIdDocsDocIdRoute,
  getConnectorConnectorsIdResourcesResourceIdRoute,
  getConnectorConnectorsIdRoute,
  getConnectorConnectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectorHandler = app
  .openapi(getConnectorApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorApisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorApisIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorApisIdResourcesResourceIdCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorConnectorsIdDocsDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorConnectorsIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
