import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndividualIdRoute, getIndividualPedigreeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const individualHandler = app
  .openapi(getIndividualPedigreeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualIdRoute, (c) => {
    throw new Error('Not implemented')
  })
