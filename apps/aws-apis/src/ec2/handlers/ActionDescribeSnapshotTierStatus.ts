import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSnapshotTierStatusRoute,
  postActionDescribeSnapshotTierStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeSnapshotTierStatusHandler = app
  .openapi(getActionDescribeSnapshotTierStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSnapshotTierStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
