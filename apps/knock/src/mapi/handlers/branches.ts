import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BranchesBranchSlugRoute,
  getV1BranchesBranchSlugRoute,
  getV1BranchesRoute,
  postV1BranchesBranchSlugRoute,
  putV1BranchesBranchSlugRebaseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const branchesHandler = app
  .openapi(getV1BranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BranchesBranchSlugRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BranchesBranchSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BranchesBranchSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
