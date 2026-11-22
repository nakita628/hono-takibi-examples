import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConfigElementValueRoute,
  getConfigElementRoute,
  getConfigPropertiesRoute,
  getConfigRoute,
  getTeleporterRoute,
  patchConfigRoute,
  postTeleporterRoute,
  putConfigElementValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const piHoleConfigurationHandler = app
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigElementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConfigElementValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConfigElementValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeleporterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeleporterRoute, (c) => {
    throw new Error('Not implemented')
  })
