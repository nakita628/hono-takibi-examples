import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesIdRoute,
  getTemplatesIdFileRoute,
  getTemplatesIdRoute,
  getTemplatesRoute,
  postTemplatesIdFillRoute,
  postTemplatesRoute,
  putTemplatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesIdFillRoute, (c) => {
    throw new Error('Not implemented')
  })
