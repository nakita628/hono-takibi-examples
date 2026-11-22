import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeVoteYesnoRoute } from '../routes'

const app = new OpenAPIHono()

export const typeVoteYesnoHandler = app.openapi(getRepositorySearchTypeVoteYesnoRoute, (c) => {
  throw new Error('Not implemented')
})
