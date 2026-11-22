import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetDataLakeSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const GetDataLakeSettingsHandler = app.openapi(postGetDataLakeSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
