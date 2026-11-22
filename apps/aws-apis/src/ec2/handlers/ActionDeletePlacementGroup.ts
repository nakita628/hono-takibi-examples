import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeletePlacementGroupRoute, postActionDeletePlacementGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeletePlacementGroupHandler = app
  .openapi(getActionDeletePlacementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeletePlacementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
