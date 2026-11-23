import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListPlatformBranchesRoute, postActionListPlatformBranchesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListPlatformBranchesHandler = app
  .openapi(getActionListPlatformBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListPlatformBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
