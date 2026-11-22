import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  getTeamsTeamIdOperationsCountRoute,
  getTeamsTeamIdOperationsRoute,
  getTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  patchTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  postTeamsTeamIdOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsTeamsAsyncOperationHandler = app
  .openapi(getTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
