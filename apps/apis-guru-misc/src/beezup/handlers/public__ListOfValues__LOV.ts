import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2PublicLovIndexRoute, getV2PublicLovListNameRoute } from '../routes'

const app = new OpenAPIHono()

export const public__ListOfValues__LOVHandler = app
  .openapi(getV2PublicLovIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PublicLovListNameRoute, (c) => {
    throw new Error('Not implemented')
  })
