import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901DescribeContainerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMediaStore20170901DescribeContainerHandler = app.openapi(
  postXAmzTargetMediaStore20170901DescribeContainerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
