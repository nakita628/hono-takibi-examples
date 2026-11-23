import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRegistersSourceLanguageRoute,
  getRegistersSourceRegisterLanguageTargetRegisterLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registersHandler = app
  .openapi(getRegistersSourceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistersSourceRegisterLanguageTargetRegisterLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
