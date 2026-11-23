import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPirateGenerateInsultRoute,
  getPirateGenerateLoremIpsumRoute,
  getPirateGenerateNameRoute,
  getPirateTranslateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pirateHandler = app
  .openapi(getPirateGenerateInsultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPirateGenerateLoremIpsumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPirateGenerateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPirateTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
