import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1BadgeSvgRoute, getApiV3BadgeSvgRoute } from '../routes'

const app = new OpenAPIHono()

export const badgesHandler = app
  .openapi(getApiV1BadgeSvgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3BadgeSvgRoute, (c) => {
    throw new Error('Not implemented')
  })
