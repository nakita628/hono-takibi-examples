import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateVolumeRoute, postActionCreateVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateVolumeHandler = app
  .openapi(getActionCreateVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
