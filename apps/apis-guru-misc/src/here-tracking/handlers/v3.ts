import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3HealthRoute, getV3VersionRoute, postV3BatchRoute, postV3IndexRoute } from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(postV3IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
