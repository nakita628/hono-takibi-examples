import { OpenAPIHono } from '@hono/zod-openapi'
import { getSksTemplateKubeVersionVariantRoute } from '../routes'

const app = new OpenAPIHono()

export const nodepoolTemplateHandler = app.openapi(getSksTemplateKubeVersionVariantRoute, (c) => {
  throw new Error('Not implemented')
})
