import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStringsLanguageCodePackageStatusRoute,
  getStringsRoute,
  postStringsLanguageCodePackageRoute,
  postStringsRoute,
  putStringsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stringsHandler = app
  .openapi(getStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStringsLanguageCodePackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStringsLanguageCodePackageStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
