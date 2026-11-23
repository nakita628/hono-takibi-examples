import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGraphDatasourcesGetRoute,
  postGraphDatasourcesListRoute,
  postGraphDatasourcesUpdateRoute,
  postGraphMemberMonitoringstateRoute,
  postGraphMembersGetRoute,
  postGraphMembersListRoute,
  postGraphMembersRemovalRoute,
  postGraphMembersRoute,
  postGraphRemovalRoute,
  postGraphRoute,
} from '../routes'

const app = new OpenAPIHono()

export const graphHandler = app
  .openapi(postGraphDatasourcesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphRemovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphMembersRemovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphMembersGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphDatasourcesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphMembersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphMemberMonitoringstateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphDatasourcesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
