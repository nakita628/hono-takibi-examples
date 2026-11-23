import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const convertVolumeHandler = app.openapi(postConvertVolumeRoute, (c) => {
  throw new Error('Not implemented')
})
