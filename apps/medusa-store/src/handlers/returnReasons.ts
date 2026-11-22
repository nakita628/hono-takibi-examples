import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreReturnReasonsIdRoute, getStoreReturnReasonsRoute } from '../routes'

const app = new OpenAPIHono()

export const returnReasonsHandler = app
  .openapi(getStoreReturnReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreReturnReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
