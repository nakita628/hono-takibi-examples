import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssociationsessionsStartRoute, getAssociationsessionsVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const associationsessionsHandler = app
  .openapi(getAssociationsessionsStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsessionsVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
