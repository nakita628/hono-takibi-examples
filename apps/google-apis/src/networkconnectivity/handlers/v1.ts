import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentHubsRoute,
  getV1ParentInternalRangesRoute,
  getV1ParentSpokesRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ParentHubsRoute,
  postV1ParentInternalRangesRoute,
  postV1ParentSpokesRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentHubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentHubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentInternalRangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentInternalRangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSpokesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSpokesRoute, (c) => {
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
