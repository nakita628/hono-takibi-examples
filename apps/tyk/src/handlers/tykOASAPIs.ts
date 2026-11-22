import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykApisOasApiIDRoute,
  getTykApisOasApiIDExportRoute,
  getTykApisOasApiIDRoute,
  getTykApisOasApiIDVersionsRoute,
  getTykApisOasExportRoute,
  getTykApisOasRoute,
  patchTykApisOasApiIDRoute,
  postTykApisOasImportRoute,
  postTykApisOasRoute,
  putTykApisOasApiIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tykOASAPIsHandler = app
  .openapi(getTykApisOasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykApisOasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykApisOasApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisOasApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTykApisOasApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykApisOasApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisOasApiIDExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisOasApiIDVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisOasExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykApisOasImportRoute, (c) => {
    throw new Error('Not implemented')
  })
