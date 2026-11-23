import { OpenAPIHono } from '@hono/zod-openapi'
import { postSingFrameVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const singFrameVolumeHandler = app.openapi(postSingFrameVolumeRoute, (c) => {
  throw new Error('Not implemented')
})
