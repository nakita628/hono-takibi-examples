import { OpenAPIHono } from '@hono/zod-openapi'
import { getRegulationMarksRegulationMarkRoute, getRegulationMarksRoute } from '../routes'

const app = new OpenAPIHono()

export const regulationMarksHandler = app
  .openapi(getRegulationMarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegulationMarksRegulationMarkRoute, (c) => {
    throw new Error('Not implemented')
  })
