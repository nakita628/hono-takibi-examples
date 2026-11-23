import { OpenAPIHono } from '@hono/zod-openapi'
import { getSuggestedEditsIdsRoute, getSuggestedEditsRoute } from '../routes'

const app = new OpenAPIHono()

export const suggestedEditsHandler = app
  .openapi(getSuggestedEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestedEditsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
