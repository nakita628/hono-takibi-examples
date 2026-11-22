import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneAutoscalersAutoscalerRoute,
  getProjectsProjectAggregatedAutoscalersRoute,
  getProjectsProjectZonesZoneAutoscalersAutoscalerRoute,
  getProjectsProjectZonesZoneAutoscalersRoute,
  patchProjectsProjectZonesZoneAutoscalersRoute,
  postProjectsProjectZonesZoneAutoscalersRoute,
  putProjectsProjectZonesZoneAutoscalersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoscalersHandler = app
  .openapi(getProjectsProjectAggregatedAutoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneAutoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectZonesZoneAutoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneAutoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectZonesZoneAutoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneAutoscalersAutoscalerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneAutoscalersAutoscalerRoute, (c) => {
    throw new Error('Not implemented')
  })
