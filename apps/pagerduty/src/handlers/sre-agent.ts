import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSreAgentMemoriesIdRoute,
  getSreAgentMemoriesRoute,
  putSreAgentMemoriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sreAgentHandler = app
  .openapi(getSreAgentMemoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSreAgentMemoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSreAgentMemoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
