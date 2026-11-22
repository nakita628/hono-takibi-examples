import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiSwissIdGamesRoute,
  getApiSwissIdResultsRoute,
  getApiSwissIdRoute,
  getSwissIdTrfRoute,
  postApiSwissIdEditRoute,
  postApiSwissIdJoinRoute,
  postApiSwissIdScheduleNextRoundRoute,
  postApiSwissIdTerminateRoute,
  postApiSwissIdWithdrawRoute,
  postApiSwissNewTeamIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tournamentsSwissHandler = app
  .openapi(postApiSwissNewTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSwissIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdScheduleNextRoundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSwissIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSwissIdTrfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSwissIdGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSwissIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
