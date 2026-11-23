import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommitteesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const committeesHandler = app.openapi(getCommitteesIndexRoute, (c) => {
  throw new Error('Not implemented')
})
