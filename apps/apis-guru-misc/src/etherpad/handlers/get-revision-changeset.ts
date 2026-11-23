import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetRevisionChangesetRoute, postGetRevisionChangesetRoute } from '../routes'

const app = new OpenAPIHono()

export const getRevisionChangesetHandler = app
  .openapi(getGetRevisionChangesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetRevisionChangesetRoute, (c) => {
    throw new Error('Not implemented')
  })
