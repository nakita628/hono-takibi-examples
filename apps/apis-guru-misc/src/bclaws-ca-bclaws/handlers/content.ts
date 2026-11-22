import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentAspectIdCivixDocumentIdRoute, getContentAspectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const contentHandler = app
  .openapi(getContentAspectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentAspectIdCivixDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
