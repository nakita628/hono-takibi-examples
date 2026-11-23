import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getScriptsHubGetFullPathRoute,
  getScriptsHubGetPathRoute,
  getScriptsHubPickPathRoute,
  getScriptsHubTopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptsHandler = app
  .openapi(getScriptsHubGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsHubGetFullPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsHubPickPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsHubTopRoute, (c) => {
    throw new Error('Not implemented')
  })
