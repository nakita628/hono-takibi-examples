import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNlSearchModelsModelIdRoute,
  getNlSearchModelsModelIdRoute,
  getNlSearchModelsRoute,
  postNlSearchModelsRoute,
  putNlSearchModelsModelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nlSearchModelsHandler = app
  .openapi(getNlSearchModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNlSearchModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNlSearchModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNlSearchModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNlSearchModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
