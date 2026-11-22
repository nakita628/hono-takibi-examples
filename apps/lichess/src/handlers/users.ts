import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCrosstableUser1User2Route,
  getApiPlayerAutocompleteRoute,
  getApiPlayerRoute,
  getApiPlayerTopNbPerfTypeRoute,
  getApiStreamerLiveRoute,
  getApiUsersStatusRoute,
  getApiUserUsernameActivityRoute,
  getApiUserUsernameNoteRoute,
  getApiUserUsernamePerfPerfRoute,
  getApiUserUsernameRatingHistoryRoute,
  getApiUserUsernameRoute,
  postApiUsersRoute,
  postApiUserUsernameNoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiUsersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPlayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPlayerTopNbPerfTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameRatingHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernamePerfPerfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamerLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCrosstableUser1User2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPlayerAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserUsernameNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
