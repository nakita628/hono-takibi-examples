import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmLeadsIdRoute,
  getCrmLeadsIdRoute,
  getCrmLeadsRoute,
  patchCrmLeadsIdRoute,
  postCrmLeadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leadsHandler = app
  .openapi(getCrmLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
