import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameConfigRoute,
  getV1NameReposRoute,
  getV1NameRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameConfigRoute,
  patchV1NameRoute,
  postV1NameSyncRoute,
  postV1ParentReposRoute,
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
  .openapi(getV1NameConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
