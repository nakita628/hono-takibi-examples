import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerRoute,
  getProjectsProjectAggregatedInstanceGroupManagersRoute,
  getProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerListErrorsRoute,
  getProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerRoute,
  getProjectsProjectZonesZoneInstanceGroupManagersRoute,
  patchProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerAbandonInstancesRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerApplyUpdatesToInstancesRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerCreateInstancesRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerDeleteInstancesRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerDeletePerInstanceConfigsRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerListManagedInstancesRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerListPerInstanceConfigsRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerPatchPerInstanceConfigsRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerRecreateInstancesRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerResizeRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerSetInstanceTemplateRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerSetTargetPoolsRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerUpdatePerInstanceConfigsRoute,
  postProjectsProjectZonesZoneInstanceGroupManagersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceGroupManagersHandler = app
  .openapi(getProjectsProjectAggregatedInstanceGroupManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstanceGroupManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstanceGroupManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerAbandonInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerApplyUpdatesToInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerCreateInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerDeleteInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerDeletePerInstanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerListErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerListManagedInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerListPerInstanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerPatchPerInstanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerRecreateInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerResizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerSetInstanceTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerSetTargetPoolsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerUpdatePerInstanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
