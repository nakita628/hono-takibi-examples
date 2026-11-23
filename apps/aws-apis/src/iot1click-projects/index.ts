import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute,
  deleteProjectsProjectNamePlacementsPlacementNameRoute,
  deleteProjectsProjectNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getProjectsProjectNamePlacementsPlacementNameDevicesRoute,
  getProjectsProjectNamePlacementsPlacementNameRoute,
  getProjectsProjectNamePlacementsRoute,
  getProjectsProjectNameRoute,
  getProjectsRoute,
  getTagsResourceArnRoute,
  postProjectsProjectNamePlacementsRoute,
  postProjectsRoute,
  postTagsResourceArnRoute,
  putProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute,
  putProjectsProjectNamePlacementsPlacementNameRoute,
  putProjectsProjectNameRoute,
} from './routes'
import {
  deleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRouteHandler,
  deleteProjectsProjectNamePlacementsPlacementNameRouteHandler,
  deleteProjectsProjectNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getProjectsProjectNamePlacementsPlacementNameDevicesRouteHandler,
  getProjectsProjectNamePlacementsPlacementNameRouteHandler,
  getProjectsProjectNamePlacementsRouteHandler,
  getProjectsProjectNameRouteHandler,
  getProjectsRouteHandler,
  getTagsResourceArnRouteHandler,
  postProjectsProjectNamePlacementsRouteHandler,
  postProjectsRouteHandler,
  postTagsResourceArnRouteHandler,
  putProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRouteHandler,
  putProjectsProjectNamePlacementsPlacementNameRouteHandler,
  putProjectsProjectNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    putProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute,
    putProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRouteHandler,
  )
  .openapi(
    deleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute,
    deleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRouteHandler,
  )
  .openapi(postProjectsProjectNamePlacementsRoute, postProjectsProjectNamePlacementsRouteHandler)
  .openapi(getProjectsProjectNamePlacementsRoute, getProjectsProjectNamePlacementsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(
    deleteProjectsProjectNamePlacementsPlacementNameRoute,
    deleteProjectsProjectNamePlacementsPlacementNameRouteHandler,
  )
  .openapi(
    getProjectsProjectNamePlacementsPlacementNameRoute,
    getProjectsProjectNamePlacementsPlacementNameRouteHandler,
  )
  .openapi(
    putProjectsProjectNamePlacementsPlacementNameRoute,
    putProjectsProjectNamePlacementsPlacementNameRouteHandler,
  )
  .openapi(deleteProjectsProjectNameRoute, deleteProjectsProjectNameRouteHandler)
  .openapi(getProjectsProjectNameRoute, getProjectsProjectNameRouteHandler)
  .openapi(putProjectsProjectNameRoute, putProjectsProjectNameRouteHandler)
  .openapi(
    getProjectsProjectNamePlacementsPlacementNameDevicesRoute,
    getProjectsProjectNamePlacementsPlacementNameDevicesRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
