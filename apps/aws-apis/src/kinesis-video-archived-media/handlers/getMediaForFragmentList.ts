import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetMediaForFragmentListRoute } from '../routes'

const app = new OpenAPIHono()

export const getMediaForFragmentListHandler = app.openapi(postGetMediaForFragmentListRoute, (c) => {
  throw new Error('Not implemented')
})
