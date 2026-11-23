import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommitteesCommitteeIdRoute, getCommitteesRoute } from '../routes'

const app = new OpenAPIHono()

export const committeesHandler = app
  .openapi(getCommitteesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteesCommitteeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
