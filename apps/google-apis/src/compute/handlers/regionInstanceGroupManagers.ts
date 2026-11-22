import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerRoute,
  getProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerListErrorsRoute,
  getProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerRoute,
  getProjectsProjectRegionsRegionInstanceGroupManagersRoute,
  patchProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerAbandonInstancesRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerApplyUpdatesToInstancesRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerCreateInstancesRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerDeleteInstancesRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerDeletePerInstanceConfigsRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerListManagedInstancesRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerListPerInstanceConfigsRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerPatchPerInstanceConfigsRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerRecreateInstancesRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerResizeRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerSetInstanceTemplateRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerSetTargetPoolsRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerUpdatePerInstanceConfigsRoute,
  postProjectsProjectRegionsRegionInstanceGroupManagersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionInstanceGroupManagersHandler = app
  .openapi(getProjectsProjectRegionsRegionInstanceGroupManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionInstanceGroupManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerAbandonInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerApplyUpdatesToInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerCreateInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerDeleteInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerDeletePerInstanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerListErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerListManagedInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerListPerInstanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerPatchPerInstanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerRecreateInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerResizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerSetInstanceTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerSetTargetPoolsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerUpdatePerInstanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
