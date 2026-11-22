import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute,
  getApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute,
  getApiV1OrgsOrgIdDeviceprofilesRoute,
  postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdAssignRoute,
  postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdUnassignRoute,
  postApiV1OrgsOrgIdDeviceprofilesRoute,
  putApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsDeviceProfilesHandler = app
  .openapi(getApiV1OrgsOrgIdDeviceprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdDeviceprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
