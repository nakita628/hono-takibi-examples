import { OpenAPIHono } from '@hono/zod-openapi'
import { getBranchesRoute, headBranchesRoute } from '../routes'

const app = new OpenAPIHono()

export const branchesHandler = app
  .openapi(getBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
