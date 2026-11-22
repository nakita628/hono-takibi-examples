import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute,
  getProjectNameZonesZonePoolsPoolNameReplicasRoute,
  postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartRoute,
  postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const replicasHandler = app
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
