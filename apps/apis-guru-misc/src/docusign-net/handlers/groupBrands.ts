import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdGroupsGroupIdBrandsRoute,
  getV21AccountsAccountIdGroupsGroupIdBrandsRoute,
  putV21AccountsAccountIdGroupsGroupIdBrandsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupBrandsHandler = app
  .openapi(deleteV21AccountsAccountIdGroupsGroupIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdGroupsGroupIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdGroupsGroupIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
