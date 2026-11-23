import { OpenAPIHono } from '@hono/zod-openapi'
import { getIllustratorsIllustratorRoute, getIllustratorsRoute } from '../routes'

const app = new OpenAPIHono()

export const illustratorsHandler = app
  .openapi(getIllustratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIllustratorsIllustratorRoute, (c) => {
    throw new Error('Not implemented')
  })
