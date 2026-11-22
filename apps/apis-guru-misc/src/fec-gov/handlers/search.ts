import { OpenAPIHono } from '@hono/zod-openapi'
import { getNamesCandidatesIndexRoute, getNamesCommitteesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getNamesCandidatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesCommitteesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
