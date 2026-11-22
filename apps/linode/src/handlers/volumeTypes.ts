import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionVolumesTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const volumeTypesHandler = app.openapi(getApiVersionVolumesTypesRoute, (c) => {
  throw new Error('Not implemented')
})
