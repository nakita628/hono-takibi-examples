import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransformTransformDefinitionIdRoute,
  getTransformTransformDefinitionIdRoute,
  putTransformTransformDefinitionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transformHandler = app
  .openapi(deleteTransformTransformDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformTransformDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransformTransformDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
