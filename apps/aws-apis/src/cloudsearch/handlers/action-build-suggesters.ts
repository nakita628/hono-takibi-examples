import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionBuildSuggestersRoute, postActionBuildSuggestersRoute } from '../routes'

const app = new OpenAPIHono()

export const actionBuildSuggestersHandler = app
  .openapi(getActionBuildSuggestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBuildSuggestersRoute, (c) => {
    throw new Error('Not implemented')
  })
