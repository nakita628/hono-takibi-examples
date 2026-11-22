import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcompanymatchRoute } from '../routes'

const app = new OpenAPIHono()

export const companyNameSimilarityKeyHandler = app.openapi(getGetcompanymatchRoute, (c) => {
  throw new Error('Not implemented')
})
