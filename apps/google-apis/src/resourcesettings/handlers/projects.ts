import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute, getV1ParentSettingsRoute, patchV1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
