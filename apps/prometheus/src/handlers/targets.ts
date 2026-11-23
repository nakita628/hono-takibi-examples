import { OpenAPIHono } from '@hono/zod-openapi'
import { getTargetsMetadataRoute, getTargetsRelabelStepsRoute, getTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const targetsHandler = app
  .openapi(getTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsRelabelStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
