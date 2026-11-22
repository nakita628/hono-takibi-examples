import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionImportVolumeRoute, postActionImportVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionImportVolumeHandler = app
  .openapi(getActionImportVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionImportVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
