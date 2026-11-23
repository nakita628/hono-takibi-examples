import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTemplatesHelmCommandRoute,
  getTemplatesHelmRoute,
  getTemplatesRoute,
  postTemplatesIdFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesHelmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesHelmCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
