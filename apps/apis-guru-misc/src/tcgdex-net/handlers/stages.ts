import { OpenAPIHono } from '@hono/zod-openapi'
import { getStagesRoute, getStagesStageRoute } from '../routes'

const app = new OpenAPIHono()

export const stagesHandler = app
  .openapi(getStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesStageRoute, (c) => {
    throw new Error('Not implemented')
  })
