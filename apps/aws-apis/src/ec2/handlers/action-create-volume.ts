import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateVolumeRoute, postActionCreateVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateVolumeHandler = app
  .openapi(getActionCreateVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
