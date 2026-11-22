import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdApiGatewayOperationsOperationIdRoute,
  deleteZonesZoneIdApiGatewayOperationsRoute,
  getZonesZoneIdApiGatewayOperationsOperationIdRoute,
  getZonesZoneIdApiGatewayOperationsRoute,
  getZonesZoneIdApiGatewaySchemasRoute,
  postZonesZoneIdApiGatewayOperationsItemRoute,
  postZonesZoneIdApiGatewayOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiShieldEndpointManagementHandler = app
  .openapi(deleteZonesZoneIdApiGatewayOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdApiGatewayOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdApiGatewayOperationsItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdApiGatewayOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewaySchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
