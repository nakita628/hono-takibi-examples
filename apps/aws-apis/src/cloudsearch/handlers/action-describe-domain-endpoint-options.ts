import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDomainEndpointOptionsRoute,
  postActionDescribeDomainEndpointOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDomainEndpointOptionsHandler = app
  .openapi(getActionDescribeDomainEndpointOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDomainEndpointOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
