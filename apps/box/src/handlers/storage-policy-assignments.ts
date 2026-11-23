import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
  getStoragePolicyAssignmentsRoute,
  getStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
  postStoragePolicyAssignmentsRoute,
  putStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storagePolicyAssignmentsHandler = app
  .openapi(getStoragePolicyAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoragePolicyAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
