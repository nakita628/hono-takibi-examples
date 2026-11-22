import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceFoldersDeleteNameRoute,
  getWWorkspaceFoldersExistsNameRoute,
  getWWorkspaceFoldersGetNameRoute,
  getWWorkspaceFoldersGetusageNameRoute,
  getWWorkspaceFoldersHistoryGetNameRoute,
  getWWorkspaceFoldersListnamesRoute,
  getWWorkspaceFoldersListRoute,
  postWWorkspaceFoldersAddownerNameRoute,
  postWWorkspaceFoldersCreateRoute,
  postWWorkspaceFoldersRemoveownerNameRoute,
  postWWorkspaceFoldersUpdateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const folderHandler = app
  .openapi(getWWorkspaceFoldersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersListnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFoldersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFoldersUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceFoldersDeleteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersExistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersGetusageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFoldersAddownerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFoldersRemoveownerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersHistoryGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
