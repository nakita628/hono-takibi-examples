import { OpenAPIHono } from '@hono/zod-openapi'
import { postDowngradeProofreaderRoute } from '../routes'

const app = new OpenAPIHono()

export const downgradeProofreaderHandler = app.openapi(postDowngradeProofreaderRoute, (c) => {
  throw new Error('Not implemented')
})
