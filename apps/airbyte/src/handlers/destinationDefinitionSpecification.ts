import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DestinationDefinitionSpecificationsGetForDestinationRoute,
  postV1DestinationDefinitionSpecificationsGetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const destinationDefinitionSpecificationHandler = app
  .openapi(postV1DestinationDefinitionSpecificationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionSpecificationsGetForDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
