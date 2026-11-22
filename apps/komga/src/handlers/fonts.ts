import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1FontsFamiliesRoute,
  getApiV1FontsResourceFontFamilyCssRoute,
  getApiV1FontsResourceFontFamilyFontFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fontsHandler = app
  .openapi(getApiV1FontsFamiliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FontsResourceFontFamilyCssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FontsResourceFontFamilyFontFileRoute, (c) => {
    throw new Error('Not implemented')
  })
