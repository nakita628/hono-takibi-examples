import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha2NameRoute,
  getV1alpha2NameLocationsRoute,
  getV1alpha2NameOperationsRoute,
  getV1alpha2NameRoute,
  getV1alpha2ResourceGetIamPolicyRoute,
  postV1alpha2NameCancelRoute,
  postV1alpha2ResourceSetIamPolicyRoute,
  postV1alpha2ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1alpha2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha2NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha2NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha2NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
