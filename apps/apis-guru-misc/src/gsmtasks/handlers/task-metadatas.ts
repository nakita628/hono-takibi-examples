import { OpenAPIHono } from '@hono/zod-openapi'
import { getTaskMetadatasIdIndexRoute, getTaskMetadatasIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const taskMetadatasHandler = app
  .openapi(getTaskMetadatasIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskMetadatasIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
