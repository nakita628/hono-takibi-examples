import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteVolumeRoute, postActionDeleteVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVolumeHandler = app
  .openapi(getActionDeleteVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
