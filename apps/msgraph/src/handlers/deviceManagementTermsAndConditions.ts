import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesTermsAndConditionsAcceptanceStatusIdRoute,
  deleteDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsTermsAndConditionsAssignmentIdRoute,
  deleteDeviceManagementTermsAndConditionsTermsAndConditionsIdRoute,
  getDeviceManagementTermsAndConditionsCountRoute,
  getDeviceManagementTermsAndConditionsRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesCountRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesTermsAndConditionsAcceptanceStatusIdRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesTermsAndConditionsAcceptanceStatusIdTermsAndConditionsRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsCountRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsTermsAndConditionsAssignmentIdRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdRoute,
  patchDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesTermsAndConditionsAcceptanceStatusIdRoute,
  patchDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsTermsAndConditionsAssignmentIdRoute,
  patchDeviceManagementTermsAndConditionsTermsAndConditionsIdRoute,
  postDeviceManagementTermsAndConditionsRoute,
  postDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesRoute,
  postDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementTermsAndConditionsHandler = app
  .openapi(getDeviceManagementTermsAndConditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementTermsAndConditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementTermsAndConditionsTermsAndConditionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementTermsAndConditionsTermsAndConditionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementTermsAndConditionsTermsAndConditionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesTermsAndConditionsAcceptanceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesTermsAndConditionsAcceptanceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesTermsAndConditionsAcceptanceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesTermsAndConditionsAcceptanceStatusIdTermsAndConditionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsTermsAndConditionsAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsTermsAndConditionsAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsTermsAndConditionsAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementTermsAndConditionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
