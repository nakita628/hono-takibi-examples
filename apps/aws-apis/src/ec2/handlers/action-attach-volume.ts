import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAttachVolumeRoute, postActionAttachVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAttachVolumeHandler = app
  .openapi(getActionAttachVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
