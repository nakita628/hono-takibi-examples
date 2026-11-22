import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameConfigVersionsRoute,
  getV1NameRoute,
  getV1NameStatesRoute,
  getV1ParentDevicesRoute,
  getV1ParentRegistriesRoute,
  patchV1NameRoute,
  postV1NameModifyCloudToDeviceConfigRoute,
  postV1NameSendCommandToDeviceRoute,
  postV1ParentBindDeviceToGatewayRoute,
  postV1ParentDevicesRoute,
  postV1ParentRegistriesRoute,
  postV1ParentUnbindDeviceFromGatewayRoute,
  postV1ResourceGetIamPolicyRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameConfigVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameModifyCloudToDeviceConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameSendCommandToDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentBindDeviceToGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentUnbindDeviceFromGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
