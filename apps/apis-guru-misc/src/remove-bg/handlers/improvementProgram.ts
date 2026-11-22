import { OpenAPIHono } from '@hono/zod-openapi'
import { postImproveRoute } from '../routes'

const app = new OpenAPIHono()

export const improvementProgramHandler = app.openapi(postImproveRoute, (c) => {
  throw new Error('Not implemented')
})
