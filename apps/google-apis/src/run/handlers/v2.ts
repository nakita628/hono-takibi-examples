import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ParentExecutionsRoute,
  getV2ParentJobsRoute,
  getV2ParentRevisionsRoute,
  getV2ParentServicesRoute,
  getV2ParentTasksRoute,
  getV2ResourceGetIamPolicyRoute,
  patchV2NameRoute,
  postV2NameCancelRoute,
  postV2NameRunRoute,
  postV2NameWaitRoute,
  postV2ParentJobsRoute,
  postV2ParentServicesRoute,
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
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentTasksRoute, (c) => {
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
