import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
  deleteApisStoragemigrationK8sIoV1StorageversionmigrationsRoute,
  getApisStoragemigrationK8sIoV1IndexRoute,
  getApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
  getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute,
  getApisStoragemigrationK8sIoV1StorageversionmigrationsRoute,
  getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameRoute,
  getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsRoute,
  patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
  patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute,
  postApisStoragemigrationK8sIoV1StorageversionmigrationsRoute,
  putApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute,
  putApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apisHandler = app
  .openapi(getApisStoragemigrationK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStoragemigrationK8sIoV1StorageversionmigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStoragemigrationK8sIoV1StorageversionmigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisStoragemigrationK8sIoV1StorageversionmigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStoragemigrationK8sIoV1StorageversionmigrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
