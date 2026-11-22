import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdentifierMapperSourceTargetIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const identifierMapperHandler = app.openapi(
  getIdentifierMapperSourceTargetIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
