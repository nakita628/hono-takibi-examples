import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStacksStackIdRoute,
  getStacksRoute,
  getStacksStackIdRoute,
  patchStacksStackIdRoute,
  postStacksRoute,
  postStacksStackIdUninstallRoute,
  postTemplatesApplyRoute,
  postTemplatesExportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStacksStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStacksStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStacksStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksStackIdUninstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
