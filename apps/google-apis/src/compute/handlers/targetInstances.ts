import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneTargetInstancesTargetInstanceRoute,
  getProjectsProjectAggregatedTargetInstancesRoute,
  getProjectsProjectZonesZoneTargetInstancesRoute,
  getProjectsProjectZonesZoneTargetInstancesTargetInstanceRoute,
  postProjectsProjectZonesZoneTargetInstancesRoute,
  postProjectsProjectZonesZoneTargetInstancesTargetInstanceSetSecurityPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetInstancesHandler = app
  .openapi(getProjectsProjectAggregatedTargetInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneTargetInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneTargetInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneTargetInstancesTargetInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneTargetInstancesTargetInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneTargetInstancesTargetInstanceSetSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
