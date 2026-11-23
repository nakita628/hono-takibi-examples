import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePositionsIDRoute, patchPositionsIDRoute, postPositionsRoute } from '../routes'

const app = new OpenAPIHono()

export const positionsHandler = app
  .openapi(postPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePositionsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPositionsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
