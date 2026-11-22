import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutDataLakeSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const PutDataLakeSettingsHandler = app.openapi(postPutDataLakeSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
