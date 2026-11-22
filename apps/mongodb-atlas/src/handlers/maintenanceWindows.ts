import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdMaintenanceWindowRoute,
  getApiAtlasV2GroupsGroupIdMaintenanceWindowRoute,
  patchApiAtlasV2GroupsGroupIdMaintenanceWindowRoute,
  postApiAtlasV2GroupsGroupIdMaintenanceWindowAutoDeferRoute,
  postApiAtlasV2GroupsGroupIdMaintenanceWindowDeferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const maintenanceWindowsHandler = app
  .openapi(deleteApiAtlasV2GroupsGroupIdMaintenanceWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdMaintenanceWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdMaintenanceWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdMaintenanceWindowAutoDeferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdMaintenanceWindowDeferRoute, (c) => {
    throw new Error('Not implemented')
  })
