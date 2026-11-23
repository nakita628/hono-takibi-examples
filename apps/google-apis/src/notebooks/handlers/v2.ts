import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameLocationsRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ResourceGetIamPolicyRoute,
  postV2NameCancelRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
