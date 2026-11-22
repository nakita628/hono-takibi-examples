import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPanelsGetProgressRoute, postApiPanelsSaveProgressRoute } from '../routes'

const app = new OpenAPIHono()

export const panelsHandler = app
  .openapi(postApiPanelsSaveProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPanelsGetProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
