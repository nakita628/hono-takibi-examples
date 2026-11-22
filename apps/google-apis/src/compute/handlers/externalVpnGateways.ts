import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalExternalVpnGatewaysExternalVpnGatewayRoute,
  getProjectsProjectGlobalExternalVpnGatewaysExternalVpnGatewayRoute,
  getProjectsProjectGlobalExternalVpnGatewaysRoute,
  postProjectsProjectGlobalExternalVpnGatewaysResourceSetLabelsRoute,
  postProjectsProjectGlobalExternalVpnGatewaysResourceTestIamPermissionsRoute,
  postProjectsProjectGlobalExternalVpnGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalVpnGatewaysHandler = app
  .openapi(getProjectsProjectGlobalExternalVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalExternalVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalExternalVpnGatewaysExternalVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalExternalVpnGatewaysExternalVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalExternalVpnGatewaysResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalExternalVpnGatewaysResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
