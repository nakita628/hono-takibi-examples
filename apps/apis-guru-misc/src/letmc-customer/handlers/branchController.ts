import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CustomerShortNameBranchBranchesBranchIDRoute,
  getV2CustomerShortNameBranchBranchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const branchControllerHandler = app
  .openapi(getV2CustomerShortNameBranchBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameBranchBranchesBranchIDRoute, (c) => {
    throw new Error('Not implemented')
  })
