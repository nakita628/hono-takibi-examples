import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSpacecraftClassRoute,
  getSpacecraftClassSearchRoute,
  postSpacecraftClassSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spacecraftClassHandler = app
  .openapi(getSpacecraftClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacecraftClassSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacecraftClassSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
