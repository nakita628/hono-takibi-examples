import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceInputsHistoryRoute,
  getWWorkspaceInputsJobOrInputIdArgsRoute,
  getWWorkspaceInputsListRoute,
  postWWorkspaceInputsCreateRoute,
  postWWorkspaceInputsDeleteInputRoute,
  postWWorkspaceInputsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inputHandler = app
  .openapi(getWWorkspaceInputsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceInputsJobOrInputIdArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceInputsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceInputsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceInputsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceInputsDeleteInputRoute, (c) => {
    throw new Error('Not implemented')
  })
