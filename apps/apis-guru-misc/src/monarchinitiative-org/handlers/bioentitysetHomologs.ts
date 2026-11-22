import { OpenAPIHono } from '@hono/zod-openapi'
import { getBioentitysetHomologsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const bioentitysetHomologsHandler = app.openapi(getBioentitysetHomologsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
