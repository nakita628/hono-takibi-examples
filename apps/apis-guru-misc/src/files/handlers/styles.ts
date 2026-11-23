import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteStylesPathRoute, getStylesPathRoute, patchStylesPathRoute } from '../routes'

const app = new OpenAPIHono()

export const stylesHandler = app
  .openapi(deleteStylesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStylesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStylesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
