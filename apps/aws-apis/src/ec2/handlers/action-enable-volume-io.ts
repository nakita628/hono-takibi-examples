import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnableVolumeIORoute, postActionEnableVolumeIORoute } from '../routes'

const app = new OpenAPIHono()

export const actionEnableVolumeIoHandler = app
  .openapi(getActionEnableVolumeIORoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableVolumeIORoute, (c) => {
    throw new Error('Not implemented')
  })
