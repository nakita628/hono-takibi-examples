import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute,
  getProjectNameZonesZonePoolsPoolNameReplicasRoute,
  getProjectNameZonesZonePoolsPoolNameRoute,
  getProjectNameZonesZonePoolsRoute,
  postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartRoute,
  postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute,
  postProjectNameZonesZonePoolsPoolNameResizeRoute,
  postProjectNameZonesZonePoolsPoolNameRoute,
  postProjectNameZonesZonePoolsPoolNameUpdateTemplateRoute,
  postProjectNameZonesZonePoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectNameHandler = app
  .openapi(getProjectNameZonesZonePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectNameZonesZonePoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectNameZonesZonePoolsPoolNameReplicasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsPoolNameResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectNameZonesZonePoolsPoolNameUpdateTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
