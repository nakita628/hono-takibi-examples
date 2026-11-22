import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPirateGenerateInsultRoute,
  getPirateGenerateLoremIpsumRoute,
  getPirateGenerateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generationHandler = app
  .openapi(getPirateGenerateInsultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPirateGenerateLoremIpsumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPirateGenerateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
