import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3NameRoute,
  getV3NameRoute,
  getV3ParentTagHoldsRoute,
  getV3TagValuesNamespacedRoute,
  getV3TagValuesRoute,
  patchV3NameRoute,
  postV3ParentTagHoldsRoute,
  postV3ResourceGetIamPolicyRoute,
  postV3ResourceSetIamPolicyRoute,
  postV3ResourceTestIamPermissionsRoute,
  postV3TagValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagValuesHandler = app
  .openapi(getV3TagValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3TagValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TagValuesNamespacedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentTagHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentTagHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
