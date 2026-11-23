import { OpenAPIHono } from '@hono/zod-openapi'
import { getElectionDatesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const electionDatesHandler = app.openapi(getElectionDatesIndexRoute, (c) => {
  throw new Error('Not implemented')
})
