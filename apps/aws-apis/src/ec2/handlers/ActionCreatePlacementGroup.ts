import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreatePlacementGroupRoute, postActionCreatePlacementGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreatePlacementGroupHandler = app
  .openapi(getActionCreatePlacementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreatePlacementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
