import { OpenAPIHono } from '@hono/zod-openapi'
import { getXSamplesLanguagesRoute, postXSamplesLanguagesRoute } from '../routes'

const app = new OpenAPIHono()

export const designateCodeSampleLanguagesHandler = app
  .openapi(getXSamplesLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postXSamplesLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
