import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SourceDefinitionSpecificationsGetForSourceRoute,
  postV1SourceDefinitionSpecificationsGetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourceDefinitionSpecificationHandler = app
  .openapi(postV1SourceDefinitionSpecificationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionSpecificationsGetForSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
