import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateDomainEndpointOptionsRoute,
  postActionUpdateDomainEndpointOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateDomainEndpointOptionsHandler = app
  .openapi(getActionUpdateDomainEndpointOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateDomainEndpointOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
