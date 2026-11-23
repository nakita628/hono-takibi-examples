import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribePlacementGroupsRoute,
  postActionDescribePlacementGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribePlacementGroupsHandler = app
  .openapi(getActionDescribePlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
