import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpacecraftRoute, getSpacecraftSearchRoute, postSpacecraftSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const spacecraftHandler = app
  .openapi(getSpacecraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacecraftSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacecraftSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
