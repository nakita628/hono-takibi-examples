import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdApiGatewayLabelsUserNameRoute,
  deleteZonesZoneIdApiGatewayLabelsUserRoute,
  deleteZonesZoneIdApiGatewayOperationsLabelsRoute,
  deleteZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute,
  getZonesZoneIdApiGatewayLabelsManagedNameRoute,
  getZonesZoneIdApiGatewayLabelsRoute,
  getZonesZoneIdApiGatewayLabelsUserNameRoute,
  patchZonesZoneIdApiGatewayLabelsUserNameRoute,
  postZonesZoneIdApiGatewayLabelsUserRoute,
  postZonesZoneIdApiGatewayOperationsLabelsRoute,
  postZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute,
  putZonesZoneIdApiGatewayLabelsManagedNameResourcesOperationRoute,
  putZonesZoneIdApiGatewayLabelsUserNameResourcesOperationRoute,
  putZonesZoneIdApiGatewayLabelsUserNameRoute,
  putZonesZoneIdApiGatewayOperationsLabelsRoute,
  putZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiShieldLabelsHandler = app
  .openapi(getZonesZoneIdApiGatewayLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayLabelsManagedNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdApiGatewayLabelsManagedNameResourcesOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdApiGatewayLabelsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdApiGatewayLabelsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdApiGatewayLabelsUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayLabelsUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdApiGatewayLabelsUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdApiGatewayLabelsUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdApiGatewayLabelsUserNameResourcesOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdApiGatewayOperationsLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdApiGatewayOperationsLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdApiGatewayOperationsLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
