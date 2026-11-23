import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentEnvironmentsRoute,
  getV1beta1ParentImageVersionsRoute,
  patchV1beta1NameRoute,
  postV1beta1EnvironmentCheckUpgradeRoute,
  postV1beta1EnvironmentLoadSnapshotRoute,
  postV1beta1EnvironmentSaveSnapshotRoute,
  postV1beta1NameRestartWebServerRoute,
  postV1beta1ParentEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(postV1beta1EnvironmentCheckUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1EnvironmentLoadSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1EnvironmentSaveSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameRestartWebServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentImageVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
