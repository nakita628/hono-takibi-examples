import { OpenAPIHono } from '@hono/zod-openapi'
import { getPullrequestsSelectedUserRoute } from '../routes'

const app = new OpenAPIHono()

export const pullrequestsHandler = app.openapi(getPullrequestsSelectedUserRoute, (c) => {
  throw new Error('Not implemented')
})
