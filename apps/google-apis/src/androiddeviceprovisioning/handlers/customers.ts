import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1CustomersRoute,
  getV1ParentConfigurationsRoute,
  getV1ParentDevicesRoute,
  getV1ParentDpcsRoute,
  patchV1NameRoute,
  postV1ParentConfigurationsRoute,
  postV1ParentDevicesApplyConfigurationRoute,
  postV1ParentDevicesRemoveConfigurationRoute,
  postV1ParentDevicesUnclaimRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDevicesApplyConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDevicesRemoveConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDevicesUnclaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
