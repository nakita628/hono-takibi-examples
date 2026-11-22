import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3PriorityschemeSchemeIdRoute,
  getRestApi3PriorityschemePrioritiesAvailableRoute,
  getRestApi3PriorityschemeRoute,
  getRestApi3PriorityschemeSchemeIdPrioritiesRoute,
  getRestApi3PriorityschemeSchemeIdProjectsRoute,
  postRestApi3PriorityschemeMappingsRoute,
  postRestApi3PriorityschemeRoute,
  putRestApi3PriorityschemeSchemeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prioritySchemesHandler = app
  .openapi(getRestApi3PriorityschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PriorityschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PriorityschemeMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PriorityschemePrioritiesAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3PriorityschemeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PriorityschemeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PriorityschemeSchemeIdPrioritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PriorityschemeSchemeIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
