import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ServicesServiceNameRoute,
  getV1ServicesRoute,
  getV1ServicesServiceNameConfigRoute,
  getV1ServicesServiceNameConfigsConfigIdRoute,
  getV1ServicesServiceNameConfigsRoute,
  getV1ServicesServiceNameRolloutsRolloutIdRoute,
  getV1ServicesServiceNameRolloutsRoute,
  getV1ServicesServiceNameRoute,
  postV1ResourceGetIamPolicyRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  postV1ServicesGenerateConfigReportRoute,
  postV1ServicesRoute,
  postV1ServicesServiceNameConfigsRoute,
  postV1ServicesServiceNameConfigsSubmitRoute,
  postV1ServicesServiceNameRolloutsRoute,
  postV1ServicesServiceNameUndeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ServicesServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServicesServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServicesServiceNameConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServicesServiceNameConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServicesServiceNameConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServicesServiceNameConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServicesServiceNameConfigsSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServicesServiceNameRolloutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServicesServiceNameRolloutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServicesServiceNameRolloutsRolloutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServicesServiceNameUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServicesGenerateConfigReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
