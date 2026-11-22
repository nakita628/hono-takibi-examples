import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeRoute,
  getRestApi3ProjectProjectKeyOrIdPermissionschemeRoute,
  getRestApi3ProjectProjectKeyOrIdSecuritylevelRoute,
  putRestApi3ProjectProjectKeyOrIdPermissionschemeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectPermissionSchemesHandler = app
  .openapi(getRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectKeyOrIdPermissionschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectKeyOrIdPermissionschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectKeyOrIdSecuritylevelRoute, (c) => {
    throw new Error('Not implemented')
  })
