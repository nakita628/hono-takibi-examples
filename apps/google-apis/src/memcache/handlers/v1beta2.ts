import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta2NameRoute,
  getV1beta2NameLocationsRoute,
  getV1beta2NameOperationsRoute,
  getV1beta2NameRoute,
  getV1beta2ParentInstancesRoute,
  patchV1beta2NameRoute,
  patchV1beta2NameUpdateParametersRoute,
  postV1beta2InstanceApplySoftwareUpdateRoute,
  postV1beta2InstanceRescheduleMaintenanceRoute,
  postV1beta2NameApplyParametersRoute,
  postV1beta2NameCancelRoute,
  postV1beta2ParentInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta2Handler = app
  .openapi(postV1beta2InstanceApplySoftwareUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2InstanceRescheduleMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2NameApplyParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta2NameUpdateParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
