import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2beta3NameRoute,
  getV2beta3NameLocationsRoute,
  getV2beta3NameRoute,
  getV2beta3ParentQueuesRoute,
  getV2beta3ParentTasksRoute,
  patchV2beta3NameRoute,
  postV2beta3NamePauseRoute,
  postV2beta3NamePurgeRoute,
  postV2beta3NameResumeRoute,
  postV2beta3NameRunRoute,
  postV2beta3ParentQueuesRoute,
  postV2beta3ParentTasksRoute,
  postV2beta3QueueTasksTaskIdBufferRoute,
  postV2beta3ResourceGetIamPolicyRoute,
  postV2beta3ResourceSetIamPolicyRoute,
  postV2beta3ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2beta3Handler = app
  .openapi(deleteV2beta3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2beta3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta3NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3NamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3NamePurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3NameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3NameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta3ParentQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3ParentQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta3ParentTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3ParentTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3QueueTasksTaskIdBufferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta3ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
