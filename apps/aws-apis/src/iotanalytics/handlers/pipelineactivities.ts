import { OpenAPIHono } from '@hono/zod-openapi'
import { postPipelineactivitiesRunRoute } from '../routes'

const app = new OpenAPIHono()

export const pipelineactivitiesHandler = app.openapi(postPipelineactivitiesRunRoute, (c) => {
  throw new Error('Not implemented')
})
