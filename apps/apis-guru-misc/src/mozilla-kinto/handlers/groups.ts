import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketsBucketIdGroupsIdRoute, getBucketsBucketIdGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getBucketsBucketIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIdGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
