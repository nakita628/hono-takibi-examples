import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetachVolumeRoute, postActionDetachVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDetachVolumeHandler = app
  .openapi(getActionDetachVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
