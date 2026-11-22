import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameLoginProfileRoute,
  getV1betaNameRoute,
  patchV1betaNameRoute,
  postV1betaParentImportSshPublicKeyRoute,
  postV1betaParentSshPublicKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameLoginProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentSshPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentImportSshPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
