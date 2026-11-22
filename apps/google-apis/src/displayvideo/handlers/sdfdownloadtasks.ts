import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2NameRoute, postV2SdfdownloadtasksRoute } from '../routes'

const app = new OpenAPIHono()

export const sdfdownloadtasksHandler = app
  .openapi(postV2SdfdownloadtasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
