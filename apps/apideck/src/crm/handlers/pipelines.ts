import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmPipelinesIdRoute,
  getCrmPipelinesIdRoute,
  getCrmPipelinesRoute,
  patchCrmPipelinesIdRoute,
  postCrmPipelinesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pipelinesHandler = app
  .openapi(getCrmPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmPipelinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmPipelinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
