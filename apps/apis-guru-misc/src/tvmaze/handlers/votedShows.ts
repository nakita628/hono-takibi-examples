import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserVotesShowsShowIdRoute,
  getUserVotesShowsRoute,
  getUserVotesShowsShowIdRoute,
  putUserVotesShowsShowIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const votedShowsHandler = app
  .openapi(getUserVotesShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserVotesShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserVotesShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserVotesShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
