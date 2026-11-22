import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShakespeareGenerateInsultRoute,
  getShakespeareGenerateLoremIpsumRoute,
  getShakespeareGenerateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generationHandler = app
  .openapi(getShakespeareGenerateInsultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShakespeareGenerateLoremIpsumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShakespeareGenerateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
