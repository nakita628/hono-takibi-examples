import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentEndpointsRoute,
  getV1beta1ParentNamespacesRoute,
  getV1beta1ParentServicesRoute,
  patchV1beta1NameRoute,
  postV1beta1NameResolveRoute,
  postV1beta1ParentEndpointsRoute,
  postV1beta1ParentNamespacesRoute,
  postV1beta1ParentServicesRoute,
  postV1beta1ResourceGetIamPolicyRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
