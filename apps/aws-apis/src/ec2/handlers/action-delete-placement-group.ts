import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeletePlacementGroupRoute, postActionDeletePlacementGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeletePlacementGroupHandler = app
  .openapi(getActionDeletePlacementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeletePlacementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
