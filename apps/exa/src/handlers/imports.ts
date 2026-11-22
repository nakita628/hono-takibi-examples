import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV0ImportsIdRoute,
  getV0ImportsIdRoute,
  getV0ImportsRoute,
  patchV0ImportsIdRoute,
  postV0ImportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importsHandler = app
  .openapi(postV0ImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0ImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0ImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV0ImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0ImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
