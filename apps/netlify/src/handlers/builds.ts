import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBuildsBuildIdRoute,
  postBuildsBuildIdLogRoute,
  postBuildsBuildIdStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buildsHandler = app
  .openapi(getBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuildsBuildIdLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuildsBuildIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
