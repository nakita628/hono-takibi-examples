import { OpenAPIHono } from '@hono/zod-openapi'
import { getLabelsRoute, postLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
