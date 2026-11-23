import { OpenAPIHono } from '@hono/zod-openapi'
import { getSksTemplateKubeVersionVariantRoute } from '../routes'

const app = new OpenAPIHono()

export const sksTemplateHandler = app.openapi(getSksTemplateKubeVersionVariantRoute, (c) => {
  throw new Error('Not implemented')
})
