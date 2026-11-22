import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevicesIdUsagesRoute, getProjectsIdUsagesRoute } from '../routes'

const app = new OpenAPIHono()

export const usagesHandler = app
  .openapi(getDevicesIdUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
