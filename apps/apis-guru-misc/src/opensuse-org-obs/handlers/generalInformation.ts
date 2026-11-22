import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAboutRoute,
  getArchitecturesArchitectureNameRoute,
  getArchitecturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generalInformationHandler = app
  .openapi(getAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchitecturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchitecturesArchitectureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
