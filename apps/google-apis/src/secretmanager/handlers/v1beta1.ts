import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameAccessRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentSecretsRoute,
  getV1beta1ParentVersionsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameDestroyRoute,
  postV1beta1NameDisableRoute,
  postV1beta1NameEnableRoute,
  postV1beta1ParentAddVersionRoute,
  postV1beta1ParentSecretsRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
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
  .openapi(getV1beta1NameAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameDestroyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAddVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
