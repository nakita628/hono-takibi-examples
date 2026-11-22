import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnmDbSubstanceRoute, getEnmDbSubstanceUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const substancesHandler = app
  .openapi(getEnmDbSubstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
