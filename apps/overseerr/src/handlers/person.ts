import { OpenAPIHono } from '@hono/zod-openapi'
import { getPersonPersonIdCombinedCreditsRoute, getPersonPersonIdRoute } from '../routes'

const app = new OpenAPIHono()

export const personHandler = app
  .openapi(getPersonPersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonPersonIdCombinedCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
