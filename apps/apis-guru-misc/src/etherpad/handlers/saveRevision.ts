import { OpenAPIHono } from '@hono/zod-openapi'
import { getSaveRevisionRoute, postSaveRevisionRoute } from '../routes'

const app = new OpenAPIHono()

export const saveRevisionHandler = app
  .openapi(getSaveRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSaveRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
