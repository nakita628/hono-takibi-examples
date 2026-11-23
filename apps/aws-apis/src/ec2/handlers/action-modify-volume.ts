import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyVolumeRoute, postActionModifyVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyVolumeHandler = app
  .openapi(getActionModifyVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
