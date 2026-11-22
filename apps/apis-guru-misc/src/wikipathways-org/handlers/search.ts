import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindInteractionsRoute, getFindPathwaysByLiteratureRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getFindInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindPathwaysByLiteratureRoute, (c) => {
    throw new Error('Not implemented')
  })
