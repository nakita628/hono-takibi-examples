import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentConfigsRoute,
  getV1beta1ParentVariablesRoute,
  getV1beta1ParentWaitersRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  postV1beta1NameWatchRoute,
  postV1beta1ParentConfigsRoute,
  postV1beta1ParentVariablesRoute,
  postV1beta1ParentWaitersRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
  putV1beta1NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentWaitersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentWaitersRoute, (c) => {
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
