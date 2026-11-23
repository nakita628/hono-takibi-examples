import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreatorsIdRoute, getCreatorsRoute } from '../routes'

const app = new OpenAPIHono()

export const creatorsHandler = app
  .openapi(getCreatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
